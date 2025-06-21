"use client"
"use client"
import { Box, IconButton, Menu, MenuItem } from "@mui/material"
// import LoginButton from "../atoms/LoginButton"
// import SignupButton from "../atoms/SignupButton"
import ProfileImage from "../atoms/ProfileImage"
import { useAuth } from "@/hooks/useAuth"
import NotificationsIcon from '@mui/icons-material/Notifications';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from "react"
import { useRouter } from "next/navigation"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SmsIcon from '@mui/icons-material/Sms';
import { useTheme } from "@mui/material/styles"
import RoundedIconButton from '@/components/atoms/RoundedIconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ProfileMenu from './ProfileMenu';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export function RecruiterAuthButtons() {
  const { getUser, logout } = useAuth();
  const user = getUser();
  const router = useRouter();
  const theme = useTheme();

  const handleLogout = () => {
    logout();
    router.refresh();
  };

  if (!user || user.role !== 'recruiter') {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <RoundedIconButton icon={<SettingsIcon />} color="blue" sizeVariant="mid" />
      <RoundedIconButton icon={<NotificationsNoneIcon />} color="blue" sizeVariant="mid" />
      <ProfileMenu
        src="/profile1.jpg"
        profileVariant="job_profile_image"
        menuItems={[{ label: 'Logout', onClick: handleLogout }]}
      />
    </Box>
  );
}
