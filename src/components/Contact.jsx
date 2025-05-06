import { Box, Typography, Stack, IconButton, Link } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import contact from '../data/contact';

function Contact() {
  return (
    <Box>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' } }}
      >
        Contact Me
      </Typography>
      <Typography 
        variant="body1" 
        gutterBottom
        sx={{ fontSize: { xs: '0.875rem', sm: '1rem' }, mb: { xs: 2, md: 3 } }}
      >
        Feel free to reach out to me via email or connect on my socials:
      </Typography>
      <Stack 
        direction="row" 
        spacing={{ xs: 1, sm: 2 }}
        sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}
      >
        <IconButton
          component={Link}
          href={`mailto:${contact.email}`}
          color="primary"
          aria-label="Email"
          sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
        >
          <Email fontSize="inherit" />
        </IconButton>

        <IconButton
          component={Link}
          href={contact.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          aria-label="LinkedIn"
          sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
        >
          <LinkedIn fontSize="inherit" />
        </IconButton>

        <IconButton
          component={Link}
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          aria-label="GitHub"
          sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
        >
          <GitHub fontSize="inherit" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Contact;
