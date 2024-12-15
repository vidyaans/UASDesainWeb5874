// JavaScript untuk mengontrol hamburger menu
document.getElementById('hamburger-button').addEventListener('click', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
});

// JavaScript untuk Selector Timeline
document.querySelectorAll('.year-btn').forEach(button => {
    button.addEventListener('click', function () {
        // Hapus class 'active' dari semua tombol
        document.querySelectorAll('.year-btn').forEach(btn => btn.classList.remove('active'));

        // Tambahkan class 'active' ke tombol yang diklik
        this.classList.add('active');

        // Sembunyikan semua konten timeline
        document.querySelectorAll('.year-content').forEach(content => content.classList.remove('active'));

        // Tampilkan konten timeline yang sesuai dengan tombol
        const year = this.getAttribute('data-year');
        document.querySelector(`#year-${year}`).classList.add('active');
    });
});

// JavaScript untuk Menampilkan Isi Goals
document.querySelector('[data-bs-target="#collapseOne"]').addEventListener('click', function () {
    console.log('Tombol Meningkatkan Akses dan Kualitas Pendidikan diklik');
});

document.querySelectorAll('.accordion-collapse').forEach(collapse => {
    collapse.addEventListener('show.bs.collapse', function () {
        console.log(`${this.id} sedang dibuka.`);
    });
    collapse.addEventListener('hide.bs.collapse', function () {
        console.log(`${this.id} sedang ditutup.`);
    });
});

document.querySelectorAll('.accordion-collapse').forEach(collapse => {
    collapse.addEventListener('show.bs.collapse', function () {
        this.style.transition = "height 0.3s ease, opacity 0.3s ease";
        this.style.opacity = "1";
    });
    collapse.addEventListener('hide.bs.collapse', function () {
        this.style.transition = "height 0.3s ease, opacity 0.3s ease";
        this.style.opacity = "0";
    });
});

// Pilih tombol dan elemen body
const button = document.querySelector('[data-bs-target="#collapseOne"]');
const collapseElement = document.getElementById('collapseOne');

document.querySelector('[data-bs-target="#collapseOne"]').addEventListener('click', function () {
    const target = document.querySelector('#collapseOne');
    if (target.classList.contains('show')) {
        console.log('Accordion body disembunyikan');
    } else {
        console.log('Accordion body ditampilkan');
    }
});

// Form Submission (Placeholder)
document.getElementById('kontakForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda akan segera kami proses.');
});