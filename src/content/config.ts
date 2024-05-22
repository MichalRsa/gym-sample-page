// 1. Import utilities from `astro:content`
import { z, defineCollection, type ImageFunction } from "astro:content";

const HomePage = (image: ImageFunction) => {
  return {
    hero: z.object({
      heading: z.string(),
      sub_heading: z.string(),
      hero_img: image(),
    }),
    testimonials: z.object({
      heading: z.string(),
      testimonials: z.array(
        z.object({
          review: z.string(),
          author: z.object({
            name: z.string(),
            role: z.string(),
            avatar: image(),
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
            avatar: image(),
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
          image: image(),
        }),
      ),
    }),
    team_section: z.object({
      heading: z.string(),
      sub_heading: z.string(),
      team_list: z.array(z.string()),
    }),
    faq_section: z.object({
      heading: z.string(),
      faq_list: z.array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      ),
    }),
  };
};

const TeamMembers = (image: ImageFunction) => {
  return {
    team_list: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        surname: z.string(),
        role: z.array(z.string()),
        description: z.string(),
        image: image(),
      }),
    ),
  };
};

// 2. Define a `type` and `schema` for each collection
const pages = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) => z.object(HomePage(image)),
});

const data = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) => z.object(TeamMembers(image)),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  pages,
  data,
};
