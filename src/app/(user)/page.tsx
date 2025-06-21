"use client"
import { useState, useEffect } from "react"
import JobListingTemplate from "@/components/templates/JobListingTemplates"
import Loader from "@/components/atoms/Loader"
import ErrorBoundary from "@/components/atoms/ErrorBoundary"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader variant="circular" size="large" text="Loading jobs..." fullScreen />
  }

  return (
    <ErrorBoundary>
      <JobListingTemplate />
    </ErrorBoundary>
  )
}
