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
                  <Button sx={{ color: mode === 'light' ? 'primary.main' : 'white', width: '100%', justifyContent: 'flex-start' }}>
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
    <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
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
          <Button sx={{ color: 'white' }}>{label}</Button>
        </Link>
      ))}
    </Stack>
  );

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
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
