import { z } from "zod"

export const Review = z.object({
    id: z.string()
})

export type Review = z.infer<typeof Review>

export const selectReview = {
    id: true
}
