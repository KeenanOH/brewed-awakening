import { TRPCError } from "@trpc/server"
import { describe, expect,it } from "vitest"

import { adminCaller, authenticatedCaller, unauthenticatedCaller } from "../../callers"
import { deletableDummy, dummy } from "../../seed/dummies"

describe("getDummy tests", () => {

    it("should allow an unauthenticated user to a dummy", () => {
        expect(unauthenticatedCaller.getDummy({ id: dummy.id }))
            .resolves
            .toBeDefined()
    })

})

describe("getDummies tests", () => {

    it("should allow an unauthenticated user to get dummies", () => {
        expect(unauthenticatedCaller.getDummies())
            .resolves
            .toBeDefined()
    })

})

describe("createDummy tests", () => {

    it("should NOT allow an unauthenticated user to create a dummy", () => {
        expect(unauthenticatedCaller.createDummy({ content: "Testing" }))
            .rejects
            .toThrow(TRPCError)
    })

    it("should NOT allow an authenticated user to create a dummy", () => {
        expect(authenticatedCaller.createDummy({ content: "Testing" }))
            .rejects
            .toThrow(TRPCError)
    })

    it("should allow an admin user to create a dummy", () => {
        expect(adminCaller.createDummy({ content: "It should work!" }))
            .resolves
            .toBeDefined()
    })

})

describe("updateDummy tests", () => {

    it("should NOT allow an unauthenticated user to update a dummy", () => {
        expect(unauthenticatedCaller.updateDummy(dummy))
            .rejects
            .toThrow(TRPCError)
    })

    it("should NOT allow an authenticated user to update a dummy", () => {
        expect(authenticatedCaller.updateDummy(dummy))
            .rejects
            .toThrow(TRPCError)
    })

    it("should allow an admin user to update a dummy", () => {
        expect(adminCaller.updateDummy(dummy))
            .resolves
            .not
            .toThrow()
    })

})

describe("deleteDummy tests", () => {

    it("should NOT allow an unauthenticated user to delete a dummy", () => {
        expect(unauthenticatedCaller.deleteDummy(deletableDummy))
            .rejects
            .toThrow(TRPCError)
    })

    it("should NOT allow an authenticated user to delete a dummy", () => {
        expect(authenticatedCaller.deleteDummy(deletableDummy))
            .rejects
            .toThrow(TRPCError)
    })

    it("should allow an admin user to delete a dummy", () => {
        expect(adminCaller.deleteDummy(deletableDummy))
            .resolves
            .not
            .toThrow()
    })

})

