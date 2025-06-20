"use client"
import React from 'react'
import { Box, Card, CardContent, Typography, TextField, Button, Link } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter();
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F3F4F6' }}>
      <Card sx={{ width: 360, p: 2, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, textAlign: 'center', color: '#1A56DB' }}>
            Signup
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Name" type="text" fullWidth required />
            <TextField label="Email" type="email" fullWidth required />
            <TextField label="Password" type="password" fullWidth required />
            <Button variant="contained" color="primary" fullWidth sx={{ mt: 1, borderRadius: 2, fontWeight: 600 }}>
              Signup
            </Button>
          </Box>
          <Typography sx={{ mt: 2, textAlign: 'center', fontSize: 14 }}>
            Already have an account?{' '}
            <Link href="/login" underline="hover" color="primary">
              Login
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
