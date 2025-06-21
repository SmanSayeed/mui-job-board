"use client"
import { Box, Typography, Button, Container, IconButton, Divider } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import BusinessIcon from "@mui/icons-material/Business"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import JobTypeChip from "../../../../components/atoms/JobTypeChip"
import SkillChip from "../../../../components/atoms/SkillChip"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Alert from "@mui/material/Alert"
import CloseIcon from "@mui/icons-material/Close"
import { useState, useEffect } from "react"
import BackButton from "../../../../components/atoms/BackButton"
import DesignationTitle from "@/components/atoms/DesignationTitle"
import CButton from "@/components/atoms/CButton"
import RoundedIconButton from "@/components/atoms/RoundedIconButton"
import JobMetaInformation from "@/components/molecules/JobMetaInformation"
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Loader from "@/components/atoms/Loader"

export default function JobDetailPage() {
  const [openApply, setOpenApply] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const handleApplyClick = () => setOpenApply(true);
  const handleCloseApply = () => setOpenApply(false);

  useEffect(() => {
    // Simulate loading time for job details
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box sx={{ 
        minHeight: "100vh", 
        backgroundColor: "#F3F4F6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Loader />
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#F3F4F6" }}>
      <Container maxWidth="lg" sx={{ py: 0 }}>
        <Box sx={{ backgroundColor: "#FFFFFF", borderRadius: "8px", p: 4 }}>
            {/* Back Button */}
            <BackButton sx={{ mb: 3 }} />

          {/* Job Header */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <DesignationTitle>Senior UX Designer</DesignationTitle>
                <JobTypeChip label="FULL-TIME" />
                <JobTypeChip label="HYBRID" />
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CButton variant="applyNow" onClick={handleApplyClick}>Apply Now</CButton>
              <RoundedIconButton icon={<MoreHorizIcon />} color="blue" sizeVariant="small" />
            </Box>
          </Box>

          {/* Job Meta Information */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
            <JobMetaInformation icon={<CalendarTodayIcon />} label="Posted on March 22, 2025" variant="posted" />
            <JobMetaInformation icon={<AccessTimeIcon />} label="Apply before April 30, 2025" variant="apply" />
            <JobMetaInformation icon={<BusinessCenterIcon />} label="Intelligent Apps" variant="company" />
            <JobMetaInformation icon={<AttachMoneyIcon />} label="100,000 EUR/yr" variant="salary" />
          </Box>

          {/* Skills/Tags */}
          <Box sx={{ display: "flex", gap: 1, mb: 4, flexWrap: "wrap" }}>
            <VpnKeyIcon/>
            <SkillChip label="Data" />
            <SkillChip label="Product" />
            <SkillChip label="UX" />
            <SkillChip label="Design" />
          </Box>

          <Divider sx={{ mb: 4 }} />

          {/* Company Overview */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "1.125rem",
                lineHeight: 1.3,
                color: "#111928",
                mb: 2,
              }}
            >
              Company Overview
            </Typography>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "0.875rem",
                lineHeight: 1.6,
                color: "#4B5563",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Typography>
          </Box>

          {/* Job Overview */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "1.125rem",
                lineHeight: 1.3,
                color: "#111928",
                mb: 2,
              }}
            >
              Job Overview
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "#4B5563",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "#4B5563",
                  }}
                >
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Key Responsibilities */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "1.125rem",
                lineHeight: 1.3,
                color: "#111928",
                mb: 2,
              }}
            >
              Key Responsibilities
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "#4B5563",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "#4B5563",
                  }}
                >
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Candidate Requirements */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "1.125rem",
                lineHeight: 1.3,
                color: "#111928",
                mb: 2,
              }}
            >
              Candidate Requirements
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "#4B5563",
                  }}
                >
                  Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "#4B5563",
                  }}
                >
                  3+ years of experience in back-end development working either with multiple smaller projects
                  simultaneously or large-scale applications
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "#4B5563",
                  }}
                >
                  Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "#4B5563",
                  }}
                >
                  Solid background in Linux, MySQL, Apache, Nginx, and MVC frameworks (LAMP, LEMP, etc.)
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                    color: "#4B5563",
                  }}
                >
                  Have experience/awareness in Agile application development, commercial off- the-shelf software,
                  middleware, servers and storage, and database management
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Apply Now Dialog */}
          <Dialog open={openApply} onClose={handleCloseApply} maxWidth="xs" fullWidth>
            <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 0 }}>
              Application Submitted
              <IconButton onClick={handleCloseApply} size="small">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Alert severity="success" sx={{ mb: 2, fontSize: '1rem' }}>
                Your application has been submitted successfully!
              </Alert>
              <Typography variant="body2" color="text.secondary">
                Thank you for applying. We will review your application and get back to you soon.
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseApply} variant="contained" color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>

       
        </Box>
      </Container>
    </Box>
  )
}
