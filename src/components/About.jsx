import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import about from '../data/about';

function About() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ 
        width: { xs: '95%', sm: '80%', md: 600 }, 
        maxWidth: '100%', 
        boxShadow: 5 
      }}>
        <CardMedia
          component="img"
          sx={{
            height: { xs: 200, sm: 250, md: 300 },
            objectFit: 'cover',
          }}
          image={about.profilePic}
          alt={about.name}
        />
        <CardContent>
          <Typography 
            gutterBottom 
            variant="h4" 
            component="div" 
            sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' } }}
          >
            {about.name}
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}
          >
            {about.bio}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default About;
