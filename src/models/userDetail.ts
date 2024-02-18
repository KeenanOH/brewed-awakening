import { z } from "zod"

import { Order } from "@/models/order"

export const UserDetail = z.object({
    id: z.string(),
    name: z.optional(z.string()),
    email: z.optional(z.string()),
    image: z.optional(z.string()),
    isAdmin: z.boolean(),
    orders: z.array(Order)
})

export type UserDetail = z.infer<typeof UserDetail>
