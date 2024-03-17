import { Item } from "@/models/item";
import { Card, CardBody, Image } from "@chakra-ui/react";

export default function ItemCard({ item, onClick }: { item: Item , onClick: () => void}) {
    return <Card title={item.name} onClick={ onClick }>
        <CardBody>
            <Image src={item.imageUrl} alt={item.name} />
        </CardBody>
    </Card>;
}