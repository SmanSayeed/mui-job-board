"use client"
import type React from "react"
import { useState } from "react"
import sidebarItems from "@/lib/sidebarItems"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Collapse,
  Badge,
  Divider,
} from "@mui/material"
import {
  Dashboard as DashboardIcon,
  Explore as ExploreIcon,
  Work as WorkIcon,
  People as PeopleIcon,
  Business as BusinessIcon,
  ShoppingCart as OrdersIcon,
  Assignment as TasksIcon,
  Analytics as AnalyticsIcon,
  CalendarToday as CalendarIcon,
  Payment as PaymentIcon,
  Message as MessageIcon,
  Notifications as NotificationsIcon,
  ContactMail as ContactIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material"
import Logo from "@/components/atoms/Logo"

const DRAWER_WIDTH = 240

interface SidebarItem {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
  badge?: number
  children?: SidebarItem[]
}



interface DashboardSidebarProps {
  open: boolean
  onClose: () => void
  variant?: "permanent" | "temporary"
}

export default function DashboardSidebar({ open, onClose, variant = "permanent" }: DashboardSidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(["job-listings"])
  const pathname = usePathname()

  const handleExpandClick = (itemId: string) => {
    setExpandedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const isChildActive = (child: SidebarItem) => {
    if (child.href && pathname === child.href) return true;
    if (child.children) return child.children.some(isChildActive);
    return false;
  };

  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const isExpanded = expandedItems.includes(item.id)
    const hasChildren = item.children && item.children.length > 0
    const isActive =
      pathname === item.href ||
      (hasChildren && (item.children?.some(isChildActive) || isExpanded));

    const listItemButtonProps: any = {
      component: item.href && !hasChildren ? Link : "div",
      onClick: hasChildren ? () => handleExpandClick(item.id) : undefined,
      selected: isActive,
      sx: {
        pl: 0,
        py: 0,
        height: '45px',
        mb: '16px',
        backgroundColor: 'transparent',
        '&.Mui-selected': {
          backgroundColor: 'transparent',
        },
        '&:hover': {
          backgroundColor: '#F5F5F5',
        },
      },
    };
    if (item.href && !hasChildren) {
      listItemButtonProps.href = item.href;
    }

    return (
      <Box key={item.id}>
        <ListItem disablePadding sx={{ height: '45px', mb: '16px' }}>
          <ListItemButton {...listItemButtonProps}>
            {isActive && (
              <Box
                sx={{
                  width: 6,
                  height: 45,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: '#1A56DB',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                }}
              />
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', pl: isActive ? '18px' : '24px', width: '100%' }}>
              {item.icon && (
                <ListItemIcon
                  sx={{
                    minWidth: 40,
                    color: isActive ? '#1A56DB' : '#6B7280',
                  }}
                >
                  {item.badge ? (
                    <Badge badgeContent={item.badge} color="error" variant="dot">
                      {item.icon}
                    </Badge>
                  ) : (
                    item.icon
                  )}
                </ListItemIcon>
              )}
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '16px',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  lineHeight: 1.3,
                  letterSpacing: 0,
                  color: isActive ? '#1A56DB' : '#374151',
                }}
              />
              {hasChildren && (isExpanded ? <ExpandLess /> : <ExpandMore />)}
            </Box>
          </ListItemButton>
        </ListItem>
        {hasChildren && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children?.map((child) => renderSidebarItem(child, level + 1))}
            </List>
          </Collapse>
        )}
      </Box>
    )
  }

  const drawerContent = (
    <Box sx={{ width: DRAWER_WIDTH, height: "100%" }}>
      {/* Logo removed for cleaner sidebar */}
      <List sx={{ pt: 1 }}>{sidebarItems.map((item) => renderSidebarItem(item))}</List>
    </Box>
  )

  if (variant === "temporary") {
    return (
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
        anchor="left"
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
            borderRight: "none",
            overflowY: "auto",
            top: { xs: '56px', md: '64px' },
            height: { xs: 'calc(100vh - 56px)', md: 'calc(100vh - 64px)' },
          },
        }}
      >
        {drawerContent}
      </Drawer>
    )
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: DRAWER_WIDTH,
          position: 'fixed',
          left: 0,
          top: 'var(--header-height, 64px)',
          height: 'calc(100vh - var(--header-height, 64px))',
          overflowY: 'auto',
          overflowX: 'hidden',
          borderRight: 'none',
        },
      }}
      open
    >
      {drawerContent}
    </Drawer>
  )
}
