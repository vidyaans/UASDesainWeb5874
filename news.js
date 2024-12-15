// JavaScript untuk mengontrol hamburger menu
document.getElementById('hamburger-button').addEventListener('click', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
});

// JavaScript Membuka Kolom Komentar
document.getElementById("show-comment-btn").addEventListener("click", function () {
    const commentSection = document.getElementById("comment-section");
    if (commentSection.style.display === "none") {
        commentSection.style.display = "block";
    } else {
        commentSection.style.display = "none";
    }
});

// JavaScript Berita
document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementsToAnimate.forEach(element => {
        element.classList.add("hidden");
        observer.observe(element);
    });
});

// Form Submission (Placeholder)
document.getElementById('kontakForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda akan segera kami proses.');
});