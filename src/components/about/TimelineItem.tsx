import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: -8,
            top: '50%',
            width: 16,
            height: 16,
            borderRadius: '50%',
            bgcolor: 'secondary.main', // Hot Pink
            transform: 'translateY(-50%)',
          },
        }}
      >
        <Box>
          <Typography variant="h6" color="secondary.main" sx={{ fontSize: '1.5rem' }}>
            {year}
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ fontSize: '1.8rem' }}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
            {description}
          </Typography>
        </Box>
        {image && (
          <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: 120,
              height: 120,
              objectFit: 'cover',
              borderRadius: 1,
            }}
          />
        )}
      </Card>
    </motion.div>
  );
};
