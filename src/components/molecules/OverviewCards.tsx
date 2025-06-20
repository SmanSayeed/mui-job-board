"use client"
import { Box, Typography, Card, CardContent } from "@mui/material"
import type React from "react"

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
  icon: React.ReactNode
  color: string
  backgroundColor: string
}

function OverviewCard({ title, value, change, icon, color, backgroundColor }: OverviewCardProps) {
  const isPositive = change.startsWith("+")

  return (
    <Card
      sx={{
        borderRadius: "12px",
        boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        border: "1px solid #E5E7EB",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "12px",
              backgroundColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ color, fontSize: "24px" }}>{icon}</Box>
          </Box>
          <Typography
            sx={{
              fontSize: "0.75rem",
              fontWeight: 500,
              color: isPositive ? "#10B981" : "#EF4444",
              backgroundColor: isPositive ? "#ECFDF5" : "#FEF2F2",
              px: 1,
              py: 0.5,
              borderRadius: "4px",
            }}
          >
            {change}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#6B7280",
            mb: 1,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "#111928",
            lineHeight: 1,
          }}
        >
          {value.toLocaleString()}
        </Typography>
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
    },
    {
      title: "Views",
      value: 200,
      change: "+1.2%",
      icon: <ViewsIcon />,
      color: "#10B981",
      backgroundColor: "#D1FAE5",
    },
    {
      title: "Hired",
      value: 300,
      change: "-1.1%",
      icon: <HiredIcon />,
      color: "#8B5CF6",
      backgroundColor: "#EDE9FE",
    },
    {
      title: "Rejected",
      value: 450,
      change: "+0.3%",
      icon: <RejectedIcon />,
      color: "#EC4899",
      backgroundColor: "#FCE7F3",
    },
  ]

  return (
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 3, mb: 4 }}>
      {overviewData.map((item) => (
        <OverviewCard key={item.title} {...item} />
      ))}
    </Box>
  )
}
