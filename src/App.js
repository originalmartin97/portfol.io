import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Box, Container } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Box 
          id="about" 
          sx={{ 
            py: { xs: 4, sm: 6 }, 
            px: { xs: 2, sm: 4, md: 6 }, 
            scrollMarginTop: { xs: '64px', sm: '80px' }, 
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <About />
        </Box>
        
        <Box 
          id="projects" 
          sx={{ 
            py: { xs: 4, sm: 6 }, 
            px: { xs: 2, sm: 4, md: 6 }, 
            scrollMarginTop: { xs: '64px', sm: '80px' }, 
            minHeight: '100vh' 
          }}
        >
          <Projects />
        </Box>
        
        <Box 
          id="skills" 
          sx={{ 
            py: { xs: 4, sm: 6 }, 
            px: { xs: 2, sm: 4, md: 6 }, 
            scrollMarginTop: { xs: '64px', sm: '80px' }, 
            minHeight: '100vh' 
          }}
        >
          <Skills />
        </Box>
        
        <Box 
          id="contact" 
          sx={{ 
            py: { xs: 4, sm: 6 }, 
            px: { xs: 2, sm: 4, md: 6 }, 
            scrollMarginTop: { xs: '64px', sm: '80px' }, 
            minHeight: '100vh' 
          }}
        >
          <Contact />
        </Box>
      </Container>
    </>
  );
}

export default App;
