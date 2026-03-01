import { Typography, Box, Grid, Avatar, Chip } from '@mui/material';
import { keyframes, styled } from '@mui/system';
import { useState, useEffect } from 'react';
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

// New animations for glitch symbols
const symbolAppear = keyframes`
  0% { opacity: 0; transform: scale(0.2) rotate(0deg); }
  30% { opacity: 0.9; transform: scale(1.2) rotate(20deg); }
  60% { opacity: 0.7; transform: scale(0.9) rotate(-15deg); }
  80% { opacity: 0.9; transform: scale(1.1) rotate(5deg); }
  100% { opacity: 0; transform: scale(0.3) rotate(0deg); }
`;

const symbolGlitch = keyframes`
  0% { transform: translate(0, 0) skew(0, 0); filter: blur(0) hue-rotate(0deg); }
  10% { transform: translate(3px, -2px) skew(10deg, 2deg); filter: blur(1px) hue-rotate(90deg); }
  20% { transform: translate(-4px, 0) skew(-5deg, 0); filter: blur(0) hue-rotate(0deg); }
  30% { transform: translate(0, 3px) skew(0, -10deg); filter: blur(2px) hue-rotate(-90deg); }
  40% { transform: translate(2px, -2px) skew(-2deg, 5deg); filter: blur(0) hue-rotate(45deg); }
  50% { transform: translate(0, 0) skew(0, 0); filter: blur(0) hue-rotate(0deg); }
  60% { transform: translate(-3px, 1px) skew(5deg, -5deg); filter: blur(1px) hue-rotate(-45deg); }
  70% { transform: translate(5px, 0) skew(0, 8deg); filter: blur(0) hue-rotate(90deg); }
  80% { transform: translate(0, -3px) skew(-8deg, 0); filter: blur(2px) hue-rotate(180deg); }
  90% { transform: translate(-2px, 2px) skew(3deg, -3deg); filter: blur(0) hue-rotate(-180deg); }
  100% { transform: translate(0, 0) skew(0, 0); filter: blur(0) hue-rotate(0deg); }
`;

const codeMatrixEffect = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  5% { opacity: 1; }
  95% { opacity: 1; }
  100% { opacity: 0; transform: translateY(20px); }
`;

// Add these new keyframes for the glitchy border effect
const glitchyBorder = keyframes`
  0% { 
    clip-path: circle(50% at 50% 50%); 
    border-color: rgba(0, 255, 255, 0.7);
    opacity: 0.3;
    transform: scale(1);
  }
  10% { 
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
    border-color: rgba(255, 0, 0, 0.8);
    opacity: 0.8;
    transform: scale(1.02) rotate(1deg);
  }
  20% { 
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    border-color: rgba(0, 255, 0, 0.7); 
    opacity: 0.5;
    transform: scale(0.98) rotate(-1deg);
  }
  30% { 
    clip-path: circle(50% at 50% 50%);
    border-color: rgba(255, 255, 255, 0.8);
    opacity: 0.2;
    transform: scale(1.05);
  }
  40% { 
    clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
    border-color: rgba(255, 0, 255, 0.6);
    opacity: 0.9;
    transform: scale(1) skew(2deg, 0deg);
  }
  50% { 
    clip-path: ellipse(50% 50% at 50% 50%);
    border-color: rgba(0, 255, 255, 0.5);
    opacity: 0;
    transform: scale(1.1) skew(-2deg, 0deg);
  }
  60% { 
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border-color: rgba(255, 255, 0, 0.7);
    opacity: 0.7;
    transform: scale(0.95) rotate(2deg);
  }
  70% { 
    clip-path: ellipse(40% 50% at 50% 50%);
    border-color: rgba(0, 255, 255, 0.8);
    opacity: 0.3;
    transform: scale(1.08) rotate(-1deg);
  }
  80% { 
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    border-color: rgba(255, 0, 0, 0.5);
    opacity: 0;
    transform: scale(0.9);
  }
  90% { 
    clip-path: circle(40% at 50% 50%);
    border-color: rgba(255, 255, 255, 0.7);
    opacity: 0.6;
    transform: scale(1.03) skew(0deg, 2deg);
  }
  100% { 
    clip-path: circle(50% at 50% 50%);
    border-color: rgba(0, 255, 255, 0.7);
    opacity: 0.3;
    transform: scale(1);
  }
