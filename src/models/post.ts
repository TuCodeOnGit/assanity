import type { SanityAsset } from "@sanity/image-url/lib/types/types"
import type { Slug } from "sanity"

export interface Post {
  title: string
  slug: Slug
  description: string,
  image: SanityAsset
}