import { AppBar, Toolbar, Button, Stack, IconButton, useMediaQuery, Drawer, List, ListItem, Box } from '@mui/material';
import { Link, Events, scrollSpy, scroller } from 'react-scroll';
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
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    
    // Configure scrollspy with lower threshold for better detection
    scrollSpy.update();
    
    // Special handling for bottom of page to activate contact
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // If we're near the bottom of the page, manually set "contact" as active
      if (documentHeight - (scrollTop + windowHeight) < 50) {
        setActiveSection('contact');
      } else {
        // Let react-scroll handle other sections normally
        const sections = ['about', 'projects', 'skills', 'contact'];
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section && section.getBoundingClientRect().top <= 100) {
            if (activeSection !== sections[i]) {
              setActiveSection(sections[i]);
            }
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Handle click to properly set active section and scroll
  const handleNavClick = (to) => {
    setActiveSection(to);
    scroller.scrollTo(to, {
      duration: 500,
      smooth: true,
      offset: -80
    });
  };

  const mobileMenu = (
    <>
      <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="menu" 
        onClick={toggleDrawer}
        sx={{ 
          mr: 2,
          color: mode === 'light' ? 'text.primary' : 'white',
          border: mode === 'light' ? '1px solid rgba(0,0,0,0.2)' : 'none',
        }}
      >
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
          sx={{ 
            width: 250,
            backgroundColor: mode === 'light' ? 'background.default' : '#121212',
            height: '100%'
          }}
        >
          <List>
            {navLinks.map(({ label, to }) => (
              <ListItem key={to} disablePadding>
                <Button 
                  onClick={() => handleNavClick(to)}
                  sx={{ 
                    color: mode === 'light' ? 'text.primary' : 'white', 
                    width: '100%', 
                    justifyContent: 'flex-start',
                    fontWeight: activeSection === to ? 500 : 400,
                    letterSpacing: '0.5px',
                    padding: '12px 16px'
                  }}
                >
                  {label}
                </Button>
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
        <div key={to} className={activeSection === to ? 'active' : ''}>
          <Button 
            className="nav-button"
            onClick={() => handleNavClick(to)}
            sx={{ 
              color: mode === 'light' ? 'text.primary' : 'white',
              fontWeight: activeSection === to ? 500 : 400,
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
              }
            }}
          >
            {label}
          </Button>
        </div>
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
          <IconButton 
            onClick={toggleTheme} 
            sx={{
              color: mode === 'light' ? 'text.primary' : 'white',
              border: mode === 'light' ? '1px solid rgba(0,0,0,0.2)' : 'none',
              '&:hover': {
                backgroundColor: mode === 'light' ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.08)'
              }
            }}
          >
            {mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
