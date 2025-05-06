import { Box, Chip, Typography, Grid } from '@mui/material';
import skills from '../data/skills';
import { keyframes } from '@mui/system';

// Enhanced void-like glitch animation
const voidGlitch = keyframes`
  0% { 
    transform: translate(0);
    text-shadow: 0 0 0 transparent;
    opacity: 1;
  }
  1% { 
    opacity: 0.7;
  }
  2% {
    transform: translate(-2px, 1px);
    text-shadow: -2px 0 #0ff, 2px 0 #f00;
    opacity: 0.5;
  }
  3% { 
    opacity: 0.1; 
  }
  4% {
    transform: translate(0);
    text-shadow: 0 0 0 transparent;
    opacity: 0;
  }
  6% { 
    opacity: 0.3;
  }
  8% {
    transform: translate(2px, -1px);
    text-shadow: 2px 0 #0ff, -2px 0 #f00;
    opacity: 0.5;
  }
  9% { 
    opacity: 0.2; 
  }
  10% {
    transform: translate(0);
    text-shadow: 0 0 0 transparent;
    opacity: 1;
  }
  90% { 
    opacity: 1; 
  }
  92% { 
    opacity: 0.1; 
  }
  94% { 
    opacity: 0.7; 
  }
  96% { 
    opacity: 0.3; 
    transform: translate(-1px, 0);
  }
  98% { 
    opacity: 0.5; 
    transform: translate(1px, 0);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

// Digital noise animation
const digitalNoise = keyframes`
  0% { background-position: 0 0; }
  20% { background-position: 20% 20%; }
  40% { background-position: 40% 40%; }
  60% { background-position: 60% 60%; }
  80% { background-position: 80% 80%; }
  100% { background-position: 100% 100%; }
`;

// Distortion animation for the void effect
const voidDistortion = keyframes`
  0% { 
    filter: blur(0) brightness(1); 
    letter-spacing: normal;
  }
  20% { 
    filter: blur(1px) brightness(1.5); 
    letter-spacing: 1px;
  }
  25% { 
    filter: blur(0px) brightness(0.8); 
    letter-spacing: -0.5px;
  }
  35% { 
    filter: blur(2px) brightness(0.5);
    letter-spacing: 2px;
  }
  40% { 
    filter: blur(0) brightness(1); 
    letter-spacing: normal;
  }
  60% { 
    filter: blur(0) brightness(1); 
    letter-spacing: normal;
  }
  65% { 
    filter: blur(3px) brightness(0.7); 
    letter-spacing: -1px;
  }
  70% { 
    filter: blur(0) brightness(1); 
    letter-spacing: normal;
  }
  100% { 
    filter: blur(0) brightness(1);
    letter-spacing: normal; 
  }
`;

// Clip effect that makes parts of the text disappear
const clipEffect = keyframes`
  0% { clip-path: inset(0 0 0 0); }
  5% { clip-path: inset(0 0 0 0); }
  10% { clip-path: inset(40% 0 50% 0); }
  15% { clip-path: inset(0 70% 0 30%); }
  20% { clip-path: inset(0 0 0 0); }
  25% { clip-path: inset(30% 20% 40% 10%); }
  30% { clip-path: inset(0 0 0 0); }
  100% { clip-path: inset(0 0 0 0); }
`;

// Add this new color distortion animation
const colorGlitch = keyframes`
  0% { 
    filter: hue-rotate(0deg) saturate(100%); 
    background-blend-mode: normal;
  }
  10% { 
    filter: hue-rotate(45deg) saturate(200%); 
    background-blend-mode: color-burn;
  }
  15% { 
    filter: hue-rotate(-90deg) saturate(300%) invert(0.1); 
    background-blend-mode: color-dodge;
  }
  20% { 
    filter: hue-rotate(0deg) saturate(100%); 
    background-blend-mode: normal;
  }
  35% { 
    filter: hue-rotate(90deg) saturate(150%) brightness(1.1); 
    background-blend-mode: difference;
  }
  40% { 
    filter: hue-rotate(-20deg) saturate(250%); 
    background-blend-mode: hard-light;
  }
  55% { 
    filter: hue-rotate(0deg) saturate(100%); 
    background-blend-mode: normal;
  }
  70% { 
    filter: hue-rotate(180deg) saturate(150%); 
    background-blend-mode: exclusion;
  }
  75% { 
    filter: hue-rotate(-45deg) saturate(200%) contrast(1.2); 
    background-blend-mode: color;
  }
  80% { 
    filter: hue-rotate(0deg) saturate(100%); 
    background-blend-mode: normal;
  }
  100% { 
    filter: hue-rotate(0deg) saturate(100%); 
    background-blend-mode: normal;
  }
`;

// Add this inversion flash effect
const inversionFlash = keyframes`
  0% { filter: invert(0); }
  1% { filter: invert(1); }
  2% { filter: invert(0); }
  3% { filter: invert(0); }
  4% { filter: invert(1); }
  5% { filter: invert(0); }
  100% { filter: invert(0); }
