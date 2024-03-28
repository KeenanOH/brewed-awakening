import { prisma } from "@/server/prisma"

import { coffeeCategory, deletableCategory } from "./seed/categories"
import { deletableDummy, dummy } from "./seed/dummies"
import { coffeeVariantOne, deletableItem } from "./seed/items"
import { coffeeNutrition } from "./seed/nutritions"
import { deletableOrder, orderOne } from "./seed/orders"
import { adminUser, user } from "./seed/users"

await prisma.user.upsert({
    create: user,
    update: user,
    where: {
        id: user.id
    }
})

await prisma.user.upsert({
    create: adminUser,
    update: adminUser,
    where: {
        id: adminUser.id
    }
})

await prisma.category.upsert({
    create: coffeeCategory,
    update: coffeeCategory,
    where: {
        id: coffeeCategory.id
    }
})

await prisma.category.upsert({
    create: deletableCategory,
    update: deletableCategory,
    where: {
        id: deletableCategory.id
    }
})

await prisma.item.upsert({
    create: coffeeVariantOne,
    update: coffeeVariantOne,
    where: {
        id: coffeeVariantOne.id
    }
})

await prisma.item.upsert({
    create: deletableItem,
    update: deletableItem,
    where: {
        id: deletableItem.id
    }
})

await prisma.order.upsert({
    create: {
        ...orderOne,
        items: {
            connect: orderOne.items
        }
    },
    update: {
        ...orderOne,
        items: {
            connect: orderOne.items
        }
    },
    where: {
        id: orderOne.id
    }
})

await prisma.order.upsert({
    create: {
        ...deletableOrder,
        items: {
            connect: deletableOrder.items
        }
    },
    update: {
        ...deletableOrder,
        items: {
            connect: deletableOrder.items
        }
    },
    where: {
        id: deletableOrder.id
    }
})
await prisma.nutrition.upsert({
    create: coffeeNutrition,
    update: coffeeNutrition, // not sure about this and also it's causing errors lol
    where: {
        id: coffeeNutrition.id
    }
})

await prisma.dummy.upsert({
    create: dummy,
    update: dummy,
    where: {
        id: dummy.id
    }
})

await prisma.dummy.upsert({
    create: deletableDummy,
    update: deletableDummy,
    where: {
        id: deletableDummy.id
    }
})
