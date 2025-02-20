import React, { useState, useEffect } from 'react';
import { Box, Card, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

interface TimeLeft {
  months: number;
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
  eventName: string;
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = targetDate.getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return {
      months: 0,
      weeks: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
  const weeks = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7));
  const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { months, weeks, days, hours, minutes, seconds };
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
        minWidth: '100px',
      }}
    >
      <Typography variant="h4" component="div" color="primary" sx={{ fontWeight: 'bold' }}>
        {value.toString().padStart(2, '0')}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Box>
  </motion.div>
);

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, eventName }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <Card
      sx={{
        p: 4,
        mb: 4,
        background: 'linear-gradient(45deg, #1a237e 30%, #7c4dff 90%)',
        color: 'white',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white' }}>
        Countdown to {eventName}
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item>
          <TimeUnit value={timeLeft.months} label="Months" />
        </Grid>
        <Grid item>
          <TimeUnit value={timeLeft.weeks} label="Weeks" />
        </Grid>
        <Grid item>
          <TimeUnit value={timeLeft.days} label="Days" />
        </Grid>
        <Grid item>
          <TimeUnit value={timeLeft.hours} label="Hours" />
        </Grid>
        <Grid item>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
        </Grid>
        <Grid item>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </Grid>
      </Grid>
    </Card>
  );
};
