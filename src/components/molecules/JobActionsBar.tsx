"use client"
import { Box, Typography, Stack, Button, useTheme } from "@mui/material"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined"

interface JobActionsBarProps {
  title: string
}

export default function JobActionsBar({ title }: JobActionsBarProps) {
  const theme = useTheme()
  const buttonStyles = {
    color: "text.primary",
    fontWeight: 500,
    fontFamily: "Inter, sans-serif",
    textTransform: "none",
    fontSize: { xs: 14, md: 16 },
    p: { xs: 1, md: 0 },
    minWidth: 0,
    background: "none",
    boxShadow: "none",
    "&:hover": {
      background: "none",
      boxShadow: "none",
    },
  }

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 3,
        p: { xs: 2, md: 3 },
        mb: 3,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "stretch", md: "center" },
        justifyContent: "space-between",
        gap: { xs: 2, md: 0 },
      }}
    >
      <Typography sx={{ 
        fontWeight: 600, 
        fontSize: { xs: 18, md: 20 }, 
        fontFamily: "Inter, sans-serif",
        textAlign: { xs: "center", md: "left" }
      }}>
        {title}
      </Typography>
      <Stack 
        direction={{ xs: "column", sm: "row" }} 
        spacing={{ xs: 1, sm: 2 }}
        sx={{ 
          width: { xs: "100%", md: "auto" },
          alignItems: { xs: "stretch", sm: "center" }
        }}
      >
        <Button startIcon={<VisibilityOutlinedIcon />} variant="text" sx={buttonStyles}>
          View
        </Button>
        <Button startIcon={<ShareOutlinedIcon />} variant="text" sx={buttonStyles}>
          Share
        </Button>
        <Button startIcon={<MailOutlineOutlinedIcon />} variant="text" sx={buttonStyles}>
          Invite
        </Button>
        <Button startIcon={<EditOutlinedIcon />} variant="text" sx={buttonStyles}>
          Edit
        </Button>
      </Stack>
    </Box>
  )
} 