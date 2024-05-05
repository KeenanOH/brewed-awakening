"use client";

import { Item } from "@/models/item";
import { Card, CardBody, Image } from "@chakra-ui/react";

export default function ItemCard({ item, onClickItem }: { item: Item , onClickItem: (item: Item) => void}) {
    return <Card title={item.name} onClick={ () => onClickItem(item) }>
        <CardBody>
            <Image src={item.imageUrl} alt={item.name} />
        </CardBody>
    </Card>;
}