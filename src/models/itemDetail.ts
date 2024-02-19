import { z } from "zod"

import { Category, selectCategory } from "@/models/category"

export const ItemDetail = z.object({
    id: z.string(),
    name: z.string(),
    imageUrl: z.string(),
    category: Category
})

export type ItemDetail = z.infer<typeof ItemDetail>

export const selectItemDetail = {
    id: true,
    name: true,
    imageUrl: true,
    category: {
        select: selectCategory
    }
}
