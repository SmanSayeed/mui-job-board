import { Box, Select, MenuItem } from '@mui/material';

export default function JobListingFilters({
  jobStatus, jobType, datePosted, applicants,
  onJobStatusChange, onJobTypeChange, onDatePostedChange, onApplicantsChange
}: {
  jobStatus: string;
  jobType: string;
  datePosted: string;
  applicants: string;
  onJobStatusChange: (v: string) => void;
  onJobTypeChange: (v: string) => void;
  onDatePostedChange: (v: string) => void;
  onApplicantsChange: (v: string) => void;
}) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'column', md: 'row' },
      gap: 1.5,
      alignItems: { xs: 'stretch', md: 'flex-start' },
      width: '100%',
    }}>
      <Select size="small" value={jobStatus} onChange={e => onJobStatusChange(e.target.value)} sx={{ minWidth: { xs: '100%', md: 120 }, width: { xs: '100%', md: 120 } }}>
        <MenuItem value="all">Job Status</MenuItem>
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="closed">Closed</MenuItem>
      </Select>
      <Select size="small" value={jobType} onChange={e => onJobTypeChange(e.target.value)} sx={{ minWidth: { xs: '100%', md: 120 }, width: { xs: '100%', md: 120 } }}>
        <MenuItem value="all">Job Type</MenuItem>
        <MenuItem value="freelance">Freelance</MenuItem>
        <MenuItem value="extra-job">Extra Job</MenuItem>
        <MenuItem value="part-time">Part time</MenuItem>
        <MenuItem value="full-time">Full time</MenuItem>
      </Select>
      <Select size="small" value={datePosted} onChange={e => onDatePostedChange(e.target.value)} sx={{ minWidth: { xs: '100%', md: 120 }, width: { xs: '100%', md: 120 } }}>
        <MenuItem value="all">Date Posted</MenuItem>
        <MenuItem value="today">Today</MenuItem>
        <MenuItem value="week">This Week</MenuItem>
        <MenuItem value="month">This Month</MenuItem>
      </Select>
      <Select size="small" value={applicants} onChange={e => onApplicantsChange(e.target.value)} sx={{ minWidth: { xs: '100%', md: 120 }, width: { xs: '100%', md: 120 } }}>
        <MenuItem value="all">Applicants</MenuItem>
        <MenuItem value="0-10">0-10</MenuItem>
        <MenuItem value="11-50">11-50</MenuItem>
        <MenuItem value=">50">50+</MenuItem>
      </Select>
    </Box>
  );
} 