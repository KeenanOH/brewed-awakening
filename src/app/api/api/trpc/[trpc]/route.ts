import { fetchRequestHandler } from "@trpc/server/adapters/fetch"

import { createContext } from "@/server/context"
import { appRouter } from "@/server/routers/_app"

function handler(request: Request) {
    return fetchRequestHandler({
        endpoint: "/api/trpc",
        req: request,
        router: appRouter,
        createContext
    })
}

export { handler as GET, handler as POST }
