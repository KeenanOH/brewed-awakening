import { z } from "zod"

import { ItemDetail, selectItemDetail } from "@/models/itemDetail"
import { publicProcedure, router } from "@/server/trpc"

export const itemDetailRouter = router({
    getItemDetail: publicProcedure
        .input(z.object({
            id: z.string()
        }))
        .output(z.nullable(ItemDetail))
        .query( async ({ ctx, input }) => {
            return ctx.prisma.item.findFirst({
                select: selectItemDetail,
                where: {
                    id: input.id
                }
            })
        })
})
