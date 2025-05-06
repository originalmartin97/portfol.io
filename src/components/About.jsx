import { Typography, Box, Grid, Avatar } from '@mui/material';
import { keyframes, styled } from '@mui/system';
import about from '../data/about';

// Enhanced extreme glitch effects for profile picture
const severeBrokenAnimation = keyframes`
  0% { transform: translate(0) scale(1) rotate(0); filter: brightness(1) contrast(1) hue-rotate(0) blur(0px); }
  1% { transform: translate(3px, -2px) scale(1.02) rotate(1deg); filter: brightness(1.4) contrast(1.6) hue-rotate(90deg) blur(1px); }
  2% { transform: translate(-6px, -4px) scale(0.95) rotate(-2deg); filter: brightness(0.6) contrast(1.8) hue-rotate(-60deg) saturate(200%) blur(0px); }
  3% { transform: translate(0, 6px) scale(1.04) rotate(0); filter: brightness(1.3) contrast(0.5) hue-rotate(30deg) blur(2px); }
  4% { transform: translate(-5px, -6px) scale(0.98) rotate(1deg); filter: brightness(0.8) contrast(1.2) hue-rotate(-45deg) blur(0px) saturate(300%); }
  5% { transform: translate(0) scale(1) rotate(0); filter: brightness(1) contrast(1) hue-rotate(0) blur(0px); }
  6% { transform: translate(-6px, 4px) scale(0.97) rotate(-3deg); filter: brightness(0.7) contrast(1.7) hue-rotate(-120deg) blur(3px); }
  7% { transform: translate(7px, -7px) scale(1.06) rotate(2deg); filter: brightness(1.6) contrast(0.8) hue-rotate(180deg) blur(0px); }
  8% { transform: translate(0) scale(1) rotate(0); filter: brightness(1) contrast(1) hue-rotate(0) blur(0px); }
  9% { transform: translate(8px, -3px) skew(15deg, 5deg) scale(1.08) rotate(3deg); filter: brightness(1.5) contrast(1.8) hue-rotate(240deg) blur(2px) invert(0.1); }
  10% { transform: translate(-5px, 5px) skew(-8deg, -3deg) scale(0.94); filter: brightness(0.7) contrast(1.3) hue-rotate(-30deg) blur(1px); }
  11% { transform: translate(0) scale(1) skew(0, 0) rotate(0); filter: brightness(1) contrast(1) hue-rotate(0) blur(0px); }
  20% { transform: translate(0) scale(1); filter: brightness(1) contrast(1) hue-rotate(0) blur(0px); }
  21% { transform: translate(-8px, 7px) scale(0.92) rotate(-4deg); filter: brightness(0.5) contrast(2.2) hue-rotate(-90deg) blur(3px) saturate(250%); }
  22% { transform: translate(7px, 0) scale(1.03) rotate(2deg); filter: brightness(1.7) contrast(0.6) hue-rotate(120deg) blur(0px); }
  23% { transform: translate(0) scale(1) rotate(0); filter: brightness(1) contrast(1) hue-rotate(0) blur(0px); }
  30% { transform: translate(0) scale(1) skew(0, 0) rotate(0); filter: brightness(1) contrast(1) hue-rotate(0) blur(0px); }
  31% { transform: translate(9px, -5px) skew(-20deg, 10deg) scale(1.1) rotate(-5deg); filter: brightness(1.8) contrast(0.5) hue-rotate(60deg) blur(4px) invert(0.2); }
  32% { transform: translate(-7px, -7px) skew(5deg, -10deg) scale(0.9) rotate(3deg); filter: brightness(0.4) contrast(2) hue-rotate(-150deg) blur(0px); }
  33% { transform: translate(0) scale(1) skew(0, 0) rotate(0); filter: brightness(1) contrast(1) hue-rotate(0) blur(0px); }
  40% { opacity: 1; }
  41% { opacity: 0.5; }
  41.5% { opacity: 0; }
  42% { opacity: 0.8; }
  42.5% { opacity: 0.2; }
  43% { opacity: 0.7; }
  43.5% { opacity: 0.1; }
  44% { opacity: 1; }
  44.5% { opacity: 0.3; }
  45% { opacity: 0.8; }
  45.5% { opacity: 0.2; }
  46% { opacity: 1; }
  70% { transform: translate(0) scale(1) rotate(0); filter: brightness(1) contrast(1) hue-rotate(0) blur(0px); }
  72% { transform: translate(-12px, -7px) scale(1.15) rotate(-6deg); filter: brightness(0.3) contrast(3) hue-rotate(-180deg) blur(2px) invert(0.3) saturate(400%); }
  72.5% { transform: translate(0) scale(1) rotate(3deg); filter: brightness(1) contrast(1) hue-rotate(0) blur(0px); }
  74% { transform: translate(10px, 10px) scale(0.85) rotate(8deg); filter: brightness(1.9) contrast(0.3) hue-rotate(90deg) blur(4px); }
  74.5% { transform: translate(-5px, -5px) scale(1.05) rotate(-2deg); filter: brightness(0.6) contrast(2) hue-rotate(-45deg) blur(0px); }
  76% { transform: translate(0) scale(1) rotate(0); filter: brightness(1) contrast(1) hue-rotate(0) blur(0px) invert(0); }
  90% { clip-path: inset(0 0 0 0); }
  91% { clip-path: inset(30% 0 20% 0); }
  91.5% { clip-path: inset(10% 20% 50% 10%); }
  92% { clip-path: inset(0 0 0 0); }
  92.5% { clip-path: inset(40% 30% 10% 50%); }
  93% { clip-path: inset(0 40% 0 20%); }
  93.5% { clip-path: inset(20% 10% 30% 0); }
  94% { clip-path: inset(0 0 0 0); }
  94.5% { clip-path: inset(60% 10% 10% 0); }
  95% { clip-path: inset(0 0 0 0); }
  100% { transform: translate(0) scale(1); filter: brightness(1) contrast(1) hue-rotate(0); }
`;

