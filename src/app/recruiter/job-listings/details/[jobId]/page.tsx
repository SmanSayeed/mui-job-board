"use client";
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import BackButton from '@/components/atoms/BackButton';
import CandidateFilterControls from '@/components/molecules/CandidateFilterControls';
import JobDetails from '@/components/organisms/Recruiter/JobDetails';
import Loader from '@/components/atoms/Loader';

export default function JobListingDetailsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Matching Level");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for job listing details
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box sx={{ 
        minHeight: "100vh", 
        backgroundColor: "#F3F4F6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Loader />
      </Box>
    );
  }

  return (
    <Box sx={{ px: { xs: 2, md: 4 }, py: 3, width: '100%', maxWidth: 1200, mx: 'auto' }}>
      <Box sx={{ mb: 2 }}>
        <BackButton />
      </Box>
      <Typography
        sx={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: '32px',
          lineHeight: 1.1,
          letterSpacing: 0,
          verticalAlign: 'middle',
          mb: 2,
        }}
      >
       Job Listing
      </Typography>

      <CandidateFilterControls
        searchQuery={searchQuery}
        sortBy={sortBy}
        onSearchChange={setSearchQuery}
        onSortChange={setSortBy}
      />

      <JobDetails
        jobTitle="Product Manager"
        applicants={2}
        location="Stockholm, Sweden"
        date="01 Sep 2025"
        salary="800 SEK"
        description="defining the vision for a product, setting goals, prioritizing features, and coordinating between design, engineering, and business teams to deliver valuable products that meet user and market needs."
      />
    </Box>
  );
}
