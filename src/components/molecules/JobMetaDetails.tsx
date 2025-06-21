"use client"
import { Stack, Typography, useTheme } from "@mui/material"
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"

interface JobMetaDetailsProps {
  applicants: number
  location: string
  date: string
  salary: string
}

export default function JobMetaDetails({
  applicants,
  location,
  date,
  salary,
}: JobMetaDetailsProps) {
  const theme = useTheme()
  const iconStyle = { fontSize: { xs: 16, md: 18 }, color: theme.palette.grey[500] }
  const textStyle = { 
    color: theme.palette.grey[500], 
    fontWeight: 500,
    fontSize: { xs: 12, md: 14 }
  }

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={{ xs: "flex-start", md: "start" }}
      spacing={{ xs: 2, md: 3 }}
      sx={{ 
        color: "text.secondary", 
        mb: 2, 
        px: { xs: 2, md: 3 },
        gap: { xs: 1.5, md: 3 }
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <PeopleOutlineIcon sx={iconStyle} />
        <Typography variant="body2" sx={textStyle}>
          {applicants}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <LocationOnOutlinedIcon sx={iconStyle} />
        <Typography variant="body2" sx={textStyle}>
          {location}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <CalendarTodayOutlinedIcon sx={iconStyle} />
        <Typography variant="body2" sx={textStyle}>
          {date}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <WorkOutlineIcon sx={iconStyle} />
        <Typography variant="body2" sx={textStyle}>
          {salary}
        </Typography>
      </Stack>
    </Stack>
  )
} 