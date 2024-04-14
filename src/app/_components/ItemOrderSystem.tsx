"use client";

import { selectCategoryDetail } from "@/models/categoryDetail";
import { Button, Heading, Text } from "@chakra-ui/react";
import { PrismaClient } from "@prisma/client";
import CategoryDisplay from "./CategoryDisplay";
import { Item } from "@/models/item";

export default async function ItemOrderSystem() {
    async function getItemData() {
        "use server";

        const prisma = new PrismaClient();
        return prisma.category.findMany({
            select: selectCategoryDetail
        });
    }

    const cart: {[id: string]: {item: Item, count: number}} = {};

    function addItem(item: Item) {
        if(!cart.hasOwnProperty(item.id)) {
            cart[item.id] = {item: item, count: 1};
        } else {
            cart[item.id].count++;
        }
    }

    return <div>
        <Heading>Brewed Awakening</Heading>
        <Text>Welcome to Brewed Awakening!</Text>
        <Button>Proceed to Checkout</Button>
        {(await getItemData()).map(category => 
            <CategoryDisplay name={category.name} items={category.items} addItem={ addItem }></CategoryDisplay>
        )}
    </div>
}