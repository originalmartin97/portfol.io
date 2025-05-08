# Technical Details
## Technology Stack
This project uses:
- React for component-based UI
- Material-UI for design system implementation
- Styled-components for advanced CSS-in-JS styling
- CSS animations for interactive elements
- LocalStorage for user preference persistence

## Project Structure
The application follows a logical organization:

- /components: Reusable UI components
- /data: Static content like project and skill information
- /context: Theme management and global state
- public: Static assets and images

## Responsive Strategy
The responsive approach uses:
- CSS Grid and Flexbox for layouts
- MUI's responsive breakpoints system
- Custom media queries for specialized cases
- Container constraints to prevent overflow

```jsx
// Base avatar with shape-shifting animations
'.MuiAvatar-root': {
  animation: `${severeBrokenAnimation} 3s infinite alternate, ${shapeShift} 7s infinite`,
  borderRadius: '0', // Allows shape to change from circle
  filter: 'contrast(1.2)',
  '&::before': { /* Additional overlay effects */ },
  '&::after': { /* Additional overlay effects */ }
},

// Color channel splitting with RGB clones
<AvatarGlitchClone image={profilePath} className="red avatar-glitch-clone" />
<AvatarGlitchClone image={profilePath} className="green avatar-glitch-clone" />
<AvatarGlitchClone image={profilePath} className="blue avatar-glitch-clone" />
```

### CSS Animation Keyframes
The glitch effects are defined using keyframes - these are like animation frames that tell CSS how to transition between visual states:
```jsx
// Shape-shifting animation changes the profile picture from a circle to various polygons
const shapeShift = keyframes`
  0% { 
    border-radius: 50%;
    clip-path: circle(50% at 50% 50%);
  }
  30% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 25% 100%, 25% 75%, 0% 75%);
  }
  60% {
    border-radius: 20% 0% 20% 0%;
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
  }
  /* More shape variations throughout the animation */
`;

// Broken screen effect
const severeBrokenAnimation = keyframes`
  0% { transform: translate(0) scale(1) rotate(0); filter: brightness(1) contrast(1) hue-rotate(0); }
  2% { transform: translate(-6px, -4px) scale(0.95) rotate(-2deg); filter: brightness(0.6) contrast(1.8) hue-rotate(-60deg); }
  /* More distortion frames */
`;
```

### SVG Filters for Advanced Effects
The RGB splitting effect uses SVG filters to separate color channels:
```jsx
<svg width="0" height="0" style={{ position: 'absolute' }}>
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
      {/* Similar matrix for green */}
    </filter>
    <filter id="blueChannel">
      {/* Similar matrix for blue */}
    </filter>
  </defs>
</svg>
```

**How It All Works Together**
1. When you hover over the profile picture, multiple animations trigger simultaneously
2. The base image changes shape using clip-path transitions
3. Three color-filtered clones of the image move slightly out of alignment
4. Additional effects like scan lines, flares, and "digital tearing" appear
5. Random glitch symbols and binary code appear around the image
6. All of these effects combined create the impression of a "glitching" digital display

## Persistent Theme with localStorage
### What is localStorage?
localStorage is a web browser feature that allows websites to store small amounts of data directly in your browser. Unlike cookies, this data remains even after closing the browser.

Think of it like a small notebook that each website can write information in, and that information stays there until explicitly deleted.

### How Theme Persistence Works
The website saves your theme preference (light or dark) in localStorage:
```jsx
export function CustomThemeProvider({ children }) {
  // Check localStorage for saved theme preference when site loads
  const [mode, setMode] = useState(() => {
    // Get saved theme from localStorage if available
    const savedTheme = localStorage.getItem('theme-mode');
    return savedTheme || 'light'; // Default to light if nothing saved
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  
  // Rest of theme provider code
}
```

**The Process Step-by-Step**
1. When the website first loads, it checks localStorage for a saved theme preference
2. If it finds one, it uses that theme; otherwise, it defaults to light mode
3. When you click the theme toggle button, it:
    - Changes the active theme using React's useState
    - Saves your new preference to localStorage
4. Next time you visit the site (even after closing your browser), it reads your preference from localStorage

This creates a seamless experience where the site "remembers" your preferred theme.

## Navbar Effect Implementation
The navbar includes a subtle glitching effect that appears on hover:
```jsx
const NavGlitchText = styled('span')`
  position: relative;
  display: inline-block;
  
  &:hover {
    &::before, &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
    
    &::before {
      color: #ff0000;
      animation: ${glitchEffect} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
      transform: translateX(-2px);
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    }
    
    &::after {
      color: #00ffff;
      animation: ${glitchEffect} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
      transform: translateX(2px);
      clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
    }
  }
`;
```

