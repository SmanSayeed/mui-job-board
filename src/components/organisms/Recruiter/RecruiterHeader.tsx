"use client"
import HeaderLayout from "../HeaderLayout";
import Logo from "../../atoms/Logo";
import Navigation from "../../molecules/Navigation";
import { RecruiterAuthButtons } from "@/components/molecules/RecruiterAuthButtons";
import SearchInput from "@/components/atoms/SearchInput";
import CButton from "../../atoms/CButton";
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export interface HeaderProps {
  type?: 'user' | 'recruiter';
  onSidebarOpen?: () => void;
}

export default function RecruiterHeader({ type = 'user', onSidebarOpen }: HeaderProps) {
  const { getUser } = useAuth();
  const user = getUser();
  const [search, setSearch] = useState("");
  const isRecruiter = user && user.role === 'recruiter';
  const [actionsDrawerOpen, setActionsDrawerOpen] = useState(false);
  const theme = useTheme();

  // Handler for right actions drawer (mobile)
  const handleActionsDrawerOpen = () => setActionsDrawerOpen(true);
  const handleActionsDrawerClose = () => setActionsDrawerOpen(false);

  // Desktop right actions
  const desktopActions = (
    <>
      <Box sx={{ minWidth: 260, maxWidth: 320, display: { xs: 'none', sm: 'block' } }}>
        <SearchInput
          placeholder="Search jobs..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          size="small"
          sx={{ minWidth: 200 }}
          colorVariant="blue"
        />
      </Box>
      <CButton variant="newJob">New Job</CButton>
      {isRecruiter ? (
        <RecruiterAuthButtons />
      ) : (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <CButton variant="login" />
          <CButton variant="signup" />
        </Box>
      )}
    </>
  );

  // Mobile right actions (menu icon)
  const mobileActions = (
    <MoreVertIcon sx={{ cursor: 'pointer' }} onClick={handleActionsDrawerOpen} />
  );

  // Left menu icon (hamburger)
  const leftMenuIcon = (
    <MenuIcon sx={{ cursor: 'pointer' }} onClick={onSidebarOpen} />
  );

  // Drawer for recruiter mobile actions
  const drawer = (
    <Drawer
      anchor="right"
      open={actionsDrawerOpen}
      onClose={handleActionsDrawerClose}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          top: '56px',
          height: 'calc(100vh - 56px)',
          width: 320,
          right: 0,
          backgroundColor: '#fff',
          boxSizing: 'border-box',
          p: 0,
        },
      }}
      ModalProps={{ keepMounted: true }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ fontWeight: 600, fontSize: 18 }}>Actions</Box>
        <IconButton onClick={handleActionsDrawerClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <SearchInput
          placeholder="Search jobs..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          size="small"
          sx={{ minWidth: 200 }}
          colorVariant="blue"
        />
        <CButton variant="newJob">New Job</CButton>
        {isRecruiter ? <RecruiterAuthButtons /> : <><CButton variant="login" /><CButton variant="signup" /></>}
      </Box>
    </Drawer>
  );

  return (
    <HeaderLayout
      logo={<Logo type="recruiter" />}
      navigation={null}
      actions={desktopActions}
      mobileActions={mobileActions}
      leftMenuIcon={leftMenuIcon}
      onSidebarOpen={onSidebarOpen}
      drawer={drawer}
      fixed
      containerProps={{ maxWidth: false, disableGutters: true }}
    />
  );
}
