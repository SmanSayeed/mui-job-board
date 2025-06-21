"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Typography,
  Divider,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import Link from "next/link"
import LoginButton from "../atoms/LoginButton"
import SignupButton from "../atoms/SignupButton"
import { useAuth } from "@/hooks/useAuth"
import { AuthIcons } from "./AuthButtons"
import NewJobButton from "@/components/atoms/NewJobButton"
import SearchInput from "@/components/atoms/SearchInput"
import { RecruiterAuthButtons } from "./RecruiterAuthButtons"

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/jobs" },
  { label: "Extra Jobs", href: "/extra-jobs" },
  { label: "Get Career Help", href: "/career-help" },
]

export default function RecruiterMobileNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { getUser } = useAuth();
  const user = getUser();
  const isRecruiter = user && user.role === 'recruiter';
  const [search, setSearch] = useState("");

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleMobileMenuToggle}
        sx={{
          display: { xs: "flex", md: "none" },
          color: "#4B5563",
          "&:hover": {
            backgroundColor: "rgba(63, 131, 248, 0.08)",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            backgroundColor: "#FFFFFF",
          },
        }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton onClick={handleMobileMenuClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ pt: 0 }}>
          {navigationItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={handleMobileMenuClose}
                selected={pathname === item.href}
                sx={{
                  py: 1.5,
                  px: 2,
                  "&.Mui-selected": {
                    backgroundColor: "#E1EFFE",
                    borderRight: "3px solid #3F83F8",
                    "& .MuiListItemText-primary": {
                      color: "#3F83F8",
                      fontWeight: 600,
                    },
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "1rem",
                    fontWeight: pathname === item.href ? 600 : 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mt: 2 }} />
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <SearchInput
            placeholder="Search jobs..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            size="small"
            sx={{ minWidth: 200 }}
          />
          <NewJobButton />
          {isRecruiter ? <RecruiterAuthButtons /> : <><LoginButton /><SignupButton /></>}
        </Box>
      </Drawer>
    </>
  )
}
