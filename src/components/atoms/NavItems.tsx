"use client"

import type React from "react"
import { Button, Box, useTheme } from "@mui/material"

interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

interface NavItemsProps {
  navItems: NavItem[]
}

const NavItems: React.FC<NavItemsProps> = ({ navItems }) => {
  const theme = useTheme()

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {navItems.map((item) => (
        <Button
          key={item.label}
          href={item.href}
          sx={{
            color: item.isActive ? theme.palette.action.active : theme.palette.text.primary,
            textTransform: "none",
            ...theme.typography.subtitle1, // Use the navigation typography variant
            padding: "8px 12px",
            minWidth: "auto",
            position: "relative",
            "&:hover": {
              backgroundColor: "transparent",
              color: theme.palette.action.hover,
            },
            "&::after": item.isActive
              ? {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100%",
                  height: "2px",
                  backgroundColor: theme.palette.action.active,
                }
              : {},
          }}
        >
          {item.label}
        </Button>
      ))}
      <Button
        sx={{
          color: theme.palette.neutral.default, // Use the custom neutral color
          textTransform: "none",
          fontSize: "0.95rem",
          fontWeight: 600,
          fontFamily: "Roboto, sans-serif",
          padding: "8px 16px",
          minWidth: "auto",
          "&:hover": {
            backgroundColor: "transparent",
            color: theme.palette.neutral.default,
          },
        }}
      >
        Login
      </Button>
      <Button
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.brand.onBrand, // Use the custom brand color
          textTransform: "none",
          fontSize: "0.95rem",
          fontWeight: 600,
          fontFamily: "Roboto, sans-serif",
          borderRadius: "8px",
          padding: "10px 20px",
          minWidth: "auto",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
            boxShadow: "none",
          },
        }}
      >
        Signup
      </Button>
    </Box>
  )
}

export default NavItems
