import { Box, Typography, Stack, IconButton, Link } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import contact from '../data/contact';

function Contact() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Typography variant="body1" gutterBottom>
        Feel free to reach out to me via email or connect on my socials:
      </Typography>
      <Stack direction="row" spacing={2}>
        <IconButton
          component={Link}
          href={`mailto:${contact.email}`}
          color="primary"
          aria-label="Email"
        >
          <Email />
        </IconButton>

        <IconButton
          component={Link}
          href={contact.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </IconButton>

        <IconButton
          component={Link}
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          aria-label="GitHub"
        >
          <GitHub />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Contact;
