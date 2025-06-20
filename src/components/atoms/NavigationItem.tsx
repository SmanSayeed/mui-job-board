"use client"
import { Button } from "@mui/material"
import Link from "next/link"

interface NavigationItemProps {
  label: string
  href: string
  isActive?: boolean
}

export default function NavigationItem({ label, href, isActive = false }: NavigationItemProps) {
  return (
    <Button
      component={Link}
      href={href}
      sx={{
        fontFamily: "var(--font-inter), Inter, sans-serif",
        fontWeight: 600,
        fontSize: "0.875rem", // 14px
        lineHeight: 1.5, // 150%
        letterSpacing: 0,
        textAlign: "center",
        verticalAlign: "middle",
        color: isActive ? "#3F83F8" : "#4B5563", // Blue/500 or Gray/600
        textTransform: "none",
        padding: "8px 12px",
        minWidth: "auto",
        position: "relative",
        "&:hover": {
          backgroundColor: "transparent",
          color: "#3F83F8", // Blue/500
        },
        "&::after": isActive
          ? {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              height: "2px",
              backgroundColor: "#3F83F8", // Blue/500
            }
          : {},
      }}
    >
      {label}
    </Button>
  )
}
