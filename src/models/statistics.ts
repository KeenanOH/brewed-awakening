import { z } from "zod"

export const Statistics = z.object({
    numItems: z.number(),
    numOrders: z.number(),
})

export type Statistics = z.infer<typeof Statistics>

