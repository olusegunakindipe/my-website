import { type NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type?: string;
  slug?: { current?: string } | string;
};

/**
 * On-demand ISR for Sanity publish/update/delete.
 * Configure a Sanity webhook (POST) to:
 *   https://YOUR_DOMAIN/api/revalidate?secret=YOUR_SECRET
 * Trigger on: Create, Update, Delete for type `post` (include drafts: false).
 */
export async function POST(request: NextRequest) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET;
    if (!secret) {
      return NextResponse.json(
        { message: "Missing SANITY_REVALIDATE_SECRET" },
        { status: 500 },
      );
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      request,
      secret,
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 },
      );
    }

    if (body?._type !== "post") {
      return NextResponse.json({
        message: "Ignored non-post document",
        revalidated: false,
      });
    }

    const slugValue =
      typeof body.slug === "string" ? body.slug : body.slug?.current;

    revalidatePath("/");
    revalidatePath("/articles");
    revalidatePath("/sitemap.xml");
    revalidateTag("articles");

    if (slugValue) {
      revalidatePath(`/articles/${slugValue}`);
    }

    return NextResponse.json({
      message: "Articles revalidated",
      revalidated: true,
      slug: slugValue ?? null,
      now: Date.now(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message }, { status: 500 });
  }
}
