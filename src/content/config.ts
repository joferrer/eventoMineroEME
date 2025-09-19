import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders'; 

const ponentes = defineCollection({
    loader:glob({base: './src/content/ponentes', pattern: '**/*.md'}),
    schema: ({image})=>z.object({
        id: z.string(),
        nombre: z.string(),
        description: z.string(),
        foto: image(),
        organizacion: z.string().optional(),

    }),
})

export const collections = {
    ponentes
}