// Bookmark data - Edit this section to add, remove or modify bookmarks
const bookmarks = [
    {
        name: "Fide Rating By Federation",
        url: "https://fide-fed-rating.truongthings.dev/",
        icon: "fa-brands fa-google",
        description: "The simple data breakdown of FIDE ratings by federation"
    },

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
        url: "https://pvi.chess.truongthings.dev/",
        icon: "fa-solid fa-microphone",
        description: "Tools to input PGN with voice support"
    },
    {
        name: "Check Clock",
        url: "https://chess-clock.truongthings.dev/",
        icon: "fa-solid fa-clock",
        description: "A simple chess clock for playing OTB chess games"
    }

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