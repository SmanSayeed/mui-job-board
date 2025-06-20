"use client"
import { useState } from "react"
import {
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"


interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}

const navigationItems: NavigationItem[] = [
  { label: "Home", href: "/", isActive: true },
  { label: "Jobs", href: "/jobs" },
  { label: "Extra Jobs", href: "/extra-jobs" },
  { label: "Get Career Help", href: "/career-help" },
]

export default function NavItems() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false)
  }

  const renderDesktopNavigation = () => (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
      {navigationItems.map((item) => (
        <Button
          key={item.label}
          href={item.href}
          sx={{
            color: item.isActive ? theme.palette.primary.main : theme.palette.text.primary,
            textTransform: "none",
            fontSize: "0.95rem",
            fontWeight: item.isActive ? 600 : 500,
            padding: "8px 12px",
            minWidth: "auto",
            position: "relative",
            "&:hover": {
              backgroundColor: "transparent",
              color: theme.palette.primary.main,
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
                  backgroundColor: theme.palette.primary.main,
                }
              : {},
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  )

  const renderMobileNavigation = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{
        "& .MuiDrawer-paper": {
          width: 280,
          backgroundColor: theme.palette.background.paper,
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
              href={item.href}
              onClick={handleMobileMenuClose}
              selected={item.isActive}
              sx={{
                py: 1.5,
                px: 2,
                "&.Mui-selected": {
                  backgroundColor: `${theme.palette.primary.main}08`,
                  borderRight: `3px solid ${theme.palette.primary.main}`,
                  "& .MuiListItemText-primary": {
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                  },
                },
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "1rem",
                  fontWeight: item.isActive ? 600 : 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ mt: 2 }} />
      <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          variant="text"
          fullWidth
          sx={{
            color: theme.palette.text.primary,
            justifyContent: "flex-start",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 500,
            py: 1.5,
            "&:hover": {
              backgroundColor: "transparent",
              color: theme.palette.primary.main,
            },
          }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
            textTransform: "none",
            fontSize: "1rem",
            fontWeight: 500,
            py: 1.5,
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Signup
        </Button>
      </Box>
    </Drawer>
  )

  const renderAuthButtons = () => (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
      <Button
        sx={{
          color: theme.palette.text.primary,
          textTransform: "none",
          fontSize: "0.95rem",
          fontWeight: 500,
          padding: "8px 16px",
          minWidth: "auto",
          "&:hover": {
            backgroundColor: "transparent",
            color: theme.palette.primary.main,
          },
        }}
      >
        Login
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
          textTransform: "none",
          fontSize: "0.95rem",
          fontWeight: 500,
          borderRadius: "6px",
          padding: "10px 20px",
          minWidth: "auto",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            boxShadow: "0px 2px 4px rgba(25, 118, 210, 0.2)",
          },
        }}
      >
        Signup
      </Button>
    </Box>
  )

  return (
    <>
            {/* Desktop Navigation */}
            {renderDesktopNavigation()}
            {/* Desktop Auth Buttons */}
            {renderAuthButtons()}
            {/* Mobile Menu Button */}
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuToggle}
              sx={{
                display: { xs: "flex", md: "none" },
                color: theme.palette.text.primary,
                "&:hover": {
                  backgroundColor: `${theme.palette.primary.main}08`,
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* Mobile Navigation Drawer */}
            {renderMobileNavigation()}
    
    </>
  )
}
