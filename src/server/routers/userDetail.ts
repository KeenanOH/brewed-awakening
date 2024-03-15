import { z } from "zod"
import { authenticatedProcedure, router } from "@/server/trpc"

import { UserDetail, selectUserDetail } from "@/models/userDetail"

// note: you may need to search on prisma docs. Selecting the items needs an "includes" arg
export const userDetailRouter = router({
<<<<<<< HEAD
    getUserDetail: authenticatedProcedure
        .input(z.object({
            id: z.string().optional(),
            email: z.string().optional(),
        }).refine(obj => !(obj.id === undefined && obj.email == undefined), "The ID or the email must be set"))
        .output(z.nullable(UserDetail))
        .query(async ({ ctx, input }) => {
            return ctx.prisma.user.findFirst({
                select: selectUserDetail,
                where: {
                    id: input.id,
                    email: input.email
                }
            });
=======
    getUser: authenticatedProcedure
        .input(z.object({
            id: z.string().optional(),
            email: z.string().optional(),
        }).refine(obj => !obj.id !== !obj.email, "The ID or the email, but not both, must be set"))
        .output(z.nullable(UserDetail))
        .query(async ({ ctx, input }) => {
            if(input.id) {
                return ctx.prisma.user.findFirst({
                    select: selectUserDetail,
                    where: {
                        id: input.id
                    }
                })
            } else {
                return ctx.prisma.user.findFirst({
                    select: selectUserDetail,
                    where: {
                        email: input.email
                    }
                })
            }
>>>>>>> afcc4e3465cf3daaf020a3ecf4f4c90e03c33a9f
        }),
})
