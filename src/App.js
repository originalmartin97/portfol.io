import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Box, Container, Divider } from '@mui/material';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Navbar />
      <Analytics />
      <Container 
        maxWidth="lg" 
        sx={{ 
          mt: 0,
          // Add horizontal padding override for very small screens
          px: { xs: 1, sm: 2 } 
        }}
      >
        <Box 
          id="about" 
          sx={{ 
            pt: 3,
            pb: { xs: 4, sm: 6 }, 
            px: { xs: 1, sm: 4, md: 6 }, // Reduce horizontal padding on mobile
            scrollMarginTop: { xs: '64px', sm: '80px' }, 
            minHeight: '80vh',
            overflow: 'hidden' // Prevent content overflow
          }}
        >
          <About />
        </Box>
        
        <Divider />
        
        <Box 
          id="projects" 
          sx={{ 
            py: { xs: 4, sm: 6 }, 
            px: { xs: 1, sm: 4, md: 6 }, // Reduce horizontal padding on mobile
            scrollMarginTop: { xs: '64px', sm: '80px' }, 
            minHeight: '80vh',
            overflow: 'hidden' // Prevent content overflow
          }}
        >
          <Projects />
        </Box>
        
        <Divider />
        
        <Box 
          id="skills" 
          sx={{ 
            py: { xs: 4, sm: 6 }, 
            px: { xs: 1, sm: 4, md: 6 }, // Reduce horizontal padding on mobile
            scrollMarginTop: { xs: '64px', sm: '80px' }, 
            minHeight: '60vh',
            overflow: 'hidden' // Prevent content overflow
          }}
        >
          <Skills />
        </Box>
        
        <Divider />
        
        <Box 
          id="contact" 
          sx={{ 
            py: { xs: 4, sm: 6 }, 
            px: { xs: 1, sm: 4, md: 6 }, // Reduce horizontal padding on mobile
            pb: { xs: 20, sm: 24 },
            scrollMarginTop: { xs: '64px', sm: '80px' }, 
            minHeight: '60vh',
            overflow: 'hidden' // Prevent content overflow
          }}
        >
          <Contact />
        </Box>
      </Container>
    </>
  );
}

export default App;
