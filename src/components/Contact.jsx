import { Box, Typography, Stack, IconButton } from '@mui/material';
import { Email, LinkedIn, GitHub } from '@mui/icons-material';
import contact from '../data/contact';

function Contact() {
  return (
    <Box>
      <Typography variant="h2" component="h2" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        If you would like to get in touch, feel free to reach out via email or connect with me on LinkedIn or GitHub. I am always open to discussing new opportunities, collaborations, or just having a chat about technology and web development.
        <br />
        <br />
        I look forward to hearing from you!
      </Typography>
      
      <Stack direction="row" spacing={2}>
        <IconButton
          href={`mailto:${contact.email}`}
          aria-label="Email"
          sx={{ 
            color: 'text.primary',
            p: 1
          }}
        >
          <Email fontSize="large" />
        </IconButton>

        <IconButton
          href={contact.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          sx={{ 
            color: 'text.primary',
            p: 1
          }}
        >
          <LinkedIn fontSize="large" />
        </IconButton>

        <IconButton
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          sx={{ 
            color: 'text.primary',
            p: 1
          }}
        >
          <GitHub fontSize="large" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Contact;
