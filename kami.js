// JavaScript untuk mengontrol hamburger menu
document.getElementById('hamburger-button').addEventListener('click', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
});

// JavaScript untuk Collapse
document.getElementById('toggleDetails').addEventListener('click', function () {
    const ketumDetails = document.getElementById('ketumDetails');

    if (ketumDetails.classList.contains('show')) {
        // Tutup elemen collapse
        ketumDetails.classList.remove('show');
        this.textContent = 'Baca Selengkapnya';
    } else {
        // Buka elemen collapse
        ketumDetails.classList.add('show');
        this.textContent = 'Tutup';

    }
});

document.getElementById('ketumDetails').addEventListener('hidden.bs.collapse', function () {
    // Menutup semua panel accordion saat ketumDetails ditutup
    const accordions = document.querySelectorAll('#accordionExample .accordion-collapse');
    accordions.forEach(acc => acc.classList.remove('show'));
});

document.querySelectorAll('.accordion-collapse').forEach((accordion) => {
    accordion.addEventListener('shown.bs.collapse', function () {
        this.style.display = 'block'; // Pastikan tetap vertikal
        ul.style.flexDirection = 'column';
    });
});

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah pengiriman form default
    document.getElementById('ketumDetails').addEventListener('shown.bs.collapse', function () {
        document.querySelector('.btn-read-more').textContent = 'Tutup';
    });

    document.getElementById('ketumDetails').addEventListener('hidden.bs.collapse', function () {
        document.querySelector('.btn-read-more').textContent = 'Baca Selengkapnya';
    });
});

// Form Submission (Placeholder)
document.getElementById('kontakForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda akan segera kami proses.');
});