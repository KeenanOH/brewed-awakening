import { describe, expect, it } from "vitest"

import { unauthenticatedCaller } from "../../callers"
import { coffeeVariantOne } from "../../seed/items"

describe("getItemDetail tests", () => {
    it("should allow an unauthenticated user to get item details", () => {
        expect(unauthenticatedCaller.getItemDetail({ id: coffeeVariantOne.id }))
            .resolves
            .toBeDefined()
    })
})