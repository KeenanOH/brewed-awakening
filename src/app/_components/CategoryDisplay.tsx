"use client";

import { Item, selectItem } from "@/models/item";
import { Heading } from "@chakra-ui/react";
import ItemCard from "./ItemCard";

export default function CategoryDisplay({ name, items, addItem }: {name: string, items: Item[], addItem: (item: Item) => void}) {

    return <div>
        <Heading>{name}</Heading>
        <div className="category-grid collapsed">
            {items.map(item => <ItemCard item={item} onClickItem={ addItem }></ItemCard>)}
        </div>
    </div>
    
}