import { groq } from "next-sanity";

const imageFields = groq`{
  alt,
  caption,
  asset->{
    _id,
    url,
    metadata {
      dimensions,
      lqip
    }
  }
}`;

export const postsQuery = groq`
  *[_type == "post" && defined(slug.current) && defined(mainImage.asset)]
    | order(coalesce(publishedAt, _createdAt) desc, _createdAt desc) {
    _id,
    title,
    excerpt,
    "publishedAt": coalesce(publishedAt, _createdAt),
    _updatedAt,
    featured,
    categories,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    mainImage ${imageFields}
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug && defined(mainImage.asset)][0] {
    _id,
    title,
    excerpt,
    "publishedAt": coalesce(publishedAt, _createdAt),
    _updatedAt,
    featured,
    categories,
    seoTitle,
    seoDescription,
    "slug": slug.current,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180),
    mainImage ${imageFields},
    body[]{
      ...,
      _type == "image" => ${imageFields}
    }
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current) && defined(mainImage.asset)][].slug.current
`;
