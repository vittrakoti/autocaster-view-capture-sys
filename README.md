# AutoCaster View - Commemorative Photo/Video Capture System

A modern React + Vite web application for capturing, previewing, and downloading commemorative photos and short videos. Built with Japanese language support for event photo services.

## Features

### 📸 Photo Capture
- Real-time camera preview with connection status
- Photo capture and preview functionality
- Photo download capabilities
- Progress tracking during save operations

### 🎥 Video Capture
- 3-second video recording mode
- Video preview before saving
- Progress tracking for video processing
- Video download support

### 💳 Payment Integration
- Stripe payment gateway integration
- Secure payment processing for photo/video services

### 🎨 User Interface
- Responsive design (mobile & desktop)
- Tailwind CSS styling
- Icon support (Font Awesome + React Icons)
- Overlay context system for UI overlays

### 📚 Additional Features
- Photo/Video library components
- Help and policy pages
- Thank you message page
- Footer navigation

## Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Styling:** Tailwind CSS 4.1.18
- **Routing:** React Router DOM 7.13.0
- **Icons:** Font Awesome + React Icons
- **Icons Styling:** Font Awesome React

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── CameraPreview.jsx
│   ├── CamConnectionStatus.jsx
│   ├── Footer.jsx
│   └── LibraryComponents.jsx
├── context/            # React Context for state management
│   └── OverlayContext.jsx
├── pages/              # Page components organized by feature
│   ├── Home.jsx        # Landing page
│   ├── ModeSelection.jsx # Select photo/video mode
│   ├── Help.jsx
│   ├── Policies.jsx
│   ├── photos/         # Photo capture workflow
│   ├── video3sec/      # Video capture workflow
│   └── services/       # External service integrations
│       └── StripeService.jsx
├── App.jsx             # Main app component with routing
└── index.css           # Global styles
```

## Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## User Flow

1. **Home Page** - Welcome screen with mode selection
2. **Mode Selection** - Choose between Photo or Video mode
3. **Preparation** - Camera setup and preview
4. **Capture** - Take photo/video
5. **Preview** - Review captured content
6. **Processing** - Progress bar during save
7. **Download** - Download the final file
8. **Payment** - Optional Stripe payment processing
9. **Thank You** - Completion message

## Configuration Files

- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS customization
- `eslint.config.js` - Code linting rules
- `package.json` - Dependencies and scripts

