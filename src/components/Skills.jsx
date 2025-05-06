import { Box, Chip, Typography, Stack } from '@mui/material';
import skills from '../data/skills';

function Skills() {
  return (
    <Box>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }, mb: { xs: 2, md: 3 } }}
      >
        My Skills
      </Typography>
      <Stack 
        direction="row" 
        spacing={{ xs: 1, sm: 2 }} 
        flexWrap="wrap"
        sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}
      >
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill.label}
            color={skill.color}
            variant="filled"
            sx={{ 
              m: 0.5, 
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              height: { xs: '28px', sm: '32px' } 
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Skills;
