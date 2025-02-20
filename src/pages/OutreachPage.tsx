import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { FeatureCard } from '../components/outreach/FeatureCard';
import { InfoBanner } from '../components/outreach/InfoBanner';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const features = [
  {
    icon: <WorkIcon />,
    title: 'Exploration of STEM Careers',
    description: 'Learn about exciting career opportunities in science, technology, engineering, and mathematics.',
  },
  {
    icon: <CodeIcon />,
    title: 'Introduction to Coding for Robotics',
    description: 'Get hands-on experience with programming robots using industry-standard tools and languages.',
  },
  {
    icon: <EmojiEventsIcon />,
    title: 'Mock Inter-Team Practice Battles',
    description: 'Test your skills in friendly competition and learn from other teams.',
  },
  {
    icon: <FastfoodIcon />,
    title: 'Weekly Snacks & Refreshments',
    description: 'Stay energized during build sessions with provided snacks and drinks.',
  },
  {
    icon: <CelebrationIcon />,
    title: 'Special Post-Season Event Attendance',
    description: 'Participate in exclusive events and celebrations after the competition season.',
  },
];

const OutreachPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'primary.main',
          color: 'white',
          pt: 15,
          pb: 10,
          backgroundImage: 'linear-gradient(rgba(93, 58, 155, 0.8), rgba(93, 58, 155, 0.8)), url("/path/to/robot-image.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3rem' },
                fontWeight: 'bold',
                color: theme.palette.secondary.main,
                mb: 3,
              }}
            >
              Join Team 172 – Explore Robotics!
            </Typography>
            <Button
              variant="contained"
              color="info"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontSize: '1.2rem',
                '&:hover': {
                  bgcolor: theme.palette.secondary.light,
                  transform: 'scale(1.05)',
                },
              }}
            >
              Register Now
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Info Banner */}
      <InfoBanner />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Enrollment Information */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                mb: 3,
              }}
            >
              Eligibility
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', mb: 4 }}>
              Any Maine student in grades 5-8
            </Typography>

            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                mb: 3,
              }}
            >
              Season Costs
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 'bold',
                mb: 2,
              }}
            >
              $249
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontStyle: 'italic',
                mb: 2,
              }}
            >
              Need-based scholarships available. See registration form.
            </Typography>
            <Paper
              elevation={0}
              sx={{
                bgcolor: 'grey.100',
                p: 2,
                mb: 4,
                borderRadius: 2,
              }}
            >
              <Typography variant="body1">
                Permission slip and payment completed at kick-off night
              </Typography>
            </Paper>

            <Typography
              variant="h4"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                mb: 3,
              }}
            >
              Location
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <LocationOnIcon color="secondary" />
              <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                STEM Coliseum and Learning Center — Maine Mall, South Portland, ME 04106
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* Google Map Embed */}
            <Box
              sx={{
                height: '400px',
                width: '100%',
                border: 0,
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: 2,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.6931861871445!2d-70.33751182316772!3d43.63235616058055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb299001de20e99%3A0x35834dd43d9a764e!2sSTEM%20Coliseum%20and%20Learning%20Center!5e0!3m2!1sen!2sus!4v1708481969000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="STEM Coliseum and Learning Center Location"
              />
            </Box>
          </Grid>
        </Grid>

        {/* What's Included Section */}
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 'bold',
              mb: 4,
              textAlign: 'center',
            }}
          >
            What's Included
          </Typography>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <FeatureCard {...feature} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Important Dates Section */}
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 'bold',
              mb: 4,
            }}
          >
            Important Dates
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 3,
                  bgcolor: 'grey.100',
                  height: '100%',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Kick-off Night
                </Typography>
                <Typography variant="body1">September 15, 2025</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 3,
                  bgcolor: 'grey.100',
                  height: '100%',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Season Start
                </Typography>
                <Typography variant="body1">September 22, 2025</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 3,
                  bgcolor: 'grey.100',
                  height: '100%',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Post-Season Event
                </Typography>
                <Typography variant="body1">December 10, 2025</Typography>
              </Paper>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              mt: 6,
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontSize: '1.2rem',
              '&:hover': {
                bgcolor: theme.palette.secondary.light,
                transform: 'scale(1.05)',
              },
            }}
          >
            Register Now
          </Button>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontWeight: 'bold',
            }}
          >
            Permission slip and payment due at Kick-off Night
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default OutreachPage;
