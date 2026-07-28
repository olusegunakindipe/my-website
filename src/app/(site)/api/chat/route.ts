import { NextRequest, NextResponse } from "next/server";
import { SITE_ASSISTANT_CONTEXT } from "@/lib/assistant-context";
import { checkRateLimit } from "@/lib/rate-limit";

type ChatBody = {
  message?: string;
};

const DEFAULT_MODELS = [
  process.env.GEMINI_MODEL,
  "gemini-flash-lite-latest",
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash-lite",
  "gemini-flash-latest",
].filter((model, index, list): model is string => {
  return Boolean(model) && list.indexOf(model) === index;
});

async function callGemini(apiKey: string, model: string, message: string) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: SITE_ASSISTANT_CONTEXT }],
      },
      contents: [
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 280,
      },
    }),
  });

  const raw = await response.text();
  return { response, raw };
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Chat is not configured yet. Add a free GEMINI_API_KEY from https://aistudio.google.com/apikey to .env.local, then restart the dev server.",
      },
      { status: 503 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "anonymous";

  const limit = checkRateLimit(`chat:${ip}`);
  if (!limit.ok) {
    return NextResponse.json(
      {
        error: `Rate limit reached. Try again in about ${limit.retryAfterSec} seconds.`,
      },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSec) },
      },
    );
  }

  let body: ChatBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const message = body.message?.trim() || "";
  if (message.length < 2 || message.length > 500) {
    return NextResponse.json(
      { error: "Message must be between 2 and 500 characters." },
      { status: 400 },
    );
  }

  try {
    let lastError = "";

    for (const model of DEFAULT_MODELS) {
      const { response, raw } = await callGemini(apiKey, model, message);

      if (response.ok) {
        const data = JSON.parse(raw) as {
          candidates?: Array<{
            content?: { parts?: Array<{ text?: string }> };
          }>;
        };

        const reply =
          data.candidates?.[0]?.content?.parts
            ?.map((part) => part.text || "")
            .join("\n")
            .trim() || "I could not generate a reply. Please try again.";

        return NextResponse.json({
          reply,
          remaining: limit.remaining,
          model,
        });
      }

      lastError = raw;
      console.error(`Gemini error (${model}):`, raw);

      // Try the next free-tier-friendly model on quota / not-found errors.
      if (response.status !== 429 && response.status !== 404) {
        break;
      }
    }

    const isQuota =
      lastError.includes("RESOURCE_EXHAUSTED") ||
      lastError.includes('"code": 429');

    return NextResponse.json(
      {
        error: isQuota
          ? "Gemini free quota is used up for this model/key. Wait a bit, or set GEMINI_MODEL=gemini-2.5-flash-lite in .env.local and restart. Check usage: https://ai.dev/rate-limit"
          : "The assistant could not answer right now. Try again later.",
      },
      { status: isQuota ? 429 : 502 },
    );
  } catch (error) {
    console.error("Chat route failed:", error);
    return NextResponse.json(
      { error: "Unexpected chat error." },
      { status: 500 },
    );
  }
}
