"use client"
import React from 'react';
import { Box, CircularProgress, LinearProgress, Skeleton, Typography, Fade } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface LoaderProps {
  variant?: 'circular' | 'linear' | 'skeleton';
  size?: 'small' | 'medium' | 'large';
  text?: string;
  fullScreen?: boolean;
  color?: 'primary' | 'secondary' | 'inherit';
}

const Loader: React.FC<LoaderProps> = ({
  variant = 'circular',
  size = 'medium',
  text = 'Loading...',
  fullScreen = false,
  color = 'primary'
}) => {
  const theme = useTheme();

  const sizeMap = {
    small: { circular: 24, skeleton: 20 },
    medium: { circular: 40, skeleton: 32 },
    large: { circular: 60, skeleton: 48 }
  };

  const LoaderContent = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        p: 3,
      }}
    >
      {variant === 'circular' && (
        <CircularProgress
          size={sizeMap[size].circular}
          color={color}
          thickness={4}
          sx={{
            '& .MuiCircularProgress-circle': {
              strokeLinecap: 'round',
            },
          }}
        />
      )}

      {variant === 'linear' && (
        <Box sx={{ width: '100%', maxWidth: 300 }}>
          <LinearProgress
            color={color}
            sx={{
              height: 6,
              borderRadius: 3,
              backgroundColor: theme.palette.grey[200],
              '& .MuiLinearProgress-bar': {
                borderRadius: 3,
              },
            }}
          />
        </Box>
      )}

      {variant === 'skeleton' && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'center' }}>
          <Skeleton
            variant="circular"
            width={sizeMap[size].skeleton}
            height={sizeMap[size].skeleton}
            sx={{ bgcolor: theme.palette.primary.main }}
          />
          <Skeleton
            variant="text"
            width={100}
            height={20}
            sx={{ bgcolor: theme.palette.grey[300] }}
          />
        </Box>
      )}

      {text && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontWeight: 500,
            textAlign: 'center',
            animation: 'pulse 2s infinite',
            '@keyframes pulse': {
              '0%': { opacity: 1 },
              '50%': { opacity: 0.6 },
              '100%': { opacity: 1 },
            },
          }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );

  if (fullScreen) {
    return (
      <Fade in={true} timeout={300}>
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(4px)',
            zIndex: theme.zIndex.modal + 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LoaderContent />
        </Box>
      </Fade>
    );
  }

  return <LoaderContent />;
};

export default Loader; 