`;

function Skills() {
  return (
    <Box>
      <Typography variant="h2" component="h2" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Here are some of the skills I have acquired over the years. I am always eager to learn new technologies and improve my skill set.
        I have experience with a variety of programming languages, frameworks, and tools. My goal is to continuously grow as a developer and stay up-to-date with the latest trends in technology.
        I am particularly interested in web development, cloud computing, and machine learning. I enjoy working on challenging projects that push my limits and allow me to explore new ideas.
      </Typography>
      
      <Grid container spacing={2}>
        {skills.map((skill, index) => {
          const animationDelay = `${index * 0.1}s`;
          const glitchDuration = `${5 + Math.random() * 5}s`;
          const glitchDelay = `${1 + Math.random() * 3}s`;
          const colorGlitchDelay = `${Math.random() * 2}s`;
          const flickerTime = 2 + Math.random() * 8;
          
          return (
            <Grid item key={index}>
              <Box
                sx={{
                  position: 'relative',
                  display: 'inline-block',
                  animation: `fadeIn 0.5s ease forwards`,
                  animationDelay,
                  opacity: 0,
                  '&:hover': {
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '-3px',
                      left: '-3px',
                      right: '-3px',
                      bottom: '-3px',
                      background: (theme) => `radial-gradient(circle, 
                                            ${theme.palette.mode === 'light' 
                                            ? 'rgba(0,0,0,0.05) 30%, rgba(0,0,0,0) 70%' 
                                            : 'rgba(255,255,255,0.1) 30%, rgba(255,255,255,0) 70%'})`,
                      zIndex: -1,
                      opacity: 0.8,
                      animation: `${digitalNoise} 0.2s steps(2) infinite`,
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '-2px',
                      left: '-2px',
                      right: '-2px',
                      bottom: '-2px',
                      background: 'transparent',
                      border: (theme) => `2px solid ${theme.palette.mode === 'light' 
                        ? 'rgba(0,0,0,0.3)' 
                        : 'rgba(255,255,255,0.4)'}`,
                      zIndex: -1,
                      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
                      animation: `${clipEffect} 2s infinite`,
                    },
                  }
                }}
              >
                <Chip
                  label={skill.label}
                  color={skill.color}
                  sx={{ 
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    height: { xs: '32px', sm: '36px' },
                    fontWeight: 500,
                    position: 'relative',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: 0,
                      opacity: 0,
                      background: (theme) => `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      backgroundSize: '150px',
                      mixBlendMode: 'overlay',
                      zIndex: 2,
                      pointerEvents: 'none',
                    },
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: (theme) => `0 4px 12px ${theme.palette.mode === 'light' 
                        ? 'rgba(0,0,0,0.25)' 
                        : 'rgba(0,0,0,0.6)'}`,
                      
                      // Apply void glitch to entire chip 
                      animation: `${voidGlitch} ${glitchDuration} ${glitchDelay} infinite`,
                      
                      // Add color distortion animations
                      filter: 'contrast(1)', // Base filter to enable other filter animations
                      animationName: `${voidGlitch}, ${colorGlitch}, ${inversionFlash}`,
                      animationDuration: `${glitchDuration}, ${glitchDuration}, ${flickerTime}s`,
                      animationDelay: `${glitchDelay}, ${colorGlitchDelay}, ${colorGlitchDelay}`,
                      animationIterationCount: 'infinite, infinite, infinite',
                      animationTimingFunction: 'linear, ease-in-out, steps(1)',
                      
                      // Add glitchy background effects
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.4,
                        background: (theme) => `linear-gradient(45deg, 
                          transparent 0%, 
                          ${theme.palette.mode === 'light' ? 'rgba(255,0,0,0.2)' : 'rgba(255,0,0,0.4)'} 10%, 
                          transparent 20%, 
                          ${theme.palette.mode === 'light' ? 'rgba(0,255,255,0.2)' : 'rgba(0,255,255,0.4)'} 30%,
                          transparent 40%)`,
                        backgroundSize: '300% 100%',
                        animation: `${digitalNoise} 0.2s steps(3) infinite`,
                        mixBlendMode: 'overlay',
                        zIndex: 1,
                      },
                      
                      // Hide the original text completely during hover
                      '.MuiChip-label': {
                        color: 'transparent !important',
                        animation: `${voidDistortion} ${glitchDuration} infinite`,
                        position: 'relative',
                        
                        // Create RGB splitting effect for text
                        '&::before, &::after': {
                          content: '"' + skill.label + '"',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '100%',
                          width: '100%',
                          // Make these more visible since original text is gone
                          opacity: 0.8, 
                          color: 'white',
                          mixBlendMode: 'exclusion',
                          animation: `${clipEffect} ${glitchDuration} infinite`,
                        },
                        '&::before': {
                          textShadow: '-0.06em 0 #f00',
                          transform: 'translate(-1px, 0)',
                          clipPath: 'polygon(0 30%, 100% 30%, 100% 70%, 0 70%)',
                        },
                        '&::after': {
                          textShadow: '0.06em 0 #0ff',
                          transform: 'translate(1px, 0)',
                          clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 30%, 0 70%, 100% 70%, 100% 100%, 0 100%)',
                        }
                      }
                    },
                  }}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Skills;
