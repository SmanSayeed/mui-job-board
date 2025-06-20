"use client"
import { Box } from "@mui/material"
import NavigationItem from "../atoms/NavigationItem"

const navigationItems = [
  { label: "Home", href: "/", isActive: true },
  { label: "Jobs", href: "/jobs" },
  { label: "Extra Jobs", href: "/extra-jobs" },
  { label: "Get Career Help", href: "/career-help" },
]

export default function Navigation() {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
      {navigationItems.map((item) => (
        <NavigationItem key={item.label} label={item.label} href={item.href} isActive={item.isActive} />
      ))}
    </Box>
  )
}
