"use client"
import { AppBar, Toolbar, Container, Box, Drawer, IconButton } from "@mui/material"
import Logo from "../../atoms/Logo"
import Navigation from "../../molecules/Navigation"
import AuthButtons from "../../molecules/AuthButtons"
import MobileNavigation from "../../molecules/MobileNavigation"
import RecruiterMobileNavigation from "@/components/molecules/RecruiterMobileNavigation"
import { RecruiterAuthButtons } from "@/components/molecules/RecruiterAuthButtons"
import SearchInput from "@/components/atoms/SearchInput"
import ApplyNowButton from "@/components/atoms/ApplyNowButton"
import AddIcon from "@mui/icons-material/Add"
import { useAuth } from "@/hooks/useAuth"
import { useState } from "react"
import NewJobButton from "@/components/atoms/NewJobButton"
import LoginButton from "@/components/atoms/LoginButton"
import SignupButton from "@/components/atoms/SignupButton"
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
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

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid #E5E7EB",
          width: '100vw',
          left: 0,
          top: 0,
          zIndex: theme.zIndex.appBar || 1100,
        }}
      >
        <Container maxWidth={false} disableGutters>
          <Toolbar
            sx={{
              justifyContent: "space-between",
              py: { xs: 1, md: 1.5 },
              minHeight: { xs: "56px", md: "64px" },
              px: { xs: 1, sm: 2 },
            }}
          >
            {/* Left: Hamburger menu for sidebar (mobile only) + Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <MenuIcon sx={{ cursor: 'pointer' }} onClick={onSidebarOpen} />
              </Box>
              <Logo type="recruiter" />
            </Box>
            {/* Right: Recruiter actions (desktop only) */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: '24px' }}>
              <Box sx={{ minWidth: 260, maxWidth: 320, display: { xs: 'none', sm: 'block' } }}>
                <SearchInput
                  placeholder="Search jobs..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  size="small"
                  sx={{ minWidth: 200 }}
                />
              </Box>
              <NewJobButton />
              {isRecruiter ? (
                <RecruiterAuthButtons />
              ) : (
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <LoginButton />
                  <SignupButton />
                </Box>
              )}
            </Box>
            {/* Right: Actions drawer trigger (mobile only) */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <MoreVertIcon sx={{ cursor: 'pointer' }} onClick={handleActionsDrawerOpen} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* Offset for fixed header */}
      <Toolbar sx={{ minHeight: { xs: '56px', md: '64px' } }} />
      {/* Right-side recruiter actions drawer for mobile */}
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
          />
          <NewJobButton />
          {isRecruiter ? <RecruiterAuthButtons /> : <><LoginButton /><SignupButton /></>}
        </Box>
      </Drawer>
    </>
  )
}
