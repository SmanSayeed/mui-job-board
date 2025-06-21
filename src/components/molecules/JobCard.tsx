"use client"
import { Box, Typography, Avatar, Button } from "@mui/material"
import JobTypeChip from "../atoms/JobTypeChip"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import ProfileImage from "../atoms/ProfileImage"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import WalletIcon from '@mui/icons-material/Wallet';
import { useTheme } from "@mui/material/styles"
import Link from "next/link"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Alert from "@mui/material/Alert"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import { useState } from "react"
import MatchChip from "../atoms/MatchChip"
import SaveButton from "../atoms/SaveButton"
import QuickApplyButton from "../atoms/QuickApplyButton"

interface JobCardProps {
  position: string
  company: string
  location: string
  date: string
  salary: string
  jobTypes: string[]
  tags: string[]
  matchPercentage?: number
  description: string
}

export default function JobCard({
  position,
  company,
  location,
  date,
  salary,
  jobTypes,
  tags,
  matchPercentage,
  description,
}: JobCardProps) {
  const theme = useTheme();
  const [openApply, setOpenApply] = useState(false);
  const [openSave, setOpenSave] = useState(false);

  const handleApplyClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setOpenApply(true);
  };
  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setOpenSave(true);
  };
  const handleCloseApply = () => setOpenApply(false);
  const handleCloseSave = () => setOpenSave(false);

  return (
    <Link href="/job-details/1" style={{ textDecoration: "none" }}>
      <Box sx={{ p: { xs: 2, md: 3 }, backgroundColor: theme.palette.background.paper, borderRadius: theme.shape.borderRadius, mb: 3, cursor: "pointer", transition: "box-shadow 0.2s", boxShadow: { xs: 1, md: 2 }, '&:hover': { boxShadow: 6 } }}>
        {/* Match Percentage */}
        {matchPercentage && matchPercentage > 0 && (
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <MatchChip matchPercentage={matchPercentage} />
          </Box>
        )}

        {/* Job Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center",gap:{xs:2} }}>
           
          <ProfileImage src="/profile2.jpg" profileVariant="job_profile_image" />
          
            <Box>
              <Typography
                sx={{
                  ...theme.typography.h5,
                  color: '#000',
                  verticalAlign: 'middle',
                }}
              >
                {position}
              </Typography>
              <Box sx={{ display: "flex",flexDirection:"column", alignItems: "start",justifyContent:"start", gap: 0.5, flexWrap: "wrap" }}>
                <Typography
                  sx={{
                    ...theme.typography.body2,
                    color: theme.palette.text.secondary,
                    verticalAlign: "middle",
                  }}
                >
                  {company},
                </Typography>
                <Typography
                  sx={{
                    ...theme.typography.caption,
                    color: theme.palette.text.primary,
                    verticalAlign: "middle",
                  }}
                >
                  {location}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Job Types - top right aligned */}
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", alignItems: "center", justifyContent: "flex-end" }}>
            {jobTypes.map((type) => (
              <JobTypeChip key={type} label={type} variant="jobType" uppercase />
            ))}
          </Box>
        </Box>

        

        {/* Job Details */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: 2,
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <CalendarMonthOutlinedIcon sx={{ fontSize: 14, color: theme.palette.text.primary }} />
            <Typography
              sx={{
                ...theme.typography.body2,
                color: theme.palette.text.primary,
              }}
            >
              {date}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, background: theme.palette.action.selected, padding: "4px", borderRadius: "10px" }}>
            <WalletIcon sx={{ fontSize: 14, color: theme.palette.text.primary }} />
            <Typography
              sx={{
                ...theme.typography.body2,
                color: theme.palette.text.primary,
              }}
            >
              {salary}
            </Typography>
          </Box>
        </Box>

          {/* Tags */}
          <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <JobTypeChip key={tag} label={tag} variant="tag" />
          ))}
        </Box>

        {/* Job Overview */}
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              ...theme.typography.subtitle2,
              color: theme.palette.text.primary,
              mb: 1,
            }}
          >
            Job Overview
          </Typography>
          <Typography
            sx={{
              ...theme.typography.overline,
              color: theme.palette.text.primary,
            }}
          >
            {description}
          </Typography>
        </Box>

      

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "flex-start", sm: "flex-end" },
            alignItems: "center",
            mt: 2,
          }}
        >
          <SaveButton onClick={handleSaveClick} sx={{ width: { xs: "100%", sm: 84 }, height: 40 }} />
          <QuickApplyButton onClick={handleApplyClick} sx={{ width: { xs: "100%", sm: 132 }, height: 40 }} />
        </Box>

        {/* Quick Apply Dialog */}
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
        {/* Save Dialog */}
        <Dialog open={openSave} onClose={handleCloseSave} maxWidth="xs" fullWidth>
          <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 0 }}>
            Job Saved
            <IconButton onClick={handleCloseSave} size="small">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Alert severity="info" sx={{ mb: 2, fontSize: '1rem' }}>
              This job has been added to your saved jobs.
            </Alert>
            <Typography variant="body2" color="text.secondary">
              You can view all your saved jobs in your profile.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSave} variant="contained" color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Link>
  )
}
