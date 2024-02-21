import { z } from "zod"

export const Order = z.object({
    id: z.string(),
    createdAt: z.date(),
    completed: z.boolean()
})

export type Order = z.infer<typeof Order>

export const selectOrder = {
    id: true,
    createdAt: true,
    completed: true
}
