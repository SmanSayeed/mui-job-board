"use client"
import React, { Component, ErrorInfo, ReactNode } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Container,
  Alert,
  Paper,
  Collapse,
  IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import RefreshIcon from '@mui/icons-material/Refresh';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  showDetails: boolean;
}

class ErrorBoundaryClass extends Component<Props & { router: any; theme: any }, State> {
  constructor(props: Props & { router: any; theme: any }) {
    super(props);
    this.state = {
      hasError: false,
      showDetails: false,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
    });
  };

  handleGoHome = () => {
    this.props.router.push('/');
  };

  toggleDetails = () => {
    this.setState(prev => ({ showDetails: !prev.showDetails }));
  };

  render() {
    const { hasError, error, errorInfo, showDetails } = this.state;
    const { children, fallback, theme } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

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
            {/* Error Illustration */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                mb: 4,
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.error.light}15, ${theme.palette.warning.light}15)`,
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box sx={{ position: 'relative', mb: 2 }}>
                <ErrorOutlineIcon
                  sx={{
                    fontSize: { xs: '4rem', sm: '6rem' },
                    color: theme.palette.error.main,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.error.main,
                    lineHeight: 1,
                  }}
                >
                  Oops!
                </Typography>
              </Box>
            </Paper>

            {/* Error Content */}
            <Card
              sx={{
                maxWidth: 700,
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
                  Something went wrong
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
                  We encountered an unexpected error. Don't worry, our team has been notified and is working to fix it.
                </Typography>

                {/* Error Alert */}
                <Alert
                  severity="error"
                  icon={<ReportProblemIcon />}
                  sx={{ mb: 3, textAlign: 'left' }}
                  action={
                    <IconButton
                      color="inherit"
                      size="small"
                      onClick={this.toggleDetails}
                    >
                      {showDetails ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  }
                >
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {error?.message || 'An unexpected error occurred'}
                  </Typography>
                </Alert>

                {/* Error Details */}
                <Collapse in={showDetails}>
                  <Paper
                    sx={{
                      p: 2,
                      mb: 3,
                      backgroundColor: theme.palette.grey[50],
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 2,
                    }}
                  >
                    <Typography
                      variant="body2"
                      component="pre"
                      sx={{
                        fontFamily: 'monospace',
                        fontSize: '0.8rem',
                        color: theme.palette.text.secondary,
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                        maxHeight: 200,
                        overflow: 'auto',
                      }}
                    >
                      {error?.stack}
                    </Typography>
                  </Paper>
                </Collapse>

                {/* Action Buttons */}
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
                    startIcon={<RefreshIcon />}
                    onClick={this.handleRetry}
                    sx={{
                      borderRadius: 2,
                      px: 3,
                      py: 1.5,
                      fontWeight: 600,
                      textTransform: 'none',
                      minWidth: 140,
                    }}
                  >
                    Try Again
                  </Button>

                  <Button
                    variant="outlined"
                    startIcon={<HomeIcon />}
                    onClick={this.handleGoHome}
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
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Container>
      );
    }

    return children;
  }
}

// Wrapper component to provide theme and router
const ErrorBoundary: React.FC<Props> = ({ children, fallback }) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ErrorBoundaryClass theme={theme} router={router} fallback={fallback}>
      {children}
    </ErrorBoundaryClass>
  );
};

export default ErrorBoundary; 