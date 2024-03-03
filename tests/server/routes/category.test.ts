import { TRPCError } from "@trpc/server"
import { describe, expect,it } from "vitest"

import { adminCaller, authenticatedCaller, unauthenticatedCaller } from "../../callers"
import { coffeeCategory, deletableCategory } from "../../seed/categories"

describe("getCategory tests", () => {

    it("should allow an unauthenticated user to a category", () => {
        expect(unauthenticatedCaller.getCategory({ id: coffeeCategory.id }))
            .resolves
            .toBeDefined()
    })

})

describe("getCategories tests", () => {

    it("should allow an unauthenticated user to get dummies", () => {
        expect(unauthenticatedCaller.getCategories())
            .resolves
            .toBeDefined()
    })

})

describe("createCategory tests", () => {

    it("should NOT allow an unauthenticated user to create a category", () => {
        expect(unauthenticatedCaller.createCategory({ name: "Testing" }))
            .rejects
            .toThrow(TRPCError)
    })

    it("should NOT allow an authenticated user to create a category", () => {
        expect(authenticatedCaller.createCategory({ name: "Testing" }))
            .rejects
            .toThrow(TRPCError)
    })

    it("should allow an admin user to create a category", () => {
        expect(adminCaller.createCategory({ name: "It should work!" }))
            .resolves
            .toBeDefined()
    })

})

describe("updateCategory tests", () => {

    it("should NOT allow an unauthenticated user to update a category", () => {
        expect(unauthenticatedCaller.updateCategory(coffeeCategory))
            .rejects
            .toThrow(TRPCError)
    })

    it("should NOT allow an authenticated user to update a category", () => {
        expect(authenticatedCaller.updateCategory(coffeeCategory))
            .rejects
            .toThrow(TRPCError)
    })

    it("should allow an admin user to update a category", () => {
        expect(adminCaller.updateCategory(coffeeCategory))
            .resolves
            .not
            .toThrow()
    })

})

describe("deleteCategory tests", () => {

    it("should NOT allow an unauthenticated user to delete a category", () => {
        expect(unauthenticatedCaller.deleteCategory(deletableCategory))
            .rejects
            .toThrow(TRPCError)
    })

    it("should NOT allow an authenticated user to delete a category", () => {
        expect(authenticatedCaller.deleteCategory(deletableCategory))
            .rejects
            .toThrow(TRPCError)
    })

    it("should allow an admin user to delete a category", () => {
        expect(adminCaller.deleteCategory(deletableCategory))
            .resolves
            .not
            .toThrow()
    })

})
