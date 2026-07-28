"use client";

import Image from "next/image";
import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import { getYouTubeId } from "./article-utils";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mt-14 mb-5 tracking-tight scroll-mt-28">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mt-10 mb-4 tracking-tight scroll-mt-28">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-heading text-xl lg:text-2xl font-semibold text-white mt-8 mb-3 tracking-tight scroll-mt-28">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-white/85 text-lg lg:text-xl leading-[1.8] mb-6">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="relative my-10 rounded-2xl border border-blue-500/20 bg-blue-500/5 px-6 py-6 lg:px-8 text-white/80 italic text-xl leading-relaxed">
        <span className="absolute -top-3 left-6 text-5xl leading-none text-blue-500/40 font-serif">
          “
        </span>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 space-y-3 pl-1 text-white/85 text-lg lg:text-xl leading-relaxed">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 list-decimal space-y-3 pl-6 text-white/85 text-lg lg:text-xl leading-relaxed">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3">
        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-white/90">{children}</em>,
    underline: ({ children }) => (
      <span className="underline underline-offset-4 decoration-white/40">
        {children}
      </span>
    ),
    "strike-through": ({ children }) => (
      <span className="line-through text-white/55">{children}</span>
    ),
    code: ({ children }) => (
      <code className="rounded-md bg-white/10 px-1.5 py-0.5 text-[0.9em] font-mono text-blue-300">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const blank = value?.blank !== false;
      return (
        <a
          href={href}
          className="font-medium text-blue-400 underline decoration-blue-400/40 underline-offset-4 transition-colors hover:text-blue-300 hover:decoration-blue-300"
          {...(blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const width = value.asset?.metadata?.dimensions?.width || 1200;
      const height = value.asset?.metadata?.dimensions?.height || 675;

      return (
        <figure className="my-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#14151b] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <Image
            src={urlForImage(value).width(1400).url()}
            alt={value.alt || ""}
            width={width}
            height={height}
            className="w-full h-auto object-cover"
            placeholder={value.asset?.metadata?.lqip ? "blur" : "empty"}
            blurDataURL={value.asset?.metadata?.lqip}
          />
          {(value.caption || value.alt) && (
            <figcaption className="px-5 py-4 text-sm text-white/50 border-t border-white/10">
              {value.caption || value.alt}
            </figcaption>
          )}
        </figure>
      );
    },
    codeBlock: ({ value }) => (
      <div className="my-10 overflow-hidden rounded-2xl border border-white/10 bg-[#0f1015]">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
          <span className="text-xs font-medium uppercase tracking-widest text-white/45">
            {value?.filename || value?.language || "code"}
          </span>
          {value?.language ? (
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400/80">
              {value.language}
            </span>
          ) : null}
        </div>
        <pre className="overflow-x-auto p-5 text-sm leading-relaxed text-blue-100/90">
          <code className="font-mono whitespace-pre">{value?.code}</code>
        </pre>
      </div>
    ),
    youtube: ({ value }) => {
      const id = value?.url ? getYouTubeId(value.url) : null;
      if (!id) return null;

      return (
        <div className="my-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black aspect-video shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      );
    },
  },
};

export default function PostBody({ value }: { value: PortableTextBlock[] }) {
  if (!value?.length) return null;
  return (
    <div className="post-body">
      <PortableText value={value} components={components} />
    </div>
  );
}
