import React from "react";
import { AppBar, Toolbar, Container, Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";

export interface HeaderLayoutProps {
  logo: React.ReactNode;
  navigation?: React.ReactNode;
  actions?: React.ReactNode; // right side (desktop)
  mobileActions?: React.ReactNode; // right side (mobile)
  leftMenuIcon?: React.ReactNode; // left menu icon (mobile, for sidebar open)
  onSidebarOpen?: () => void;
  drawer?: React.ReactNode; // optional, for recruiter mobile actions drawer
  fixed?: boolean;
  sx?: SxProps<Theme>;
  containerProps?: React.ComponentProps<typeof Container>;
}

export default function HeaderLayout({
  logo,
  navigation,
  actions,
  mobileActions,
  leftMenuIcon,
  onSidebarOpen,
  drawer,
  fixed = true,
  sx = {},
  containerProps = {},
}: HeaderLayoutProps) {
  return (
    <>
      <AppBar
        position={fixed ? "fixed" : "static"}
        elevation={0}
        sx={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E5E7EB",
          width: '100vw',
          left: 0,
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar || 1100,
          ...sx,
        }}
      >
        <Container maxWidth={false} disableGutters {...containerProps}>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              py: { xs: 1, md: 1.5 },
              minHeight: { xs: "56px", md: "64px" },
              px: { xs: 1, sm: 2 },
            }}
          >
            {/* Left: Menu icon (mobile) + Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {leftMenuIcon && (
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>{leftMenuIcon}</Box>
              )}
              {logo}
            </Box>
            {/* Center: Navigation (desktop only) */}
            {navigation}
            {/* Right: Actions (desktop) */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '24px' }}>
              {actions}
            </Box>
            {/* Right: Mobile actions (mobile only) */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>{mobileActions}</Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Offset for fixed header */}
      {fixed && <Toolbar sx={{ minHeight: { xs: '56px', md: '64px' } }} />}
      {/* Optional drawer (e.g., recruiter mobile actions) */}
      {drawer}
    </>
  );
} 