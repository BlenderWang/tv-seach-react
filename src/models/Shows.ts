import { z } from "zod";

// const BasicImageSchema = z.object({
//     page: z.number(),
//     per_page: z.number().optional(),
//     prev_page: z.string().optional(),
//     next_page: z.string().optional(),
//     total_results: z.number().optional(),
// });

const ShowSchema = z.object({
    id: z.number(),
    url: z.string(),
    name: z.string(),
    genres: z.array(z.string()).optional(),
    rating: z.object({
        average: z.number().nullable(),
    }),
    image: z.object({
        original: z.string(),
    }),
    summary: z.string().optional(),
    _links: z.object({
        previousepisode: z.object({ href: z.string() }).optional(),
        name: z.string().optional(),
    }),
    page: z.number().optional(),
    blurredDataUrl: z.string().optional(),
});

export const ShowsSchemaWithLinks = z.array(ShowSchema);

export type Show = z.infer<typeof ShowSchema>;

export type ShowsResults = z.infer<typeof ShowsSchemaWithLinks>;
