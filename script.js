// Bookmark data - Edit this section to add, remove or modify bookmarks
const bookmarks = [
    {
        name: "Fide Calculator",
        url: "https://fide-calc.truongthings.dev/",
        icon: "fa-brands fa-google",
        description: "The tools to tracking inprogress FIDE rating"
    },

    {
        name: "Fide Player Compare",
        url: "https://fide-compare.truongthings.dev/",
        icon: "fa-solid fa-bolt",
        description: "The tools to tracking inprogress FIDE rating"
    },
    {
        name: "Chess.com Daily Puzzle",
        url: "https://daily-puzzle.truongthings.dev/",
        icon: "fa-solid fa-chess-board",
        description: "Free daily chess.com puzzle"
    },
    {
        name: "Pgn Editor (Voice support)",
        url: "https://pvi.truongthings.dev/",
        icon: "fa-solid fa-microphone",
        description: "Tools to input PGN with voice support"
    },
    // {
    //     name: "GitHub",
    //     url: "https://github.com",
    //     icon: "fa-brands fa-github",
    //     description: "Where the world builds software"
    // },
    // {
    //     name: "YouTube",
    //     url: "https://www.youtube.com",
    //     icon: "fa-brands fa-youtube",
    //     description: "Share and watch videos"
    // },
    // {
    //     name: "Twitter",
    //     url: "https://twitter.com",
    //     icon: "fa-brands fa-twitter",
    //     description: "See what's happening in the world"
    // },
    // {
    //     name: "LinkedIn",
    //     url: "https://www.linkedin.com",
    //     icon: "fa-brands fa-linkedin",
    //     description: "Manage your professional identity"
    // },
    // {
    //     name: "Stack Overflow",
    //     url: "https://stackoverflow.com",
    //     icon: "fa-brands fa-stack-overflow",
    //     description: "Where developers learn and share knowledge"
    // },
    // {
    //     name: "Reddit",
    //     url: "https://www.reddit.com",
    //     icon: "fa-brands fa-reddit",
    //     description: "The front page of the internet"
    // },
    // {
    //     name: "Amazon",
    //     url: "https://www.amazon.com",
    //     icon: "fa-brands fa-amazon",
    //     description: "Online shopping for electronics, apparel, and more"
    // },
    // {
    //     name: "Netflix",
    //     url: "https://www.netflix.com",
    //     icon: "fa-brands fa-netflix",
    //     description: "Watch TV shows and movies"
    // },
    // {
    //     name: "Spotify",
    //     url: "https://www.spotify.com",
    //     icon: "fa-brands fa-spotify",
    //     description: "Music for everyone"
    // },
    // {
    //     name: "Facebook",
    //     url: "https://www.facebook.com",
    //     icon: "fa-brands fa-facebook",
    //     description: "Connect with friends and the world"
    // },
    // {
    //     name: "Instagram",
    //     url: "https://www.instagram.com",
    //     icon: "fa-brands fa-instagram",
    //     description: "Photos and videos from friends"
    // }
];

// Function to create a bookmark card element
function createBookmarkCard(bookmark) {
    const card = document.createElement('div');
    card.className = 'bookmark-card';
    card.addEventListener('click', () => {
        window.open(bookmark.url, '_blank');
    });

    const iconDiv = document.createElement('div');
    iconDiv.className = 'bookmark-icon';
    const icon = document.createElement('i');
    icon.className = bookmark.icon;
    iconDiv.appendChild(icon);

    const title = document.createElement('h3');
    title.className = 'bookmark-title';
    title.textContent = bookmark.name;

    const description = document.createElement('p');
    description.className = 'bookmark-description';
    description.textContent = bookmark.description;

    const url = document.createElement('div');
    url.className = 'bookmark-url';
    url.textContent = bookmark.url;

    card.appendChild(iconDiv);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(url);

    return card;
}

// Function to render all bookmarks
function renderBookmarks() {
    const container = document.getElementById('bookmarks-container');
    container.innerHTML = ''; // Clear existing content

    bookmarks.forEach(bookmark => {
        const card = createBookmarkCard(bookmark);
        container.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderBookmarks();
});