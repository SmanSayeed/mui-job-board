"use client"
import React, { useState } from 'react'
import { Box, Card, CardContent, Typography, TextField, Button, Link, Alert } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import BackButton from '@/components/atoms/BackButton'
import Loader from '@/components/atoms/Loader'
import ErrorBoundary from '@/components/atoms/ErrorBoundary'

export default function page() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const user = login(email, password);
      if (user) {
        if (user.role === 'user') {
          router.push('/job-details/'+1);
        } else if (user.role === 'recruiter') {
          router.push('/recruiter/job-listings');
        }
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F3F4F6', position: 'relative' }}>
        {/* BackButton at top left */}
        <Box sx={{ position: 'absolute', top: 24, left: 24 }}>
          <BackButton />
        </Box>
        <Card sx={{ width: 360, p: 2, borderRadius: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, textAlign: 'center', color: '#1A56DB' }}>
              Login
            </Typography>
            <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={handleLogin}>
              <TextField label="Email" type="email" fullWidth required value={email} onChange={e => setEmail(e.target.value)} disabled={isLoading} />
              <TextField label="Password" type="password" fullWidth required value={password} onChange={e => setPassword(e.target.value)} disabled={isLoading} />
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth 
                disabled={isLoading}
                sx={{ mt: 1, borderRadius: 2, fontWeight: 600, minHeight: 48 }}
              >
                {isLoading ? <Loader variant="circular" size="small" color="inherit" /> : 'Login'}
              </Button>
              {error && <Alert severity="error">{error}</Alert>}
            </Box>
            <Typography sx={{ mt: 2, textAlign: 'center', fontSize: 14 }}>
              Don&apos;t have an account?{' '}
              <Link href="/signup" underline="hover" color="primary">
                Signup
              </Link>
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>Demo Credentials</Typography>
              <Typography sx={{ fontSize: 13, mb: 1 }}>
                <b>Role User:</b><br />
                Name: Jhon Doe<br />
                Email: user@gmail.com<br />
                Password: password<br />
                Role: user
              </Typography>
              <Typography sx={{ fontSize: 13 }}>
                <b>Role Recruiter:</b><br />
                Name: Adam Smith<br />
                Email: recruiter@gmail.com<br />
                Password: password<br />
                Role: recruiter
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </ErrorBoundary>
  )
}
