import { TRPCError } from "@trpc/server"
import { describe, expect, it } from "vitest"

import { adminCaller, authenticatedCaller, unauthenticatedCaller } from "../../callers"

describe("getStatistics tests", () => {

    it("should allow an unauthenticated user to get statistics", () => {
        expect(unauthenticatedCaller.getStatistics())
            .resolves
            .toBeDefined()
    })

})