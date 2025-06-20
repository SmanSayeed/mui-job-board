"use client"
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
} from "@mui/material"
import type React from "react"

import { useState } from "react"
import TableFilters from "@/components/molecules/TableFilters"
import JobTableRow from "@/components/molecules/JobTableRow"

interface JobListing {
  id: string
  jobTitle: string
  jobType: string
  datePosted: string
  applicants: number
  views: number
  status?: string
}

const mockJobListingsData: JobListing[] = [
  {
    id: "1",
    jobTitle: "Senior UI/UX Designer",
    jobType: "Freelance",
    datePosted: "2025-02-10",
    applicants: 0,
    views: 0,
    status: "active",
  },
  {
    id: "2",
    jobTitle: "Senior UI/UX Designer",
    jobType: "Extra Job",
    datePosted: "2025-01-15",
    applicants: 5,
    views: 120,
    status: "active",
  },
  {
    id: "3",
    jobTitle: "Senior UI/UX Designer",
    jobType: "Part time",
    datePosted: "2024-12-20",
    applicants: 10,
    views: 80,
    status: "closed",
  },
  {
    id: "4",
    jobTitle: "Frontend Developer",
    jobType: "Full time",
    datePosted: "2025-02-05",
    applicants: 15,
    views: 200,
    status: "active",
  },
  {
    id: "5",
    jobTitle: "Product Manager",
    jobType: "Full time",
    datePosted: "2025-01-28",
    applicants: 8,
    views: 95,
    status: "active",
  },
]

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
  itemsPerPage = 10,
}: JobListingsTableProps) {
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

  const handleArchive = (jobId: string) => {
    console.log("Archive job:", jobId)
    // Implement archive logic
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page)
  }

  return (
    <Box>
      {/* Title */}
      <Typography
        sx={{
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#111928",
          mb: 3,
        }}
      >
        {title}
      </Typography>

      {/* Filters */}
      {showFilters && (
        <TableFilters
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
      )}

      {/* Results Summary */}
      <Box sx={{ mb: 2 }}>
        <Typography sx={{ color: "#6B7280", fontSize: "0.875rem" }}>
          Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length}{" "}
          jobs
        </Typography>
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "8px",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
          border: "1px solid #E5E7EB",
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#F9FAFB" }}>
              <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "0.875rem" }}>Job Title</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "0.875rem" }}>Job Type</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "0.875rem" }}>Date Posted</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "0.875rem" }}>Applicants</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "0.875rem" }}>Views</TableCell>
              <TableCell sx={{ fontWeight: 600, color: "#374151", fontSize: "0.875rem" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((job) => (
                <JobTableRow
                  key={job.id}
                  job={job}
                  onEdit={handleEdit}
                  onDuplicate={handleDuplicate}
                  onViewStats={handleViewStats}
                  onDelete={handleDelete}
                  onArchive={handleArchive}
                />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} sx={{ textAlign: "center", py: 4 }}>
                  <Typography sx={{ color: "#6B7280", fontSize: "0.875rem" }}>
                    No jobs found matching your criteria
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {totalPages > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="medium"
            showFirstButton
            showLastButton
          />
        </Box>
      )}
    </Box>
  )
}