**How It Works**
1. The navigation links use a custom styled component
2. On hover, two pseudo-elements are created (::before and ::after)
3. Each pseudo-element contains a copy of the text, but in different colors (red and cyan)
4. Each colored copy is slightly offset and only shows part of the text (using clip-path)
5. Animations make these colored copies "glitch" by moving them slightly
6. This creates the RGB splitting effect commonly seen in digital glitches


## Easy Content Management
The website uses a data-driven approach to make content updates simple:

### Separate Data Files
Content is stored in separate JavaScript files:
```jsx
const about = {
  name: "Martin",
  bio: "I am a master's student in Computer Science at Széchenyi István University, Győr, Hungary. Passionate about computers, user experience and creative usage of tech in general.",
  profilePic: "/images/profile.jpeg" // store this image in /public/images
};

export default about;
```
```jsx
const projects = [
  {
    title: "My Portfolio",
    description: "A personal portfolio website built with React and Material UI.",
    image: "/images/portfolio.png",
    link: "https://www.google.com"
  },
  // More projects...
];

export default projects;
```

### Component-Data Separation
Components import and display this data rather than containing it:
```jsx
import about from '../data/about';

function About() {
  return (
    <Grid container spacing={{ xs: 2, sm: 4 }} alignItems="center">
      <Grid item xs={12} md={7}>
        <Typography variant="h1" component="h1" gutterBottom>
          Hello, I'm<br/>
          {about.name}
        </Typography>
        <Typography variant="body1" paragraph>
          {about.bio}
        </Typography>
      </Grid>
      {/* Avatar section */}
    </Grid>
  );
}
```

**Benefits of This Approach**
1. **Separation of Concerns:** Content editors don't need to touch component code
2. **Easy Updates:** Change text or images by editing simple data files
3. **Consistency:** Same data can be used in multiple places
5. **Scalability:** Add new projects or skills by just adding to the data arrays


## Custom Theme Implementation
The website uses Material UI's theming system for a consistent design:

### Theme Definition
```jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: { default: '#f8f7f3' }, // Cream background
    primary: {
      main: '#000000', // Black primary color
    },
    text: {
      primary: '#000000',
      secondary: '#333333',
    },
    // Skill chip colors
    warning: { main: '#ff9800' },
    // More color definitions...
  },
  typography: {
    // Font settings
  },
  components: {
    // Component customizations
  }
});

const darkTheme = createTheme({
  // Dark theme settings
});
```

### Theme Provider
The theme is applied using a provider component that wraps the entire application:
```jsx
export function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    // Get theme preference
  });
  
  // Create the current theme based on mode
  const theme = useMemo(() => 
    (mode === 'light' ? lightTheme : darkTheme), 
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Applies baseline styles */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

// In the main App file:
function App() {
  return (
    <CustomThemeProvider>
      <Navbar />
      <Container>
        {/* rest of the app */}
      </Container>
    </CustomThemeProvider>
  );
}
```

**How Theme Components Connect**
1. The ThemeProvider component from Material UI wraps the entire application
2. It receives a theme object (either light or dark)
3. All MUI components inside automatically receive and use this theme
4. Custom components can access the theme using styled-components or the useTheme hook
5. Theme toggling is handled by the context, which updates the active theme and saves the preference


## React State Management with useState
React's useState hook allows components to manage changing data:

Basic Usage
```jsx
import { useState } from 'react';

function Counter() {
  // Creates a state variable 'count' with initial value 0
  // Also creates a function 'setCount' to update it
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

### In the Portfolio
The portfolio uses useState in several ways:

1. **Theme Management:** Tracks if the site is in light or dark mode
```jsx
const [mode, setMode] = useState(() => {
  const savedTheme = localStorage.getItem('theme-mode');
  return savedTheme || 'light';
});
```
2. **Animation States:** Tracks the transition state during theme changes
```jsx
const [isTransitioning, setIsTransitioning] = useState(false);

const toggleTheme = () => {
  setIsTransitioning(true);
  setTimeout(() => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
    setTimeout(() => setIsTransitioning(false), 400);
  }, 100);
};
```
3. **Dynamic Content:** Manages glitch elements that change over time
```jsx
const [glitchElements, setGlitchElements] = useState([]);

useEffect(() => {
  const generateRandomGlitchElements = () => {
    // Create random glitch effects
    return elements;
  };
  
  setGlitchElements(generateRandomGlitchElements());
  
  const intervalId = setInterval(() => {
    setGlitchElements(generateRandomGlitchElements());
  }, 5000);
  
  return () => clearInterval(intervalId);
}, []);
```

**Why useState Is Important**
- Allows components to "remember" information between renders
- Triggers re-rendering when data changes
- Keeps UI in sync with changing data
- Enables interactive features like toggles, forms, and animations

By using useState with other React features, the portfolio creates dynamic, interactive elements that respond to user actions and maintain state across sessions.