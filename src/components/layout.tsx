import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Grid } from "@material-ui/core"

export interface LayoutProps {
    children: JSX.Element[] | JSX.Element
}

export default function Layout({ children }: LayoutProps) {
    return (
        <Grid container direction='column'>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item container>
                {children}
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
        </Grid>
    )
}