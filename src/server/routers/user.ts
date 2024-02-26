import { z } from "zod"

import { selectUser, User } from "@/models/user"
import { authenticatedProcedure, router } from "@/server/trpc"

export const userRouter = router({
    getUser: authenticatedProcedure
        .input(z.object({
            email: z.string()
        }))
        .output(z.nullable(User))
        .query(async ({ ctx, input }) => {
            return ctx.prisma.user.findFirst({
                select: selectUser,
                where: {
                    email: input.email
                }
            })
        }),
})
