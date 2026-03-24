# Client Handoff for Summit Electric Website

## What Was Built
We have created a professional, multi-page website for Summit Electric, designed to attract and convert visitors into leads. Here’s a brief overview of each page:

- **Home Page**: Features a compelling hero section, service hub, trust narrative, and a lead capture form.
- **Services Page**: Lists all services offered with detailed descriptions and pricing.
- **About Page**: Shares the origin story of Summit Electric and introduces the team.
- **Gallery Page**: Displays a before/after photo gallery showcasing completed projects.
- **Service Areas Page**: Provides a map and list of areas served.
- **FAQ Page**: Answers common questions in an accordion format.
- **Contact Page**: Includes a contact form and map integration for easy access.

## Changing Images
All images on the site are controlled from ONE file: `src/config/images.ts`. Each image slot has a comment explaining where it appears on the site. 

### To Swap an Image:
1. Open `src/config/images.ts`.
2. Find the image slot you want to change (e.g., "hero").
3. Replace the `src` URL with your own image URL.
4. Update the `alt` text to describe the new image.
5. Save the file — the change will appear on every page that uses that image.

### Supported Formats:
- Any web-accessible image URL (Cloudinary, S3, etc.).
- For best results: use images at least 1200px wide, landscape orientation for heroes.

## Changing Logo
If a logo slot exists, follow the same steps as above to update the logo image in `src/config/images.ts`.

## Changing Colors
To modify the website colors, edit the `tailwind.config.js` file. You can change the primary, secondary, and accent colors to match your branding.

## Changing Fonts
To swap the Google Font used in the layout, update the `layout.tsx` file in the `src/app` directory.

## Updating Text Content
To change text content, locate the respective page files in the `src/app` directory and edit the text directly.

## Requesting Changes
For any additional changes or updates, please reach out to Pegrio support.

## Hosting and Maintenance Info
The website is hosted on Cloudflare Pages. Regular updates and maintenance can be requested through Pegrio support.

## Contact
For support, please contact Pegrio at support@pegrio.com.