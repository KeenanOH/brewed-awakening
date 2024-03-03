import { TRPCError } from "@trpc/server"
import { describe, expect,it } from "vitest"

import { adminCaller, authenticatedCaller, unauthenticatedCaller } from "../../callers"
import { deletableOrder, orderOne } from "../../seed/orders"
const order = { createdAt: new Date(), completed: false, userId: "hyperspace_coder" }
const orderWithId = { id: "idk what the fuck to put here", createdAt: new Date(), completed: false, userId: "hyperspace_coder" }
describe("getOrder tests", () => {
    it("should allow an unauthenticated user to get an order", () => {
        expect(unauthenticatedCaller.getOrder({ id: orderOne.id }))
            .resolves
            .toBeDefined()
    })
})
describe("getOrders tests", () => {
    it("should allow an unathenticated user to get orders", () => {
        expect(unauthenticatedCaller.getOrders())
            .resolves
            .toBeDefined()
    })
})

describe("createOrder tests", () => {
    it("should allow an authenticated user to create an order", () => {
        expect(authenticatedCaller.createOrder(order))
            .resolves
            .toBeDefined()
    })
    it("should not allow an unauthenticated user create an order", () => {
        expect(unauthenticatedCaller.createOrder(order))
            .rejects
            .toThrow(TRPCError)
    })
})
describe("updateOrder tests", () => {
    it("should allow an admin caller to update an order", () => {
        expect(adminCaller.updateOrder(orderWithId))
            .resolves
            .toBeDefined()
    })
    it("should not allow an authenticated caller to update an order", () => {
        expect(authenticatedCaller.updateOrder(orderWithId))
            .rejects
            .toThrow(TRPCError)
    })
    it("should not allow an unauthenticated caller to update an order", () => {
        expect(unauthenticatedCaller.updateOrder(orderWithId))
            .rejects
            .toThrow(TRPCError)
    })
})
describe("deleteOrder tests", () => {
    it("should allow an admin caller to delete an order", () => {
        expect(adminCaller.deleteOrder(deletableOrder))
            .resolves
            .toBeDefined()
    })
    it("should not allow an authenticated caller to delete an order", () => {
        expect(authenticatedCaller.deleteOrder(deletableOrder))
            .rejects
            .toThrow(TRPCError)
    })
    it("should not allow an unauthenticated caller to delete an order", () => {
        expect(unauthenticatedCaller.deleteOrder(deletableOrder))
            .rejects
            .toThrow(TRPCError)
    })
})