import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

const bannerItems = [
  { icon: <CheckCircleIcon />, text: '8 Weeks of Mentored Instruction' },
  { icon: <SchoolIcon />, text: 'Team Competition T-Shirt' },
  { icon: <MenuBookIcon />, text: 'Engineering Notebook' },
  { icon: <LocalCafeIcon />, text: 'Weekly Snacks' },
];

export const InfoBanner = () => {
  return (
    <Box
      sx={{
        bgcolor: 'info.main',
        py: 3,
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          {bannerItems.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                {item.icon}
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
