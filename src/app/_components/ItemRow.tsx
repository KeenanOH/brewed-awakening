import { Card, IconButton, Text } from "@chakra-ui/react"
import { X } from "lucide-react"

import { useCartStore } from "@/app/_stores/cartStore"
import { Item } from "@/models/item"

export default function ItemRow({ item, removable = false }: { item: Item, removable?: boolean }) {

    const cartStore = useCartStore()

    return (
        <Card className="p-4">
            <div className="flex items-center gap-x-4">
                <img src={ item.imageUrl } alt={ item.name } className="h-10 w-10" />
                <Text>{ item.name }</Text>

                { removable &&
                    <IconButton
                        className="ml-auto"
                        aria-label="Remove item"
                        variant="ghost"
                        icon={ <X /> }
                        onClick={ () => {
                            cartStore.remove(item.id)
                        } }
                    />
                }
            </div>
        </Card>
    )
}

