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
    fontSize: 16,
    p: 0,
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
        p: 3,
        mb: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography sx={{ fontWeight: 600, fontSize: 20, fontFamily: "Inter, sans-serif" }}>
        {title}
      </Typography>
      <Stack direction="row" spacing={2}>
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