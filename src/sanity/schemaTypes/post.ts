import { defineArrayMember, defineField, defineType } from "sanity";
import { ARTICLE_CATEGORIES } from "./categories";

const portableTextBlock = defineArrayMember({
  type: "block",
  styles: [
    { title: "Normal", value: "normal" },
    { title: "H2", value: "h2" },
    { title: "H3", value: "h3" },
    { title: "H4", value: "h4" },
    { title: "Quote", value: "blockquote" },
  ],
  lists: [
    { title: "Bullet", value: "bullet" },
    { title: "Numbered", value: "number" },
  ],
  marks: {
    decorators: [
      { title: "Strong", value: "strong" },
      { title: "Emphasis", value: "em" },
      { title: "Underline", value: "underline" },
      { title: "Strike", value: "strike-through" },
      { title: "Code", value: "code" },
    ],
    annotations: [
      {
        name: "link",
        type: "object",
        title: "Link",
        fields: [
          {
            name: "href",
            type: "url",
            title: "URL",
            validation: (rule) =>
              rule.uri({
                allowRelative: true,
                scheme: ["http", "https", "mailto"],
              }),
          },
          {
            name: "blank",
            type: "boolean",
            title: "Open in new tab",
            initialValue: true,
          },
        ],
      },
    ],
  },
});

const portableImage = defineArrayMember({
  type: "image",
  options: { hotspot: true },
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      validation: (rule) => rule.required(),
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
    },
  ],
});

const codeBlock = defineArrayMember({
  name: "codeBlock",
  title: "Code block",
  type: "object",
  fields: [
    {
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "TypeScript", value: "typescript" },
          { title: "JavaScript", value: "javascript" },
          { title: "TSX", value: "tsx" },
          { title: "JSX", value: "jsx" },
          { title: "CSS", value: "css" },
          { title: "HTML", value: "html" },
          { title: "JSON", value: "json" },
          { title: "Bash", value: "bash" },
          { title: "Python", value: "python" },
          { title: "Plain text", value: "text" },
        ],
        layout: "dropdown",
      },
      initialValue: "typescript",
    },
    {
      name: "filename",
      title: "Filename (optional)",
      type: "string",
    },
    {
      name: "code",
      title: "Code",
      type: "text",
      rows: 12,
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: { title: "filename", subtitle: "language" },
    prepare({ title, subtitle }) {
      return {
        title: title || "Code block",
        subtitle: subtitle || "code",
      };
    },
  },
});

const youtubeEmbed = defineArrayMember({
  name: "youtube",
  title: "YouTube embed",
  type: "object",
  fields: [
    {
      name: "url",
      title: "YouTube URL",
      type: "url",
      validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }),
    },
  ],
  preview: {
    select: { title: "url" },
    prepare({ title }) {
      return { title: "YouTube", subtitle: title };
    },
  },
});

export const post = defineType({
  name: "post",
  title: "Article",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "meta", title: "Meta" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      group: "content",
      rows: 3,
      description:
        "Short teaser shown on the articles listing and social previews.",
      validation: (rule) => rule.required().max(280),
    }),
    defineField({
      name: "mainImage",
      title: "Cover image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      description:
        "Required. Upload a wide image (≈1600–2400px wide). Hotspot controls crop focus.",
      validation: (rule) => rule.required().error("A cover image is required"),
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      group: "content",
      of: [portableTextBlock, portableImage, codeBlock, youtubeEmbed],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "publishedAt",
      title: "Published date",
      type: "datetime",
      group: "meta",
      description:
        "Optional. When set, this date is shown on articles and used for ordering. If left empty, the document created date is used instead.",
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      group: "meta",
      description: "Pick at least one category for this article.",
      of: [{ type: "string" }],
      options: {
        list: [...ARTICLE_CATEGORIES],
        layout: "grid",
      },
      validation: (rule) =>
        rule.required().min(1).error("Select at least one category").unique(),
    }),
    defineField({
      name: "featured",
      title: "Featured on articles home",
      type: "boolean",
      group: "meta",
      initialValue: false,
      description: "Show this article as the large highlight on /articles.",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO title",
      type: "string",
      group: "meta",
      description:
        "Optional. Overrides the browser/Google title. Keep under ~60 characters.",
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO description",
      type: "text",
      group: "meta",
      rows: 3,
      description:
        "Optional. Overrides the meta description. Keep under ~160 characters.",
      validation: (rule) => rule.max(160),
    }),
  ],
  orderings: [
    {
      title: "Published date, New → Old",
      name: "publishedAtDesc",
      by: [
        { field: "publishedAt", direction: "desc" },
        { field: "_createdAt", direction: "desc" },
      ],
    },
    {
      title: "Published date, Old → New",
      name: "publishedAtAsc",
      by: [
        { field: "publishedAt", direction: "asc" },
        { field: "_createdAt", direction: "asc" },
      ],
    },
    {
      title: "Created date, New",
      name: "createdAtDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      publishedAt: "publishedAt",
      createdAt: "_createdAt",
    },
    prepare({ title, media, publishedAt, createdAt }) {
      const date = publishedAt || createdAt;
      return {
        title,
        media,
        subtitle: date
          ? new Date(date).toLocaleDateString("en-GB")
          : "No date set",
      };
    },
  },
});
