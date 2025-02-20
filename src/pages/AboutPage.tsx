import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Link,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import { TimelineItem } from '../components/about/TimelineItem';
import { ProfileCard } from '../components/about/ProfileCard';
import { AchievementCard } from '../components/about/AchievementCard';
import logo from '../assets/logo.png';

const AboutPage = () => {
  const teamHistory = [
    {
      year: '2005',
      title: 'Team Founded',
      description: 'Team 172 was established with a mission to inspire students in STEM.',
      image: logo
    },
    {
      year: '2015',
      title: 'Regional Champions',
      description: 'Won our first regional championship and qualified for World Championships.',
      image: logo
    },
    {
      year: '2024',
      title: 'Community Impact',
      description: 'Expanded outreach programs to inspire the next generation of engineers.',
      image: logo
    }
  ];

  const mentors = [
    {
      name: 'Mario',
      role: 'Luigi\'s Brother',
      bio: 'Co-owner of Mario Plumbing Co',
      image: logo
    },
    {
      name: 'Luigi',
      role: 'Mario\'s Brother',
      bio: 'Co-owner of Mario Plumbing Co',
      image: logo
    }
  ];

  const achievements = [
    {
      title: 'Regional Winners',
      year: '2023',
      event: 'New England District Championship',
      category: 'Competition'
    },
    {
      title: 'Chairman\'s Award',
      year: '2022',
      event: 'District Event',
      category: 'Team Award'
    },
    {
      title: 'Innovation in Control',
      year: '2024',
      event: 'World Championship',
      category: 'Technical Award'
    }
  ];

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        sx={{
          position: 'relative',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'secondary.main',
            opacity: 0.7,
            zIndex: 1,
          },
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Team Banner"
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            color: 'white',
          }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" gutterBottom>
              Team 172
            </Typography>
            <Typography variant="h5">
              Building Tomorrow's Engineers Today
            </Typography>
          </motion.div>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Introduction */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h3" color="secondary.main" gutterBottom>
                Who We Are
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.5rem' }}>
                Team 172 is a FIRST Robotics Competition team dedicated to inspiring students
                in Science, Technology, Engineering, and Mathematics (STEM). Our team provides
                hands-on experience in robotics, programming, and business management while
                fostering leadership, innovation, and collaboration.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Paper sx={{ p: 3, bgcolor: 'grey.100' }}>
                <Typography variant="h5" gutterBottom>
                  Quick Facts
                </Typography>
                <Typography variant="body2" paragraph sx={{ fontSize: '1.2rem' }}>
                  • Founded: 1999
                </Typography>
                <Typography variant="body2" paragraph sx={{ fontSize: '1.2rem' }}>
                  • Members: 40+ students
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '1.2rem' }}>
                  • Location: Maine
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* History Timeline */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Our Journey
          </Typography>
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: 2,
                bgcolor: 'grey.200',
                transform: 'translateX(-50%)',
              }}
            />
            <Grid container spacing={4}>
              {teamHistory.map((item, index) => (
                <Grid item xs={12} key={item.year}>
                  <TimelineItem {...item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Meet the Team */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Meet Our Mentors
          </Typography>
          <Grid container spacing={4}>
            {mentors.map((mentor) => (
              <Grid item xs={12} sm={6} md={4} key={mentor.name}>
                <ProfileCard {...mentor} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* What is FIRST? */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            What is FIRST?
          </Typography>
          <Paper sx={{ p: 4, bgcolor: 'grey.100' }}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.5rem' }}>
              FIRST (For Inspiration and Recognition of Science and Technology) is an
              international youth organization that operates the FIRST Robotics Competition,
              FIRST Tech Challenge, FIRST LEGO League, and FIRST LEGO League Jr.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.5rem' }}>
              Founded by inventor Dean Kamen, FIRST aims to inspire young people's interest
              and participation in science and technology.
            </Typography>
            <Button
              variant="contained"
              color="info"
              component={Link}
              href="https://www.firstinspires.org"
              target="_blank"
              sx={{ mt: 2 }}
            >
              Learn More About FIRST
            </Button>
          </Paper>
        </Box>

        {/* Achievements */}
        <Box>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
            Our Achievements
          </Typography>
          <Grid container spacing={3}>
            {achievements.map((achievement) => (
              <Grid item xs={12} sm={6} md={4} key={achievement.title}>
                <AchievementCard {...achievement} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;
