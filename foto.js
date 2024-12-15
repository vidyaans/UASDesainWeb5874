// JavaScript untuk mengontrol hamburger menu
document.getElementById('hamburger-button').addEventListener('click', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
});

// JavaScript
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = new bootstrap.Modal(document.getElementById('imageModal'));
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const paginationContainer = document.querySelector('.pagination');
const itemsPerPage = 9;
let currentPage = 1;

// JavaScript Menampilkan Modal dengan Foto dan Deskripsi
function showImage() {
    const item = galleryItems[currentPage];
    const img = item.querySelector('img');
    modalImage.src = img.src;
    modalDescription.innerText = item.querySelector('.description').innerText;
}

// JavaScript Button
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        modalImage.src = img.src;
        modalDescription.innerText = item.querySelector('.description').innerText;
        currentPage = index;
        modal.show();
    });
});

// Mengambil Item Galeri
const totalImages = galleryItems.length;
const totalPages = Math.ceil(totalImages / itemsPerPage);

// JavaScript Menampilkan Halaman Galeri
function displayPage(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Menyembunyikan Gambar
    galleryItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    updatePagination(page);
}

// JavaScript Tombol Pagination
function updatePagination(page) {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';

    // Tombol Previous
    const prevButton = document.createElement('li');
    prevButton.classList.add('page-item');
    prevButton.innerHTML = `<a class="page-link" href="#">Previous</a>`;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
        }
    });
    paginationContainer.appendChild(prevButton);

    // Tombol Halaman
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('li');
        pageButton.classList.add('page-item');
        if (i === page) {
            pageButton.classList.add('active');
        }
        pageButton.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayPage(currentPage);
        });
        paginationContainer.appendChild(pageButton);
    }

    // Tombol Next
    const nextButton = document.createElement('li');
    nextButton.classList.add('page-item');
    nextButton.innerHTML = `<a class="page-link" href="#">Next</a>`;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayPage(currentPage);
        }
    });
    paginationContainer.appendChild(nextButton);
}

// Menampilkan Halaman Pertama
displayPage(currentPage);

// JavaScript Tombol Navigasi di Modal
document.getElementById('prevButton').addEventListener('click', () => {
    currentPage = (currentPage > 0) ? currentPage - 1 : galleryItems.length - 1;
    showImage();
});

document.getElementById('nextButton').addEventListener('click', () => {
    currentPage = (currentPage < galleryItems.length - 1) ? currentPage + 1 : 0;
    showImage();
});

// JavaScript Navigasi dengan Keyboard
document.addEventListener("keydown", (event) => {
    if (document.querySelector('.modal.show')) {
        if (event.key === "ArrowLeft") {
            currentPage = (currentPage - 1 + galleryItems.length) % galleryItems.length;
            showImage();
        } else if (event.key === "ArrowRight") {
            currentPage = (currentPage + 1) % galleryItems.length;
            showImage();
        } else if (event.key === "Escape") {
            modal.hide();
        }
    }
});

// Form Submission (Placeholder)
document.getElementById('kontakForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda akan segera kami proses.');
});