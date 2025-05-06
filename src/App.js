import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />
      <Box id="about" sx={{ p: 6, scrollMarginTop: '80px', minHeight: '100vh' }}>
        <About />
      </Box>
      <Box id="projects" sx={{ p: 6, scrollMarginTop: '80px', minHeight: '100vh' }}>
        <Projects />
      </Box>
      <Box id="skills" sx={{ p: 6, scrollMarginTop: '80px', minHeight: '100vh' }}>
        <Skills />
      </Box>
      <Box id="contact" sx={{ p: 6, scrollMarginTop: '80px', minHeight: '100vh' }}>
        <Contact />
      </Box>
    </>
  );
}

export default App;
