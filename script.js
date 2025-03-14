// Array of image data - this would typically come from an API or database
const images = [
    {
        src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
        alt: "Mountain landscape with lake",
        category: "nature",
        width: 1600,
        height: 1200,
        date: "2023-01-15",
        title: "Mountain Serenity"
    },
    {
        src: "https://images.unsplash.com/photo-1486728297118-82a07bc48a28",
        alt: "Modern architecture building",
        category: "architecture",
        width: 1500,
        height: 1200,
        date: "2024-11-03",
        title: "Urban Geometry"
    },
    {
        src: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
        alt: "Venice canals at sunset",
        category: "travel",
        width: 1600,
        height: 1200,
        date: "2024-05-20",
        title: "Venice Sunset"
    },
    {
        src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
        alt: "Pizza with fresh ingredients",
        category: "food",
        width: 1400,
        height: 1200,
        date: "2024-08-12",
        title: "Artisan Pizza"
    },
    {
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
        alt: "Forest with sun rays",
        category: "nature",
        width: 1600,
        height: 1200,
        date: "2024-03-18",
        title: "Forest Light"
    },
    {
        src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
        alt: "Cat sitting on windowsill",
        category: "animals",
        width: 1500,
        height: 1200,
        date: "2023-12-05",
        title: "Window Watcher"
    },
    {
        src: "https://images.unsplash.com/photo-1551018612-9715965c6742",
        alt: "Modern interior design of living room",
        category: "architecture",
        width: 1600,
        height: 1200,
        date: "2025-02-25",
        title: "Modern Living"
    },
    {
        src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7",
        alt: "Person hiking on mountain trail",
        category: "people",
        width: 1400,
        height: 1200,
        date: "2022-09-30",
        title: "Trail Blazer"
    },
    {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
        alt: "Colorful meal plate with vegetables",
        category: "food",
        width: 1500,
        height: 1200,
        date: "2023-04-10",
        title: "Healthy Plate"
    },
    {
        src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        alt: "Starry night sky over mountains",
        category: "nature",
        width: 1600,
        height: 1200,
        date: "2022-10-15",
        title: "Starry Peaks"
    },
    {
        src: "https://images.unsplash.com/photo-1484627147104-f5197bcd6651",
        alt: "Woman walking in city street",
        category: "people",
        width: 1400,
        height: 1200,
        date: "2023-01-05",
        title: "Urban Explorer"
    },
    {
        src: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17",
        alt: "Busy street market in Bangkok",
        category: "travel",
        width: 1600,
        height: 1200,
        date: "2022-07-22",
        title: "Market Life"
    },
    {
        src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187",
        alt: "Ice cream in waffle cone",
        category: "food",
        width: 1500,
        height: 1200,
        date: "2023-06-30",
        title: "Summer Delight"
    },
    {
        src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
        alt: "Glass skyscraper facade",
        category: "architecture",
        width: 1400,
        height: 1200,
        date: "2022-11-18",
        title: "Glass Reflections"
    },
    {
        src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
        alt: "Misty lake at dawn",
        category: "nature",
        width: 1600,
        height: 1200,
        date: "2023-02-08",
        title: "Morning Mist"
    },
    {
        src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
        alt: "Young man with camera",
        category: "people",
        width: 1500,
        height: 1200,
        date: "2022-08-30",
        title: "The Photographer"
    },
    {
        src: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
        alt: "Colorful houses in Burano, Italy",
        category: "travel",
        width: 1600,
        height: 1200,
        date: "2023-05-05",
        title: "Colorful Burano"
    },
    {
        src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
        alt: "Fresh baked bread loaves",
        category: "food",
        width: 1400,
        height: 1200,
        date: "2022-10-02",
        title: "Artisan Bread"
    },
    {
        src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        alt: "Rural countryside landscape",
        category: "nature",
        width: 1600,
        height: 1200,
        date: "2023-03-27",
        title: "Countryside Calm"
    },
    {
        src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
        alt: "Classic car on open road",
        category: "travel",
        width: 1500,
        height: 1200,
        date: "2022-09-15",
        title: "Road Trip Classic"
    },
    {
        src: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f",
        alt: "Modern building interior with stairs",
        category: "architecture",
        width: 1600,
        height: 1200,
        date: "2023-01-22",
        title: "Staircase Study"
    },
    {
        src: "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf",
        alt: "Person reading book in library",
        category: "people",
        width: 1400,
        height: 1200,
        date: "2022-12-18",
        title: "Quiet Reader"
    },
    {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        alt: "Tropical beach with clear water",
        category: "travel",
        width: 1600,
        height: 1200,
        date: "2023-04-02",
        title: "Paradise Shore"
    },
    {
        src: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
        alt: "Pasta dish with vegetables",
        category: "food",
        width: 1500,
        height: 1200,
        date: "2022-08-05",
        title: "Pasta Perfection"
    },
    {
        src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
        alt: "Forest in autumn with colorful leaves",
        category: "nature",
        width: 1600,
        height: 1200,
        date: "2023-11-10",
        title: "Autumn Glory"
    },
    {
        src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
        alt: "Modern luxury home exterior",
        category: "architecture",
        width: 1400,
        height: 1200,
        date: "2022-10-28",
        title: "Luxury Living"
    },
    {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
        alt: "Friends laughing together at sunset",
        category: "people",
        width: 1600,
        height: 1200,
        date: "2023-06-15",
        title: "Golden Hour Friends"
    },
    {
        src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        alt: "Paris street view with Eiffel tower",
        category: "travel",
        width: 1500,
        height: 1200,
        date: "2022-11-25",
        title: "Paris Perspectives"
    },
    {
        src: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6",
        alt: "Coffee latte art",
        category: "food",
        width: 1400,
        height: 1200,
        date: "2023-02-14",
        title: "Latte Love"
    },
    {
        src: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1",
        alt: "Deer in foggy forest",
        category: "nature",
        width: 1600,
        height: 1200,
        date: "2022-09-20",
        title: "Forest Guardian"
    },
    {
        src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
        alt: "Interior design of kitchen",
        category: "architecture",
        width: 1500,
        height: 1200,
        date: "2023-07-08",
        title: "Modern Kitchen"
    },
    {
        src: "https://images.unsplash.com/photo-1484688493527-670f98f9b195",
        alt: "Person meditating on beach",
        category: "people",
        width: 1400,
        height: 1200,
        date: "2022-07-30",
        title: "Beach Meditation"
    },
    {
        src: "https://images.unsplash.com/photo-1543906965-f9520aa2ed8a",
        alt: "Traditional Japanese garden",
        category: "travel",
        width: 1600,
        height: 1200,
        date: "2023-03-12",
        title: "Zen Garden"
    },
    {
        src: "https://images.unsplash.com/photo-1525351326368-efbb5cb6814d",
        alt: "Fruit smoothie bowl",
        category: "food",
        width: 1500,
        height: 1200,
        date: "2022-12-10",
        title: "Smoothie Art"
    },
    {
        src: "https://images.unsplash.com/photo-1518873722901-9c4069c929f3",
        alt: "Waterfall in tropical forest",
        category: "nature",
        width: 1600,
        height: 1200,
        date: "2023-05-28",
        title: "Jungle Falls"
    },
    {
        src: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3",
        alt: "Bridge architecture at night",
        category: "architecture",
        width: 1400,
        height: 1200,
        date: "2022-08-22",
        title: "Night Bridge"
    },
    {
        src: "https://images.unsplash.com/photo-1504197832061-98356e3dcdcf",
        alt: "Woman working at computer",
        category: "people",
        width: 1600,
        height: 1200,
        date: "2023-01-30",
        title: "Focus Time"
    },
    {
        src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
        alt: "Hot air balloons over landscape",
        category: "travel",
        width: 1500,
        height: 1200,
        date: "2022-10-05",
        title: "Balloon Adventure"
    },
    {
        src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
        alt: "Chocolate dessert on plate",
        category: "food",
        width: 1400,
        height: 1200,
        date: "2023-06-02",
        title: "Chocolate Decadence"
    },
    {
        src: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
        alt: "Frozen lake with mountain reflections",
        category: "nature",
        width: 1600,
        height: 1200,
        date: "2022-11-12",
        title: "Frozen Mirror"
    },
    {
        src: "https://images.unsplash.com/photo-1529307474719-3d0a417aaf8a",
        alt: "Futuristic building design",
        category: "architecture",
        width: 1500,
        height: 1200,
        date: "2023-04-18",
        title: "Future Forms"
    },
    {
        src: "https://images.unsplash.com/photo-1488161628813-04466f872be2",
        alt: "Musicians performing on stage",
        category: "people",
        width: 1600,
        height: 1200,
        date: "2022-07-15",
        title: "Stage Lights"
    },
    {
        src: "https://images.unsplash.com/photo-1536323760109-ca8c07450053",
        alt: "Ancient temple ruins",
        category: "travel",
        width: 1400,
        height: 1200,
        date: "2023-02-20",
        title: "Ancient Wonders"
    },
    {
        src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
        alt: "Colorful vegetable salad",
        category: "food",
        width: 1600,
        height: 1200,
        date: "2022-09-08",
        title: "Rainbow Salad"
    },
    {
        src: "https://images.unsplash.com/photo-1572099606223-6e29045d7de3",
        alt: "Rain droplets on window",
        category: "nature",
        width: 1500,
        height: 1200,
        date: "2023-08-05",
        title: "Rainy Day Blues"
    },
    {
        src: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09",
        alt: "Modern home with garden",
        category: "architecture",
        width: 1400,
        height: 1200,
        date: "2022-10-20",
        title: "Dream Home"
    },
    {
        src: "https://images.unsplash.com/photo-1469571486292-b53601021a8a",
        alt: "People at outdoor music festival",
        category: "people",
        width: 1600,
        height: 1200,
        date: "2023-07-22",
        title: "Festival Vibes"
    },
    {
        src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
        alt: "Venice canal with gondola",
        category: "travel",
        width: 1500,
        height: 1200,
        date: "2022-08-15",
        title: "Gondola Journey"
    },
    {
        src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f",
        alt: "Ice cream cones in variety of flavors",
        category: "food",
        width: 1400,
        height: 1200,
        date: "2023-06-18",
        title: "Ice Cream Dreams"
    },
    {
        src: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
        alt: "Northern lights over mountains",
        category: "nature",
        width: 1600,
        height: 1200,
        date: "2022-12-28",
        title: "Aurora Magic"
    }
];

