"use client";
import React from 'react'
import { Box, Paper, Typography, Stack, Button, Select, MenuItem, InputAdornment, Menu, Divider } from '@mui/material';
import BackButton from '@/components/atoms/BackButton';
import SearchInput from '@/components/atoms/SearchInput';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckboxTable from '@/components/molecules/CheckboxTable';
import mockJobListingsData from '@/lib/jobListingRecruiterData';
import ProfileImage from '@/components/atoms/ProfileImage';
import SkillChip from '@/components/atoms/SkillChip';
import StatusChip from '@/components/atoms/StatusChip';
import RoundedIconButton from '@/components/atoms/RoundedIconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

const candidateRows = mockJobListingsData.slice(0, 7).map((row, i) => ({
  ...row,
  id: `candidate-${i}`,
  candidate: {
    name: 'Jane Doe',
    subtitle: row.jobTitle,
    avatar: '/profile1.jpg',
  },
  location: 'Stockholm',
  skills: ['IT', 'Social', 'Recruiting', 'HR', ...(i % 2 === 0 ? ['Design'] : [])],
  status: row.status || 'active',
  matchLevel: i === 0 ? '90%' : i === 1 ? '90%' : i === 2 ? '90%' : i === 3 ? '90%' : i === 4 ? '80%' : i === 5 ? '78%' : '75%',
}));

function ActionsMenuCell({ row, theme }: { row: any; theme: any }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
      <RoundedIconButton
        icon={<MoreVertIcon sx={{ color: theme.jobListingTable.actionButtonIcon }} />}
        color="blue"
        onClick={handleMenu}
        sizeVariant="small"
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Open</MenuItem>
        <MenuItem onClick={handleClose}>Duplicate</MenuItem>
        <MenuItem onClick={handleClose}>View Stats</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} sx={{ color: '#EF4444' }}>Delete</MenuItem>
      </Menu>
    </Box>
  );
}

export default function JobListingDetailsPage() {
  const theme = useTheme();
  const columns = [
    { key: 'checkbox', label: '', type: 'checkbox' },
    {
      key: 'candidate',
      label: 'Candidate',
      sortable: true,
      render: (_: any, row: any) => (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <ProfileImage src={row.candidate.avatar} profileVariant="job_profile_image" sx={{ mr: 1 }} />
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: 16, color: theme.table.rowText, fontFamily: 'Inter, sans-serif' }}>{row.candidate.name}</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 13, color: theme.palette.text.secondary, fontFamily: 'Inter, sans-serif' }}>{row.candidate.subtitle}</Typography>
          </Box>
        </Box>
      ),
    },
    {
      key: 'location',
      label: 'Location',
      render: (value: any) => (
        <Typography sx={{ fontWeight: 600, fontSize: 15, color: theme.table.rowText, fontFamily: 'Inter, sans-serif' }}>{value}</Typography>
      ),
    },
    {
      key: 'skills',
      label: 'Matching Skills',
      render: (skills: string[]) => (
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>{skills.map(skill => <SkillChip key={skill} label={skill} />)}</Box>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (_: any, row: any) => (
        <StatusChip label={row.status === 'active' ? 'Hired' : row.status === 'closed' ? 'Rejected' : row.status} variant={row.jobType.toLowerCase().replace(' ', '-') as any} />
      ),
    },
    {
      key: 'matchLevel',
      label: 'Match Level',
      render: (value: any) => (
        <Typography sx={{ fontWeight: 500, fontSize: 15, color: theme.table.rowText, fontFamily: 'Inter, sans-serif' }}>{value}</Typography>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      align: 'right' as const,
      render: (_: any, row: any) => <ActionsMenuCell row={row} theme={theme} />,
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 3, width: '100%', maxWidth: 1200, mx: 'auto' }}>
      {/* Back Button */}
      <Box sx={{ mb: 2 }}>
        <BackButton />
      </Box>
      {/* Title */}
      <Typography
        sx={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: '32px',
          lineHeight: 1.1,
          letterSpacing: 0,
          verticalAlign: 'middle',
          mb: 2,
        }}
      >
        Job Listing
      </Typography>
      {/* Search + Sort Row */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
        <SearchInput
          placeholder="Search for..."
          colorVariant="gray"
          height={52}
          width={260}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ color: '#6B7280', fontWeight: 500, fontSize: 16, mr: 1 }}>Sort by:</Typography>
          <Select
            defaultValue="Matching Level"
            variant="outlined"
            size="small"
            sx={{
              color: '#D1D5DB',
              fontWeight: 500,
              fontSize: 16,
              borderRadius: 2,
              minWidth: 160,
              height: 40,
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#E5E7EB',
              },
              '& .MuiSvgIcon-root': {
                color: '#D1D5DB',
              },
            }}
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value="Matching Level">Matching Level</MenuItem>
            <MenuItem value="Name">Name</MenuItem>
            <MenuItem value="Status">Status</MenuItem>
          </Select>
        </Box>
      </Box>
      {/* Paper Card with title and icon text buttons */}
      <Paper sx={{ width: '100%', borderRadius: 3, p: 3, mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0px 1px 3px rgba(0,0,0,0.04)' }}>
        <Typography sx={{ fontWeight: 600, fontSize: 20, fontFamily: 'Inter, sans-serif' }}>Product Manager</Typography>
        <Stack direction="row" spacing={2}>
          <Button startIcon={<VisibilityOutlinedIcon />} variant="text" sx={{ color: '#4B5563', fontWeight: 500, fontFamily: 'Inter, sans-serif', textTransform: 'none', fontSize: 16, p: 0, minWidth: 0, background: 'none', boxShadow: 'none' }}>View</Button>
          <Button startIcon={<ShareOutlinedIcon />} variant="text" sx={{ color: '#4B5563', fontWeight: 500, fontFamily: 'Inter, sans-serif', textTransform: 'none', fontSize: 16, p: 0, minWidth: 0, background: 'none', boxShadow: 'none' }}>Share</Button>
          <Button startIcon={<MailOutlineOutlinedIcon />} variant="text" sx={{ color: '#4B5563', fontWeight: 500, fontFamily: 'Inter, sans-serif', textTransform: 'none', fontSize: 16, p: 0, minWidth: 0, background: 'none', boxShadow: 'none' }}>Invite</Button>
          <Button startIcon={<EditOutlinedIcon />} variant="text" sx={{ color: '#4B5563', fontWeight: 500, fontFamily: 'Inter, sans-serif', textTransform: 'none', fontSize: 16, p: 0, minWidth: 0, background: 'none', boxShadow: 'none' }}>Edit</Button>
        </Stack>
      </Paper>
      {/* Content section placeholder */}
      <Box sx={{ mb: 3 }}>
        {/* Add job meta, description, etc. here as needed */}
      </Box>
      {/* Table section */}
      <CheckboxTable
        columns={columns}
        rows={candidateRows}
        checkboxSelection
        // Add other props as needed for sorting, actions, etc.
      />
    </Box>
  );
}
