import { z } from "zod"

export const Order = z.object({
    id: z.string(),
    createdAt: z.date(),
})

export type Order = z.infer<typeof Order>
