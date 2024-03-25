import { Statistics } from "@/models/statistics"
import { publicProcedure, router } from "@/server/trpc"

// note: you may need to search on prisma docs. Selecting the items needs an "includes" arg
export const statisticsRouter = router({
    getStatistics: publicProcedure
        .output(Statistics)
        .query(async ({ ctx }) => {
            return {
                numItems: await ctx.prisma.item.count(),
                numOrders: await ctx.prisma.order.count()
            }
        })

})