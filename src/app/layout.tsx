import "./globals.css"

import { Heading } from "@chakra-ui/react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import React from "react"
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

import ChakraProvider from "@/app/_providers/ChakraProvider"
import NextAuthProvider from "@/app/_providers/NextAuthProvider"
import TRPCProvider from "@/app/_providers/TRPCProvider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const APP_NAME = "Brewed Awakenings";
const APP_DEFAULT_TITLE = "Brewed Awakenings";
const APP_TITLE_TEMPLATE = "Brewed Awakenings";
const APP_DESCRIPTION = "Online ordering for Brewed Awakenings!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <TRPCProvider>
                    <ChakraProvider>
                        <NextAuthProvider>
                            <div className="p-8">
                                <Link as={ NextLink }>
                                    <Heading>Brewed Awakenings</Heading>
                                </Link>
                                { children }
                            </div>
                        </NextAuthProvider>
                    </ChakraProvider>
                </TRPCProvider>
            </body>
        </html>
    )
}