// Horizontal tearing animation
const tearingEffect = keyframes`
  0% { transform: translateX(0); }
  10% { transform: translateX(-5px); }
  20% { transform: translateX(5px); }
  30% { transform: translateX(-3px); }
  40% { transform: translateX(3px); }
  50% { transform: translateX(-8px); }
  60% { transform: translateX(8px); }
  70% { transform: translateX(-2px); }
  80% { transform: translateX(7px); }
  90% { transform: translateX(-7px); }
  100% { transform: translateX(0); }
`;

// RGB split animation - more extreme
const rgbSplitEffect = keyframes`
  0% { 
    text-shadow: -2px 0 #ff0000, 0 2px #00ff00, 2px 0 #0000ff; 
    opacity: 1; 
  }
  25% { 
    text-shadow: -5px -3px #ff0000, 3px 2px #00ff00, 5px -2px #0000ff; 
    opacity: 0.8; 
  }
  50% { 
    text-shadow: 4px 3px #ff0000, -3px -5px #00ff00, -4px 5px #0000ff; 
    opacity: 0.9; 
  }
  75% { 
    text-shadow: -6px 3px #ff0000, 6px -1px #00ff00, -2px -4px #0000ff; 
    opacity: 0.8; 
  }
  100% { 
    text-shadow: 3px -2px #ff0000, 0 4px #00ff00, -3px -2px #0000ff; 
    opacity: 1; 
  }
`;

