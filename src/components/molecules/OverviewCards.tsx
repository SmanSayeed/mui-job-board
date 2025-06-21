"use client"
import { Box, Typography, Card, CardContent } from "@mui/material"
import type React from "react"
import type { ReactElement } from "react"
import RoundedIconButton from "../atoms/RoundedIconButton"
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
  Description as ApplicationsIcon,
  Visibility as ViewsIcon,
  CheckCircle as HiredIcon,
  Cancel as RejectedIcon,
} from "@mui/icons-material"

interface OverviewCardProps {
  title: string
  value: number
  change: string
  icon: ReactElement
  color: string
  backgroundColor: string,
  trending: "up" | "down"
}

// Map the color hex to the RoundedIconButton color prop
const colorHexToVariant = (color: string) => {
  switch (color) {
    case "#F59E0B": return "yellow";
    case "#10B981": return "green";
    case "#8B5CF6": return "purple";
    case "#EC4899": return "pink";
    default: return "blue";
  }
}

function OverviewCard({ title, value, change, trending, icon, color, backgroundColor }: OverviewCardProps) {
  // Figma colors
  const gray500 = "#6B7280";
  const gray800 = "#1F2937";
  const roundedColor = colorHexToVariant(color);

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '100%', md: '48%', lg: 266.25 },
        minWidth: 0,
        height: 119,
        borderRadius: "12px",
        background: "#fff",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        border: "1px solid #E5E7EB",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent:'space-between',
        gap: 2,
        p: 0,
      }}
    >
      <CardContent sx={{
        p: { xs: 2, sm: 2, md: 3 },
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: 2,
        height: '100%',
        width: '100%',
        '&:last-child': { p: { xs: 2, sm: 2, md: 3 } },
      }}>
        <Box sx={{ alignSelf: 'flex-start', flexShrink: 0, display: 'flex' }}>
          <RoundedIconButton icon={icon} color={roundedColor} sizeVariant="large" />
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          flex: 1,
          minWidth: 0,
        }}>
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.3,
              letterSpacing: 0,
              color: gray500,
              mb: 1,
              verticalAlign: 'middle',
              wordBreak: 'break-word',
              overflowWrap: 'break-word',
              maxWidth: '100%',
            }}
          >
            {title}
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            gap: 1,
            mt: 'auto',
          }}>
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 24,
                lineHeight: 1.1,
                letterSpacing: 0,
                color: gray800,
                verticalAlign: 'middle',
                whiteSpace: 'nowrap',
              }}
            >
              {value.toLocaleString()}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 1.5,
                letterSpacing: 0,
                color: gray500,
                verticalAlign: 'middle',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                whiteSpace: 'nowrap',
              }}
            >
              {change}
              {trending === 'up' && <TrendingUpIcon sx={{ fontSize: 18, color: gray500, ml: 0.5 }} />}
              {trending === 'down' && <TrendingDownIcon sx={{ fontSize: 18, color: gray500, ml: 0.5 }} />}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default function OverviewCards() {
  const overviewData = [
    {
      title: "Applications",
      value: 1200,
      change: "+2.3%",
      icon: <ApplicationsIcon />,
      color: "#F59E0B",
      backgroundColor: "#FEF3C7",
      trending: "up",
    },
    {
      title: "Views",
      value: 200,
      change: "+1.2%",
      icon: <ViewsIcon />,
      color: "#10B981",
      backgroundColor: "#D1FAE5",
      trending: "down",
    },
    {
      title: "Hired",
      value: 300,
      change: "-1.1%",
      icon: <HiredIcon />,
      color: "#8B5CF6",
      backgroundColor: "#EDE9FE",
      trending: "up",
    },
    {
      title: "Rejected",
      value: 450,
      change: "+0.3%",
      icon: <RejectedIcon />,
      color: "#EC4899",
      backgroundColor: "#FCE7F3",
      trending: "up",
    },
  ] as OverviewCardProps[]

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        rowGap: { xs: 2, sm: 2, md: 3 },
        columnGap: { xs: 0, sm: 2, md: 3 },
        justifyContent: { xs: 'center', sm: 'space-between', md: 'flex-start', lg: 'space-between' },
        alignItems: { xs: 'stretch', sm: 'flex-start' },
      }}
    >
      {overviewData.map((item) => (
        <OverviewCard key={item.title} {...item} />
      ))}
    </Box>
  )
}
