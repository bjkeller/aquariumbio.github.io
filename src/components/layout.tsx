import React from "react"
import Header from "./header"
import Footer from "./footer"

export interface LayoutProps {
    children: JSX.Element[] | JSX.Element
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>

    )
}