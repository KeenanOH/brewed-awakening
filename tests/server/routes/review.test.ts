import { TRPCError } from "@trpc/server"
import { describe, expect, it } from "vitest"

import { adminCaller, authenticatedCaller } from "../../callers"
import { unauthenticatedCaller } from "../../callers"

describe("createReview tests", () => {

    it("should NOT allow an unauthenticated user to create a review", () => {

        expect(unauthenticatedCaller.createReview({ content: "testing", rating: 5, itemId: "clspfvfj1000208l325h974p2" }))
            .rejects
            .toThrow(TRPCError)
    })

    it("should allow an authenticated user to create a review", () => {

        expect(authenticatedCaller.createReview({ content: "Is Good Coffee", rating: 5, itemId: "clspfvfj1000208l325h974p2" }))
            .resolves
            .not
            .toThrow()
    })

    it("should NOT allow an admin user to create a review", () => {

        expect(adminCaller.createReview({ content: "testing", rating: 5, itemId: "clspfvfj1000208l325h974p2" }))
            .resolves
            .not
            .toThrow()
    })

})