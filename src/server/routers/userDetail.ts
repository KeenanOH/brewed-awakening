import { z } from "zod"

import { selectUserDetail,UserDetail } from "@/models/userDetail"
import { authenticatedProcedure, router } from "@/server/trpc"

// note: you may need to search on prisma docs. Selecting the items needs an "includes" arg
export const userDetailRouter = router({
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
            })
        }),
})
