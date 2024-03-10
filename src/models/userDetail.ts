import { z } from "zod"

import { Order, selectOrder } from "@/models/order"

export const UserDetail = z.object({
    id: z.string(),
    name: z.nullable(z.string()),
    email: z.nullable(z.string()),
    image: z.nullable(z.string()),
    isAdmin: z.boolean(),
    orders: z.array(Order)
})

export type UserDetail = z.infer<typeof UserDetail>

export const selectUserDetail = {
    id: true,
    name: true,
    email: true,
    image: true,
    isAdmin: true,
    orders: {
        select: selectOrder
    }
}
