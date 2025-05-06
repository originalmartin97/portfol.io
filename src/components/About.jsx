import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import about from '../data/about';

function About() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 600, boxShadow: 5 }}>
        <CardMedia
          component="img"
          height="300"
          image={about.profilePic}
          alt={about.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {about.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {about.bio}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default About;
