import { z } from "zod"

import { Item } from "@/models/item"
import { selectUser, User } from "@/models/user"

export const OrderDetail = z.object({
    id: z.string(),
    createdAt: z.date(),
    user: User,
    items: z.array(Item)
})

export type OrderDetail = z.infer<typeof OrderDetail>

export const selectOrderDetail = {
    id: true,
    createdAt: true,
    user: {
        select: selectUser
    }
}
