# Summit Electric Website Handoff

## Overview
We have built a bespoke website for Summit Electric, designed to convert local visitors into booked appointments and quote requests. Below is a page-by-page overview of the site.

### Home Page
- **Hero Section**: Engaging introduction with a strong call-to-action.
- **Trust Stack**: Displays trust badges and experience.
- **Services Grid**: Highlights popular services.
- **Testimonials**: Real customer feedback.
- **Footer**: Contains links and contact information.

### Services Page
- Detailed listing of services with sticky filters for easy navigation.

### About Page
- Company history, values, and team profiles to build trust.

### Gallery Page
- High-resolution project gallery showcasing before/after images.

### Service Areas Page
- Interactive map and list of serviceable locations.

### FAQ Page
- Accordion-based support center for customer inquiries.

### Contact Page
- Multi-step Quote Form Wizard for lead generation.

## Changing Images
All images are controlled from ONE file: `src/config/images.ts`.
- Each image slot has a comment explaining where it appears on the site.
- To swap an image: replace the `src` URL and update the `alt` text.
- Supported formats: any web-accessible image URL (Cloudinary, S3, etc.).
- For best results: use images at least 1200px wide, landscape orientation for heroes.
- After saving the file, the change appears on every page that uses that image.

## Changing Logo
If a logo slot exists, you can swap it in the same `src/config/images.ts` file.

## Changing Colors
Modify the Tailwind config in `tailwind.config.js` to change colors.

## Changing Fonts
Update the Google Font in `layout.tsx` to change fonts.

## Updating Text Content
To update text content, edit the respective page files in the `src/pages` directory.

## Requesting Changes
For any changes or updates, please contact Pegrio support.

## Hosting and Maintenance
- Ensure your domain is connected and SSL is enabled.
- Regularly check for updates and performance optimizations.

## Contact
For support, reach out to Pegrio at support@pegrio.com.