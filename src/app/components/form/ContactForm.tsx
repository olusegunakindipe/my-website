"use client";
import { useState } from "react";
import Button from "../button/Button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<null | {
    status: "success" | "error";
    message: string;
  }>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();
      if (!res.ok) {
        setResponse({
          status: "error",
          message: result.message || "Something went wrong ❌.",
        });
        return;
      }
      setForm({ name: "", email: "", subject: "", message: "" });
      setResponse({
        status: "success",
        message: "Your message was sent successfully! ✅",
      });
    } catch {
      setResponse({
        status: "error",
        message: "Network error. Please try again ❌.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 px-2">
      <div className="flex flex-col gap-8 md:flex-row md:gap-4 my-8">
        <input
          name="name"
          placeholder="Name *"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded border-gray-500 focus-visible:border focus-visible:outline-2 focus-visible:outline-gray-500 "
        />
        <input
          name="email"
          type="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded border-gray-500 focus-visible:border focus-visible:outline-2 focus-visible:outline-gray-500 "
        />
      </div>
      <input
        name="subject"
        placeholder="Subject *"
        value={form.subject}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded border-gray-500 focus-visible:border focus-visible:outline-2 focus-visible:outline-gray-500"
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        className="w-full p-2 border my-8 rounded border-gray-500 focus-visible:border focus-visible:outline-2 focus-visible:outline-gray-500 "
      />

      <Button type="submit" disabled={loading} fullWidth>
        {loading ? "Sending..." : "Send Message"}
      </Button>
      {response?.status && (
        <p
          className={`text-sm mt-2 flex justify-center ${
            response.status === "error" ? "text-red-500" : "text-green-50"
          }`}
        >
          {response.message}
        </p>
      )}
    </form>
  );
}
