import { TRPCError } from "@trpc/server"
import { describe, expect, it } from "vitest"

import { adminCaller, authenticatedCaller, unauthenticatedCaller } from "../../callers"
import { deletableOrder, orderOne } from "../../seed/orders"
describe("getOrder tests", () => {
    it("should allow an unauthenticated user to get an order", () => {
        expect(unauthenticatedCaller.getOrder({ id: orderOne.id }))
            .resolves
            .toBeDefined()
    })
})
describe("getOrders tests", () => {
    it("should allow an unauthenticated user to get orders", () => {
        expect(unauthenticatedCaller.getOrders())
            .resolves
            .toBeDefined
    })
})
describe("getSortedOrders tests", () => {
    it("should allow an unauthenticated user to get orders sorted by date", async () => {
        const orders = await unauthenticatedCaller.getSortedOrders()
        let isInOrder = true
        if (orders.length <= 1) {
            expect(true).toBe(true)
            return
        }
        for (let i = 0; i < orders.length-1; i++) {
            if (orders[i].createdAt.getTime() < orders[i+1].createdAt.getTime()) {
                isInOrder = false
            }
        }
        expect(isInOrder).toBe(true)
    })
})
describe("createOrder tests", () => {
    it("should allow an authenticated user to create an order", () => {
        expect(authenticatedCaller.createOrder(orderOne))
            .resolves
            .toBeDefined()
    })
    it("should not allow an unauthenticated user create an order", () => {
        expect(unauthenticatedCaller.createOrder(orderOne))
            .rejects
            .toThrow(TRPCError)
    })
})
describe("updateOrder tests", () => {
    it("should allow an admin caller to update an order", () => {
        expect(adminCaller.updateOrder(orderOne))
            .resolves
            .not
            .toThrow()
    })
    it("should not allow an authenticated caller to update an order", () => {
        expect(authenticatedCaller.updateOrder(orderOne))
            .rejects
            .toThrow(TRPCError)
    })
    it("should not allow an unauthenticated caller to update an order", () => {
        expect(unauthenticatedCaller.updateOrder(orderOne))
            .rejects
            .toThrow(TRPCError)
    })
})
describe("deleteOrder tests", () => {
    it("should allow an admin caller to delete an order", () => {
        expect(adminCaller.deleteOrder(deletableOrder))
            .resolves
            .not
            .toThrow()
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
describe("getCompletedOrders tests", () => {
    it("should allow an unauthenticated user to get orders", () => {
        expect(unauthenticatedCaller.getCompletedOrders())
            .resolves
            .toBeDefined
    })
})
