import { TRPCError } from "@trpc/server"
import { describe, expect,it } from "vitest"

import { adminCaller, authenticatedCaller, unauthenticatedCaller } from "../../callers"
import { coffeeVariantOne, deletableItem } from "../../seed/items"


describe("getItem tests", () => {

    it("should allow an unauthenticated user to an item", () => {
        expect(unauthenticatedCaller.getItem({ id: coffeeVariantOne.id }))
            .resolves
            .toBeDefined()
    })

})

describe("getItems tests", () => {

    it("should allow an unauthenticated user to get items", () => {
        expect(unauthenticatedCaller.getItems())
            .resolves
            .toBeDefined()
    })

})

describe("createDummy tests", () => {

    it("should NOT allow an unauthenticated user to create an item", () => {
        expect(unauthenticatedCaller.createItem(coffeeVariantOne))
            .rejects
            .toThrow(TRPCError)
    })

    it("should NOT allow an authenticated user to create an item", () => {
        expect(authenticatedCaller.createItem(coffeeVariantOne))
            .rejects
            .toThrow(TRPCError)
    })

    it("should allow an admin user to create an item", () => {
        expect(adminCaller.createItem(coffeeVariantOne))
            .resolves
            .toBeDefined()
    })

})

describe("updateItem tests", () => {

    it("should NOT allow an unauthenticated user to update an item", () => {
        expect(unauthenticatedCaller.updateItem(coffeeVariantOne))
            .rejects
            .toThrow(TRPCError)
    })

    it("should NOT allow an authenticated user to update an item", () => {
        expect(authenticatedCaller.updateItem(coffeeVariantOne))
            .rejects
            .toThrow(TRPCError)
    })

    it("should allow an admin user to update an item", () => {
        expect(adminCaller.updateItem(coffeeVariantOne))
            .resolves
            .not
            .toThrow()
    })

})

describe("deleteItem tests", () => {

    it("should NOT allow an unauthenticated user to delete an item", () => {
        expect(unauthenticatedCaller.deleteItem(deletableItem))
            .rejects
            .toThrow(TRPCError)
    })

    it("should NOT allow an authenticated user to delete an item", () => {
        expect(authenticatedCaller.deleteItem(deletableItem))
            .rejects
            .toThrow(TRPCError)
    })

    it("should allow an admin user to delete an item", () => {
        expect(adminCaller.deleteItem(deletableItem))
            .resolves
            .not
            .toThrow()
    })

})