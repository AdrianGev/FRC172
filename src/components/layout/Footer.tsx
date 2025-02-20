import React from 'react';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,
  styled,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.info.main,
  },
}));

export const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            {['*Text goes here*'].map((link) => (
              <Link
                key={link}
                href="#"
                color="textSecondary"
                display="block"
                sx={{ mb: 1 }}
              >
                {link}
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography color="textSecondary">
              *Text goes here*
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <Link href="#" target="_blank" rel="noopener">
                <SocialIcon aria-label="Instagram">
                  <InstagramIcon />
                </SocialIcon>
              </Link>
              <Link href="#" target="_blank" rel="noopener">
                <SocialIcon aria-label="Twitter">
                  <TwitterIcon />
                </SocialIcon>
              </Link>
              <Link href="#" target="_blank" rel="noopener">
                <SocialIcon aria-label="Facebook">
                  <FacebookIcon />
                </SocialIcon>
              </Link>
              <Link href="#" target="_blank" rel="noopener">
                <SocialIcon aria-label="YouTube">
                  <YouTubeIcon />
                </SocialIcon>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            <Link color="inherit" href="#">
              Privacy Policy
            </Link>
            {' © '}
            {new Date().getFullYear()}
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};
