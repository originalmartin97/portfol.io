import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Box, Container, Divider } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 0 }}>
        <Box 
          id="about" 
          sx={{ 
            py: { xs: 4, sm: 6 }, 
            px: { xs: 2, sm: 4, md: 6 }, 
            scrollMarginTop: { xs: '64px', sm: '80px' }, 
            minHeight: '80vh',
          }}
        >
          <About />
        </Box>
        
        <Divider />
        
        <Box 
          id="projects" 
          sx={{ 
            py: { xs: 4, sm: 6 }, 
            px: { xs: 2, sm: 4, md: 6 }, 
            scrollMarginTop: { xs: '64px', sm: '80px' }, 
            minHeight: '80vh' 
          }}
        >
          <Projects />
        </Box>
        
        <Divider />
        
        <Box 
          id="skills" 
          sx={{ 
            py: { xs: 4, sm: 6 }, 
            px: { xs: 2, sm: 4, md: 6 }, 
            scrollMarginTop: { xs: '64px', sm: '80px' }, 
            minHeight: '60vh' 
          }}
        >
          <Skills />
        </Box>
        
        <Divider />
        
        <Box 
          id="contact" 
          sx={{ 
            py: { xs: 4, sm: 6 }, 
            px: { xs: 2, sm: 4, md: 6 }, 
            pb: { xs: 20, sm: 24 }, // Add extra bottom padding
            scrollMarginTop: { xs: '64px', sm: '80px' }, 
            minHeight: '60vh' 
          }}
        >
          <Contact />
        </Box>
      </Container>
    </>
  );
}

export default App;
