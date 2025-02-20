import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface SponsorCardProps {
  name: string;
  image: string;
  description?: string;
  tier?: string;
}

export const SponsorCard: React.FC<SponsorCardProps> = ({ name, image, description, tier }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            boxShadow: 6,
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
          <CardMedia
            component="img"
            image={image}
            alt={name}
            sx={{
              objectFit: 'contain',
              maxHeight: '100%',
              width: 'auto',
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ fontSize: '1.5rem' }}>
            {name}
          </Typography>
          {tier && (
            <Typography variant="subtitle1" color="secondary" gutterBottom sx={{ fontSize: '1.2rem' }}>
              {tier} Sponsor
            </Typography>
          )}
          {description && (
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
              {description}
            </Typography>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
