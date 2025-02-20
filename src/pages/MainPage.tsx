import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Paper,
  CardMedia,
  CardActionArea,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { SponsorLogos } from '../components/home/SponsorLogos';

const MotionBox = motion(Box);
const MotionContainer = motion(Container);

const MainPage = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(45deg, ${theme.palette.primary.main}88, ${theme.palette.secondary.main}88)`,
            zIndex: 1,
          },
        }}
      >
        <Container 
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            py: { xs: 8, md: 12 },
            textAlign: 'center',
          }}
        >
          <motion.img
            src={logo}
            alt="Team Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ 
              maxWidth: '300px',
              marginBottom: '2rem',
              filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))'
            }}
          />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Typography
              variant="h2"
              color="white"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Welcome to FRC Team 172
            </Typography>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Typography
              variant="h5"
              color="white"
              paragraph
              sx={{
                maxWidth: '800px',
                mx: 'auto',
                mb: 4,
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              }}
            >
              Inspiring young minds through robotics and innovation
            </Typography>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              component={Link}
              to="/outreach"
              variant="contained"
              color="info"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                boxShadow: theme.shadows[4],
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows[8],
                },
              }}
            >
              Join the Team
            </Button>
          </motion.div>
        </Container>
      </MotionBox>

      {/* About Us Preview */}
      <Container sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h3" gutterBottom>
                About Us
              </Typography>
            </motion.div>
            <Typography
              paragraph
              color="text.secondary"
              sx={{ fontSize: '1.1rem', mb: 3 }}
            >
              We are a passionate team of high school students dedicated to learning and applying STEM principles through competitive robotics.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/about"
              size="large"
              sx={{
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                },
              }}
            >
              Learn More
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={4}
                sx={{
                  height: 400,
                  overflow: 'hidden',
                  borderRadius: 4,
                }}
              >
                <img
                  src={logo}
                  alt="Team at work"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Upcoming Events */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 10 } }}>
        <Container>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" gutterBottom align="center">
              Upcoming Events
            </Typography>
          </motion.div>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: 'Week 1',
                date: 'March 1-3, 2025',
                description: 'New England District UNH Event - Durham, NH',
                image: logo
              },
              {
                title: 'Week 3',
                date: 'March 14-16, 2025',
                description: 'New England District WPI Event - Lewiston, ME',
                image: logo
              },
              {
                title: 'District Championship',
                date: 'April 10-13, 2025',
                description: 'New England District Championship - West Springfield, MA',
                image: logo
              }
            ].map((event, index) => (
              <Grid item key={event.title} xs={12} md={4}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{ height: '100%' }}
                    component={motion.div}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={event.image}
                        alt={event.title}
                      />
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {event.title}
                        </Typography>
                        <Typography variant="subtitle1" color="primary" gutterBottom>
                          {event.date}
                        </Typography>
                        <Typography color="text.secondary">
                          {event.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <SponsorLogos />
    </Box>
  );
};

export default MainPage;
