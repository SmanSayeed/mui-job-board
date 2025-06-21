import { Box, Typography } from "@mui/material"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import BusinessIcon from "@mui/icons-material/Business"
import { useTheme } from "@mui/material/styles"

export default function GeneralInfoCard() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
      <Typography sx={{ ...theme.typography.h3, color: theme.palette.text.secondary, mb: 1 }}>
        General Information
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <EmailIcon sx={{ fontSize: 16, color: theme.palette.text.primary }} />
        <Typography sx={{ ...theme.typography.body1, color: theme.palette.text.secondary, verticalAlign: "middle" }}>
          stevesmith@gmail.com
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <PhoneIcon sx={{ fontSize: 16, color: theme.palette.text.primary }} />
        <Typography sx={{ ...theme.typography.body1, color: theme.palette.text.secondary, verticalAlign: "middle" }}>
          +46780000000
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <LocationOnIcon sx={{ fontSize: 16, color: theme.palette.text.primary }} />
        <Typography sx={{ ...theme.typography.body1, color: theme.palette.text.secondary, verticalAlign: "middle" }}>
          Stockholm, Sweden
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <BusinessIcon sx={{ fontSize: 16, color: theme.palette.text.primary }} />
        <Typography sx={{ ...theme.typography.body1, color: theme.palette.text.secondary, verticalAlign: "middle" }}>
          190003050050
        </Typography>
      </Box>
    </Box>
  )
} 