"use client"
import { Box } from "@mui/material"
import { usePathname } from "next/navigation"
import NavigationItem from "../atoms/NavigationItem"

interface NavigationProps {
  type?: 'user' | 'recruiter';
}

const userNavigationItems = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Extra Jobs", href: "/extra-jobs" },
  { label: "Get Career Help", href: "/career-help" },
]

const recruiterNavigationItems = [
  { label: "Dashboard", href: "/recruiter/dashboard" },
  { label: "Post Job", href: "/recruiter/post-job" },
  { label: "Candidates", href: "/recruiter/candidates" },
]

export default function Navigation({ type = 'user' }: NavigationProps) {
  const pathname = usePathname()
  const navItems = type === 'recruiter' ? recruiterNavigationItems : userNavigationItems

  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
      {navItems.map((item) => (
        <NavigationItem key={item.label} label={item.label} href={item.href} isActive={pathname === item.href} />
      ))}
    </Box>
  )
}