`;

const glitchyBorder2 = keyframes`
  0% { 
    clip-path: circle(45% at 50% 50%); 
    border-color: rgba(255, 0, 0, 0.4);
    opacity: 0.2;
    transform: scale(1.1);
  }
  15% { 
    clip-path: polygon(65% 0%, 90% 50%, 65% 100%, 10% 100%, 35% 50%, 10% 0%);
    border-color: rgba(0, 255, 255, 0.6);
    opacity: 0.7;
    transform: scale(0.95) rotate(-1.5deg);
  }
  30% { 
    clip-path: polygon(40% 0%, 90% 35%, 72% 100%, 28% 100%, 10% 35%);
    border-color: rgba(255, 255, 0, 0.5); 
    opacity: 0;
    transform: scale(1.05) rotate(1deg);
  }
  45% { 
    clip-path: ellipse(45% 45% at 50% 50%);
    border-color: rgba(255, 0, 255, 0.7);
    opacity: 0.5;
    transform: scale(0.9);
  }
  60% { 
    clip-path: polygon(60% 0%, 100% 30%, 90% 70%, 65% 100%, 35% 100%, 10% 70%, 0% 30%);
    border-color: rgba(0, 255, 0, 0.5);
    opacity: 0.2;
    transform: scale(1.12) skew(-1deg, 1deg);
  }
  75% { 
    clip-path: circle(48% at 52% 48%);
    border-color: rgba(255, 0, 0, 0.6);
    opacity: 0.8;
    transform: scale(1) skew(1deg, -1deg);
  }
  90% { 
    clip-path: polygon(55% 0%, 100% 35%, 90% 85%, 40% 100%, 10% 85%, 0% 35%);
    border-color: rgba(0, 255, 255, 0.5);
    opacity: 0;
    transform: scale(0.98) rotate(-2deg);
  }
  100% { 
    clip-path: circle(45% at 50% 50%);
    border-color: rgba(255, 0, 0, 0.4);
    opacity: 0.2;
    transform: scale(1.1);
  }
`;

const borderGlitch = keyframes`
  0% { border-width: 3px; }
  10% { border-width: 5px; }
  20% { border-width: 1px; }
  30% { border-width: 4px; }
  40% { border-width: 2px; }
  50% { border-width: 6px; }
  60% { border-width: 3px; }
  70% { border-width: 5px; }
  80% { border-width: 2px; }
  90% { border-width: 4px; }
  100% { border-width: 3px; }
`;

// Add this new animation for shape distortion
const shapeShift = keyframes`
  0% { 
    border-radius: 50%;
    clip-path: circle(50% at 50% 50%);
  }
  10% { 
    border-radius: 0;
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  }
  20% {
    clip-path: polygon(50% 0%, 80% 30%, 100% 0%, 100% 70%, 80% 100%, 50% 70%, 20% 100%, 0% 70%, 0% 0%, 20% 30%);
  }
  30% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 25% 100%, 25% 75%, 0% 75%);
  }
  40% {
    border-radius: 0% 70% 0% 70%;
    clip-path: none;
  }
  50% {
    border-radius: 50%;
    clip-path: ellipse(30% 50% at 50% 50%);
  }
  60% {
    border-radius: 20% 0% 20% 0%;
    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
  }
  70% {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }
  80% {
    clip-path: circle(40% at 60% 40%);
  }
  90% {
    border-radius: 70% 0% 70% 0%;
    clip-path: none;
  }
  100% { 
    border-radius: 50%;
    clip-path: circle(50% at 50% 50%);
  }
