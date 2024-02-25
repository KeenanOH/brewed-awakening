import { z } from "zod"

import { Item, selectItem } from "@/models/item"
import { router } from "@/server/trpc"
import { adminProcedure, publicProcedure } from "@/server/trpc"
export const itemRouter = router({
    getItems : publicProcedure
        .output(z.array(Item))
        .query( async ({ ctx }) => {
            return ctx.prisma.item.findMany({
                select: selectItem
            })
        }),
    getItem : publicProcedure
        .input(z.object({
            id: z.string()
        }))
        .output(z.nullable(Item))
        .query( async ({ ctx, input }) => {
            return ctx.prisma.item.findFirst({
                select: selectItem,
                where: {
                    id: input.id
                }
            })
        }),
    createItem: adminProcedure
        .input(z.object({
            name: z.string(),
            imageUrl: z.string()
        }))
        .output(Item)
        .mutation( async ({  ctx, input  }) => {
            return ctx.prisma.item.create({
                select: selectItem,
                data: input
            })
        }),

    updateItem: adminProcedure
        .input(Item)
        .mutation( async ({ ctx, input }) => {
            await ctx.prisma.item.update({
                data: input,
                where: {
                    id: input.id
                }
            })
        }),

    deleteItem: adminProcedure
        .input(z.object({
            id: z.string()
        }))
        .mutation( async ({ ctx, input }) => {
            await ctx.prisma.item.delete({
                where: input
            })
        })
})
