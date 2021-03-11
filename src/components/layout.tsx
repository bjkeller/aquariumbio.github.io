import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Container } from "@material-ui/core"

export interface LayoutProps {
    children: JSX.Element[] | JSX.Element
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Container>
            <Header />
            <main>{children}</main>
            <Footer />
        </Container>
    )
}