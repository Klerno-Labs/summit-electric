# Welcome to Your New Website!

This guide is designed to help you manage and update your new Summit Electric website. You don't need to be a programmer to handle the basics, but some steps involve editing text files.

---

## 📂 What Was Built

We have delivered a complete, 4-page website tailored for Summit Electric:

1.  **Home Page:** A professional introduction to your business. It highlights your main services, customer reviews, and makes it easy for visitors to call you or request a quote.
2.  **About Page:** Tells your story. It includes details about your experience, your team of electricians, and your commitment to safety and quality.
3.  **Services Page:** A detailed breakdown of exactly what you offer (Residential, Commercial, Repairs), organized in a clean, easy-to-read layout.
4.  **Contact Page:** A streamlined way for customers to reach you, featuring a map, your phone number, address, and a quick contact form.

---

## 🖼️ How to Change Images

We have set up the website so that **all images are managed in one single file**. This makes updating photos incredibly fast.

### Step-by-Step:
1.  Locate the file named `images.ts` inside the folder: `src/config/images.ts`.
2.  Open this file in a text editor (like VS Code or Notepad).
3.  You will see a list of "slots" (like "hero", "about", "service-1").
4.  Find the image you want to change.

**Example:**
```typescript
"hero": {
  src: "https://images.unsplash.com/photo-...", // This is the current image link
  alt: "Professional home renovation project", // This describes the image
  width: 1200,
  height: 800,
},
```

5.  **Paste your new image URL** inside the quotes next to `src:`.
    *   *Note:* You can link to images hosted on Google Drive (must be public), Dropbox, or your own web host.
6.  **Update the `alt` text** to describe the new photo (this helps with Google searches).
7.  **Save the file.**
8.  Refresh your website. The change will happen instantly!

---

## 🔤 How to Change Text Content

Most of the text on your site lives in the specific page files. If you want to change your phone number, update the "About Us" story, or tweak your services:

1.  Go to the `src/app` folder.
2.  Open the folder for the page you want to edit:
    *   `page.tsx` is the **Home** page.
    *   `about/page.tsx` is the **About** page.
    *   `services/page.tsx` is the **Services** page.
    *   `contact/page.tsx` is the **Contact** page.
3.  Open the file in a text editor.
4.  Look for the text you want to change inside the quotes.
    *   *Example:* To change the headline, find `title="Reliable Electrical Services..."` and change the words.
5.  **Save the file.**

---

## 🎨 Changing Colors & Fonts

### Colors
If you ever want to change the Blue or Orange accents:
1.  Open `tailwind.config.ts` in the main folder.
2.  Look for the `colors` section.
3.  Change the hex codes (e.g., `#0056b3`) to your preferred colors.

### Fonts
To switch fonts:
1.  Open `src/app/layout.tsx`.
2.  You will see imports for `Montserrat` and `Open_Sans`.
3.  Replace these with other Google Font names.

---

## 📞 Need Help?

We built this site to be robust and easy to maintain, but we are here if you need us.

**Pegrio Support**
- **Email:** showcase@pegrio.com
- **Web:** pegrio.com

If you need major structural changes (like adding a new page or changing the layout), please reach out to us for a quote.

---

## 💡 Quick Tips

*   **Keep Images Optimized:** Large images can slow down your site. Try to keep images under 500KB.
*   **Mobile First:** Remember to check how your site looks on your phone after making changes!
*   **Backups:** Since this is code-based, we recommend keeping a backup of your files before making major changes.

Thank you for choosing Pegrio for your digital growth!