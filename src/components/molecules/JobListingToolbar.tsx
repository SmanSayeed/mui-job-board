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
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2.5, mb: 2 }}>
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
      <SearchInput
        placeholder="Search candidates"
        value={searchQuery}
        onChange={e => onSearchChange(e.target.value)}
        size="small"
        sx={{ minWidth: 240 }}
        colorVariant="gray"
      />
    </Box>
  );
} 