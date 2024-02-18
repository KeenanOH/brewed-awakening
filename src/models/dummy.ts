import { z } from "zod"

export const Dummy = z.object({
    id: z.string(),
    content: z.string(),
})

export type Dummy = z.infer<typeof Dummy>
