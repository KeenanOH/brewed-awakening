import { createCaller } from "@/server/caller"
import { prisma } from "@/server/prisma"

import { adminUser, user } from "./seed/users"

export const unauthenticatedCaller = createCaller({
    prisma,
    user: null
})

export const authenticatedCaller = createCaller({
    prisma,
    user: {
        id: user.id,
        name: null,
        email: null,
        emailVerified: null,
        image: null,
        isAdmin: false
    }
})

export const adminCaller = createCaller({
    prisma,
    user: {
        id: adminUser.id,
        name: null,
        email: null,
        emailVerified: null,
        image: null,
        isAdmin: true
    }
})
