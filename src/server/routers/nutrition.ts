import { z } from "zod"

import { Nutrition, selectNutrition } from "@/models/nutrition"
import { publicProcedure, router } from "@/server/trpc"

export const nutritionRouter = router({
    getNutrition: publicProcedure
        .input(z.object({
            id: z.string()
        }))
        .output(z.nullable(Nutrition))
        .query(async ({ ctx, input }) => {
            return ctx.prisma.nutrition.findFirst({
                select: selectNutrition,
                where: {
                    id: input.id
                }
            })
        })
})