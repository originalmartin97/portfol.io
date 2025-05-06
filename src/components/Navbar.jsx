import { AppBar, Toolbar, Button, Stack, IconButton } from '@mui/material';
import { Link, Events, scrollSpy } from 'react-scroll';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LightMode, DarkMode } from '@mui/icons-material';

const navLinks = [
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Contact', to: 'contact' },
];

function Navbar() {
  const { mode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
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

        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'light' ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
