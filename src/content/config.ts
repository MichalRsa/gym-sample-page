// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

const HomePage = {
  hero: z.object({
    heading: z.string(),
    sub_heading: z.string(),
    hero_img: z.string(),
  }),
  testimonials: z.object({
    heading: z.string(),
    testimonials: z.array(
      z.object({
        review: z.string(),
        author: z.object({
          name: z.string(),
          role: z.string(),
          avatar: z.string(),
        }),
      }),
    ),
  }),
  known_clients: z.object({
    heading: z.string(),
    clients_list: z.array(
      z.object({
        client: z.object({
          name: z.string(),
          role: z.string(),
          record: z.string(),
          avatar: z.string(),
        }),
      }),
    ),
  }),
  offer_section: z.object({
    heading: z.string(),
    sub_heading: z.string(),
    offer_list: z.array(
      z.object({
          name: z.string(),
          role: z.string(),
          link: z.string(),
          image: z.string(),
      }),
    ),
  }),
};

// 2. Define a `type` and `schema` for each collection
const pages = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object(HomePage),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  pages,
};
