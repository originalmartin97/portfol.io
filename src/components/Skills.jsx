import { Box, Chip, Typography, Stack } from '@mui/material';
import skills from '../data/skills';

function Skills() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        My Skills
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill.label}
            color={skill.color}
            variant="filled"
            sx={{ m: 0.5 }}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Skills;
