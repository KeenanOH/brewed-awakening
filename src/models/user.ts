import { z } from "zod"

export const User = z.object({
    id: z.string(),
    name: z.optional(z.string()),
    email: z.optional(z.string()),
    image: z.optional(z.string()),
    isAdmin: z.boolean()
})

export type User = z.infer<typeof User>

export const selectUser = {
    id: true,
    name: true,
    email: true,
    image: true,
    isAdmin: true
}
