/**
 * Fungsi untuk berpindah tab pada dashboard
 * @param {string} tabName - Nama tab yang ingin diaktifkan
 */
function openTab(tabName) {
    // Ambil semua elemen section konten
    const contents = document.getElementsByClassName('content-section');
    for (let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    // Ambil semua elemen navigasi tab
    const tabs = document.getElementsByClassName('tab-item');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    // Tampilkan section yang dipilih
    const selectedSection = document.getElementById('section-' + tabName);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Aktifkan visual tab yang dipilih
    const selectedTab = document.getElementById('tab-' + tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
}
