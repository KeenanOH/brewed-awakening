import { z } from "zod"

import { Dummy, selectDummy } from "@/models/dummy"
import { adminProcedure, publicProcedure, router } from "@/server/trpc"

export const dummyRouter = router({
    getDummy: publicProcedure
        .input(z.object({
            id: z.string()
        }))
        .output(z.nullable(Dummy))
        .query(async ({ ctx, input }) => {
            return ctx.prisma.dummy.findFirst({
                select: selectDummy,
                where: {
                    id: input.id
                }
            })
        }),
    getDummies: publicProcedure
        .output(z.array(Dummy))
        .query(async ({ ctx }) => {
            return ctx.prisma.dummy.findMany({
                select: selectDummy
            })
        }),
    createDummy: adminProcedure
        .input(z.object({
            content: z.string()
        }))
        .output(Dummy)
        .mutation(async ({ ctx, input }) => {
            return ctx.prisma.dummy.create({
                select: selectDummy,
                data: input
            })
        }),
    updateDummy: adminProcedure
        .input(Dummy)
        .mutation(async ({ ctx, input }) => {
            await ctx.prisma.dummy.update({
                data: input,
                where: {
                    id: input.id
                }
            })
        }),
    deleteDummy: adminProcedure
        .input(z.object({
            id: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            await ctx.prisma.dummy.delete({
                where: input
            })
        })
})
