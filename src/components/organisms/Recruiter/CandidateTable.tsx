"use client"
import React, { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  useTheme,
  TableSortLabel,
} from "@mui/material"
import mockJobListingsData from "@/lib/jobListingRecruiterData"
import CandidateTableRow from "@/components/molecules/CandidateTableRow"
import BpCheckbox from "@/components/atoms/BpCheckbox"

export default function CandidateTable() {
  const theme = useTheme()
  const [tableData, setTableData] = useState(
    mockJobListingsData.slice(0, 7).map((row, i) => ({
      ...row,
      id: `candidate-${i}`,
      candidate: {
        name: "Jane Doe",
        subtitle: row.jobTitle,
        avatar: "/profile1.jpg",
      },
      location: "Stockholm",
      skills: ["IT", "Social", "Recruiting", "HR", ...(i % 2 === 0 ? ["Design"] : [])],
      status: i === 0 ? "Hired" : i === 1 ? "In review" : "Applied",
      matchLevel:
        i === 0
          ? "90%"
          : i === 1
          ? "90%"
          : i === 2
          ? "90%"
          : i === 3
          ? "90%"
          : i === 4
          ? "80%"
          : i === 5
          ? "78%"
          : "75%",
    }))
  )
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())

  const handleSelectAll = (checked: boolean) => {
    setSelectAll(checked)
    if (checked) {
      const allIds = new Set(tableData.map((candidate) => candidate.id))
      setSelectedRows(allIds)
    } else {
      setSelectedRows(new Set())
    }
  }

  const handleRowSelect = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows)
    if (checked) {
      newSelected.add(id)
    } else {
      newSelected.delete(id)
    }
    setSelectedRows(newSelected)
    const allSelected = tableData.every((candidate) => newSelected.has(candidate.id))
    setSelectAll(allSelected)
  }

  const handleEdit = (id: string) => console.log("Edit", id)
  const handleOpen = (id: string) => console.log("Open", id)
  const handleDuplicate = (id: string) => console.log("Duplicate", id)
  const handleViewStats = (id: string) => console.log("View Stats", id)
  const handleDelete = (id: string) => {
    console.log("Delete", id)
    setTableData(tableData.filter((candidate) => candidate.id !== id))
  }

  const columns = [
    { key: "candidate", label: "Candidate", sortable: true },
    { key: "location", label: "Location" },
    { key: "skills", label: "Matching Skills" },
    { key: "status", label: "Status" },
    { key: "matchLevel", label: "Match Level" },
    { key: "actions", label: "Actions", align: "right" as const },
  ]

  return (
    <Box sx={{ 
      overflowX: "auto",
      "&::-webkit-scrollbar": { 
        height: "8px",
        backgroundColor: theme.palette.grey[100]
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.grey[300],
        borderRadius: "4px"
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: theme.palette.grey[100]
      }
    }}>
      <TableContainer
        sx={{
          minWidth: { xs: 800, md: 650 },
          "& .MuiTableRow-root:hover .MuiButtonBase-root": {
            visibility: "visible",
          },
        }}
      >
        <Table sx={{ minWidth: { xs: 800, md: 650 } }} aria-label="candidate table">
          <TableHead sx={{ backgroundColor: theme.jobListingTable.tableHeadBg }}>
            <TableRow>
              <TableCell padding="checkbox" sx={{ minWidth: { xs: 50, md: 40 } }}>
                <BpCheckbox
                  checked={selectAll}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                />
              </TableCell>
              {columns.map((column) => (
                <TableCell 
                  key={column.key} 
                  align={column.align} 
                  sx={{ 
                    color: theme.jobListingTable.tableHeadText, 
                    fontWeight: 500,
                    fontSize: { xs: 12, md: 14 },
                    padding: { xs: "8px 4px", md: "16px" },
                    minWidth: column.key === "candidate" ? { xs: 150, md: 200 } : 
                             column.key === "skills" ? { xs: 120, md: 150 } :
                             column.key === "actions" ? { xs: 80, md: 100 } : 
                             { xs: 80, md: 100 }
                  }}
                >
                  {column.sortable ? (
                    <TableSortLabel active direction="desc">
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((candidate) => (
              <CandidateTableRow
                key={candidate.id}
                candidate={candidate}
                checked={selectedRows.has(candidate.id)}
                onCheckChange={(checked) => handleRowSelect(candidate.id, checked)}
                onEdit={handleEdit}
                onOpen={handleOpen}
                onDuplicate={handleDuplicate}
                onViewStats={handleViewStats}
                onDelete={handleDelete}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
} 