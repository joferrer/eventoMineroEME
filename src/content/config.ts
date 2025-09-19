import { defineCollection, z } from "astro:content";

const ponentesCollection = defineCollection({
    schema: z.object({
        id: z.string(),
        nombre: z.string(),
        description: z.string(),
        foto: z.string(),
        organizacion: z.string().optional(),

    }),
})

export const collections = {
    ponentes: ponentesCollection,
}