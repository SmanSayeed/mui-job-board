"use client"
import { AppBar, Toolbar, Container } from "@mui/material"
import Logo from "../atoms/Logo"
import Navigation from "../molecules/Navigation"
import AuthButtons from "../molecules/AuthButtons"
import MobileNavigation from "../molecules/MobileNavigation"

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: { xs: 1, md: 1.5 },
            minHeight: { xs: "56px", md: "64px" },
            px: { xs: 1, sm: 2 },
          }}
        >
          <Logo />
          <Navigation />
          <AuthButtons />
          <MobileNavigation />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
