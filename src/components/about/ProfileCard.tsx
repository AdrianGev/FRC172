import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, bio, image }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
        <Avatar
          src={image}
          alt={name}
          sx={{
            width: 120,
            height: 120,
            mb: 2,
            border: 3,
            borderColor: 'primary.main',
          }}
        />
        <CardContent>
          <Typography variant="h6" color="primary.main" align="center" gutterBottom sx={{ fontSize: '1.5rem' }}>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="secondary.main" align="center" gutterBottom sx={{ fontSize: '1.2rem' }}>
            {role}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" sx={{ fontSize: '1.2rem' }}>
            {bio}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
