import { AppBar, Toolbar, Button, Stack, IconButton, useMediaQuery, Drawer, List, ListItem, Box } from '@mui/material';
import { Link, Events, scrollSpy } from 'react-scroll';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LightMode, DarkMode, Menu } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Contact', to: 'contact' },
];

function Navbar() {
  const { mode, toggleTheme } = useContext(ThemeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const mobileMenu = (
    <>
      <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="menu" 
        onClick={toggleDrawer}
        sx={{ mr: 2 }}
      >
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          sx={{ width: 250 }}
        >
          <List>
            {navLinks.map(({ label, to }) => (
              <ListItem key={to} disablePadding>
                <Link
                  activeClass="active"
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  style={{ width: '100%', padding: '12px 16px' }}
                >
                  <Button sx={{ 
                    color: mode === 'light' ? 'text.primary' : 'white', 
                    width: '100%', 
                    justifyContent: 'flex-start',
                    fontWeight: 400,
                    letterSpacing: '0.5px'
                  }}>
                    {label}
                  </Button>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );

  const desktopMenu = (
    <Stack direction="row" spacing={4} sx={{ flexGrow: 1 }}>
      {navLinks.map(({ label, to }) => (
        <Link
          key={to}
          activeClass="active"
          to={to}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          isDynamic={true}
          style={{ textDecoration: 'none' }}
        >
          <Button className="nav-button" sx={{ 
            color: mode === 'light' ? 'text.primary' : 'white',
            fontWeight: 400,
            letterSpacing: '0.5px',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #2196f3, transparent)',
              transform: 'scaleX(0)',
              transition: 'transform 0.3s ease',
            },
            '&:hover::after': {
              transform: 'scaleX(0.8)',
            },
            '&.active': {
              fontWeight: 500,
              '&::after': {
                transform: 'scaleX(0.8)',
                background: mode === 'light' 
                  ? 'linear-gradient(90deg, transparent, #2196f3 80%, #00e676)' 
                  : 'linear-gradient(90deg, transparent, #2196f3 80%, #69f0ae)',
              }
            }
          }}>
            {label}
          </Button>
        </Link>
      ))}
    </Stack>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        backgroundColor: mode === 'light' ? 'background.default' : 'black',
        borderBottom: mode === 'light' ? '1px solid #e0e0e0' : 'none' 
      }}
    >
      <Toolbar>
        {isMobile ? mobileMenu : desktopMenu}
        <Box sx={{ flexGrow: isMobile ? 1 : 0, textAlign: isMobile ? 'right' : 'inherit' }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
