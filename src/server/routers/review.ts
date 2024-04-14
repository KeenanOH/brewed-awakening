import { z } from "zod"

//await ctx.prisma.review.create
// ctx.user.id~~
//"keyword argumetn section" just the data code in discord channel
//import  { Review } from "@/models/review"
import { authenticatedProcedure, router } from "@/server/trpc"

export const reviewRouter = router({
    createReview: authenticatedProcedure
        .input(z.object({
            content: z.string(),
            rating: z.number().gte(1).lte(5),
            itemId: z.string()
        }))
        .mutation( async ({ ctx , input }) => {
            await ctx.prisma.review.create({
                data: {
                    userId: ctx.user.id,
                    itemId: input.itemId,
                    rating: input.rating
                }
            })
        })
})
