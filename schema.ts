import { number, object, string, transform, type Output } from "valibot";

type AnimeAdaptationType =
  | "Faithful"
  | "Divergent"
  | "Incomplete"
  | "AlternateEnding";

export const AnimeDataSchema = transform(
  object({
    data: object({
      title_english: string(),
      type: string(),
      source: string(),
      episodes: number(),
      status: string(),
      synopsis: string(),
      images: transform(
        object({
          webp: object({
            image_url: string(),
          }),
        }),
        (input) => input.webp.image_url
      ),
    }),
  }),
  (v) => v.data
);

export type AnimeData = Output<typeof AnimeDataSchema>;
