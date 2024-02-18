import { z } from "zod"

import { Item } from "@/models/item"

export const CategoryDetail = z.object({
    id: z.string(),
    name: z.string(),
    items: z.array(Item)
})

export type CategoryDetail = z.infer<typeof CategoryDetail>
