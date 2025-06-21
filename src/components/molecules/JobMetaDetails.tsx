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
  const iconStyle = { fontSize: 18, color: theme.palette.grey[500] }
  const textStyle = { color: theme.palette.grey[500], fontWeight: 500 }

  return (
    <Stack
      direction="row"
      alignItems="start"
      spacing={3}
      sx={{ color: "text.secondary", mb: 2, px: 3 }}
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