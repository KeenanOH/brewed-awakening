import { describe, expect,it } from "vitest"

import { unauthenticatedCaller } from "../../callers"
import { coffeeVariantOne } from "../../seed/items"

describe("getCategoryDetail tests", () => {

    it("should allow an unauthenticated user to a category detail", () => {
        expect(unauthenticatedCaller.getCategoryDetail({ id: coffeeVariantOne.id }))
            .resolves
            .toBeDefined()
    })

})