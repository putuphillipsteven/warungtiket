/*
Untuk membuat formulir pencarian berfungsi pada kode yang telah disediakan, Anda perlu mengimplementasikan beberapa langkah:
1.  Tambahkan State Pencarian: Anda sudah memiliki state 'searchInput' yang menyimpan nilai dari input pencarian. 
    Saat input berubah, nilai ini diperbarui.
2.  Tangani Perubahan Input: Anda telah menambahkan handler 'handleSearchInputChange' yang memperbarui state 'searchInput' 
    saat input pencarian berubah. Pastikan handler ini dihubungkan dengan input pencarian seperti yang ditunjukkan di komponen "Input".

    <Input
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Cari event..."
    />

3.  Tangani Pencarian: Anda juga telah menambahkan tombol "Cari". Anda perlu menghubungkan handler pencarian (handleSearch) 
    ke tombol ini sehingga ketika tombol "Cari" diklik, pencarian akan dilakukan.

    <Button onClick={handleSearch}>Cari</Button>

4.  Implementasi Logika Pencarian: Di dalam fungsi handleSearch, Anda perlu mengimplementasikan logika pencarian 
    yang sesuai dengan kebutuhan Anda. Logika ini akan mengambil nilai dari searchInput dan kemungkinan juga nilai dari 
    state lain seperti category, location, dan status, dan kemudian mencocokkannya dengan data event yang Anda miliki. 
    Misalnya, Anda dapat menggunakan JavaScript filter untuk menyaring data event yang sesuai dengan kriteria pencarian.
    Contoh sederhana untuk pencarian berdasarkan nama acara (mengabaikan filter lainnya):
    
    const handleSearch = () => {
    // Implementasi pencarian sesuai dengan kriteria
    const hasilPencarian = daftarEvent.filter((event) =>
    event.namaAcara.toLowerCase().includes(searchInput.toLowerCase())
    );
    // Gunakan hasil pencarian sesuai kebutuhan Anda, seperti menampilkan hasil atau melakukan aksi lain.
    };
    Anda harus menggantikan "daftarEvent" dengan daftar event yang sesuai di aplikasi Anda dan menggantikan "namaAcara" 
    dengan properti yang sesuai dalam objek event.

5.  Menampilkan Hasil Pencarian: Setelah Anda mendapatkan hasil pencarian, Anda dapat menampilkan hasilnya dalam komponen EventCard 
    atau elemen lain yang sesuai. Anda dapat mengatur state yang sesuai untuk menyimpan hasil pencarian dan merendernya dalam komponen sesuai.
6.  Menambahkan Fungsionalitas Filter Lain (Opsional): Jika Anda ingin mendukung filter kategori, lokasi, dan status, Anda perlu menambahkan 
    logika yang serupa untuk filter-filter ini dalam fungsi handleSearch. Anda dapat menyertakan filter ini dalam pencarian untuk menghasilkan 
    hasil yang lebih tepat.

    Dengan mengikuti langkah-langkah ini, Anda akan dapat membuat formulir pencarian berfungsi dalam komponen FindEvent. 
    Pastikan untuk menyesuaikan logika pencarian sesuai dengan data event Anda dan kebutuhan aplikasi Anda.
*/
