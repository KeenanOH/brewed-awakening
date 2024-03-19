import { z } from "zod"

import { Item } from "@/models/item"

export const Nutrition = z.object({
    id: z.string(),
    itemId: z.string(),
    item: Item,
    calories: z.number()
})

export type Nutrition = z.infer<typeof Nutrition>

export const selectNutrition = {
    id: true,
    itemId: true,
    item: true,
    calories: true
}
