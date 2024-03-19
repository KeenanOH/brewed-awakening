import { categoryRouter } from "@/server/routers/category"
import { categoryDetailRouter } from "@/server/routers/categoryDetail"
import { dummyRouter } from "@/server/routers/dummy"
import { itemRouter } from "@/server/routers/item"
import { itemDetailRouter } from "@/server/routers/itemDetail"
import { nutritionRouter } from "@/server/routers/nutrition"
import { orderRouter } from "@/server/routers/order"
import { orderDetailRouter } from "@/server/routers/orderDetail"
import { userRouter } from "@/server/routers/user"
import { userDetailRouter } from "@/server/routers/userDetail"
import { mergeRouters } from "@/server/trpc"

export const appRouter = mergeRouters(
    categoryRouter,
    categoryDetailRouter,
    dummyRouter,
    itemRouter,
    itemDetailRouter,
    orderRouter,
    orderDetailRouter,
    userRouter,
    userDetailRouter,
    nutritionRouter
)

export type AppRouter = typeof appRouter
