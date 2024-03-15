import { TRPCError } from "@trpc/server"
import { describe, expect, it } from "vitest"

import { authenticatedCaller, unauthenticatedCaller }  from "../../callers"
import { user }  from "../../seed/users"
import { orderOne } from "../../seed/orders"

describe("getUserDetail tests", () => {

    it("should NOT allow an unauthenticated user to get user details", () => {
        expect(unauthenticatedCaller.getUserDetail({ email: user.email }))
            .rejects
            .toThrow(TRPCError)
    })
        
    it("should allow an authenticated user to get user details by email", () => {
        expect(authenticatedCaller.getUserDetail({ email: user.email }))
            .resolves
            .toHaveProperty("orders")
    })

    it("should allow an authenticated user to get user details by id", () => {
        expect(authenticatedCaller.getUserDetail({ id: user.id }))
            .resolves
            .toHaveProperty("orders")
    })

    it("should provide an accurate list of orders", () => {
        expect(authenticatedCaller.getUserDetail({ id: user.id }))
            .resolves
            .toSatisfy((obj) => {
                let x = obj as { orders: {id: string}[] };
                for (const order of x.orders) {
                    if(order.id === orderOne.id) return true;
                }
                return false;
            })
    })
    
    it("should allow an authenticated user to get user details by id & email (although this isn't necessary)", () => {
        expect(authenticatedCaller.getUserDetail({ id: user.id, email: user.email }))
            .resolves
            .toHaveProperty("orders")
    })

    it("should NOT allow to get user details without id or email", () => {
        expect(authenticatedCaller.getUserDetail({}))
            .rejects
            .toThrow()
    })
})