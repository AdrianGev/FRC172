import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CountdownTimer } from '../components/CountdownTimer';

interface Event {
  title: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

const events: Event[] = [
  {
    title: 'Week 1',
    location: 'New England District UNH Event - Durham, NH',
    startDate: new Date('2025-03-01'),
    endDate: new Date('2025-03-03')
  },
  {
    title: 'Week 3',
    location: 'New England District WPI Event - Lewiston, ME',
    startDate: new Date('2025-03-14'),
    endDate: new Date('2025-03-16')
  },
  {
    title: 'District Championship',
    location: 'New England District Championship - West Springfield, MA',
    startDate: new Date('2025-04-10'),
    endDate: new Date('2025-04-13')
  }
];

// Sort events by start date
const sortedEvents = [...events].sort((a, b) => a.startDate.getTime() - b.startDate.getTime());

// Find the next upcoming event
const getNextEvent = () => {
  const now = new Date();
  return sortedEvents.find(event => event.startDate > now) || sortedEvents[0];
};

const formatDateRange = (startDate: Date, endDate: Date) => {
  const options: Intl.DateTimeFormatOptions = { 
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };
  return `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
};

const CalendarPage = () => {
  const nextEvent = getNextEvent();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          Team Calendar
        </Typography>

        <CountdownTimer 
          targetDate={nextEvent.startDate}
          eventName={nextEvent.title}
        />

        <Grid container spacing={3}>
          {sortedEvents.map((event, index) => (
            <Grid item xs={12} key={event.title}>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  sx={{ 
                    mb: 2,
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div" gutterBottom color="primary">
                      {event.title}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <LocationOnIcon color="action" sx={{ mr: 1 }} />
                      <Typography variant="body1" color="text.secondary">
                        {event.location}
                      </Typography>
                    </Box>

                    <Typography variant="body1">
                      {formatDateRange(event.startDate, event.endDate)}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default CalendarPage;
