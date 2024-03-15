import { describe, expect, it } from "vitest"

import { unauthenticatedCaller } from "../../callers"
import { orderOne } from "../../seed/orders"

describe("getItemDetail tests", () => {
    it("should allow an unauthenticated user to get order details", () => {
        expect(unauthenticatedCaller.getOrderDetail({ id: orderOne.id  }))
            .resolves
            .toBeDefined()
    })
})