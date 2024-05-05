import { Card, Text } from "@chakra-ui/react"

import { Item } from "@/models/item"

export default function ItemRow({ item }: { item: Item }) {
    return (
        <Card className="p-4">
            <div className="flex items-center gap-x-4">
                <img src={ item.imageUrl } alt={ item.name } className="h-10 w-10" />
                <Text>{ item.name }</Text>
            </div>
        </Card>
    )
}

