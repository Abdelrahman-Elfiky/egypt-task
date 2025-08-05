# FAQ Application - Arabic Government Portal

This is a React application that replicates an Arabic government portal FAQ page using React, Vite, React-Bootstrap, and custom CSS.

## Features

- **Header**: Navigation bar with logo, search functionality, and login button
- **FAQ Section**: Accordion-style frequently asked questions with expandable answers
- **Responsive Design**: Mobile-friendly layout with RTL (Right-to-Left) support
- **Modern UI**: Clean and professional design matching government portal standards
- **Footer**: Comprehensive footer with contact information and service links

## Technologies Used

- React 19.1.0
- Vite 7.0.4
- React-Bootstrap 2.10.10
- Bootstrap 5.3.7
- Custom CSS for Arabic styling

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with search and login
│   ├── Footer.jsx          # Footer with contact info and links
│   ├── AccordionSection.jsx # FAQ accordion component
│   ├── ContactCard.jsx     # Card component for FAQ answers
│   └── ContactModal.jsx    # Modal for contact form
├── pages/
│   └── Home.jsx           # Main page component
├── styles/
│   └── custom.css         # Custom styling for Arabic design
└── App.jsx               # Main app component
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## Key Features Implemented

- **RTL Layout**: Right-to-left text direction for Arabic content
- **Bootstrap Components**: Header, Footer, Accordion, Modal, Cards
- **Custom Styling**: Tailored CSS for government portal appearance
- **Interactive Elements**: Hover effects, modal dialogs, accordion functionality
- **Responsive Design**: Works on desktop and mobile devices

## Design Elements

- Blue color scheme (#0066cc) matching government branding
- Cairo font family for Arabic text
- Professional layout with proper spacing and typography
- Social media icons and contact information in footer
- Search functionality in header
- Login/registration buttons

## Components Breakdown

### Header Component
- Government logo and branding
- Navigation menu
- Search bar with icon
- Login button

### FAQ Section
- Main title with blue accent bar
- Collapsible accordion for questions
- Placeholder content in Arabic

### Contact Cards
- Three-column layout for FAQ answers
- Hover effects and professional styling
- Registration buttons

### Footer
- Government branding
- Service links and contact information
- Social media icons
- Hotline number

This project demonstrates the use of React-Bootstrap components, custom CSS styling, and proper Arabic RTL layout implementation for a government portal interface.
