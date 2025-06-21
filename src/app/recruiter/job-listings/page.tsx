"use client"
import { useState, useEffect } from "react"
import JobListingsTable from "@/components/organisms/Recruiter/JobListingTable"
import Loader from "@/components/atoms/Loader"
import ErrorBoundary from "@/components/atoms/ErrorBoundary"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader variant="linear" size="large" text="Loading job listings..." fullScreen />
  }

  return (
    <ErrorBoundary>
      <JobListingsTable />
    </ErrorBoundary>
  )
}
