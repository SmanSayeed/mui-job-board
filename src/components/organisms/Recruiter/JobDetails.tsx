"use client"
import React, { useState } from "react"
import { Paper } from "@mui/material"
import JobActionsBar from "@/components/molecules/JobActionsBar"
import JobMetaDetails from "@/components/molecules/JobMetaDetails"
import JobFullDescription from "@/components/molecules/JobFullDescription"
import CandidateNavigation from "@/components/molecules/CandidateNavigation"
import CandidateTable from "@/components/organisms/Recruiter/CandidateTable"

interface JobDetailsProps {
  jobTitle: string
  applicants: number
  location: string
  date: string
  salary: string
  description: string
}

export default function JobDetails({
  jobTitle,
  applicants,
  location,
  date,
  salary,
  description,
}: JobDetailsProps) {
  const [activeTab, setActiveTab] = useState("Matches")

  const tabData = [
    { label: "Matches", count: 300 },
    { label: "Applied", count: 150 },
    { label: "In Review", count: 75 },
    { label: "Interview", count: 5 },
    { label: "Offered" },
    { label: "Rejected" },
  ]

  return (
    <Paper
      sx={{
        width: "100%",
        borderRadius: 3,
        p: 1,
        mb: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-between",
        boxShadow: "0px 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <JobActionsBar title={jobTitle} />
      <JobMetaDetails
        applicants={applicants}
        location={location}
        date={date}
        salary={salary}
      />
      <JobFullDescription description={description} />
      <CandidateNavigation
        tabs={tabData}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />
      <CandidateTable />
    </Paper>
  )
} 