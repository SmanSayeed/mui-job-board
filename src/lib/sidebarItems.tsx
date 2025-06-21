
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
import HomeIcon from '@mui/icons-material/Home';
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
      icon: <HomeIcon />,
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

  export default sidebarItems