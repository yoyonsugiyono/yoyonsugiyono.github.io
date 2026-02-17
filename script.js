function openTab(tabName) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(s => s.classList.remove('active'));

    // Nonaktifkan semua tab
    const tabs = document.querySelectorAll('.tab-item');
    tabs.forEach(t => t.classList.remove('active'));

    // Tampilkan section terpilih
    const targetSection = document.getElementById('section-' + tabName);
    const targetTab = document.getElementById('tab-' + tabName);
    
    if(targetSection) targetSection.classList.add('active');
    if(targetTab) targetTab.classList.add('active');

    window.scrollTo(0, 0);
}

// Pastikan halaman siap
document.addEventListener('DOMContentLoaded', function() {
    console.log("Portal Siap!");
});
