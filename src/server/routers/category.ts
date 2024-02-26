import { router, adminProcedure, publicProcedure } from "@/server/trpc"
import { z } from "zod"

import { Category, selectCategory } from "@/models/category"

export const categoryRouter = router({
    getCategory: publicProcedure
        .input(z.object({
            id: z.string()
        }))
        .output(z.nullable(Category))
        .query(async ({ctx, input}) => {
            return ctx.prisma.category.findFirst({
                select: selectCategory,
                where: {
                    id: input.id
                }
            })
        }),
    getCategories: publicProcedure
        .output(z.array(Category))
        .query(async ({ ctx }) => {
            return ctx.prisma.category.findMany({
                select: selectCategory
            })
        }),
    createCategory: adminProcedure
        .input(z.object({
            name: z.string()
        }))
        .output(Category)
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.category.create({
                select: selectCategory,
                data: input
            })
        }),
    updateCategory: adminProcedure
        .input(Category)
        .mutation(async ({ ctx, input }) => {
            await ctx.prisma.category.update({
                data: input,
                where: {
                    id: input.id
                }
            })
        }),
    deleteCategory: adminProcedure
        .input(z.object({
            id: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            await ctx.prisma.category.delete({
                where: input
            })
        })
})
