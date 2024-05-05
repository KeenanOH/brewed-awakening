import { createTransport,  } from "nodemailer"
import { z } from "zod"

import { Item } from "@/models/item"
import { Order, selectOrder } from "@/models/order"
import { selectUser } from "@/models/user"
import { adminProcedure, authenticatedProcedure, publicProcedure, router } from "@/server/trpc"
const sendgridTransport = require("nodemailer-sendgrid-transport")

const transporter = createTransport(sendgridTransport({
    auth: {
        api_key: process.env.SENDGRID_API_KEY
    }
}))
export const orderRouter = router({
    getOrder: publicProcedure
        .input(z.object({
            id: z.string()
        }))
        .output(z.nullable(Order))
        .query(async ({ ctx, input }) => {
            return ctx.prisma.order.findFirst({
                select: selectOrder,
                where: {
                    id: input.id
                }
            })
        }),
    getOrders: publicProcedure
        .output(z.array(Order))
        .query(async ({ ctx }) => {
            return ctx.prisma.order.findMany({
                select: selectOrder
            })
        }),
    getSortedOrders: publicProcedure
        .output(z.array(Order))
        .query(async ({ ctx }) => {
            return ctx.prisma.order.findMany({
                orderBy: {
                    createdAt: "desc" // newest orders show up first
                },
                select: selectOrder
            })
        }),
    createOrder: authenticatedProcedure
        .input(z.object({
            createdAt: z.date(),
            completed: z.boolean(),
            userId: z.string(),
            items: z.array(Item),
            email: z.boolean().default(false)
        }))
        .output(Order)
        .query(async ({ ctx, input }) => {
            if (input.email) {
                const user = await ctx.prisma.user.findFirst({
                    select: selectUser,
                    where: { id: input.userId }
                })
                //TODO: send email
                if (user && user.email) {
                    console.log(user)
                    transporter.sendMail({
                        to: user.email,
                        from: process.env.SENDGRID_EMAIL,
                        subject: "Order confirmed",
                        html: "<p>Your order with Brewed Awakening has been confirmed</p>"
                    })
                }
            }
            return ctx.prisma.order.create({
                select: selectOrder,
                data: { ...input, userId: ctx.user.id, items: { connect: input.items } }
            })
        }),
    updateOrder: adminProcedure
        .input(z.object({
            createdAt: z.date(),
            completed: z.boolean(),
            userId: z.string(),
            id: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            await ctx.prisma.order.update({
                data: input,
                where: {
                    id: input.id
                }
            })
        }),
    deleteOrder: adminProcedure
        .input(z.object({
            id: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            await ctx.prisma.order.delete({
                where: input
            })
        }),
    getCompletedOrders: publicProcedure
        .query(async ({ ctx }) => {
            return ctx.prisma.order.count({
                where: {
                    completed: false
                }
            })
        }),
    getActiveOrders: publicProcedure
        .query(async ({ ctx }) => {
            return ctx.prisma.order.count({
                where: {
                    completed: false
                }
            })
        })

})

