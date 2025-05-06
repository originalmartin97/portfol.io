import { Box, Chip, Typography, Grid } from '@mui/material';
import skills from '../data/skills';
import { keyframes } from '@mui/system';

// Create subtle pulse animation for chips
const pulseBorder = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(66, 133, 244, 0.4); }
  70% { box-shadow: 0 0 0 5px rgba(66, 133, 244, 0); }
  100% { box-shadow: 0 0 0 0 rgba(66, 133, 244, 0); }
`;

function Skills() {
  return (
    <Box>
      <Typography variant="h2" component="h2" gutterBottom>
        Skills
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        List relevant technical and other skills. Visually appealing presentation.
      </Typography>
      
      <Grid container spacing={2}>
        {skills.map((skill, index) => {
          // Create a unique delay for each chip for staggered effect
          const animationDelay = `${index * 0.1}s`;
          
          return (
            <Grid item key={index}>
              <Chip
                label={skill.label}
                color={skill.color}
                sx={{ 
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  height: { xs: '32px', sm: '36px' },
                  fontWeight: 500,
                  position: 'relative',
                  animation: `fadeIn 0.5s ease forwards`,
                  animationDelay,
                  opacity: 0, // Start with 0 opacity for fadeIn animation
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    opacity: 1, // Ensure opacity remains 1 on hover
                    transform: 'translateY(-3px)',
                    boxShadow: (theme) => `0 4px 8px ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.5)'}`,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-2px',
                    left: '10%',
                    width: '80%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, currentColor, transparent)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  },
                  '&:hover::after': {
                    opacity: 0.6,
                  },
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Skills;
