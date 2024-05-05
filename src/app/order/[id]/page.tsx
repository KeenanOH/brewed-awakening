"use client"
import { Text } from "@chakra-ui/react"

import ItemRow from "@/app/_components/ItemRow"
import { trpc } from "@/utils/trpc"

export default function Order({ params }: { params: { id: string } }) {

    const order = trpc.getOrderDetail.useQuery({ id: params.id })

    return (
        <div>
            <Text className="mb-2">{ order.data?.user.name }&apos;s Order</Text>

            <div className="flex flex-col gap-y-2">
                { order.data?.items.map(item =>
                    <ItemRow key={ item.id } item={ item } />
                ) }
            </div>
        </div>
    )
}
