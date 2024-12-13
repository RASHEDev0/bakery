/* script.js */

// Lightbox Effect for Gallery
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('lightbox-overlay');

        const lightboxImage = document.createElement('img');
        lightboxImage.src = image.src;
        lightboxImage.classList.add('lightbox-image');

        overlay.appendChild(lightboxImage);
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Menu Item Animation and Filter
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
        item.classList.add('active');

        const category = item.getAttribute('data-category');
        filterProducts(category);
    });
});

function filterProducts(category) {
    document.querySelectorAll('.product-item').forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Example for Product Items
const productList = document.querySelector('.product-list');
const products = [
    { name: 'Chocolate Cake', category: 'cakes' },
    { name: 'Vanilla Cookies', category: 'cookies' },
    { name: 'Croissants', category: 'pastries' }
];

products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item', product.category);
    productItem.textContent = product.name;
    productList.appendChild(productItem);
});
