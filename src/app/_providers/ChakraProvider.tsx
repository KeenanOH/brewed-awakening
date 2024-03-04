"use client"

import { ChakraProvider as CkProvider, extendTheme } from "@chakra-ui/react"
import React from "react"

const theme = extendTheme({
    fonts: {
        heading: "var(--font-inter)",
        body: "var(--font-inter)",
    },
    components: {
        Button: {
            defaultProps: {
                colorScheme: "teal",
            },
        },
    },
})

export default function ChakraProvider({ children }: { children: React.ReactNode }) {
    return (
        <CkProvider theme={ theme }>
            { children }
        </CkProvider>
    )
}
