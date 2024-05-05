import { z } from "zod"

import { CategoryDetail } from "@/models/categoryDetail"
import { publicProcedure, router } from "@/server/trpc"

// note: you may need to search on prisma docs. Selecting the items needs an "includes" arg
export const categoryDetailRouter = router({
    getCategoryDetail: publicProcedure
        .input(z.object({
            id: z.string()
        }))
        .output(z.nullable(CategoryDetail))
        .query(async ({ ctx, input }) => {
            return ctx.prisma.category.findFirst({
                include: {
                    items: true
                },
                where: {
                    id: input.id
                }
            })
        }),
    getCategoryDetails: publicProcedure
        .output(z.array(CategoryDetail))
        .query(async ({ ctx }) => {
            return ctx.prisma.category.findMany({
                include: {
                    items: true
                }
            })
        })
})
