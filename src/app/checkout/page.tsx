"use client"

import { Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import React, { useState } from "react"

import UserProfile from "@/app/checkout/_components/Avatar"
import CheckoutButton from "@/app/checkout/_components/CheckoutButton"
import CheckoutText2 from "@/app/checkout/_components/CheckoutText2"
import OrderDetailsRow from "@/app/checkout/_components/OrderDetailsRow"

const Checkout = () => {
    // State to manage modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Function to handle modal close
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div style={{ margin: "50px" }}>
            <Heading>Brewed Awakening</Heading>
            <div style={{ margin: "50px" }}>
                <UserProfile Name="Miguel" />
            </div>
            <div style={{ margin: "50px" }}>
                <Heading>Checkout</Heading>
            </div>

            <div style={{ margin: "50px" }}>
                <CheckoutText2 label={"Your order will be created once you check-in."} />
            </div>

            <div style={{ margin: "50px" }}>
                <OrderDetailsRow
                    label={"Strawberry Lemonade"}
                    image={"/lemonade.png"}
                    width={"334px"}
                    height={"58px"}
                    borderRadius={"8px"}
                    borderWidth={"1px"}
                    borderColor={"#E2E8F0"}
                />
            </div>

            <div style={{ margin: "50px" }}>
                <OrderDetailsRow
                    label={"Coffee"}
                    image={"/coffee.png"}
                    width={"334px"}
                    height={"58px"}
                    borderRadius={"8px"}
                    borderWidth={"1px"}
                    borderColor={"#E2E8F0"}
                />
            </div>

            <div style={{ margin: "150px" }}>
                <CheckoutButton
                    label={"Checkout"}
                    width={"131px"}
                    height={"40px"}
                    borderRadius={"6px"}
                    padding={"0px 16px"}
                    onClick={() => setIsModalOpen(true)} // Open modal on button click
                />
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Checkout</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Would you like to proceed to the checkout.
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="gray" variant="solid" color="black" onClick={closeModal}>Cancel</Button>
                        <CheckoutButton label= "Add"></CheckoutButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default Checkout
