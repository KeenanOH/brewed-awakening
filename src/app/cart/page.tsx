"use client"

import { Avatar, Button, Text } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react"
import { ArrowRight } from "lucide-react"
import { redirect, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

import ItemRow from "@/app/_components/ItemRow"
import { useCartStore } from "@/app/_stores/cartStore"
import { trpc } from "@/utils/trpc"

export default function Cart() {

    const { status, data } = useSession()
    const cartStore = useCartStore()
    const createOrder = trpc.createOrder.useMutation()
    const toast = useToast()
    const router = useRouter()

    if (status === "unauthenticated") {
        redirect("api/auth/signin")
    } else if (status === "loading") {
        return null
    }

    if (!data?.user) {
        redirect("api/auth/signin")
    }

    return (
        <div>
            <div className="flex items-center gap-x-2 mt-4 mb-8">
                <Avatar name={ data.user!.name ?? "N/A" } src={ data.user?.image ?? undefined } />
                <Text fontWeight="bold">Signed in as { data.user!.name}</Text>
            </div>

            <div className="flex flex-col gap-y-2">
                { cartStore.cart.map(item =>
                    <ItemRow key={ item.id } item={ item }/>
                ) }
            </div>

            <div className="grid justify-end mt-2">
                <Button
                    rightIcon={ <ArrowRight /> }
                    onClick={ () => {
                        const promise = createOrder.mutateAsync({ items: cartStore.cart })
                            .then(order => {
                                cartStore.clear()
                                router.push(`/order/${order.id}`)
                            })
                            .catch(error => console.log(error))

                        toast.promise(promise, {
                            success: { title: "Success", description: "Created your order." },
                            error: { title: "Error", description: "An unexpected error has occured." },
                            loading: { title: "Loading", description: "Attempting to create order..." }
                        })
                    }}
                >
                    Checkout
                </Button>
            </div>
        </div>
    )

}
