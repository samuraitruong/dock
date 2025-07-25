# Bookmark Dock

A simple, elegant static HTML page that allows you to organize and access your favorite bookmarks with a clean, modern UI.

## Features

- Responsive design that works on desktop and mobile devices
- Beautiful UI with icons, big buttons, and hover effects
- Easy to customize by editing a simple JavaScript array
- No server required - works as a static HTML page
- Uses Font Awesome for a wide variety of icons

## How to Use

1. Open `index.html` in your web browser to view your bookmarks
2. Click on any bookmark card to navigate to that website

## How to Customize

### Adding or Modifying Bookmarks

To add, remove, or modify bookmarks, edit the `bookmarks` array in the `script.js` file:

```javascript
const bookmarks = [
    {
        name: "Website Name",
        url: "https://website-url.com",
        icon: "fa-brands fa-icon-name",
        description: "Short description of the website"
    },
    // Add more bookmarks here
];
```

Each bookmark has the following properties:

- `name`: The display name of the bookmark
- `url`: The full URL to navigate to when clicked
- `icon`: A Font Awesome icon class (see below for more information)
- `description`: A short description of the website

### Changing Icons

This project uses [Font Awesome](https://fontawesome.com/) for icons. To change an icon:

1. Visit [Font Awesome's icon gallery](https://fontawesome.com/icons)
2. Find an icon you like
3. Copy its class name (e.g., `fa-brands fa-github`)
4. Replace the `icon` property in your bookmark with this class name

### Customizing the Style

To change the appearance of your bookmark dock, edit the `styles.css` file. The CSS is well-commented to help you understand what each section controls.

## Browser Compatibility

This bookmark dock works in all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## License

See the LICENSE file for details.