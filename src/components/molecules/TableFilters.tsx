"use client"
import { Box } from "@mui/material"
import FilterSelect from "../atoms/FilterSelect"
import SearchInput from "../atoms/SearchInput"
import SearchInputTable from "../atoms/SearchInputTable"

interface TableFiltersProps {
  jobStatus: string
  jobType: string
  datePosted: string
  applicants: string
  searchQuery: string
  onJobStatusChange: (value: string) => void
  onJobTypeChange: (value: string) => void
  onDatePostedChange: (value: string) => void
  onApplicantsChange: (value: string) => void
  onSearchChange: (value: string) => void
}

export default function TableFilters({
  jobStatus,
  jobType,
  datePosted,
  applicants,
  searchQuery,
  onJobStatusChange,
  onJobTypeChange,
  onDatePostedChange,
  onApplicantsChange,
  onSearchChange,
}: TableFiltersProps) {
  const jobStatusOptions = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active" },
    { value: "closed", label: "Closed" },
    { value: "draft", label: "Draft" },
  ]

  const jobTypeOptions = [
    { value: "all", label: "All Types" },
    { value: "freelance", label: "Freelance" },
    { value: "extra-job", label: "Extra Job" },
    { value: "part-time", label: "Part Time" },
    { value: "full-time", label: "Full Time" },
  ]

  const datePostedOptions = [
    { value: "all", label: "All Dates" },
    { value: "today", label: "Today" },
    { value: "week", label: "This Week" },
    { value: "month", label: "This Month" },
    { value: "quarter", label: "This Quarter" },
  ]

  const applicantsOptions = [
    { value: "all", label: "All" },
    { value: "0", label: "0 Applicants" },
    { value: "1-5", label: "1-5 Applicants" },
    { value: "6-10", label: "6-10 Applicants" },
    { value: "10+", label: "10+ Applicants" },
  ]

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        mb: 3,
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <FilterSelect
        label="Job Status"
        value={jobStatus}
        options={jobStatusOptions}
        onChange={onJobStatusChange}
        minWidth={140}
      />

      <FilterSelect
        label="Job Type"
        value={jobType}
        options={jobTypeOptions}
        onChange={onJobTypeChange}
        minWidth={140}
      />

      <FilterSelect
        label="Date Posted"
        value={datePosted}
        options={datePostedOptions}
        onChange={onDatePostedChange}
        minWidth={140}
      />

      <FilterSelect
        label="Applicants"
        value={applicants}
        options={applicantsOptions}
        onChange={onApplicantsChange}
        minWidth={140}
      />

      <SearchInputTable placeholder="Search jobs..." value={searchQuery} onChange={onSearchChange} minWidth={250} />
    </Box>
  )
}
