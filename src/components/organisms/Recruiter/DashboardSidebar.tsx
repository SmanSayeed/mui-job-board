"use client"
import type React from "react"
import { useState } from "react"

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

const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <DashboardIcon />,
    href: "/dashboard",
  },
  {
    id: "explore",
    label: "Explore",
    icon: <ExploreIcon />,
    href: "/explore",
  },
  {
    id: "job-listings",
    label: "Job Listings",
    icon: <WorkIcon />,
    children: [
      { id: "job", label: "Job", icon: null, href: "/dashboard/jobs" },
      { id: "extra-job", label: "Extra Job", icon: null, href: "/dashboard/extra-jobs" },
      { id: "freelance", label: "Freelance", icon: null, href: "/dashboard/freelance" },
    ],
  },
  {
    id: "participants",
    label: "Participants",
    icon: <PeopleIcon />,
    href: "/dashboard/participants",
  },
  {
    id: "companies",
    label: "Companies",
    icon: <BusinessIcon />,
    href: "/dashboard/companies",
  },
  {
    id: "orders",
    label: "Orders",
    icon: <OrdersIcon />,
    href: "/dashboard/orders",
  },
  {
    id: "workmatch-tasks",
    label: "WorkMatch Tasks",
    icon: <TasksIcon />,
    href: "/dashboard/tasks",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: <AnalyticsIcon />,
    href: "/dashboard/analytics",
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: <CalendarIcon />,
    href: "/dashboard/calendar",
  },
  {
    id: "payments",
    label: "Payments",
    icon: <PaymentIcon />,
    href: "/dashboard/payments",
  },
  {
    id: "messages",
    label: "Messages",
    icon: <MessageIcon />,
    href: "/dashboard/messages",
    badge: 5,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <NotificationsIcon />,
    href: "/dashboard/notifications",
    badge: 3,
  },
  {
    id: "contact-us",
    label: "Contact Us",
    icon: <ContactIcon />,
    href: "/dashboard/contact",
  },
]

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

  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const isExpanded = expandedItems.includes(item.id)
    const isActive = pathname === item.href
    const hasChildren = item.children && item.children.length > 0

    const listItemButtonProps: any = {
      component: item.href && !hasChildren ? Link : "div",
      onClick: hasChildren ? () => handleExpandClick(item.id) : undefined,
      selected: isActive,
      sx: {
        pl: 2 + level * 2,
        py: 1,
        "&.Mui-selected": {
          backgroundColor: "#E3F2FD",
          borderRight: "3px solid #1976D2",
          "& .MuiListItemText-primary": {
            color: "#1976D2",
            fontWeight: 600,
          },
          "& .MuiListItemIcon-root": {
            color: "#1976D2",
          },
        },
        "&:hover": {
          backgroundColor: "#F5F5F5",
        },
      },
    };
    if (item.href && !hasChildren) {
      listItemButtonProps.href = item.href;
    }

    return (
      <Box key={item.id}>
        <ListItem disablePadding>
          <ListItemButton {...listItemButtonProps}>
            {item.icon && (
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: isActive ? "#1976D2" : "#6B7280",
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
                fontSize: "0.875rem",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#1976D2" : "#374151",
              }}
            />
            {hasChildren && (isExpanded ? <ExpandLess /> : <ExpandMore />)}
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
      <Box sx={{ p: 2 }}>
      <Logo type={"recruiter"} />
      </Box>
      <Divider />
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
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: DRAWER_WIDTH,
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
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: DRAWER_WIDTH,
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          overflowY: "auto",
        },
      }}
      open
    >
      {drawerContent}
    </Drawer>
  )
}
