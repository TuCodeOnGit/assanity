import type { Slug } from "sanity"

export interface Post {
  title: string
  slug: Slug
  description: string
}