import { describe, expect, it } from "vitest"

import { unauthenticatedCaller } from "../../callers"
import { coffeeNutrition } from "../../seed/nutritions"

describe("getNutrition tests", () => {
    it("should allow unauthenticated users to get nutrition information", () => {
        expect(unauthenticatedCaller.getNutrition({ id: coffeeNutrition.id }))
            .resolves
            .toBeDefined()
    })
})