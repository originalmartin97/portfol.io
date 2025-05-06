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
        Provide contact information. Links to social media profiles.
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
