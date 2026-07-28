import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

/**
 * Sanity CDN URLs with automatic modern formats (WebP/AVIF) and quality.
 * Pair with next/image for responsive sizes + lazy loading.
 */
export function urlForImage(source: SanityImageSource) {
  return builder.image(source).auto("format").fit("max").quality(75);
}
