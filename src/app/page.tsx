"use client"

import { Button, Text } from "@chakra-ui/react"
import { ShoppingCart } from "lucide-react"
import { redirect, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

import ItemCard from "@/app/_components/ItemCard"
import { useCartStore } from "@/app/_stores/cartStore"
import { trpc } from "@/utils/trpc"


export default function Home() {

    const { status } = useSession()

    const [itemsCount, setItemsCount] = useState(0)
    const categoryDetails = trpc.getCategoryDetails.useQuery()
    const cartStore = useCartStore()
    const router = useRouter()

    useEffect(() => {
        setItemsCount(cartStore.cart.length)
    }, [cartStore.cart.length])

    if (status === "unauthenticated") {
        redirect("api/auth/signin")
    } else if (status === "loading") {
        return null
    }

    return (
        <div>
            <Text>Welcome to the Brewed Awakenings site.</Text>
            <Text>You can order online here!</Text>

            <Button className="mt-4" leftIcon={ <ShoppingCart /> } onClick={ () => router.push("/cart") }>View Cart - { itemsCount } item(s)</Button>

            <div className="mt-8 flex flex-col gap-y-4">
                { categoryDetails.data?.map(category => {
                    if (category.items.length < 1) return

                    return (
                        <div key={category.id}>
                            <Text size="md" fontWeight="bold">{category.name}</Text>
                            {category.items.map(item =>
                                <ItemCard key={item.id} item={item}/>
                            )}
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}
