import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  useTheme,
  styled,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: theme.spacing(0, 2),
  '& .MuiButton-root': {
    color: '#ffffff',
    margin: theme.spacing(0, 1),
    borderRadius: theme.shape.borderRadius,
    textTransform: 'none',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      transform: 'translateY(-2px)',
      transition: 'all 0.2s',
    },
    '&.active': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const Logo = styled('img')({
  height: 50,
  marginRight: 20,
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const navItems = [
  { title: 'About', path: '/about' },
  { title: 'Outreach/Sign-Up', path: '/outreach' },
  { title: 'Calendar & Schedule', path: '/calendar' },
  { title: 'Media', path: '/media' },
  { title: 'Resources', path: '/resources' },
  { title: 'Donate & Store', path: '/donate' },
  { title: 'Sponsors', path: '/sponsors' },
];

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem 
          key={item.path} 
          component={Link} 
          to={item.path}
          onClick={handleDrawerToggle}
          sx={{
            color: 'inherit',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
            },
          }}
        >
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Container maxWidth="xl">
        <StyledToolbar>
          <Box 
            component={Link} 
            to="/"
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none',
              '&:hover': {
                opacity: 0.9
              }
            }}
          >
            <img 
              src={logo} 
              alt="Team 172 Logo" 
              style={{ 
                height: '50px', 
                marginRight: '15px',
              }} 
            />
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                '&:hover': {
                  color: 'rgba(255, 255, 255, 0.8)'
                }
              }}
            >
              Home
            </Typography>
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  '& .MuiDrawer-paper': {
                    width: 240,
                    backgroundColor: theme.palette.secondary.main,
                    color: 'white',
                  },
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  className={location.pathname === item.path ? 'active' : ''}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          )}
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};
