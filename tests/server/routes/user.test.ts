import { TRPCError } from "@trpc/server"
import { describe, expect, it } from "vitest"

import  { authenticatedCaller, unauthenticatedCaller }  from "../../callers"
import  { user }  from "../../seed/users"


describe("getUser tests", () => {
    
    it("should NOT allow an unauthenticated user to get users", () => {
        expect(unauthenticatedCaller.getUser({ email: user.email }))
            .rejects
            .toThrow(TRPCError)
    })
    
    it("should allow an authenticated user to get users", () => {
        expect(authenticatedCaller.getUser({ email: user.email }))
            .resolves
            .toBeDefined()
    })
})