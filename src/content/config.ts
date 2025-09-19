import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders'; 

const ponentes = defineCollection({
    loader:glob({base: './ponentes', pattern: '**/*.md'}),
    schema: z.object({
        id: z.string(),
        nombre: z.string(),
        description: z.string(),
        foto: z.string(),
        organizacion: z.string().optional(),

    }),
})

export const collections = {
    ponentes
}