`;

// Add a jagged, glitchy shape animation
const jagggedShape = keyframes`
  0% {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }
  10% {
    clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%);
  }
  20% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  30% {
    clip-path: polygon(50% 0%, 50% 30%, 100% 30%, 100% 70%, 50% 70%, 50% 100%, 0% 100%, 0% 0%);
  }
  40% {
    clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
  }
  50% {
    clip-path: polygon(0% 0%, 40% 0%, 50% 30%, 60% 0%, 100% 0%, 100% 100%, 70% 100%, 50% 70%, 30% 100%, 0% 100%);
  }
  60% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 55% 70%, 55% 100%, 45% 100%, 45% 70%, 0% 70%);
  }
  70% {
    clip-path: polygon(0% 30%, 30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%);
  }
  80% {
    clip-path: polygon(50% 0%, 61% 20%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 31% 57%, 2% 35%, 39% 20%);
  }
  90% {
    clip-path: polygon(0% 0%, 20% 0%, 20% 20%, 40% 20%, 40% 0%, 60% 0%, 60% 20%, 80% 20%, 80% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }
`;

// Add random digital break animation
const digitalBreak = keyframes`
  0%, 100% { 
    clip-path: inset(0 0 0 0);
  }
  10% {
    clip-path: inset(15% 0 15% 0);
  }
  20% {
    clip-path: inset(0 15% 0 15%);
  }
  30% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 30%, 0% 60%);
  }
  40% {
    clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 66% 100%, 66% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
  50% {
    clip-path: inset(0 0 0 0);
  }
  60% {
    clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 25% 0%, 25% 50%, 75% 50%, 75% 0%);
  }
  70% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 75% 100%, 75% 25%, 25% 25%, 25% 75%, 75% 75%, 75% 100%, 0% 100%);
  }
  80% {
    clip-path: inset(15% 15% 15% 15%);
  }
  90% {
    clip-path: inset(0 0 0 0);
  }
`;

const GlitchyAvatarWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '50%',
  overflow: 'visible',
  '&:hover': {
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      inset: '-15px',
      borderRadius: '0',
      background: 'transparent',
      pointerEvents: 'none',
      zIndex: -1,
    },
    '&::before': {
      border: `4px solid ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.8)'}`,
      animation: `${glitchyBorder} 8s infinite cubic-bezier(0.36, 0, 0.66, 1), ${borderGlitch} 3s infinite steps(10)`,
    },
    '&::after': {
      border: `2px dashed ${theme.palette.mode === 'light' ? 'rgba(255,0,0,0.4)' : 'rgba(0,255,255,0.6)'}`,
      animation: `${glitchyBorder2} 7s infinite cubic-bezier(0.36, 0, 0.66, 1) reverse`,
      animationDelay: '0.3s',
    },
    // Apply shape-shifting animations to the avatar
    '.MuiAvatar-root': {
      animation: `${severeBrokenAnimation} 3s infinite alternate, ${shapeShift} 7s infinite`,
      borderRadius: '0', // Remove default circular border to allow shape-shifting
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
        animation: `${staticNoise} 0.3s infinite steps(5), ${digitalBreak} 4s infinite steps(1)`,
        opacity: 0.7,
        zIndex: 3,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: 'inherit', // Match the changing border radius
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
    '.scan-lines': { opacity: 0.7 },
    '.flare-effect': {
      opacity: 1,
      animation: `${flareEffect} 3s infinite ease-in-out`,
    },
    '.tearing-container': {
      opacity: 1,
      '& .tear-line': { opacity: 1 },
    },
    // Apply shape-shifting animations to RGB clones
    '.avatar-glitch-clone': {
      opacity: 0.7,
      borderRadius: '0', // Remove default circular border
      '&.red': {
        animation: `${tearingEffect} 0.5s infinite ease-in-out, ${jagggedShape} 9s infinite alternate`,
      },
      '&.green': {
        animation: `${tearingEffect} 0.4s 0.1s infinite ease-in-out reverse, ${shapeShift} 8s infinite alternate-reverse`,
      },
      '&.blue': {
        animation: `${tearingEffect} 0.6s 0.2s infinite ease-in-out, ${rgbSplitEffect} 2s infinite alternate`,
      }
    },
    '.glitch-symbol-container': { opacity: 1 },
    '.glitchy-surround': { 
      opacity: 1,
      animation: `${voidPulse} 1.5s infinite cubic-bezier(0.36, 0, 0.66, -0.56)`,
    }
  },
  '.glitch-symbol-container': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    transition: 'opacity 0.2s',
    pointerEvents: 'none',
  }
}));

