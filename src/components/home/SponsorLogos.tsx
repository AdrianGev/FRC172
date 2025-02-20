import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

// Import sponsor logos
import adobeLogo from '../../assets/sponsors/adobelogo.jpg';
import brookfieldLogo from '../../assets/sponsors/brookfieldproperties.png';
import idexxLogo from '../../assets/sponsors/idexxlogo.png';
import tiLogo from '../../assets/sponsors/texasinstrumentslogo.png';
import tylerLogo from '../../assets/sponsors/tylertechnologieslogo.png';

const sponsors = [
  { name: 'Adobe', logo: adobeLogo },
  { name: 'Brookfield Properties', logo: brookfieldLogo },
  { name: 'IDEXX', logo: idexxLogo },
  { name: 'Texas Instruments', logo: tiLogo },
  { name: 'Tyler Technologies', logo: tylerLogo },
];

export const SponsorLogos = () => {
  return (
    <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            color: 'primary.main',
            fontWeight: 'bold'
          }}
        >
          Our Sponsors
        </Typography>
        <Grid 
          container 
          spacing={4} 
          justifyContent="center" 
          alignItems="center"
        >
          {sponsors.map((sponsor) => (
            <Grid item xs={6} sm={4} md={2.4} key={sponsor.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Box
                  component="img"
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '80px',
                    objectFit: 'contain',
                    filter: 'grayscale(100%)',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                    },
                  }}
                />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
