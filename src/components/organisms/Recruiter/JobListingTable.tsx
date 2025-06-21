"use client"
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Pagination,
  Stack,
} from "@mui/material"
import type React from "react"
import { useState } from "react"
import { useTheme } from '@mui/material/styles';
import JobListingTitle from "@/components/atoms/JobListingTitle"
import JobListingToolbar from "@/components/molecules/JobListingToolbar"
import JobListingTableRow from "@/components/molecules/JobListingTableRow"
import mockJobListingsData from "@/lib/jobListingRecruiterData"
import SearchInput from "@/components/atoms/SearchInput"

interface JobListing {
  id: string
  jobTitle: string
  jobType: string
  datePosted: string
  applicants: number
  views: number
  status?: string
}


interface JobListingsTableProps {
  data?: JobListing[]
  title?: string
  showFilters?: boolean
  itemsPerPage?: number
}

export default function JobListingsTable({
  data = mockJobListingsData,
  title = "Job Listings",
  showFilters = true,
  itemsPerPage = 3,
}: JobListingsTableProps) {
  const theme = useTheme();
  // Filter states
  const [jobStatus, setJobStatus] = useState("all")
  const [jobType, setJobType] = useState("all")
  const [datePosted, setDatePosted] = useState("all")
  const [applicants, setApplicants] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)

  // Filter data based on current filters
  const filteredData = data.filter((job) => {
    const matchesStatus = jobStatus === "all" || job.status === jobStatus
    const matchesType = jobType === "all" || job.jobType.toLowerCase().replace(" ", "-") === jobType
    const matchesSearch = searchQuery === "" || job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())

    // Add more filter logic as needed
    return matchesStatus && matchesType && matchesSearch
  })

  // Paginate data
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  // Always show at least 3 rows
  const minRows = 3;
  const emptyRows = Math.max(0, minRows - paginatedData.length);

  // Action handlers
  const handleEdit = (jobId: string) => {
    console.log("Edit job:", jobId)
    // Implement edit logic
  }

  const handleDuplicate = (jobId: string) => {
    console.log("Duplicate job:", jobId)
    // Implement duplicate logic
  }

  const handleViewStats = (jobId: string) => {
    console.log("View stats for job:", jobId)
    // Implement view stats logic
  }

  const handleDelete = (jobId: string) => {
    console.log("Delete job:", jobId)
    // Implement delete logic
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page)
  }

  // Define columns for the table header
  const columns = [
    { id: 'jobTitle', label: 'Job Title' },
    { id: 'jobType', label: 'Job Type' },
    { id: 'datePosted', label: 'Date Posted' },
    { id: 'applicants', label: 'Applicants' },
    { id: 'views', label: 'Views' },
    { id: 'actions', label: 'Actions', align: 'right' },
  ];

  return (
    <Paper sx={{
      width: "100%",
      height: 'auto',
      borderRadius: '12px',
      background: theme.jobListingTable.tableHeadBg,
      p: '0px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
      overflowX: 'hidden',
      border: `1px solid ${theme.jobListingTable.border}`,
    }}>
     
      <Box sx={{ px: 3,my:2 }}>
        <JobListingTitle>{title}</JobListingTitle>
      </Box>
      <Box sx={{ px: 3 }}>
        <JobListingToolbar
          jobStatus={jobStatus}
          jobType={jobType}
          datePosted={datePosted}
          applicants={applicants}
          searchQuery={searchQuery}
          onJobStatusChange={setJobStatus}
          onJobTypeChange={setJobType}
          onDatePostedChange={setDatePosted}
          onApplicantsChange={setApplicants}
          onSearchChange={setSearchQuery}
        />
      </Box>
      <Box sx={{ mb: 2 }} />
      <Box
        sx={{
          width: '100%',
          overflowX: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'visible' },
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: { xs: 'thin', lg: 'auto' },
          '&::-webkit-scrollbar': {
            height: { xs: 8, lg: 0 },
          },
          '&::-webkit-scrollbar-thumb': {
            background: { xs: '#E5E7EB', lg: 'transparent' },
            borderRadius: 4,
          },
        }}
      >
        <TableContainer
          sx={{
            flex: 1,
            background: 'transparent',
            boxShadow: 'none',
            borderRadius: 0,
            width: '100%',
            minWidth: { xs: 600, sm: 800, md: 900, lg: '100%' },
            overflowX: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'unset' },
            display: { xs: 'block', sm: 'block', md: 'block', lg: 'table' },
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: { xs: 'thin', lg: 'auto' },
            '&::-webkit-scrollbar': {
              height: { xs: 8, lg: 0 },
            },
            '&::-webkit-scrollbar-thumb': {
              background: { xs: '#E5E7EB', lg: 'transparent' },
              borderRadius: 4,
            },
          }}
        >
          <Table sx={{ width: '100%', tableLayout: 'fixed', minWidth: 800 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: theme.table.headerBg }}>
                <TableCell padding="checkbox" />
                {columns.map((col) => (
                  <TableCell
                    key={col.id}
                    align={col.align as 'right' | 'center' | 'left' | 'inherit' | 'justify' | undefined}
                    sx={{
                      ...theme.typography.subtitle2,
                      color: theme.table.headerText,
                      backgroundColor: 'inherit',
                    }}
                  >
                    {col.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((job) => (
                  <JobListingTableRow
                    key={job.id}
                    job={job}
                    onEdit={handleEdit}
                    onDuplicate={handleDuplicate}
                    onViewStats={handleViewStats}
                    onDelete={handleDelete}
                  />
                ))
              ) : null}
              {/* Add empty rows if needed */}
              {emptyRows > 0 && Array.from({ length: emptyRows }).map((_, idx) => (
                <TableRow key={`empty-row-${idx}`} sx={{ borderBottom: `1px solid ${theme.jobListingTable.border}`, height: 53 }}>
                  <TableCell padding="checkbox" />
                  <TableCell />
                  <TableCell />
                  <TableCell />
                  <TableCell />
                  <TableCell />
                  <TableCell align="right" />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', pr: 3, mt: 'auto' }}>
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </Box>
      )}
    </Paper>
  )
}
