"use client"
import React, { useState } from "react"
import {
  TableRow,
  TableCell,
  Box,
  Typography,
  Menu,
  MenuItem,
  Divider,
  useTheme,
} from "@mui/material"
import Image from "next/image"
import BpCheckbox from "@/components/atoms/BpCheckbox"
import ProfileImage from "@/components/atoms/ProfileImage"
import SkillChip from "@/components/atoms/SkillChip"
import RoundedIconButton from "@/components/atoms/RoundedIconButton"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import StatusSelector from "./StatusSelector"

interface ActionsMenuCellProps {
  onEdit: () => void
  onOpen: () => void
  onDuplicate: () => void
  onViewStats: () => void
  onDelete: () => void
}

function ActionsMenuCell({
  onEdit,
  onOpen,
  onDuplicate,
  onViewStats,
  onDelete,
}: ActionsMenuCellProps) {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  const handleAction = (action: () => void) => {
    action()
    handleClose()
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
      <RoundedIconButton
        icon={<MoreVertIcon sx={{ color: theme.jobListingTable.actionButtonIcon }} />}
        color="blue"
        onClick={handleMenu}
        sizeVariant="small"
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={() => handleAction(onEdit)}>Edit</MenuItem>
        <MenuItem onClick={() => handleAction(onOpen)}>Open</MenuItem>
        <MenuItem onClick={() => handleAction(onDuplicate)}>Duplicate</MenuItem>
        <MenuItem onClick={() => handleAction(onViewStats)}>View Stats</MenuItem>
        <Divider />
        <MenuItem onClick={() => handleAction(onDelete)} sx={{ color: "#EF4444" }}>
          Delete
        </MenuItem>
      </Menu>
    </Box>
  )
}

interface CandidateTableRowProps {
  candidate: any
  checked: boolean
  onCheckChange: (checked: boolean) => void
  onEdit: (id: string) => void
  onOpen: (id: string) => void
  onDuplicate: (id: string) => void
  onViewStats: (id: string) => void
  onDelete: (id: string) => void
}

export default function CandidateTableRow({
  candidate,
  checked,
  onCheckChange,
  onEdit,
  onOpen,
  onDuplicate,
  onViewStats,
  onDelete,
}: CandidateTableRowProps) {
  const theme = useTheme()

  return (
    <TableRow
      hover
      sx={{
        borderBottom: `1px solid ${theme.table.border}`,
        backgroundColor: checked ? `${theme.table.rowHover} !important` : "inherit",
        "&:hover": { backgroundColor: `${theme.table.rowHover} !important` },
      }}
    >
      <TableCell padding="checkbox">
        <BpCheckbox checked={checked} onChange={(e) => onCheckChange(e.target.checked)} />
      </TableCell>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <ProfileImage
            src={candidate.candidate.avatar}
            profileVariant="job_profile_image"
            sx={{ mr: 1 }}
          />
          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 16,
                color: theme.table.rowText,
                fontFamily: "Inter, sans-serif",
              }}
            >
              {candidate.candidate.name}
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: 13,
                color: theme.palette.text.secondary,
                fontFamily: "Inter, sans-serif",
              }}
            >
              {candidate.candidate.subtitle}
            </Typography>
          </Box>
          <RoundedIconButton
            icon={<AddCircleOutlineIcon />}
            color="blue"
            sizeVariant="small"
            sx={{ visibility: "hidden" }} // Initially hidden
          />
        </Box>
      </TableCell>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <RoundedIconButton
            icon={<VisibilityOutlinedIcon />}
            color="blue"
            sizeVariant="small"
            sx={{ visibility: "hidden" }} // Initially hidden
          />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 15,
              color: theme.table.rowText,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {candidate.location}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {candidate.skills.map((skill: string) => (
            <SkillChip key={skill} label={skill} />
          ))}
        </Box>
      </TableCell>
      <TableCell>
        <StatusSelector initialStatus={candidate.status} />
      </TableCell>
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <Image src="/icons/star.svg" alt="star" width={16} height={16} />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 15,
              color: theme.table.rowText,
              fontFamily: "Inter, sans-serif",
            }}
          >
            {candidate.matchLevel}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="right">
        <ActionsMenuCell
          onEdit={() => onEdit(candidate.id)}
          onOpen={() => onOpen(candidate.id)}
          onDuplicate={() => onDuplicate(candidate.id)}
          onViewStats={() => onViewStats(candidate.id)}
          onDelete={() => onDelete(candidate.id)}
        />
      </TableCell>
    </TableRow>
  )
} 