const GlitchySurround = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '-10px',
  left: '-10px',
  right: '-10px',
  bottom: '-10px',
  background: 'transparent',
  zIndex: -2,
  opacity: 0,
  transition: 'opacity 0.2s',
  pointerEvents: 'none',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: theme.palette.mode === 'light' 
      ? 'linear-gradient(45deg, rgba(0,0,0,0.1), rgba(0,80,255,0.2), rgba(0,0,0,0.1))'
      : 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(0,255,255,0.2), rgba(255,255,255,0.1))',
    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
    animation: `${glitchyBorder} 10s infinite alternate cubic-bezier(0.36, 0, 0.66, 1)`,
    opacity: 0.5,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '-5px',
    background: 'transparent',
    border: theme.palette.mode === 'light'
      ? '1px dashed rgba(0,0,0,0.2)'
      : '1px dashed rgba(255,255,255,0.3)',
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    animation: `${glitchyBorder2} 8s infinite reverse cubic-bezier(0.36, 0, 0.66, 1)`,
  }
}));

const AvatarGlitchClone = styled('div')(({ theme, image }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // Remove borderRadius: '50%' to allow shape changes
  opacity: 0,
  zIndex: 1,
  mixBlendMode: 'screen',
  transition: 'opacity 0.2s',
  overflow: 'hidden', // Hide overflow during shape changes
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

const GlitchSymbol = styled('div')(({ top, left, size, delay, duration, inverse, color }) => ({
  position: 'absolute',
  top: `${top}%`,
  left: `${left}%`,
  fontFamily: 'monospace',
  fontSize: `${size}rem`,
  color: color || 'rgba(255, 255, 255, 0.8)',
  textShadow: '0 0 5px rgba(0, 255, 255, 0.8), 0 0 10px rgba(0, 255, 255, 0.5)',
  zIndex: 10,
  opacity: 0,
  transform: 'scale(0)',
  pointerEvents: 'none',
  animationName: `${symbolAppear}, ${symbolGlitch}`,
  animationDuration: `${duration}s, 0.5s`,
  animationDelay: `${delay}s, ${delay}s`,
  animationIterationCount: inverse ? '1, infinite' : 'infinite, infinite',
  animationTimingFunction: 'ease-in-out, linear',
  animationDirection: inverse ? 'normal, alternate' : 'alternate, normal',
}));

const CodeMatrix = styled('div')(({ left, delay, size }) => ({
  position: 'absolute',
  top: '-20%',
  left: `${left}%`,
  color: '#0f0',
  fontSize: `${size}rem`,
  fontFamily: 'monospace',
  textShadow: '0 0 5px rgba(0, 255, 0, 0.7)',
  opacity: 0,
  zIndex: 8,
  animation: `${codeMatrixEffect} ${2 + Math.random() * 3}s ${delay}s infinite linear`,
  pointerEvents: 'none',
}));

const BinaryStream = styled('div')(({ top, left, duration }) => ({
  position: 'absolute',
  top: `${top}%`,
  left: `${left}%`,
  fontFamily: 'monospace',
  fontSize: '0.7rem',
  color: 'rgba(0, 255, 255, 0.8)',
  zIndex: 9,
  opacity: 0,
  transform: 'rotate(90deg)',
  width: '20px', 
  height: '100px',
  overflow: 'hidden',
  animation: `${codeMatrixEffect} ${duration}s infinite linear`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  pointerEvents: 'none',
}));

const glitchSymbols = [
  '⚠', '⚡', '⚙', '⛔', '⟁', '⌁', '⌘', '⍾', '⎔', '⎙', '▓', '█', '▒', '░', 
  '☢', '☣', '⚛', '∞', '⌬', '⎊', '⌖', '⚔', '⚒', '⚕', '⚛', '⚫', '⚪', '✿', 
  '∴', '∵', '✶', '✷', '✸', '✹', '✺', '✻', '✼', '❄', '❅', '❆', '❇',
  '🔥', '💀', '👾', '🤖', '💣', '⏱', '🧠', '💻', '📡', '🛰️', '🔌'
];

const glitchText = [
  'ERROR', 'VOID', 'GLITCH', 'SYSTEM FAILURE', 'CORRUPTED', 'DELETED',
  '404', 'FATAL', 'OVERRIDE', 'BUFFER', 'SEGFAULT', 'NULL', 'UNDEF',
  'ANOMALY', 'BREACH', 'CHAOS', 'ENTROPY', 'QUANTUM', 'PARADOX'
];

const codePatterns = [
  '10110101', '01001101', 'DEADBEEF', 'C0FFEE', 'sudo rm -rf', 
  '</div>', '<h4ck3d/>', '{overflow:hidden}', 'div.corrupted', 
  '255.255.255.0', 'localhost', 'bash -i >& /dev/tcp/'
];

function About() {
  const profilePath = about.profilePic;
  
  const tearLines = Array.from({ length: 12 }, (_, i) => ({
    offset: i * 8 + Math.random() * 4,
    width: 0.5 + Math.random() * 1.5,
    delay: Math.random() * 0.5,
  }));

  const [glitchElements, setGlitchElements] = useState([]);
  
  useEffect(() => {
    const generateRandomGlitchElements = () => {
      const numSymbols = 8 + Math.floor(Math.random() * 7);
      const numTextElements = 3 + Math.floor(Math.random() * 3);
      const numCodeElements = 4 + Math.floor(Math.random() * 3);
      const numBinaryStreams = 2 + Math.floor(Math.random() * 3);
      
      const elements = [];
      
      for (let i = 0; i < numSymbols; i++) {
        const symbol = glitchSymbols[Math.floor(Math.random() * glitchSymbols.length)];
        elements.push({
          type: 'symbol',
          content: symbol,
          top: Math.random() * 140 - 20,
          left: Math.random() * 140 - 20,
          size: 1 + Math.random() * 2,
          delay: Math.random() * 3,
          duration: 1 + Math.random() * 3,
          inverse: Math.random() > 0.5,
          color: Math.random() > 0.6 ? 
            `hsl(${Math.floor(Math.random() * 360)}, 100%, 70%)` : 
            'rgba(255, 255, 255, 0.8)'
        });
      }
      
      for (let i = 0; i < numTextElements; i++) {
        const text = glitchText[Math.floor(Math.random() * glitchText.length)];
        elements.push({
          type: 'text',
          content: text,
          top: Math.random() * 140 - 20,
          left: Math.random() * 140 - 20,
          size: 0.5 + Math.random() * 0.8,
          delay: Math.random() * 2.5,
          duration: 2 + Math.random() * 2,
          inverse: Math.random() > 0.7,
          color: Math.random() > 0.7 ? 
            `rgba(255, ${Math.floor(Math.random() * 100) + 100}, ${Math.floor(Math.random() * 100) + 100}, 0.9)` : 
            'rgba(0, 255, 255, 0.8)'
        });
      }
      
      for (let i = 0; i < numCodeElements; i++) {
        const code = codePatterns[Math.floor(Math.random() * codePatterns.length)];
        elements.push({
          type: 'code',
          content: code,
          left: Math.random() * 100,
          delay: Math.random() * 3,
          size: 0.5 + Math.random() * 0.5,
        });
      }
      
      for (let i = 0; i < numBinaryStreams; i++) {
        elements.push({
          type: 'binary',
          content: Array(15).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join(''),
          top: Math.random() * 100,
          left: Math.random() * 100,
          duration: 1.5 + Math.random() * 2,
        });
      }
      
      return elements;
    };
    
    setGlitchElements(generateRandomGlitchElements());
    
    const intervalId = setInterval(() => {
      setGlitchElements(generateRandomGlitchElements());
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* TL;DR Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom 
          sx={{ 
            fontWeight: 600,
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            mb: 2,
            color: 'primary.main'
          }}
        >
          TL;DR
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 1.5,
            maxWidth: '100%'
          }}
        >
          {about.tldr.map((item, index) => (
            <Chip
              key={index}
              label={item}
              variant="outlined"
              sx={{
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                height: 'auto',
                py: 0.5,
                px: 1,
                borderRadius: 2,
                borderColor: 'primary.main',
                color: 'primary.main',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  transform: 'translateY(-2px)',
                  boxShadow: 2
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Main About Content */}
      <Grid container spacing={{ xs: 2, sm: 4 }} alignItems="center">
      <Grid item xs={12} md={7}>
        <Typography variant="h1" component="h1" gutterBottom 
          sx={{ 
            fontWeight: 500,
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }, // Smaller font on small screens
            wordBreak: 'break-word' // Ensure text wraps properly
          }}
        >
          Hello, I'm<br/>
          {about.name}
        </Typography>
        <Typography variant="body1" paragraph>
          {about.bio}
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
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
            <filter id="textDistort">
              <feTurbulence baseFrequency="0.05" numOctaves="2" result="turbulence" />
              <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="10" />
            </filter>
          </defs>
        </svg>
        
        <GlitchyAvatarWrapper>
          <Avatar
            src={about.profilePic}
            alt={about.name}
            sx={{
              width: { xs: 180, sm: 200, md: 300 }, // Smaller on very small screens
              height: { xs: 180, sm: 200, md: 300 }, // Smaller on very small screens
              boxShadow: 3,
              position: 'relative',
              zIndex: 3
            }}
          />
          
          <AvatarGlitchClone image={profilePath} className="red avatar-glitch-clone" />
          <AvatarGlitchClone image={profilePath} className="green avatar-glitch-clone" />
          <AvatarGlitchClone image={profilePath} className="blue avatar-glitch-clone" />
          
          <Box className="glitch-symbol-container">
            {glitchElements.map((element, index) => {
              if (element.type === 'symbol' || element.type === 'text') {
                return (
                  <GlitchSymbol 
                    key={index}
                    top={element.top}
                    left={element.left}
                    size={element.size}
                    delay={element.delay}
                    duration={element.duration}
                    inverse={element.inverse}
                    color={element.color}
                  >
                    {element.content}
                  </GlitchSymbol>
                );
              } else if (element.type === 'code') {
                return (
                  <CodeMatrix
                    key={index}
                    left={element.left}
                    delay={element.delay}
                    size={element.size}
                  >
                    {element.content}
                  </CodeMatrix>
                );
              } else if (element.type === 'binary') {
                return (
                  <BinaryStream
                    key={index}
                    top={element.top}
                    left={element.left}
                    duration={element.duration}
                  >
                    {element.content.split('').map((bit, i) => (
                      <span key={i} style={{ opacity: Math.random() * 0.7 + 0.3 }}>{bit}</span>
                    ))}
                  </BinaryStream>
                );
              }
              return null;
            })}
          </Box>
          
          <ScanLines className="scan-lines" />
          
          <Flare className="flare-effect" />
          
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
          
          <GlitchySurround />
        </GlitchyAvatarWrapper>
      </Grid>
    </Grid>
    </>
  );
}

export default About;
