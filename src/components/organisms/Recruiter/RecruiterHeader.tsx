"use client"
import { AppBar, Toolbar, Container, Box } from "@mui/material"
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

export interface HeaderProps {
  type?: 'user' | 'recruiter';
}

export default function RecruiterHeader({ type = 'user' }: HeaderProps) {
  const { getUser } = useAuth();
  const user = getUser();
  const [search, setSearch] = useState("");
  const isRecruiter = user && user.role === 'recruiter';

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: { xs: 1, md: 1.5 },
            minHeight: { xs: "56px", md: "64px" },
            px: { xs: 1, sm: 2 },
          }}
        >
          {/* Left: Logo (optional, add if needed) */}
          {/* <Logo type="recruiter" /> */}
          <Box sx={{ flex: 1 }} />
          {/* Right: SearchInput, New Job, AuthButtons (if recruiter logged in) */}
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
          <RecruiterMobileNavigation />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