// Void pulse animation with flare
const voidPulse = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(32, 130, 213, 0.7); }
  40% { transform: scale(1.08); box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.8), 0 0 40px 20px rgba(0, 225, 255, 0.6); }
  70% { transform: scale(1.12); box-shadow: 0 0 40px 20px rgba(255, 255, 255, 0), 0 0 80px 30px rgba(0, 225, 255, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(32, 130, 213, 0); }
`;

// More aggressive static noise
const staticNoise = keyframes`
  0% { background-position: 0 0; opacity: 0.4; }
  10% { background-position: -10% -10%; opacity: 0.6; }
  20% { background-position: 20% 20%; opacity: 0.2; }
  30% { background-position: 30% -20%; opacity: 0.8; }
  40% { background-position: -30% 30%; opacity: 0.3; }
  50% { background-position: -20% 10%; opacity: 0.7; }
  60% { background-position: 30% 0%; opacity: 0.5; }
  70% { background-position: 0% 20%; opacity: 0.9; }
  80% { background-position: -30% -30%; opacity: 0.4; }
  90% { background-position: 20% -20%; opacity: 0.6; }
  100% { background-position: 10% 10%; opacity: 0.5; }
`;

// Scan line effect for tearing
const scanLines = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 0 100%; }
`;

// Flare animation
const flareEffect = keyframes`
  0% { transform: translateX(-150%) rotate(45deg); opacity: 0; }
  20% { transform: translateX(-120%) rotate(45deg); opacity: 0.2; }
  35% { transform: translateX(-50%) rotate(45deg); opacity: 0.6; }
  49% { transform: translateX(0%) rotate(45deg); opacity: 0.8; }
  50% { transform: translateX(0%) rotate(45deg); opacity: 0.9; }
  51% { transform: translateX(0%) rotate(45deg); opacity: 0.8; }
  65% { transform: translateX(50%) rotate(45deg); opacity: 0.6; }
  80% { transform: translateX(120%) rotate(45deg); opacity: 0.2; }
  100% { transform: translateX(150%) rotate(45deg); opacity: 0; }
`;

// Styled wrapper for the extremely glitchy avatar
const GlitchyAvatarWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '50%',
  overflow: 'visible',
  '&:hover': {
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: '-15px',
      borderRadius: '50%',
      background: 'rgba(0,0,0,0)',
      border: `3px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.6)'}`,
      zIndex: -1,
      animation: `${voidPulse} 1.2s infinite cubic-bezier(0.36, 0, 0.66, -0.56)`,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.75' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.35 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      backgroundSize: '200% 200%',
      mixBlendMode: 'color-dodge',
      opacity: 0.5,
      animation: `${staticNoise} 0.15s infinite steps(2)`,
      zIndex: 5,
    },
    '& .MuiAvatar-root': {
      animation: `${severeBrokenAnimation} 3s infinite alternate`,
      filter: 'contrast(1.2)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(45deg, transparent, rgba(255,0,0,0.7), transparent, rgba(0,255,255,0.7), transparent)',
        backgroundSize: '400% 400%',
        mixBlendMode: 'color-dodge',
        animation: `${staticNoise} 0.3s infinite steps(5)`,
        opacity: 0.7,
        zIndex: 3,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        border: '3px solid transparent',
        background: 'linear-gradient(90deg, #ff0000, #00ff00, #0000ff, #ff0000)',
        backgroundSize: '400% 100%',
        animation: `${staticNoise} 2s infinite linear`,
        opacity: 0.4,
        mixBlendMode: 'overlay',
        filter: 'blur(4px)',
        zIndex: 2,
      },
    },
    // Scan line effect
    '.scan-lines': {
      opacity: 0.7,
    },
    // Flare effect element
    '.flare-effect': {
      opacity: 1,
      animation: `${flareEffect} 3s infinite ease-in-out`,
    },
    // Tearing effect elements
    '.tearing-container': {
      opacity: 1,
      '& .tear-line': {
        opacity: 1,
      }
    },
    // RGB channel clones
    '.avatar-glitch-clone': {
      opacity: 0.7,
      animation: `${rgbSplitEffect} 2s infinite alternate`,
      '&.red': {
        animation: `${tearingEffect} 0.5s infinite ease-in-out`,
      },
      '&.green': {
        animation: `${tearingEffect} 0.4s 0.1s infinite ease-in-out reverse`,
      },
      '&.blue': {
        animation: `${tearingEffect} 0.6s 0.2s infinite ease-in-out`,
      }
    }
  }
}));

// Clone images for the RGB splitting effect - enhanced
const AvatarGlitchClone = styled('div')(({ theme, image }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '50%',
  opacity: 0,
  zIndex: 1,
  mixBlendMode: 'screen',
  transition: 'opacity 0.2s',
  '&.red': {
    filter: 'url(#redChannel)',
    transform: 'translate(-5%, -2%)',
  },
  '&.green': {
    filter: 'url(#greenChannel)',
    transform: 'translate(2%, 5%)',
  },
  '&.blue': {
    filter: 'url(#blueChannel)',
    transform: 'translate(5%, -5%)',
  }
}));

// Scan line effect component
const ScanLines = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  background: `repeating-linear-gradient(
    0deg,
    ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'} 0px,
    ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'} 1px,
    transparent 1px,
    transparent 4px
  )`,
  backgroundSize: '100% 8px',
  opacity: 0,
  zIndex: 4,
  mixBlendMode: 'overlay',
  animation: `${scanLines} 4s linear infinite`,
  transition: 'opacity 0.2s',
}));

