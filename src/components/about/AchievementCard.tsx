import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Collapse, IconButton } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

interface AchievementCardProps {
  title: string;
  year: string;
  event: string;
  category: string;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ title, year, event, category }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <EmojiEventsIcon color="secondary" sx={{ mr: 1 }} />
            <Typography variant="h6" color="primary.main" sx={{ fontSize: '1.5rem' }}>
              {title}
            </Typography>
            <IconButton
              onClick={() => setExpanded(!expanded)}
              sx={{
                ml: 'auto',
                transform: expanded ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.3s',
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
          <Collapse in={expanded}>
            <Box sx={{ mt: 1 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: '1.2rem' }}>
                Year: {year}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: '1.2rem' }}>
                Event: {event}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                Category: {category}
              </Typography>
            </Box>
          </Collapse>
        </CardContent>
      </Card>
    </motion.div>
  );
};
