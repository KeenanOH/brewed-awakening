import {publicProcedure, router} from "@/server/trpc"
import {z} from "zod"
import {CategoryDetail, selectCategoryDetail} from "@/models/categoryDetail"

// note: you may need to search on prisma docs. Selecting the items needs an "includes" arg
export const categoryDetailRouter = router({
    getCategoryDetail: publicProcedure
        .input(z.object({
            id: z.string()
        }))
        .output(z.nullable(CategoryDetail))
        .query(async ({ ctx, input }) => {
            return ctx.prisma.category.findFirst({
                select: selectCategoryDetail,
                where: {
                    id: input.id
                }
            })
        })
})
