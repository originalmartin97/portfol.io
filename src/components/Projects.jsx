import { Grid, Card, CardContent, CardMedia, Typography, Button, CardActions, Box } from '@mui/material';
import projects from '../data/projects';

function Projects() {
  return (
    <Box>
      <Typography variant="h2" component="h2" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Here you can find some of my projects. I have worked on various projects, including personal and client work. Each project showcases my skills and expertise in web development.
        I have experience with a variety of technologies and frameworks, and I am always eager to learn new ones. If you are interested in collaborating on a project or have any questions, feel free to reach out!
        I am always open to new opportunities and challenges. Let's create something amazing together!
      </Typography>
      
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card 
              elevation={0}
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                bgcolor: 'transparent',
                borderRadius: 0
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: { xs: 200, sm: 240, md: 280 },
                  objectFit: 'cover',
                }}
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ px: 0 }}>
                <Typography 
                  gutterBottom 
                  variant="h5" 
                  component="div"
                >
                  {project.title}
                </Typography>
                <Typography 
                  variant="body2"
                >
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ mt: 'auto', px: 0 }}>
                <Button
                  size="small"
                  color="warning"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ pl: 0, textTransform: 'none' }}
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
