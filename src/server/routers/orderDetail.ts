import { z } from "zod"

import { OrderDetail } from "@/models/orderDetail"
import { publicProcedure, router } from "@/server/trpc"

// note: you may need to search on prisma docs. Selecting the items needs an "includes" arg
export const orderDetailRouter = router({
    getOrderDetail: publicProcedure
        .input(z.object({
            id: z.string()
        }))
        .output(z.nullable(OrderDetail))
        .query(  async ( { ctx , input  } ) => {
            return ctx.prisma.order.findFirst({
                where: {
                    id: input.id
                },
                include: {
                    user: true,
                    items: true
                }
            })
        })
})