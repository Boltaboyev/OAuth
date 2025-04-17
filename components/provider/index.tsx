"use client"
import {SessionProvider} from "next-auth/react"
import React from "react"

interface CustomAuthProviderProps {
    children: React.ReactNode
}

const CustomAuthProvider = ({children}: CustomAuthProviderProps) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default CustomAuthProvider
