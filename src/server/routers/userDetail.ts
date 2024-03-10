import { z } from "zod"
import { authenticatedProcedure, router } from "@/server/trpc"

import { UserDetail, selectUserDetail } from "@/models/userDetail"

// note: you may need to search on prisma docs. Selecting the items needs an "includes" arg
export const userDetailRouter = router({
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
        }),
})
