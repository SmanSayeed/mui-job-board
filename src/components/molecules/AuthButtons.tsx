"use client"
import { Box, IconButton, Menu, MenuItem } from "@mui/material"
import CButton from '../atoms/CButton';
import ProfileImage from "../atoms/ProfileImage"
import { useAuth } from "@/hooks/useAuth"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from "react"
import { useRouter } from "next/navigation"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SmsIcon from '@mui/icons-material/Sms';
import { useTheme } from "@mui/material/styles"
import RoundedIconButton from '@/components/atoms/RoundedIconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProfileMenu from './ProfileMenu';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { ButtonProps } from '@mui/material/Button';
import LoginButton from '../atoms/LoginButton';

export function AuthIcons() {
  const { logout } = useAuth();
  const router = useRouter();
  const theme = useTheme();

  const handleLogout = () => {
    logout();
    router.refresh();
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <RoundedIconButton icon={<CalendarTodayIcon />} color="blue" sizeVariant="mid" />
      <RoundedIconButton icon={<SmsIcon />} color="blue" sizeVariant="mid" />
      <ProfileMenu
        src="/profile1.jpg"
        profileVariant="job_profile_image"
        menuItems={[{ label: 'Logout', onClick: handleLogout }]}
      />
    </Box>
  );
}

export default function AuthButtons() {
  const { getUser } = useAuth();
  const user = getUser();

  if (user) {
    return <AuthIcons />;
  }

  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, alignItems: "center" }}>
      <LoginButton />
      <CButton variant="signup">Signup</CButton>
    </Box>
  )
}
