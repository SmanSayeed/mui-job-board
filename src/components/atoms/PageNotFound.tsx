"use client"
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  Paper,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

interface PageNotFoundProps {
  title?: string;
  message?: string;
  showSearch?: boolean;
  showNavigation?: boolean;
}

const PageNotFound: React.FC<PageNotFoundProps> = ({
  title = "Page Not Found",
  message = "The page you're looking for doesn't exist or has been moved.",
  showSearch = true,
  showNavigation = true,
}) => {
  const theme = useTheme();
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  const handleGoBack = () => {
    router.back();
  };

  const handleSearch = () => {
    router.push('/jobs');
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
        }}
      >
        {/* 404 Illustration */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 4,
            background: `linear-gradient(135deg, ${theme.palette.primary.light}15, ${theme.palette.secondary.light}15)`,
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Box sx={{ position: 'relative', mb: 2 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '4rem', sm: '6rem', md: '8rem' },
                fontWeight: 700,
                color: theme.palette.primary.main,
                lineHeight: 1,
                mb: 1,
              }}
            >
              404
            </Typography>
            <SentimentDissatisfiedIcon
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: { xs: '2rem', sm: '3rem' },
                color: theme.palette.secondary.main,
                opacity: 0.7,
              }}
            />
          </Box>
        </Paper>

        {/* Content */}
        <Card
          sx={{
            maxWidth: 600,
            width: '100%',
            borderRadius: 3,
            boxShadow: theme.shadows[8],
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                color: theme.palette.text.secondary,
                fontSize: '1.1rem',
                lineHeight: 1.6,
              }}
            >
              {message}
            </Typography>

            {/* Search Suggestions */}
            {showSearch && (
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    color: theme.palette.text.primary,
                  }}
                >
                  Try these instead:
                </Typography>
                <Typography variant="h5" sx={{ mb: 4 }}>
                  Here are some helpful links:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                  {['Jobs', 'Extra Jobs', 'Career Help', 'Profile'].map((item) => (
                    <Button
                      key={item}
                      variant="outlined"
                      size="small"
                      onClick={() => router.push(`/${item.toLowerCase().replace(' ', '-')}`)}
                      sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}

            {/* Navigation Buttons */}
            {showNavigation && (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<HomeIcon />}
                  onClick={handleGoHome}
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: 'none',
                    minWidth: 140,
                  }}
                >
                  Go Home
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<SearchIcon />}
                  onClick={handleSearch}
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: 'none',
                    minWidth: 140,
                  }}
                >
                  Search Jobs
                </Button>

                <Button
                  variant="text"
                  startIcon={<ArrowBackIcon />}
                  onClick={handleGoBack}
                  sx={{
                    borderRadius: 2,
                    px: 3,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: 'none',
                    minWidth: 140,
                  }}
                >
                  Go Back
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default PageNotFound; 