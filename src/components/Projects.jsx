import { Grid, Card, CardContent, CardMedia, Typography, Button, CardActions, Box } from '@mui/material';
import projects from '../data/projects';

function Projects() {
  return (
    <Box>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }, mb: { xs: 2, md: 4 } }}
      >
        My Projects
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <CardMedia
                component="img"
                sx={{
                  height: { xs: 140, sm: 160, md: 180 },
                  objectFit: 'cover',
                }}
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="div"
                  sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
                >
                  {project.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ fontSize: { xs: '0.8125rem', sm: '0.875rem' } }}
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto' }}>
                <Button
                  size="small"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
