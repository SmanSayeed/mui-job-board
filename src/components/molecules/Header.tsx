import { useState } from "react"
import {
    AppBar,
    Toolbar,
    Container,
    useTheme,
} from "@mui/material"
import Logo from "../atoms/Logo"
import NavItems from "../atoms/NavItems"

export default function Header() {
    const theme = useTheme()
    return (
        <>
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar
                        sx={{
                            justifyContent: "space-between",
                            py: { xs: 1, md: 1.5 },
                            minHeight: { xs: "56px", md: "64px" },
                        }}
                    >
                        <Logo />
                        <NavItems />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
