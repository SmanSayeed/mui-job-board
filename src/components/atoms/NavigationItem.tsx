"use client"
import { Button } from "@mui/material"
import Link from "next/link"
import { useTheme } from "@mui/material/styles"

interface NavigationItemProps {
  label: string
  href: string
  isActive?: boolean
}

export default function NavigationItem({ label, href, isActive = false }: NavigationItemProps) {
  const theme = useTheme();
  return (
    <Button
      component={Link}
      href={href}
      sx={{
        ...theme.typography.subtitle1,
        verticalAlign: "middle",
        color: isActive ? theme.palette.action.active : theme.palette.text.primary,
        textTransform: "none",
        padding: "8px 12px",
        minWidth: "auto",
        position: "relative",
        "&:hover": {
          backgroundColor: "transparent",
          color: theme.palette.action.hover,
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
              backgroundColor: theme.palette.action.active,
            }
          : {},
      }}
    >
      {label}
    </Button>
  )
}
