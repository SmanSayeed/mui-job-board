"use client"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import type React from "react"
import { useState } from "react"
import { Box, Container, Drawer, Button, useTheme, useMediaQuery } from "@mui/material"
import theme from "@/lib/theme"
import Header from "../organisms/Header"
import LeftSidebar from "../organisms/LeftSideBar"
import PersonIcon from '@mui/icons-material/Person';

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [leftOpen, setLeftOpen] = useState(false);

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: theme.palette.background.default }}>
      <Header type="user" />
      {/* Mobile/Tablet-only: Profile button below header */}
      <Box sx={{ display: { xs: 'flex', lg: 'none' }, justifyContent: 'flex-start', alignItems: 'center', px: 2, py: 1 }}>
        <Button
          variant="contained"
          startIcon={<PersonIcon />}
          onClick={() => setLeftOpen(true)}
          sx={{
            borderRadius: 2,
            fontWeight: 600,
            background: 'linear-gradient(90deg, #3F83F8 0%, #0052CC 100%)',
            color: '#fff',
            boxShadow: '0 2px 8px rgba(63,131,248,0.08)',
            px: 3,
            py: 1.5,
            fontSize: { xs: '1rem', sm: '1.1rem' },
            textTransform: 'none',
            '&:hover': {
              background: 'linear-gradient(90deg, #0052CC 0%, #3F83F8 100%)',
              color: '#fff',
            },
          }}
        >
          Profile
        </Button>
        <Drawer anchor="left" open={leftOpen} onClose={() => setLeftOpen(false)}>
          <Box sx={{ width: 280, p: 2 }}>
            <LeftSidebar />
          </Box>
        </Drawer>
      </Box>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 2, md: 3, lg: 4 }, my: { xs: 2, md: 3 }, mx: { xs: 0, sm: 'auto' }, flex: 1, width: '100%', minWidth: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 2, md: 3, lg: 4 },
            py: { xs: 1, md: 2 },
            width: '100%',
            minWidth: 0,
            overflowX: { xs: 'auto', sm: 'visible' },
            '& > *': {
              width: { xs: '100%', sm: '100%', md: '100%' },
              maxWidth: { xs: '100%', sm: '100%', md: '100%' },
              minWidth: 0,
            },
          }}
        >
          {/* Desktop-only: LeftSidebar */}
          <Box sx={{ display: { xs: 'none', lg: 'block' }, width: 320, flexShrink: 0 }}>
            <LeftSidebar />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            {children}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
