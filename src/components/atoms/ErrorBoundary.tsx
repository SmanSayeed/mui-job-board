"use client"
import React, { Component, ErrorInfo, ReactNode } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import HomeIcon from '@mui/icons-material/Home';
import RefreshIcon from '@mui/icons-material/Refresh';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo?: ErrorInfo;
}

class ErrorBoundaryClass extends Component<Props & { router: any; theme: any }, State> {
  constructor(props: Props & { router: any; theme: any }) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
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
      error: null,
      errorInfo: undefined,
    });
  };

  handleGoHome = () => {
    this.props.router.push('/');
  };

  render() {
    const { hasError, error } = this.state;
    const { children, fallback, theme } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <Container maxWidth="sm" sx={{ py: 8 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              p: 4,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <ErrorOutlineIcon
              sx={{
                fontSize: '4rem',
                color: 'error.main',
                mb: 2,
              }}
            />
            <Typography variant="h5" component="h1" gutterBottom>
              Something Went Wrong
            </Typography>
            <Typography color="textSecondary" sx={{ mb: 3 }}>
              {error?.message || 'An unexpected error has occurred.'}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button
                variant="contained"
                onClick={this.handleRetry}
                startIcon={<RefreshIcon />}
              >
                Try Again
              </Button>
              <Button
                variant="outlined"
                onClick={this.handleGoHome}
                startIcon={<HomeIcon />}
              >
                Go Home
              </Button>
            </Box>
          </Box>
        </Container>
      );
    }

    return children;
  }
}

const ErrorBoundary: React.FC<Props> = ({ children, fallback }) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <ErrorBoundaryClass router={router} theme={theme} fallback={fallback}>
      {children}
    </ErrorBoundaryClass>
  );
};

export default ErrorBoundary; 