// Flare effect component
const Flare = styled('div')({
  position: 'absolute',
  top: '-100%',
  left: '-100%',
  width: '300%',
  height: '50%',
  background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)',
  transform: 'rotate(45deg)',
  opacity: 0,
  zIndex: 6,
  mixBlendMode: 'overlay',
  pointerEvents: 'none',
  transition: 'opacity 0.2s',
});

// Tearing container
const TearingContainer = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  overflow: 'hidden',
  zIndex: 4,
  opacity: 0,
  transition: 'opacity 0.2s',
});

// Individual tear line
const TearLine = styled('div')(({ offset, width, delay }) => ({
  position: 'absolute',
  top: `${offset}%`,
  left: 0,
  width: '100%',
  height: `${width}%`,
  background: 'rgba(255,255,255,0.2)',
  animation: `${tearingEffect} ${0.3 + Math.random() * 0.3}s ${delay}s infinite ease-in-out`,
  opacity: 0,
  transition: 'opacity 0.2s',
}));

function About() {
  // Using the profilePic path from the data file
  const profilePath = about.profilePic;
  
  // Generate tear lines data
  const tearLines = Array.from({ length: 12 }, (_, i) => ({
    offset: i * 8 + Math.random() * 4,  // Position vertically
    width: 0.5 + Math.random() * 1.5,   // Line thickness
    delay: Math.random() * 0.5,         // Animation delay
  }));

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
        {/* SVG filters for RGB channel separation and distortion */}
        <svg width="0" height="0" style={{ position: 'absolute', top: 0, left: 0 }}>
          <defs>
            <filter id="redChannel">
              <feColorMatrix 
                type="matrix" 
                values="1 0 0 0 0 
                        0 0 0 0 0 
                        0 0 0 0 0 
                        0 0 0 1 0"
              />
            </filter>
            <filter id="greenChannel">
              <feColorMatrix 
                type="matrix" 
                values="0 0 0 0 0 
                        0 1 0 0 0 
                        0 0 0 0 0 
                        0 0 0 1 0"
              />
            </filter>
            <filter id="blueChannel">
              <feColorMatrix 
                type="matrix" 
                values="0 0 0 0 0 
                        0 0 0 0 0 
                        0 0 1 0 0 
                        0 0 0 1 0"
              />
            </filter>
            <filter id="glitchFilter">
              <feTurbulence 
                type="fractalNoise" 
                baseFrequency="0.08" 
                numOctaves="4" 
                stitchTiles="stitch" 
                result="noise"
              />
              <feDisplacementMap 
                in="SourceGraphic" 
                in2="noise" 
                scale="20" 
                xChannelSelector="R" 
                yChannelSelector="G" 
              />
            </filter>
            <filter id="radialDistortion">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feDisplacementMap 
                in="SourceGraphic" 
                in2="blur" 
                scale="15" 
                xChannelSelector="R" 
                yChannelSelector="G" 
              />
            </filter>
          </defs>
        </svg>
        
        <GlitchyAvatarWrapper>
          <Avatar
            src={about.profilePic}
            alt={about.name}
            sx={{
              width: { xs: 200, md: 300 },
              height: { xs: 200, md: 300 },
              boxShadow: 3,
              position: 'relative',
              zIndex: 3
            }}
          />
          
          {/* RGB Channel clones for the splitting effect */}
          <AvatarGlitchClone image={profilePath} className="red avatar-glitch-clone" />
          <AvatarGlitchClone image={profilePath} className="green avatar-glitch-clone" />
          <AvatarGlitchClone image={profilePath} className="blue avatar-glitch-clone" />
          
          {/* Scan lines effect */}
          <ScanLines className="scan-lines" />
          
          {/* Flare effect */}
          <Flare className="flare-effect" />
          
          {/* Tearing effect */}
          <TearingContainer className="tearing-container">
            {tearLines.map((line, index) => (
              <TearLine 
                key={index}
                className="tear-line"
                offset={line.offset}
                width={line.width}
                delay={line.delay}
              />
            ))}
          </TearingContainer>
        </GlitchyAvatarWrapper>
      </Grid>
    </Grid>
  );
}

export default About;