// Global variables
let currentImages = [...images];
let filteredImages = [...images];
let currentPage = 1;
const imagesPerPage = 12;
let currentLightboxIndex = 0;
let currentCategory = 'all';
let currentSort = 'default';
let searchTerm = '';

// Format date to readable string
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Initialize theme based on user preference or previous choice
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (savedTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    }
    
    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme');
        const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

// Setup lazy loading for images
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove('lazy');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        
        document.querySelectorAll('img.lazy').forEach(img => {
            lazyImageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        document.querySelectorAll('img.lazy').forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// Create image card element
function createImageCard(image, index) {
    const card = document.createElement('div');
    card.className = 'image-card';
    card.dataset.category = image.category;
    card.dataset.index = index;
    
    card.innerHTML = `
        <div class="image-container">
            <img class="lazy" data-src="${image.src}" alt="${image.alt}" width="${image.width}" height="${image.height}">
        </div>
        <div class="image-info">
            <h3 class="image-title">${image.title}</h3>
            <span class="image-category">${image.category}</span>
            <p class="image-date">${formatDate(image.date)}</p>
        </div>
    `;
    
    card.addEventListener('click', () => {
        openLightbox(index);
    });
    
    return card;
}

// Filter images based on category and search term
function filterImages() {
    const gallery = document.getElementById('gallery');
    const noResults = document.getElementById('no-results');
    
    // Filter by category and search term
    filteredImages = images.filter(image => {
        const matchesCategory = currentCategory === 'all' || image.category === currentCategory;
        const matchesSearch = searchTerm === '' || 
                            image.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            image.category.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    // Sort images based on selected option
    switch (currentSort) {
        case 'newest':
            filteredImages.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            filteredImages.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'name-asc':
            filteredImages.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'name-desc':
            filteredImages.sort((a, b) => b.title.localeCompare(a.title));
            break;
        default:
            // Default sorting - keep original order
            break;
    }
    
    // Show/hide no results message
    if (filteredImages.length === 0) {
        gallery.innerHTML = '';
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        currentPage = 1;
        renderGallery();
    }
}

// Render gallery with pagination
function renderGallery(reset = true) {
    const gallery = document.getElementById('gallery');
    const loadMoreBtn = document.getElementById('load-more');
    
    if (reset) {
        gallery.innerHTML = '';
    }
    
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = currentPage * imagesPerPage;
    const imagesToRender = filteredImages.slice(startIndex, endIndex);
    
    imagesToRender.forEach((image, i) => {
        const actualIndex = filteredImages.indexOf(image);
        gallery.appendChild(createImageCard(image, actualIndex));
    });
    
    setupLazyLoading();
    
    // Show/hide load more button
    if (endIndex >= filteredImages.length) {
        loadMoreBtn.classList.add('hidden');
    } else {
        loadMoreBtn.classList.remove('hidden');
    }
}

// Initialize filter buttons
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Set current category and filter images
            currentCategory = button.dataset.category;
            filterImages();
        });
    });
}

