import { Box, Chip, Typography, Grid } from '@mui/material';
import skills from '../data/skills';

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
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              label={skill.label}
              variant="outlined"
              sx={{ 
                borderColor: 'text.primary',
                color: 'text.primary',
                borderRadius: '4px',
                fontSize: { xs: '0.875rem', sm: '1rem' },
                height: { xs: '32px', sm: '36px' } 
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
