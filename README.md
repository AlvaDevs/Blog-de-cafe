# Documentation: Coffee Blog Practice

## Introduction
This project involves creating a coffee blog website using HTML, CSS, and JavaScript. The page includes a header with navigation, a main area with blog posts, a sidebar with courses, and a footer.

## HTML

### Structure and Content
1. **DOCTYPE Declaration and HTML Tag**: The `<!DOCTYPE html>` declaration specifies the document type and version of HTML. The `<html lang="es">` tag indicates the language of the document is Spanish.

2. **Head Section**:
   - **Metadata**: Includes character encoding, viewport settings for responsive design, and a description for SEO.
   - **Title**: The title of the webpage is set to "BlogDeCafé".
   - **Prefetch**: Preloads the 'nosotros.html' document to improve navigation performance.
   - **Fonts**: Links to Google Fonts for 'Open Sans' and 'PT Sans'.
   - **CSS**: Preloads and links to CSS stylesheets (`normalize.css` for resets and `style.css` for custom styles).

3. **Body Section**:
   - **Header**: Contains the site logo and navigation links (Home, About Us, Courses, Contact).
   - **Main Content**:
     - **Blog Entries**: Three articles each with an image, title, description, and a "Read More" button.
   - **Sidebar**: Lists available courses with details and links for more information.
   - **Footer**: Repeats the site logo and navigation links.
   - **JavaScript**: Links to an external script (`modernizr.js`).

## CSS

### Styles and Customization
1. **Normalize.css**: A CSS file to reset default browser styles for consistency.
2. **Custom Styles**:
   - **Root Variables**: Defines font families and color scheme.
   - **Global Styles**: Applies box-sizing, font settings, and general styles for common elements (headings, paragraphs, images).
   - **Utilities**: Helper classes for margin, padding, and text alignment.
   - **Layout**:
     - **Header**: Styles for the banner image, navigation bar, and logo.
     - **Main Content**: Grid layout for blog entries and sidebar.
     - **Buttons**: Styling for primary and secondary buttons.
   - **Sidebar and Footer**: Specific styles for course listings and footer layout.

## JavaScript

### Form Handling and User Interaction
1. **Form Data Handling**:
   - **Object to Store Data**: An object `datos` to store form input values.
   - **Event Listeners**: Listeners for input events to update the `datos` object and a submit event to handle form submission.
2. **Form Validation**:
   - **Read Input Function**: Updates the `datos` object with input field values.
   - **Alert Function**: Displays success or error messages upon form submission.

### Alerts
- **Dynamic Alert Creation**: Creates alert elements dynamically and removes them after a timeout.
- **Error Handling**: Differentiates between success and error alerts with specific styles.

## Modernizr

### Feature Detection
- **Modernizr.js**: A JavaScript library to detect HTML5 and CSS3 features in the user’s browser, ensuring compatibility and providing fallbacks for unsupported features.