// Initialize sort dropdown
function initSort() {
    const sortSelect = document.getElementById('sort-select');
    
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        filterImages();
    });
}

// Initialize search functionality
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    // Search when button is clicked
    searchButton.addEventListener('click', () => {
        searchTerm = searchInput.value.trim();
        filterImages();
    });
    
    // Search when Enter key is pressed
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchTerm = searchInput.value.trim();
            filterImages();
        }
    });
}

// Initialize load more button
function initLoadMore() {
    const loadMoreBtn = document.getElementById('load-more');
    
    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        renderGallery(false);
    });
}

// Open lightbox with image
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCategory = document.getElementById('lightbox-category');
    const lightboxDate = document.getElementById('lightbox-date');
    
    currentLightboxIndex = index;
    updateLightboxImage();
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Update lightbox image and info
function updateLightboxImage() {
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCategory = document.getElementById('lightbox-category');
    const lightboxDate = document.getElementById('lightbox-date');
    
    const image = filteredImages[currentLightboxIndex];
    
    lightboxImg.src = image.src;
    lightboxImg.alt = image.alt;
    lightboxTitle.textContent = image.title;
    lightboxCategory.textContent = `Category: ${image.category}`;
    lightboxDate.textContent = `Date: ${formatDate(image.date)}`;
}

// Navigate to next image in lightbox
function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % filteredImages.length;
    updateLightboxImage();
}

// Navigate to previous image in lightbox
function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    updateLightboxImage();
}

// Initialize lightbox navigation
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (event) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch (event.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });
    
    // Touch swipe navigation
    let touchStartX = 0;
    
    lightbox.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX;
    });
    
    lightbox.addEventListener('touchend', (event) => {
        const touchEndX = event.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextImage(); // Swipe left - next image
            } else {
                prevImage(); // Swipe right - previous image
            }
        }
    });
}

// Initialize everything when DOM is loaded
function init() {
    initTheme();
    initFilters();
    initSort();
    initSearch();
    initLoadMore();
    initLightbox();
    renderGallery();
}

// Start the app when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);