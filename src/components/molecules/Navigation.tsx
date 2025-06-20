"use client"
import { Box } from "@mui/material"
import { usePathname } from "next/navigation"
import NavigationItem from "../atoms/NavigationItem"

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Extra Jobs", href: "/extra-jobs" },
  { label: "Get Career Help", href: "/career-help" },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
      {navigationItems.map((item) => (
        <NavigationItem key={item.label} label={item.label} href={item.href} isActive={pathname === item.href} />
      ))}
    </Box>
  )
}
