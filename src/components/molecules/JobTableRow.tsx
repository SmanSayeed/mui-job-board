"use client"
import { TableRow, TableCell, Typography, Box, Button, IconButton, Menu, MenuItem } from "@mui/material"
import type React from "react"

import { MoreHoriz as MoreIcon } from "@mui/icons-material"
import { useState } from "react"
import StatusChip from "../atoms/StatusChip"

interface JobListing {
  id: string
  jobTitle: string
  jobType: string
  datePosted: string
  applicants: number
  views: number
  status?: string
}

interface JobTableRowProps {
  job: JobListing
  onEdit?: (jobId: string) => void
  onDuplicate?: (jobId: string) => void
  onViewStats?: (jobId: string) => void
  onDelete?: (jobId: string) => void
  onArchive?: (jobId: string) => void
}

export default function JobTableRow({ job, onEdit, onDuplicate, onViewStats, onDelete, onArchive }: JobTableRowProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleAction = (action: () => void) => {
    action()
    handleMenuClose()
  }

  return (
    <>
      <TableRow sx={{ "&:hover": { backgroundColor: "#F9FAFB" } }}>
        <TableCell>
          <Typography
            sx={{
              fontWeight: 500,
              color: "#111928",
              fontSize: "0.875rem",
            }}
          >
            {job.jobTitle}
          </Typography>
        </TableCell>

        <TableCell>
          <StatusChip label={job.jobType} variant={job.jobType.toLowerCase().replace(" ", "-") as any} />
        </TableCell>

        <TableCell>
          <Typography sx={{ color: "#6B7280", fontSize: "0.875rem" }}>
            {new Date(job.datePosted).toLocaleDateString()}
          </Typography>
        </TableCell>

        <TableCell>
          <Typography sx={{ color: "#111928", fontSize: "0.875rem", fontWeight: 500 }}>{job.applicants}</Typography>
        </TableCell>

        <TableCell>
          <Typography sx={{ color: "#111928", fontSize: "0.875rem", fontWeight: 500 }}>{job.views}</Typography>
        </TableCell>

        <TableCell>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Button
              size="small"
              onClick={() => onEdit?.(job.id)}
              sx={{
                color: "#3B82F6",
                fontSize: "0.75rem",
                textTransform: "none",
                minWidth: "auto",
                p: "2px 6px",
                "&:hover": {
                  backgroundColor: "#EBF8FF",
                },
              }}
            >
              Open
            </Button>

            <Button
              size="small"
              onClick={() => onDuplicate?.(job.id)}
              sx={{
                color: "#3B82F6",
                fontSize: "0.75rem",
                textTransform: "none",
                minWidth: "auto",
                p: "2px 6px",
                "&:hover": {
                  backgroundColor: "#EBF8FF",
                },
              }}
            >
              Duplicate
            </Button>

            <Button
              size="small"
              onClick={() => onViewStats?.(job.id)}
              sx={{
                color: "#3B82F6",
                fontSize: "0.75rem",
                textTransform: "none",
                minWidth: "auto",
                p: "2px 6px",
                "&:hover": {
                  backgroundColor: "#EBF8FF",
                },
              }}
            >
              View Stats
            </Button>

            <Button
              size="small"
              onClick={() => onDelete?.(job.id)}
              sx={{
                color: "#EF4444",
                fontSize: "0.75rem",
                textTransform: "none",
                minWidth: "auto",
                p: "2px 6px",
                "&:hover": {
                  backgroundColor: "#FEF2F2",
                },
              }}
            >
              Delete
            </Button>

            <IconButton
              size="small"
              onClick={handleMenuClick}
              sx={{
                color: "#6B7280",
                "&:hover": {
                  backgroundColor: "#F3F4F6",
                },
              }}
            >
              <MoreIcon fontSize="small" />
            </IconButton>
          </Box>
        </TableCell>
      </TableRow>

      {/* Context Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
            border: "1px solid #E5E7EB",
          },
        }}
      >
        <MenuItem onClick={() => handleAction(() => onEdit?.(job.id))}>Edit Job</MenuItem>
        <MenuItem onClick={() => handleAction(() => onDuplicate?.(job.id))}>Clone Job</MenuItem>
        <MenuItem onClick={() => handleAction(() => onArchive?.(job.id))}>Archive Job</MenuItem>
        <MenuItem onClick={() => handleAction(() => onDelete?.(job.id))} sx={{ color: "#EF4444" }}>
          Delete Job
        </MenuItem>
      </Menu>
    </>
  )
}
