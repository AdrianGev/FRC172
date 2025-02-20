import React, { useEffect } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { SponsorCard } from '../components/sponsors/SponsorCard';

// Import sponsor logos
const adobeLogo = '/assets/sponsors/adobelogo.jpg';
const brookfieldLogo = '/assets/sponsors/brookfieldproperties.png';
const idexxLogo = '/assets/sponsors/idexxlogo.png';
const tiLogo = '/assets/sponsors/texasinstrumentslogo.png';
const tylerLogo = '/assets/sponsors/tylertechnologieslogo.png';

const sponsors = [
  {
    name: 'Adobe',
    image: adobeLogo,
    tier: '',
    description: 'Global leader in digital media and digital marketing solutions.'
  },
  {
    name: 'Brookfield Properties',
    image: brookfieldLogo,
    tier: '',
    description: 'One of the largest real estate companies in the world.'
  },
  {
    name: 'IDEXX',
    image: idexxLogo,
    tier: '',
    description: 'Global leader in veterinary diagnostics and software.'
  },
  {
    name: 'Texas Instruments',
    image: tiLogo,
    tier: '',
    description: 'Global semiconductor design and manufacturing company.'
  },
  {
    name: 'Tyler Technologies',
    image: tylerLogo,
    tier: '',
    description: 'Leading provider of integrated software and technology services.'
  }
];

const SponsorsPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Start animations when component mounts
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            align="center" 
            gutterBottom
            sx={{ 
              mb: 6,
              color: 'primary.main',
              fontWeight: 'bold'
            }}
          >
            Our Sponsors
          </Typography>

          <Typography 
            variant="h5" 
            align="center" 
            sx={{ 
              mb: 8,
              color: 'text.secondary',
              fontSize: '1.5rem'
            }}
          >
            We are grateful for the support of these amazing organizations that help make our robotics journey possible.
          </Typography>

          <Grid container spacing={4}>
            {sponsors.map((sponsor, index) => (
              <Grid item xs={12} sm={6} md={4} key={sponsor.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SponsorCard {...sponsor} />
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{ color: 'secondary.main' }}
            >
              Interested in Sponsoring Team 172?
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '800px', 
                mx: 'auto',
                fontSize: '1.2rem'
              }}
            >
              Your support helps us inspire the next generation of engineers and innovators. 
              Contact us to learn more about sponsorship opportunities and how you can make a difference.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SponsorsPage;
