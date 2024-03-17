import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
import React from "react"

type UserProfileCardProps = {
    Name: string;

};

export default function UserProfile({ Name }: UserProfileCardProps) {
    return (
        <Box style={{ width: "254px", height: "51px", top: "111px", left: "45px" }}>
            <Flex alignItems="center">
                <Avatar name={Name} size="md" mr={2} bg="gray.200" rounded="full" /> {}
                <Text>Signed in as {Name}</Text>
            </Flex>
        </Box>
    )
}
