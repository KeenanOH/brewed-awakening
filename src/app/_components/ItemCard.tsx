"use client"

import { Card, CardBody } from "@chakra-ui/card"
import { useDisclosure } from "@chakra-ui/react"
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay } from "@chakra-ui/react"

import { useCartStore } from "@/app/_stores/cartStore"
import { Item } from "@/models/item"

export default function ItemCard({ item }: { item: Item }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cartStore = useCartStore()

    return (
        <>
            <Card width={ 150 } height={ 150 } className="hover:cursor-pointer" onClick={ onOpen }>
                <CardBody>
                    <img src={ item.imageUrl } alt={ item.name } />
                </CardBody>
            </Card>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add to Cart</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Do you want to add &quot;{ item.name }&quot; to your cart?
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="ghost" onClick={ onClose }>Close</Button>

                        <Button mr={3} onClick={ () => {
                            cartStore.add(item)
                            onClose()
                        }}>
                            Add
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
