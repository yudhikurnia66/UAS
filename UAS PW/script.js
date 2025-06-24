// Smooth Scrolling for Navigation Links
    document.querySelectorAll('.menu-item').forEach(menu => {
        menu.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah aksi default navigasi
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Tambahkan logika jika ingin efek scroll
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

// Form Validation
document.querySelector('.form-container form').addEventListener('submit', function(e) {
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const komentar = document.getElementById('komentar').value;

    if (nama === '' || email === '' || komentar === '') {
        alert('Semua field harus diisi!');
        e.preventDefault(); // Mencegah pengiriman formulir
    } else {
        alert('Komentar Anda telah dikirim! Terima kasih.');
    }
});

// Mendapatkan tombol scroll-to-top
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Menyembunyikan atau menampilkan tombol berdasarkan scroll
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Menambahkan fungsionalitas untuk scroll kembali ke atas
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('hamburger-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

