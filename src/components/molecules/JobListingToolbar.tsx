import { Box } from '@mui/material';
import SearchInput from '../atoms/SearchInput';
import JobListingFilters from './JobListingFilters';

export default function JobListingToolbar({
  jobStatus, jobType, datePosted, applicants, searchQuery,
  onJobStatusChange, onJobTypeChange, onDatePostedChange, onApplicantsChange, onSearchChange
}: {
  jobStatus: string;
  jobType: string;
  datePosted: string;
  applicants: string;
  searchQuery: string;
  onJobStatusChange: (v: string) => void;
  onJobTypeChange: (v: string) => void;
  onDatePostedChange: (v: string) => void;
  onApplicantsChange: (v: string) => void;
  onSearchChange: (v: string) => void;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        justifyContent: { xs: 'flex-start', md: 'space-between' },
        alignItems: { xs: 'stretch', md: 'center' },
        gap: { xs: 2, md: 2.5 },
        mb: 2,
        width: '100%',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <JobListingFilters
          jobStatus={jobStatus}
          jobType={jobType}
          datePosted={datePosted}
          applicants={applicants}
          onJobStatusChange={onJobStatusChange}
          onJobTypeChange={onJobTypeChange}
          onDatePostedChange={onDatePostedChange}
          onApplicantsChange={onApplicantsChange}
        />
      </Box>
      <Box sx={{ width: '100%' }}>
        <SearchInput
          placeholder="Search candidates"
          value={searchQuery}
          onChange={e => onSearchChange(e.target.value)}
          size="small"
          sx={{ minWidth: { xs: '100%', md: 240 }, width: '100%' }}
          colorVariant="gray"
        />
      </Box>
    </Box>
  );
} 