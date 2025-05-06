import { Typography, Box, Grid, Avatar } from '@mui/material';
import about from '../data/about';

function About() {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={7}>
        <Typography variant="h1" component="h1" gutterBottom sx={{ fontWeight: 500 }}>
          Hello, I'm<br/>
          {about.name}
        </Typography>
        <Typography variant="body1" paragraph>
          {about.bio}
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar
          src={about.profilePic}
          alt={about.name}
          sx={{
            width: { xs: 200, md: 300 },
            height: { xs: 200, md: 300 },
            boxShadow: 3
          }}
        />
      </Grid>
    </Grid>
  );
}

export default About;
