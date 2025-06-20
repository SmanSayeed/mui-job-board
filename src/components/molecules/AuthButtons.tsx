"use client"
import { Box, IconButton, Menu, MenuItem } from "@mui/material"
import LoginButton from "../atoms/LoginButton"
import SignupButton from "../atoms/SignupButton"
import ProfileImage from "../atoms/ProfileImage"
import { useAuth } from "@/hooks/useAuth"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React from "react"
import { useRouter } from "next/navigation"

export function AuthIcons() {
  const { logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logout();
    setAnchorEl(null);
    router.refresh();
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <IconButton color="inherit">
        <NotificationsIcon />
      </IconButton>
      <IconButton color="inherit">
        <SettingsIcon />
      </IconButton>
      <IconButton color="inherit" onClick={handleMenu} sx={{ p: 0 }}>
        <ProfileImage src="profile1.jpg" profileVariant="user_profile_image" />
        <ArrowDropDownIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
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
      <SignupButton />
    </Box>
  )
}
