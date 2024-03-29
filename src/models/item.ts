import { z } from "zod"

export const Item = z.object({
    id: z.string(),
    name: z.string(),
    imageUrl: z.string()
})

export type Item = z.infer<typeof Item>

export const selectItem = {
    id: true,
    name: true,
    imageUrl: true
}
