document.querySelectorAll('.btnDetail').forEach(btn => {
    btn.addEventListener('click', (e) => {

        // Ambil card terdekat
        let card = e.target.closest('.card');

        // Ambil data dari card
        let judul = card.querySelector('.card-text').innerHTML;
        let harga = card.querySelector('.harga').innerHTML;
        let deskripsi = card.querySelector('.deskripsi')
                        ? card.querySelector('.deskripsi').innerHTML
                        : "Tidak ada deskripsi";

        // Buka modal
        document.querySelector('.btnModal').click();

        // ================= ISI MODAL =================
        document.querySelector('.modalTitle').innerHTML = judul;
        document.querySelector('.modalDeskripsi').innerHTML = deskripsi;
        document.querySelector('.modalHarga').innerHTML = harga;

        // Kosongkan area gambar
        document.querySelector('.modalImage').innerHTML = "";

        // Center semua teks
        document.querySelector('.modalTitle').classList.add('text-center');
        document.querySelector('.modalDeskripsi').classList.add('text-center');
        document.querySelector('.modalHarga').classList.add('text-center');

        // =================== WHATSAPP ===================
        const nohp = "62895711810908";
        let pesan = `Hai kak, saya mau pesan produk *${judul}* dengan harga ${harga}.`;

        // Set tombol beli
        document.querySelector('.btnBeli').href =
            `https://api.whatsapp.com/send?phone=${nohp}&text=${encodeURIComponent(pesan)}`;

    });
});
