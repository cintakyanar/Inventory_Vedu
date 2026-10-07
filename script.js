/* =====================================================
   DATA AWAL
===================================================== */

let currentUser = null;


/* DATA BARANG */

let barang = [
  { nama: "Alat press kertas", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Amplop (kecil)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 5 },
  { nama: "Amplop besar", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Amplop Merpati (besar)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 12 },
  { nama: "Amplop Paperline 92×165 mm", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 81 },
  { nama: "Bantex Jumbo File", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Bantex PP LAF ungu", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 4 },
  { nama: "Bantex PP LAF ungu", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Binder Clip kecil", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 3 },
  { nama: "Binder Clip sedang", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 12 },
  { nama: "Binder Clips sedang Winstar", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Bolpen BiC", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Bolpen biru Joyko", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Bolpen Deli", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Bolpen Kokoro", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Bolpen Pelna", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 17 },
  { nama: "Bolpen Pilot", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 8 },
  { nama: "Bolpen VernonEdu", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Buku Folio", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Buku polos (bestone)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 4 },
  { nama: "Card holder", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 6 },
  { nama: "Card holder plastik", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 3 },
  { nama: "Clipboard (bantex)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 4 },
  { nama: "Clipboard (yusincha)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Correction Tape Joyko", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 2 },
  { nama: "Crayon Joyko", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 3 },
  { nama: "Cutter", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Furry pen", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Glue sf super (Streafom)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 3 },
  { nama: "Glue stick joyko 15 gram", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Glue stick joyko 8 gram", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Glue Stick Kuning", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Glue Stick Montana", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Gulungan kertas hvs", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Gunting", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 16 },
  { nama: "ID Card barcode", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 4 },
  { nama: "ID Card Fasilitator", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "ID Card Fasilitator + Card holder", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 7 },
  { nama: "Isi Stepless", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 6 },

  { nama: "Isi ulang binder (campus)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 12 },
  { nama: "Isi ulang binder (loose)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Map Bening", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 13 },
  { nama: "Map Biru", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 3 },
  { nama: "Kertas HVS Sidu", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Kertas Jasmine Metalik", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 28 },
  { nama: "Kertas linen citra (putih)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 10 },

  { nama: "Kertas Nota", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 2 },
  { nama: "Kuitansi Paperline (besar)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 2 },
  { nama: "Kuitansi Paperline (kecil)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 2 },
  { nama: "Lanyard", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Lanyard polos (ungu)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 2 },
  { nama: "Map daichi (bening)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Map diamond (biru)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 51 },
  { nama: "Map coklat", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 100 },
  { nama: "Map intern folder (hitam)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Map intern folder (tosca)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Map intern folder (ungu)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Map jenia (biru tua)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Map SKARIGA", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Map UMM", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 2 },
  { nama: "Map V-Tec (bening)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Map Biru Plastik", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 4 },
  { nama: "Notebook Vedu", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 7 },
  { nama: "Origami paper", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 20 },
  { nama: "Paper clips (joyko)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },

  { nama: "Paper clips (v-tec)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Pelubang kertas Eselon", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Penggaris", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 2 },
  { nama: "Penghapus Joyko", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Penghapus papan", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 2 },
  { nama: "Pensil Cinnamonroll", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 6 },
  { nama: "Pensil [discoverasr.com]", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Pensil Joyko", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 5 },
  { nama: "Pensil Kontena", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 11 },
  { nama: "Pensil Mekanik Deli", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Pensil Stitch", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 12 },
  { nama: "Pensil Warna Joyko", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 6 },
  { nama: "Pouch bunga", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 3 },
  { nama: "Pouch plastik (I can't swim)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Pouch polos (dark blue)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Rautan", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 8 },
  { nama: "Refill spidol (biru)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 2 },
  { nama: "Refill spidol (hijau)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Refill spidol (hitam)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 2 },
  { nama: "Sampul buku", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 12 },
  { nama: "Selotip olean city", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Selotip seven star", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Sertifikat Kompetensi", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 23 },
  { nama: "Sertifikat Partisipasi", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 17 },
  { nama: "Sertifikat Recognition", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 7 },
  { nama: "Sheet protector A4 (V-tec)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Sheet protector bambi", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Sheet protector super pop 1", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Spidol Papan Biru", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 6 },
  { nama: "Spidol papan hijau", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 6 },
  { nama: "Spidol papan hitam", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 9 },
  { nama: "Spidol papan merah", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 7 },
  { nama: "Spidol hitam Joyko (kecil)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Spidol merah Snowman", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Spidol Playcolor", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 7 },
  { nama: "Spidol Warna (I can't swim)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Spidol Warna Savari Brand", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Stabilo", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Stabilo Boss Orange", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Stepless", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Sticky notes", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 15 },
  { nama: "Tape dispenser (pemotong selotip)", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 0 },
  { nama: "Tempat binder", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 1 },
  { nama: "Tinta printer", tempat: "Lemari Hitam", kategori: "ATK", jumlah: 4 },

  { nama: "Banner Kain Vedu", tempat: "", kategori: "Furniture", jumlah: 0 },
  { nama: "Bantal sofa (kuning)", tempat: "Ruang Depan", kategori: "Furniture", jumlah: 2 },
  { nama: "Bantal sofa (putih)", tempat: "Ruang Depan", kategori: "Furniture", jumlah: 2 },
  { nama: "Display camera", tempat: "Ruang 3", kategori: "Furniture", jumlah: 0 },
  { nama: "Flashdisk", tempat: "Lemari hitam", kategori: "Elektronik", jumlah: 2 },
  { nama: "Galon", tempat: "Depan kamar mandi", kategori: "Furniture", jumlah: 0 },
  { nama: "Goodie Bag Natur-E", tempat: "Rak bawah kiri, Lemari putih", kategori: "Furniture", jumlah: 0 },
  { nama: "Kemucing", tempat: "Rak bawah kanan, Lemari putih", kategori: "Furniture", jumlah: 0 },
  { nama: "Kursi abu", tempat: "Ruang Depan", kategori: "Furniture", jumlah: 0 },
  { nama: "Kursi bar high stool", tempat: "Ruang Depan", kategori: "Furniture", jumlah: 0 },
  { nama: "Kursi biru", tempat: "Ruang 2", kategori: "Furniture", jumlah: 0 },
  { nama: "Kursi hitam", tempat: "Ruang 1 (2), Ruang 2 (4), Ruang 3 (1)", kategori: "Furniture", jumlah: 0 },
  { nama: "Kursi hitam (lipat)", tempat: "Ruang 2", kategori: "Furniture", jumlah: 0 },
  { nama: "Kursi hitam (susun)", tempat: "Ruang depan, Ruang 1, Ruang 3", kategori: "Furniture", jumlah: 0 },
  { nama: "Kursi kampus + meja", tempat: "Ruang 1", kategori: "Furniture", jumlah: 0 },
  { nama: "Kursi lipat", tempat: "Ruang 2", kategori: "Furniture", jumlah: 0 },
  { nama: "Meja bulat", tempat: "Ruang Depan (1), Ruang 1 (1)", kategori: "Furniture", jumlah: 0 },
  { nama: "Meja panjang (kayu)", tempat: "Ruang 2 & Depan kamar mandi", kategori: "Furniture", jumlah: 0 },
  { nama: "Meja panjang putih", tempat: "Depan (1) dan Ruang 3 (2)", kategori: "Furniture", jumlah: 0 },
  { nama: "Meja persegi", tempat: "Ruang 1 (4) & Ruang 2 (6)", kategori: "Furniture", jumlah: 0 },
  { nama: "Name Plate", tempat: "Ruang 3", kategori: "Furniture", jumlah: 0 },
  { nama: "Papan tulis", tempat: "Ruang 1 & 2", kategori: "Furniture", jumlah: 2 },
  { nama: "Penyangga/display banner", tempat: "Ruang 3", kategori: "Furniture", jumlah: 0 },
  { nama: "Plastik VernonEdu", tempat: "Rak bagian kiri, lemari putih", kategori: "Furniture", jumlah: 69 },
  { nama: "Roll Banner", tempat: "Ruang 3", kategori: "Furniture", jumlah: 0 },
  { nama: "Set Taffstudio", tempat: "Ruang 3", kategori: "Furniture", jumlah: 0 },
  { nama: "Tempat air", tempat: "Ruang Depan", kategori: "Furniture", jumlah: 1 },
  { nama: "Tempat galon", tempat: "Ruang Depan", kategori: "Furniture", jumlah: 1 },
  { nama: "Tempat tisu", tempat: "Ruang Depan", kategori: "Furniture", jumlah: 1 },
  { nama: "Tiang taffstudia", tempat: "Ruang 3", kategori: "Furniture", jumlah: 0 },
  { nama: "Spunbag/tas ungu", tempat: "Rak bagian kiri, lemari putih", kategori: "Furniture", jumlah: 20 }
];

/* =====================================================
   LOAD DATA BARANG DARI LOCAL STORAGE
===================================================== */

const barangTersimpan =
    localStorage.getItem("barang");

if (barangTersimpan) {
    barang = JSON.parse(barangTersimpan);
}

/* =====================================================
   DATA TERSIMPAN DI BROWSER
===================================================== */

let peminjaman =
    JSON.parse(
        localStorage.getItem("peminjaman")
    ) || [];

let pengembalian =
    JSON.parse(
        localStorage.getItem("pengembalian")
    ) || [];

/* DATA BARANG */
let barangDataAwal =
    JSON.parse(
        localStorage.getItem("barang")
    );

let keranjangPeminjaman = [];

localStorage.setItem(
    "barang",
    JSON.stringify(barang)
);

localStorage.setItem(
    "peminjaman",
    JSON.stringify(peminjaman)
);



/* =====================================================
   LOGIN
===================================================== */

function login() {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;


    /* LOGIN ADMIN */

    if (
        username === "admin" &&
        password === "admin123"
    ) {

        currentUser = {
            nama: "Admin",
            role: "admin"
        };

        masukDashboard();

        return;
    }


    /* LOGIN USER */

    if (
        username === "user" &&
        password === "user123"
    ) {

        currentUser = {
            nama: "Pengguna",
            role: "user"
        };

        masukDashboard();

        return;
    }


    alert(
        "Username atau password salah!"
    );
}



function masukDashboard() {

    document
        .getElementById("loginPage")
        .classList.add("hidden");


    document
        .getElementById("dashboardPage")
        .classList.remove("hidden");


    document
        .getElementById("userName")
        .textContent =
        currentUser.nama;


    showPage("dashboard");
}



function logout() {

    currentUser = null;


    document
        .getElementById("dashboardPage")
        .classList.add("hidden");


    document
        .getElementById("loginPage")
        .classList.remove("hidden");


    document
        .getElementById("username")
        .value = "";


    document
        .getElementById("password")
        .value = "";
}



/* =====================================================
   NAVIGASI HALAMAN
===================================================== */

function showPage(page) {

    const content =
        document.getElementById("content");


    const title =
        document.getElementById("pageTitle");


    if (page === "dashboard") {

        title.textContent =
            "Dashboard";

        tampilkanDashboard();

    }


    else if (page === "barang") {

        title.textContent =
            "Data Barang";

        tampilkanBarang();

    }


    else if (page === "peminjaman") {

        title.textContent =
            "Peminjaman Barang";

        tampilkanFormPeminjaman();

    }


    else if (page === "pengembalian") {

        title.textContent =
            "Pengembalian Barang";

        tampilkanFormPengembalian();

    }


    else if (page === "reminder") {

        title.textContent =
            "Reminder Pengembalian";

        tampilkanReminder();

    }


    else if (page === "riwayat") {

        title.textContent =
            "Riwayat";

        tampilkanRiwayat();

    }


    updateMenu(page);
}



/* =====================================================
   MENU AKTIF
===================================================== */

function updateMenu(page) {

    const menus =
        document.querySelectorAll(".menu");


    menus.forEach(menu => {

        menu.classList.remove("active");

    });


    menus.forEach(menu => {

        const onclick =
            menu.getAttribute("onclick");


        if (
            onclick &&
            onclick.includes(
                `'${page}'`
            )
        ) {

            menu.classList.add("active");

        }

    });
}



/* =====================================================
   DASHBOARD
===================================================== */

function tampilkanDashboard() {

    const content =
        document.getElementById("content");


    let totalBarang = 0;

    barang.forEach(item => {

        totalBarang +=
            item.jumlah;

    });


    let sedangDipinjam = 0;

    peminjaman.forEach(item => {

        if (
            item.status ===
            "Dipinjam"
        ) {

            sedangDipinjam +=
                item.jumlah;

        }

    });


    const terlambat =
        peminjaman.filter(item => {

            return (
                item.status === "Dipinjam" &&
                cekStatusReminder(
                    item.tanggalPengembalian
                ) === "Terlambat"
            );

        }).length;


    content.innerHTML = `

        <div class="page-header dashboard-header">

            <div>

                <h2>
                    Dashboard Inventory
                </h2>

                <p>
                    Selamat datang di
                    Inventory VernonEdu.
                </p>

            </div>

        </div>


        <div class="stats dashboard-stats">

            <div class="card stat-card">

                <div class="stat-icon">
                    📦
                </div>

                <div>

                    <small>
                        Total Barang
                    </small>

                    <h3>
                        ${totalBarang}
                    </h3>

                    <small>
                        Unit tersedia
                    </small>

                </div>

            </div>


            <div class="card stat-card">

                <div class="stat-icon">
                    📤
                </div>

                <div>

                    <small>
                        Sedang Dipinjam
                    </small>

                    <h3>
                        ${sedangDipinjam}
                    </h3>

                    <small>
                        Unit
                    </small>

                </div>

            </div>


            <div class="card stat-card">

                <div class="stat-icon">
                    🔔
                </div>

                <div>

                    <small>
                        Reminder
                    </small>

                    <h3>
                        ${hitungReminder()}
                    </h3>

                    <small>
                        Perlu diperhatikan
                    </small>

                </div>

            </div>


            <div class="card stat-card">

                <div class="stat-icon">
                    ⚠️
                </div>

                <div>

                    <small>
                        Terlambat
                    </small>

                    <h3>
                        ${terlambat}
                    </h3>

                    <small>
                        Pengembalian
                    </small>

                </div>

            </div>

        </div>


        <div class="card table-card">

            <div class="table-title">
                Peminjaman Terbaru
            </div>

            ${
                buatTabelPeminjaman()
            }

        </div>

    `;
}



/* =====================================================
   DATA BARANG
===================================================== */

function tampilkanBarang() {

    const content =
        document.getElementById("content");


    let rows = "";


    barang.forEach((item, index) => {

        rows += `

            <tr>

                <td>
                    <b>
                        ${item.nama}
                    </b>
                </td>

                <td>
                    ${item.jumlah}
                </td>

                <td>
                    ${item.tempat}
                </td>

                ${
                    currentUser.role ===
                    "admin"

                    ?

                    `
                    <td>

                        <button
                            class="btn btn-secondary"
                            onclick="
                                editBarang(${index})
                            "
                        >
                            Edit
                        </button>

                    </td>
                    `

                    :

                    ""
                }

            </tr>

        `;

    });


    content.innerHTML = `

        <div class="page-header">

            <div>

                <h2>
                    Data Barang
                </h2>

                <p>
                    Daftar seluruh barang
                    inventaris kantor.
                </p>

            </div>


            ${
                currentUser.role ===
                "admin"

                ?

                `
                <button
                    class="btn btn-primary"
                    onclick="tambahBarang()"
                >
                    + Tambah Barang
                </button>
                `

                :

                ""
            }

        </div>


        <div class="card">

            <div class="table-wrapper">

                <table>

                    <thead>

                        <tr>

                            <th>
                                Nama Barang
                            </th>

                            <th>
                                Jumlah
                            </th>

                            <th>
                                Tempat
                            </th>

                            <th>
                                Aksi
                            </th>

                            ${
                                currentUser.role ===
                                "admin"

                                ?

                                "<th>Aksi</th>"

                                :

                                ""
                            }

                        </tr>

                    </thead>


                    <tbody>

                        ${rows}

                    </tbody>

                </table>

            </div>

        </div>

    `;
}



/* =====================================================
   TAMBAH BARANG
===================================================== */

function tambahBarang() {

    const nama =
        prompt(
            "Masukkan nama barang:"
        );


    if (!nama) return;


    const jumlah =
        Number(
            prompt(
                "Masukkan jumlah barang:"
            )
        );


    const tempat =
        prompt(
            "Barang disimpan dimana?"
        );


    if (
        !Number.isNaN(jumlah) &&
        jumlah > 0
    ) {

        barang.push({

    nama: nama,

    jumlah: jumlah,

    tempat: tempat

});


localStorage.setItem(
    "barang",
    JSON.stringify(barang)
);


tampilkanBarang();

        tampilkanBarang();

    }

}



/* =====================================================
   EDIT BARANG
===================================================== */

function editBarang(index) {

    const item =
        barang[index];


    const jumlah =
        Number(
            prompt(
                "Jumlah barang:",
                item.jumlah
            )
        );


    const tempat =
        prompt(
            "Tempat barang:",
            item.tempat
        );


    if (!Number.isNaN(jumlah)) {

    item.jumlah =
        jumlah;

    item.tempat =
        tempat;


    localStorage.setItem(
        "barang",
        JSON.stringify(barang)
    );


    tampilkanBarang();

}

}


/* =====================================================
   FORM PEMINJAMAN
===================================================== */

/* =====================================================
   FORM PEMINJAMAN
===================================================== */

function tampilkanFormPeminjaman() {

    const content =
        document.getElementById("content");

    keranjangPeminjaman = [];

    content.innerHTML = `

        <div class="card form-card">

            <div class="page-header">

                <div>

                    <h2>
                        Form Peminjaman
                    </h2>

                    <p>
                        Isi data barang yang ingin dipinjam.
                    </p>

                </div>

            </div>


            <form
                onsubmit="simpanPeminjaman(event)"
            >

                <div class="form-grid">


                    <!-- NAMA -->

                    <div class="field full">

                        <label>
                            1. Nama yang Meminjam
                        </label>

                        <input
                            class="form-control"
                            id="namaPeminjam"
                            value="${
                                currentUser.role === "user"
                                ? currentUser.nama
                                : ""
                            }"
                            required
                        >

                    </div>


                    <!-- SEARCH BARANG -->

                    <div class="field full">

                        <label>
                            2. Cari Barang
                        </label>

                        <input
                            type="text"
                            class="form-control"
                            id="searchBarang"
                            placeholder="Ketik nama barang..."
                            oninput="cariBarang()"
                        >

                    </div>


                    <!-- HASIL SEARCH -->

                    <div
                        class="field full"
                        id="hasilSearchBarang"
                    ></div>


                    <!-- BARANG DIPILIH -->

                    <div class="field full">

                        <label>
                            Barang yang Dipilih
                        </label>

                        <div id="daftarBarangDipilih">

                            <p>
                                Belum ada barang yang dipilih.
                            </p>

                        </div>

                    </div>


                    <!-- TANGGAL PINJAM -->

                    <div class="field">

                        <label>
                            3. Tanggal Peminjaman
                        </label>

                        <input
                            type="date"
                            class="form-control"
                            id="tanggalPinjam"
                            required
                        >

                    </div>


                    <!-- TANGGAL KEMBALI -->

                    <div class="field">

                        <label>
                            4. Tanggal Pengembalian
                        </label>

                        <input
                            type="date"
                            class="form-control"
                            id="tanggalKembali"
                            required
                        >

                        <small class="form-help">
                            Tanggal pengembalian harus setelah
                            tanggal peminjaman.
                        </small>

                    </div>


                    <!-- TEMPAT -->

                    <div class="field full">

                        <label>
                            5. Tempat Barang
                        </label>

                        <input
                            class="form-control"
                            id="tempatBarang"
                            readonly
                            placeholder="Otomatis berdasarkan barang yang dipilih"
                        >

                    </div>


                    <!-- KEGIATAN -->

                    <div class="field full">

                        <label>
                            6. Untuk Kegiatan Apa?
                        </label>

                        <textarea
                            class="form-control"
                            id="kegiatan"
                            placeholder="Contoh: Kegiatan meeting kantor"
                            required
                        ></textarea>

                    </div>


                    <!-- FOTO PEMINJAMAN -->

                    <div class="field full">

                        <label>
                            7. Foto Bukti Peminjaman
                        </label>

                        <input
                            type="file"
                            class="form-control"
                            id="fotoPeminjaman"
                            accept="image/*"
                            required
                        >

                        <small class="form-help">
                            Upload foto sebagai bukti barang
                            saat dipinjam.
                        </small>

                    </div>

                </div>


                <div class="info-box">

                    📦 Barang dapat dipilih lebih dari satu.
                    Tempat penyimpanan akan otomatis mengikuti
                    lokasi masing-masing barang.

                </div>


                <div class="form-actions">

                    <button
                        type="submit"
                        class="btn btn-primary"
                    >
                        Ajukan Peminjaman
                    </button>

                </div>

            </form>

        </div>

    `;


    /* ==========================================
       SET TANGGAL PINJAM
    ========================================== */

    const tanggalPinjam =
        document.getElementById(
            "tanggalPinjam"
        );

    const tanggalKembali =
        document.getElementById(
            "tanggalKembali"
        );


    tanggalPinjam.value =
        tanggalHariIni();


    aturMinimalTanggalKembali();


    tanggalPinjam.addEventListener(
        "change",
        aturMinimalTanggalKembali
    );


    tampilkanDaftarBarangDipilih();

}


/* =====================================================
   ATUR MINIMAL TANGGAL PENGEMBALIAN
===================================================== */

function aturMinimalTanggalKembali() {

    const tanggalPinjam =
        document.getElementById(
            "tanggalPinjam"
        );

    const tanggalKembali =
        document.getElementById(
            "tanggalKembali"
        );


    if (
        !tanggalPinjam ||
        !tanggalKembali
    ) {
        return;
    }


    if (!tanggalPinjam.value) {
        return;
    }


    const tanggal =
        new Date(
            tanggalPinjam.value + "T00:00:00"
        );


    tanggal.setDate(
        tanggal.getDate() + 1
    );


    const tahun =
        tanggal.getFullYear();


    const bulan =
        String(
            tanggal.getMonth() + 1
        ).padStart(2, "0");


    const hari =
        String(
            tanggal.getDate()
        ).padStart(2, "0");


    const tanggalMinimal =
        `${tahun}-${bulan}-${hari}`;


    tanggalKembali.min =
        tanggalMinimal;


    /*
       Kalau tanggal kembali yang sudah dipilih
       ternyata tidak valid, kosongkan.
    */

    if (
        tanggalKembali.value &&
        tanggalKembali.value < tanggalMinimal
    ) {

        tanggalKembali.value = "";

    }

}


/* =====================================================
   SEARCH BARANG
===================================================== */

function cariBarang() {

    const keyword =
        document
            .getElementById("searchBarang")
            .value
            .toLowerCase()
            .trim();

    const hasil =
        document.getElementById(
            "hasilSearchBarang"
        );


    if (!keyword) {

        hasil.innerHTML = "";

        return;

    }


    const ditemukan =
        barang.filter(item =>
            item.nama
                .toLowerCase()
                .includes(keyword)
        );


    if (ditemukan.length === 0) {

        hasil.innerHTML = `

            <div class="info-box">

                Barang tidak ditemukan.

            </div>

        `;

        return;

    }


    let html = "";


    ditemukan.forEach(item => {

        const index =
            barang.indexOf(item);


        const sudahDipilih =
            keranjangPeminjaman.some(
                data =>
                    data.index === index
            );


html += `

    <div
        class="search-result-item ${
            sudahDipilih
                ? "search-result-selected"
                : ""
        }"
        onclick="
            tambahBarangPeminjaman(${index})
        "
    >

        <div class="search-result-main">

            <div class="search-result-icon">
                📦
            </div>

            <div class="search-result-info">

                <strong>
                    ${item.nama}
                </strong>

                <span>
                    Stok tersedia:
                    ${item.jumlah}
                    &nbsp;•&nbsp;
                    ${item.tempat}
                </span>

            </div>

        </div>


        <div class="search-result-action">

            ${
                sudahDipilih
                ? `
                    <span class="search-selected">
                        ✓ Sudah dipilih
                    </span>
                `
                : `
                    <span>
                        Klik untuk memilih
                    </span>

                    <b>→</b>
                `
            }

        </div>

    </div>

`;

    });


    hasil.innerHTML = html;

}


/* =====================================================
   TAMBAH BARANG KE KERANJANG
===================================================== */

function tambahBarangPeminjaman(index) {

    const item =
        barang[index];


    if (!item) return;


    if (item.jumlah <= 0) {

        alert(
            `Barang "${item.nama}" sedang habis / masih dipinjam.`
        );

        return;

    }


    const sudahAda =
        keranjangPeminjaman.some(
            data =>
                data.index === index
        );


    if (sudahAda) {

        alert(
            "Barang tersebut sudah dipilih."
        );

        return;

    }


    keranjangPeminjaman.push({

        index: index,

        nama: item.nama,

        jumlah: 1,

        tempat: item.tempat

    });

    localStorage.setItem(
    "peminjaman",
    JSON.stringify(peminjaman)
);

localStorage.setItem(
    "barang",
    JSON.stringify(barang)
);




    tampilkanDaftarBarangDipilih();

    cariBarang();

}


/* =====================================================
   TAMPILKAN BARANG YANG DIPILIH
===================================================== */

function tampilkanDaftarBarangDipilih() {

    const container =
        document.getElementById(
            "daftarBarangDipilih"
        );


    if (!container) return;


    if (
        keranjangPeminjaman.length === 0
    ) {

        container.innerHTML = `

            <p>
                Belum ada barang yang dipilih.
            </p>

        `;

        updateTempatBarang();

        return;

    }


    let html = "";


    keranjangPeminjaman.forEach(
        (item, index) => {

            const stok =
                barang[item.index].jumlah;


            html += `

                <div
                    class="card"
                    style="
                        margin-bottom:10px;
                        padding:15px;
                    "
                >

                    <b>
                        ${item.nama}
                    </b>

                    <br>

                    <small>
                        Tempat:
                        ${item.tempat}
                    </small>

                    <br><br>

                    <label>
                        Jumlah
                    </label>

                    <input
                        type="number"
                        class="form-control"
                        min="1"
                        max="${stok}"
                        value="${item.jumlah}"
                        onchange="
                            ubahJumlahBarang(
                                ${index},
                                this.value
                            )
                        "
                    >

                    <br>

                    <button
                        type="button"
                        class="btn btn-danger"
                        onclick="
                            hapusBarangPeminjaman(
                                ${index}
                            )
                        "
                    >
                        Hapus
                    </button>

                </div>

            `;

        }
    );


    container.innerHTML = html;

    updateTempatBarang();

}


/* =====================================================
   UBAH JUMLAH BARANG
===================================================== */

function ubahJumlahBarang(
    index,
    jumlah
) {

    jumlah =
        Number(jumlah);


    const item =
        keranjangPeminjaman[index];


    if (!item) return;


    const stok =
        barang[item.index].jumlah;


    if (
        jumlah < 1 ||
        jumlah > stok
    ) {

        alert(
            `Jumlah maksimal yang tersedia adalah ${stok}.`
        );

        tampilkanDaftarBarangDipilih();

        return;

    }


    item.jumlah =
        jumlah;

}


/* =====================================================
   HAPUS BARANG
===================================================== */

function hapusBarangPeminjaman(index) {

    keranjangPeminjaman.splice(
        index,
        1
    );


    tampilkanDaftarBarangDipilih();

    cariBarang();

}


/* =====================================================
   UPDATE TEMPAT BARANG
===================================================== */

function updateTempatBarang() {

    const tempat =
        keranjangPeminjaman
            .map(item => item.tempat)
            .filter(
                (value, index, array) =>
                    array.indexOf(value) === index
            );


    const field =
        document.getElementById(
            "tempatBarang"
        );


    if (!field) return;


    field.value =
        tempat.join(", ");

}


/* =====================================================
   SIMPAN PEMINJAMAN
===================================================== */

function simpanPeminjaman(event) {

    event.preventDefault();


    const nama =
        document
            .getElementById("namaPeminjam")
            .value
            .trim();


    const tanggalPinjam =
        document
            .getElementById("tanggalPinjam")
            .value;


    const tanggalKembali =
        document
            .getElementById("tanggalKembali")
            .value;


    const kegiatan =
        document
            .getElementById("kegiatan")
            .value
            .trim();


    const fotoInput =
        document.getElementById(
            "fotoPeminjaman"
        );


    const fotoFile =
        fotoInput?.files?.[0];


    /* ==========================================
       CEK BARANG
    ========================================== */

    if (
        keranjangPeminjaman.length === 0
    ) {

        alert(
            "Pilih minimal satu barang."
        );

        return;

    }


    /* ==========================================
       CEK TANGGAL
    ========================================== */

    if (
        !tanggalPinjam ||
        !tanggalKembali
    ) {

        alert(
            "Tanggal peminjaman dan pengembalian wajib diisi."
        );

        return;

    }


    if (
        tanggalKembali <= tanggalPinjam
    ) {

        alert(
            "Tanggal pengembalian harus setelah tanggal peminjaman."
        );

        return;

    }


    /* ==========================================
       CEK FOTO
    ========================================== */

    if (!fotoFile) {

        alert(
            "Silakan upload foto bukti peminjaman."
        );

        return;

    }


    /* ==========================================
       CEK STOK
    ========================================== */

    for (
        const pilihan
        of keranjangPeminjaman
    ) {

        const item =
            barang[pilihan.index];


        if (
            pilihan.jumlah >
            item.jumlah
        ) {

            alert(
                `Stok ${item.nama} tidak mencukupi.`
            );

            return;

        }

    }


    /*
       Foto dibaca terlebih dahulu supaya
       tersimpan sebagai data pada peminjaman.
    */

    const reader =
        new FileReader();


    reader.onload =
        function(eventFoto) {

            const fotoPeminjaman =
                eventFoto.target.result;


            /* ==================================
               KURANGI STOK
            ================================== */

            keranjangPeminjaman.forEach(
                pilihan => {

                    barang[
                        pilihan.index
                    ].jumlah -=
                        pilihan.jumlah;

                }
            );


            /* ==================================
               DETAIL BARANG
            ================================== */

            const detailBarang =
                keranjangPeminjaman.map(
                    pilihan => ({

                        nama:
                            pilihan.nama,

                        jumlah:
                            pilihan.jumlah,

                        tempat:
                            pilihan.tempat

                    })
                );


            const namaBarang =
                detailBarang
                    .map(item => item.nama)
                    .join(", ");


            const totalJumlah =
                detailBarang.reduce(
                    (total, item) =>
                        total + item.jumlah,
                    0
                );


            const tempatBarang =
                detailBarang
                    .map(item => item.tempat)
                    .filter(
                        (
                            value,
                            index,
                            array
                        ) =>
                            array.indexOf(value)
                            === index
                    )
                    .join(", ");


            /* ==================================
               SIMPAN PEMINJAMAN
            ================================== */

            peminjaman.push({

                nama:
                    nama,

                barang:
                    namaBarang,

                jumlah:
                    totalJumlah,

                detailBarang:
                    detailBarang,

                tanggalPinjam:
                    tanggalPinjam,

                tanggalPengembalian:
                    tanggalKembali,

                tempat:
                    tempatBarang,

                kegiatan:
                    kegiatan,

                fotoPeminjaman:
                    fotoPeminjaman,

                status:
                    "Dipinjam"

            });
         localStorage.setItem(
        "barang",
         JSON.stringify(barang)
);

localStorage.setItem(
    "peminjaman",
    JSON.stringify(peminjaman)
);

            alert(
                "Peminjaman berhasil dicatat!"
            );


            keranjangPeminjaman = [];


            showPage("riwayat");

        };


    reader.readAsDataURL(
        fotoFile
    );

}


/* =====================================================
   FORM / DATA PENGEMBALIAN
===================================================== */

function tampilkanFormPengembalian() {

    const content =
        document.getElementById("content");


    const data =
        peminjaman.filter(
            item =>
                item.status === "Dipinjam"
        );


    if (data.length === 0) {

        content.innerHTML = `

            <div class="page-header">

                <div>

                    <h2>
                        Pengembalian Barang
                    </h2>

                    <p>
                        Belum ada barang yang sedang dipinjam.
                    </p>

                </div>

            </div>


            <div class="card empty-return-card">

                <div class="empty-return-icon">
                    
                </div>

                <h3>
                    Tidak Ada Peminjaman Aktif
                </h3>

                <p>
                    Data peminjaman yang masih berlangsung
                    akan muncul di sini.
                </p>

            </div>

        `;

        return;

    }


    let cards = "";


    data.forEach(
        (item, index) => {

            const jumlahBarang =
                item.jumlah;


            const statusReminder =
                cekStatusReminder(
                    item.tanggalPengembalian
                );


            let statusClass =
                "return-normal";


            if (
                statusReminder ===
                "Terlambat"
            ) {

                statusClass =
                    "return-late";

            }


            cards += `

                <div
                    class="return-person-card ${statusClass}"
                    onclick="
                        tampilkanDetailPengembalian(
                            ${index}
                        )
                    "
                >

                    <div class="return-person-left">

                        <div class="return-person-icon">
                            👤
                        </div>


                        <div>

                            <h3>
                                ${item.nama}
                            </h3>

                            <p>
                                ${item.barang}
                            </p>

                            <small>
                                ${jumlahBarang} pcs
                                •
                                Kembali:
                                ${formatTanggal(
                                    item.tanggalPengembalian
                                )}
                            </small>

                        </div>

                    </div>


                    <div class="return-person-right">

                        <span class="return-status">
                            ${
                                statusReminder ===
                                "Terlambat"
                                ? "⚠️ Terlambat"
                                : "📦 Sedang Dipinjam"
                            }
                        </span>

                        <span class="return-arrow">
                            →
                        </span>

                    </div>

                </div>

            `;

        }
    );


    content.innerHTML = `

        <div class="page-header">

            <div>

                <h2>
                    Pengembalian Barang
                </h2>

                <p>
                    Pilih nama peminjam untuk melihat
                    detail barang yang harus dikembalikan.
                </p>

            </div>

        </div>


        <div class="return-list">

            ${cards}

        </div>


        <div
            id="detailPengembalian"
            class="return-detail-container"
        ></div>

    `;

}


/* =====================================================
   DETAIL PENGEMBALIAN
===================================================== */

function tampilkanDetailPengembalian(index) {

    const data =
        peminjaman.filter(
            item =>
                item.status === "Dipinjam"
        );


    const item =
        data[index];


    if (!item) return;


    const detail =
        document.getElementById(
            "detailPengembalian"
        );


    if (!detail) return;


    const detailBarang =
        item.detailBarang ||
        [
            {
                nama:
                    item.barang,

                jumlah:
                    item.jumlah,

                tempat:
                    item.tempat
            }
        ];


    let daftarBarang = "";


    detailBarang.forEach(
        barangItem => {

            daftarBarang += `

                <div class="return-item-row">

                    <div>

                        <strong>
                            ${barangItem.nama}
                        </strong>

                        <small>
                            Tempat:
                            ${barangItem.tempat}
                        </small>

                    </div>

                    <b>
                        ${barangItem.jumlah} pcs
                    </b>

                </div>

            `;

        }
    );


    detail.innerHTML = `

        <div class="card return-detail-card">

            <div class="return-detail-header">

                <div>

                    <h2>
                        Detail Peminjaman
                    </h2>

                    <p>
                        Data barang yang sedang dipinjam
                        oleh ${item.nama}.
                    </p>

                </div>


                <button
                    type="button"
                    class="btn btn-secondary"
                    onclick="
                        document
                            .getElementById(
                                'detailPengembalian'
                            )
                            .innerHTML = ''
                    "
                >
                    Tutup
                </button>

            </div>


            <!-- DATA PEMINJAM -->

            <div class="return-info-grid">

                <div class="return-info-box">

                    <span>
                        Nama Peminjam
                    </span>

                    <strong>
                        ${item.nama}
                    </strong>

                </div>


                <div class="return-info-box">

                    <span>
                        Tanggal Peminjaman
                    </span>

                    <strong>
                        ${formatTanggal(
                            item.tanggalPinjam
                        )}
                    </strong>

                </div>


                <div class="return-info-box">

                    <span>
                        Batas Pengembalian
                    </span>

                    <strong>
                        ${formatTanggal(
                            item.tanggalPengembalian
                        )}
                    </strong>

                </div>


                <div class="return-info-box">

                    <span>
                        Kegiatan
                    </span>

                    <strong>
                        ${item.kegiatan}
                    </strong>

                </div>

            </div>


            <!-- FOTO PEMINJAMAN -->

            <div class="return-section">

                <h3>
                    📷 Foto Bukti Peminjaman
                </h3>


                ${
                    item.fotoPeminjaman
                    ?
                    `
                        <div class="return-photo-wrapper">

                            <img
                                src="${item.fotoPeminjaman}"
                                class="return-photo"
                                alt="Foto Bukti Peminjaman"
                            >

                        </div>
                    `
                    :
                    `
                        <div class="info-box">
                            Belum ada foto bukti peminjaman.
                        </div>
                    `
                }

            </div>


            <!-- BARANG -->

            <div class="return-section">

                <h3>
                    📦 Barang yang Dipinjam
                </h3>


                <div class="return-items">

                    ${daftarBarang}

                </div>

            </div>


            <!-- FORM PENGEMBALIAN -->

            <div class="return-section">

                <h3>
                    Ajukan Pengembalian
                </h3>


                <form
                    onsubmit="
                        ajukanPengembalian(event)
                    "
                >

                    <input
                        type="hidden"
                        id="indexPengembalian"
                        value="${index}"
                    >


                    <div class="form-grid">


                        <div class="field">

                            <label>
                                Nama yang Mengembalikan
                            </label>

                            <input
                                class="form-control"
                                value="${item.nama}"
                                readonly
                            >

                        </div>


                        <div class="field">

                            <label>
                                Tempat Pengembalian
                            </label>

                            <input
                                class="form-control"
                                value="${item.tempat}"
                                readonly
                            >

                        </div>


                        <div class="field full">

                            <label>
                                Ada Barang Hilang?
                            </label>

                            <select
                                class="form-control"
                                id="barangHilang"
                                onchange="
                                    toggleBarangHilang()
                                "
                            >

                                <option value="Tidak">
                                    Tidak
                                </option>

                                <option value="Ya">
                                    Ya
                                </option>

                            </select>

                        </div>


                        <!-- BARANG HILANG -->

                        <div
                            class="field full"
                            id="fieldBarangHilang"
                            style="display:none"
                        >

                            <div class="barang-hilang-card">

                                <div class="barang-hilang-header">

                                    <div class="barang-hilang-icon">
                                        ⚠️
                                    </div>

                                    <div>

                                        <h3>
                                            Data Barang Hilang
                                        </h3>

                                        <p>
                                            Isi data barang yang hilang
                                            saat proses pengembalian.
                                        </p>

                                    </div>

                                </div>


                                <div class="barang-hilang-content">


                                    <div class="field">

                                        <label>
                                            Nama Barang?
                                        </label>

                                        <input
                                            type="text"
                                            class="form-control"
                                            id="namaBarangHilang"
                                            placeholder="Masukkan nama barang"
                                        >

                                    </div>


                                    <div class="field">

                                        <label>
                                            Jumlah Barang?
                                        </label>

                                        <input
                                            type="number"
                                            class="form-control"
                                            id="jumlahBarangHilang"
                                            min="1"
                                            placeholder="Masukkan jumlah"
                                        >

                                    </div>


                                    <div class="field full">

                                        <label>
                                            Terakhir Digunakan Untuk?
                                        </label>

                                        <textarea
                                            class="form-control"
                                            id="kegiatanBarangHilang"
                                            rows="3"
                                            placeholder="Contoh: Meeting, event, kegiatan kantor, dll."
                                        ></textarea>

                                    </div>

                                </div>


                                <div class="barang-hilang-warning">

                                    ⚠️ Jika ada barang yang hilang,
                                    barang tersebut wajib diganti
                                    oleh orang yang meminjam.

                                </div>

                            </div>

                        </div>


                        <!-- FOTO PENGEMBALIAN -->

                        <div class="field full">

                            <label>
                                Bukti Foto Pengembalian
                            </label>

                            <input
                                type="file"
                                class="form-control"
                                id="fotoPengembalian"
                                accept="image/*"
                                required
                            >

                        </div>

                    </div>


                    <div class="form-actions">

                        <button
                            type="submit"
                            class="btn btn-primary"
                        >
                            Ajukan Pengembalian
                        </button>

                    </div>

                </form>

            </div>

        </div>

    `;


    detail.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =====================================================
   AJUKAN PENGEMBALIAN
===================================================== */

function ajukanPengembalian(event) {

    event.preventDefault();


    const data =
        peminjaman.filter(
            item =>
                item.status === "Dipinjam"
        );


    const index =
        Number(
            document
                .getElementById(
                    "indexPengembalian"
                )
                .value
        );


    const item =
        data[index];


    if (!item) {

        alert(
            "Data peminjaman tidak ditemukan."
        );

        return;

    }


    const hilang =
        document
            .getElementById(
                "barangHilang"
            )
            .value;


    const namaHilang =
        document
            .getElementById(
                "namaBarangHilang"
            )
            ?.value
            .trim() || "";


    const jumlahHilang =
        Number(
            document
                .getElementById(
                    "jumlahBarangHilang"
                )
                ?.value || 0
        );


    const kegiatanBarangHilang =
        document
            .getElementById(
                "kegiatanBarangHilang"
            )
            ?.value
            .trim() || "";


    const fotoInput =
        document.getElementById(
            "fotoPengembalian"
        );


    const fotoFile =
        fotoInput?.files?.[0];


    if (!fotoFile) {

        alert(
            "Silakan upload foto bukti pengembalian."
        );

        return;

    }


    if (
        hilang === "Ya" &&
        (
            !namaHilang ||
            jumlahHilang < 1 ||
            !kegiatanBarangHilang
        )
    ) {

        alert(
            "Lengkapi data barang yang hilang."
        );

        return;

    }


    const reader =
        new FileReader();


    reader.onload =
        function(eventFoto) {

            const fotoPengembalian =
                eventFoto.target.result;


            pengembalian.push({

                peminjaman:
                    item,

                nama:
                    item.nama,

                barang:
                    item.barang,

                jumlah:
                    item.jumlah,

                detailBarang:
                    item.detailBarang || [],

                tempat:
                    item.tempat,

                tanggalPinjam:
                    item.tanggalPinjam,

                tanggalPengembalian:
                    item.tanggalPengembalian,

                kegiatan:
                    item.kegiatan,

                fotoPeminjaman:
                    item.fotoPeminjaman || "",

                barangHilang:
                    hilang,

                namaBarangHilang:
                    namaHilang,

                jumlahBarangHilang:
                    jumlahHilang,

                kegiatanBarangHilang:
                    kegiatanBarangHilang,

                fotoPengembalian:
                    fotoPengembalian,

                tanggal:
                    tanggalHariIni(),

                status:
                    "Menunggu Persetujuan Admin"

            });


            alert(
                "Pengembalian berhasil diajukan. Menunggu persetujuan admin."
            );


            showPage("riwayat");

        };

        localStorage.setItem(
    "pengembalian",
    JSON.stringify(pengembalian)
);



    reader.readAsDataURL(
        fotoFile
    );

}


/* =====================================================
   REMINDER
===================================================== */

function tampilkanReminder() {

    const content =
        document.getElementById("content");


    let h1 = 0;
    let hariH = 0;
    let terlambat = 0;
    let barangKosong = [];

    barang.forEach(item => {

        if (item.jumlah <= 0) {

            barangKosong.push(item);

        }

    });


    peminjaman.forEach(item => {

        if (
            item.status !==
            "Dipinjam"
        ) return;


        const status =
            cekStatusReminder(
                item.tanggalPengembalian
            );


        if (status === "H-1")
            h1++;


        if (status === "Hari H")
            hariH++;


        if (status === "Terlambat")
            terlambat++;

    });


    content.innerHTML = `

        <div class="page-header">

            <div>

                <h2>
                    Reminder Pengembalian
                </h2>

                <p>
                    Pantau jadwal pengembalian
                    barang kantor.
                </p>

            </div>

        </div>


        <div class="reminder-grid">


            <div class="card reminder-card">

                <div>
                    🟡
                </div>

                <h3>
                    H-1
                </h3>

                <h2>
                    ${h1}
                </h2>

                <p>
                    Pengembalian besok
                </p>

            </div>



            <div class="card reminder-card">

                <div>
                    🟠
                </div>

                <h3>
                    Hari H
                </h3>

                <h2>
                    ${hariH}
                </h2>

                <p>
                    Harus dikembalikan hari ini
                </p>

            </div>



            <div class="card reminder-card red">

                <div>
                    🔴
                </div>

                <h3>
                    H+1
                </h3>

                <h2>
                    ${terlambat}
                </h2>

                <p>
                    Pengembalian terlambat
                </p>

            </div>


        </div>


        <div class="card table-card">

            <div class="table-title">

                Daftar Reminder

            </div>

            ${buatTabelReminder()}

        </div>

    `;

}



/* =====================================================
   CEK REMINDER
===================================================== */

function cekStatusReminder(
    tanggal
) {

    const sekarang =
        new Date();


    const target =
        new Date(
            tanggal
        );


    sekarang.setHours(
        0,0,0,0
    );


    target.setHours(
        0,0,0,0
    );


    const selisih =
        Math.round(
            (
                target -
                sekarang
            )
            /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    if (selisih === 1)
        return "H-1";


    if (selisih === 0)
        return "Hari H";


    if (selisih < 0)
        return "Terlambat";


    return "Dipinjam";

}



/* =====================================================
   HITUNG REMINDER
===================================================== */

function hitungReminder() {

    return peminjaman.filter(
        item => {

            if (
                item.status !==
                "Dipinjam"
            )
                return false;


            const status =
                cekStatusReminder(
                    item.tanggalPengembalian
                );


            return (
                status === "H-1" ||
                status === "Hari H" ||
                status === "Terlambat"
            );

        }
    ).length;

}



/* =====================================================
   TABEL REMINDER
===================================================== */

function buatTabelReminder() {

    const data =
        peminjaman.filter(
            item =>
                item.status ===
                "Dipinjam"
        );


    if (data.length === 0) {

        return `
            <p>
                Belum ada reminder.
            </p>
        `;

    }


    let rows = "";


    data.forEach(item => {

        const status =
            cekStatusReminder(
                item.tanggalPengembalian
            );


        if (
            status ===
            "Dipinjam"
        )
            return;


        let badge =
            "badge-yellow";


        if (
            status ===
            "Terlambat"
        ) {

            badge =
                "badge-red";

        }


        rows += `

            <tr>

                <td>
                    ${item.nama}
                </td>

                <td>
                    ${item.barang}
                </td>

                <td>
                    ${item.jumlah}
                </td>

                <td>
                    ${formatTanggal(
                        item.tanggalPengembalian
                    )}
                </td>

                <td>

                    <span
                        class="badge ${badge}"
                    >
                        ${status}
                    </span>

                </td>

            </tr>

        `;

    });


    return `

        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>

                        <th>
                            Peminjam
                        </th>

                        <th>
                            Barang
                        </th>

                        <th>
                            Jumlah
                        </th>

                        <th>
                            Tanggal Kembali
                        </th>

                        <th>
                            Status
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </div>

    `;

}



/* =====================================================
   RIWAYAT
===================================================== */

function tampilkanRiwayat() {

    const content =
        document.getElementById("content");


    content.innerHTML = `

        <div class="page-header">

            <div>

                <h2>
                    Riwayat
                </h2>

                <p>
                    Riwayat peminjaman dan
                    pengembalian barang.
                </p>

            </div>

        </div>


        ${
            currentUser.role ===
            "admin"

            ?

            buatPersetujuanAdmin()

            :

            ""
        }


        <div class="card table-card">

            <div class="table-title">

                Riwayat Peminjaman

            </div>

            ${buatTabelPeminjaman()}

        </div>


        <div class="card table-card">

            <div class="table-title">

                Riwayat Pengembalian

            </div>

            ${buatTabelPengembalian()}

        </div>

    `;

}



/* =====================================================
   TABEL PEMINJAMAN
===================================================== */

function buatTabelPeminjaman() {

    if (
        peminjaman.length === 0
    ) {

        return `
            <p>
                Belum ada peminjaman.
            </p>
        `;

    }


    let rows = "";


    peminjaman
        .slice()
        .reverse()
        .forEach(item => {

            let badge =
                "badge-blue";


            if (
                item.status ===
                "Dikembalikan"
            ) {

                badge =
                    "badge-green";

            }


            rows += `

                <tr>

                    <td>
                        ${item.nama}
                    </td>

                    <td>
                        ${item.barang}
                    </td>

                    <td>
                        ${item.jumlah}
                    </td>

                    <td>
                        ${formatTanggal(
                            item.tanggalPengembalian
                        )}
                    </td>

                    <td>

                        <span
                            class="badge ${badge}"
                        >
                            ${item.status}
                        </span>

                    </td>

                    <td>

                    <button
                        class="btn btn-secondary"
                        onclick="
                            printBuktiPeminjaman(
                                ${peminjaman.indexOf(item)}
                            )
                        "
                    >
                        🖨️ Print
                    </button>

                </td>

                </tr>

            `;

        });


    return `

        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>

                        <th>
                            Peminjam
                        </th>

                        <th>
                            Barang
                        </th>

                        <th>
                            Jumlah
                        </th>

                        <th>
                            Tanggal Kembali
                        </th>

                        <th>
                            Status
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${rows}

                </tbody>

            </table>

        </div>

    `;

}

/* =====================================================
   PRINT BUKTI PENGEMBALIAN
===================================================== */

function printBuktiPengembalian(index) {

    const data =
        pengembalian[index];

    if (!data) {
        alert("Data pengembalian tidak ditemukan.");
        return;
    }


    const printWindow =
        window.open(
            "",
            "_blank"
        );


    const status =
        data.status === "Disetujui"
            ? "Dikembalikan"
            : data.status;


    const barangHilang =
        data.barangHilang === "Ya"
            ? `
                <tr>
                    <th>Barang Hilang</th>
                    <td>Ya</td>
                </tr>

                <tr>
                    <th>Nama Barang Hilang</th>
                    <td>
                        ${data.namaBarangHilang || "-"}
                    </td>
                </tr>

                <tr>
                    <th>Jumlah Barang Hilang</th>
                    <td>
                        ${data.jumlahBarangHilang || "-"}
                    </td>
                </tr>

                <tr>
                    <th>Terakhir Digunakan Untuk</th>
                    <td>
                        ${data.kegiatanBarangHilang || "-"}
                    </td>
                </tr>
            `
            : `
                <tr>
                    <th>Barang Hilang</th>
                    <td>Tidak ada</td>
                </tr>
            `;


    const foto =
        data.foto
            ? `
                <div class="foto-section">

                    <h3>
                        Bukti Foto Pengembalian
                    </h3>

                    <img
                        src="${data.foto}"
                        class="foto-bukti"
                    >

                </div>
            `
            : "";


    printWindow.document.write(`

        <html>

        <head>

            <title>
                Bukti Pengembalian Barang
            </title>


            <style>

                * {
                    box-sizing: border-box;
                }

                body {
                    font-family: Arial, sans-serif;
                    padding: 35px;
                    color: #333;
                    background: #fff;
                }


                .header {
                    text-align: center;
                    padding-bottom: 18px;
                    border-bottom: 2px solid #7043a8;
                }


                .header img {
                    width: 210px;
                    max-width: 100%;
                }


                h2 {
                    text-align: center;
                    color: #33234f;
                    margin: 28px 0;
                    font-size: 21px;
                }


                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 10px;
                }


                th,
                td {
                    border: 1px solid #ddd;
                    padding: 11px 13px;
                    text-align: left;
                    vertical-align: top;
                }


                th {
                    width: 35%;
                    background: #f3edfa;
                    color: #4a3152;
                }


                .status {
                    display: inline-block;
                    padding: 6px 12px;
                    border-radius: 20px;
                    background: #e8f6ed;
                    color: #267344;
                    font-weight: bold;
                }


                .foto-section {
                    margin-top: 30px;
                    page-break-inside: avoid;
                }


                .foto-section h3 {
                    color: #33234f;
                    margin-bottom: 12px;
                }


                .foto-bukti {
                    display: block;
                    width: 100%;
                    max-width: 500px;
                    max-height: 500px;
                    object-fit: contain;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 5px;
                }


                .footer {
                    margin-top: 35px;
                    padding-top: 15px;
                    border-top: 1px solid #ddd;
                    color: #777;
                    font-size: 12px;
                    text-align: center;
                }


                @media print {

                    body {
                        padding: 15px;
                    }

                    .foto-bukti {
                        max-height: 450px;
                    }

                }

            </style>

        </head>


        <body>


            <div class="header">

                <img
                    src="logo-vernonedu.jpeg"
                >

            </div>


            <h2>
                BUKTI PENGEMBALIAN BARANG
            </h2>


            <table>

                <tr>

                    <th>
                        Nama Peminjam
                    </th>

                    <td>
                        ${data.nama}
                    </td>

                </tr>


                <tr>

                    <th>
                        Barang
                    </th>

                    <td>
                        ${data.barang}
                    </td>

                </tr>


                <tr>

                    <th>
                        Jumlah
                    </th>

                    <td>
                        ${data.jumlah} pcs
                    </td>

                </tr>


                <tr>

                    <th>
                        Tempat Barang
                    </th>

                    <td>
                        ${data.tempat}
                    </td>

                </tr>


                <tr>

                    <th>
                        Tanggal Pengembalian
                    </th>

                    <td>
                        ${formatTanggal(data.tanggal)}
                    </td>

                </tr>


                ${barangHilang}


                <tr>

                    <th>
                        Status
                    </th>

                    <td>

                        <span class="status">
                            ${status}
                        </span>

                    </td>

                </tr>

            </table>


            ${foto}


            <div class="footer">

                Bukti ini merupakan catatan
                pengembalian barang inventaris
                VernonEdu.

            </div>


            <script>

                window.onload = function() {

                    window.print();

                };

            <\/script>


        </body>

        </html>

    `);


    printWindow.document.close();

}


/* =====================================================
   PERSETUJUAN ADMIN
===================================================== */

function buatPersetujuanAdmin() {

    const pending =
        pengembalian.filter(
            item =>
                item.status ===
                "Menunggu Persetujuan Admin"
        );


    if (
        pending.length === 0
    ) {

        return "";

    }


    let rows = "";


    pending.forEach(
        (item, index) => {

            rows += `

                <tr>

                    <td>
                        ${item.nama || "-"}
                    </td>

                    <td>
                        ${
                            item.detailBarang &&
                            item.detailBarang.length > 0

                            ?

                            item.detailBarang
                                .map(
                                    barang =>
                                        `${barang.nama} (${barang.jumlah} pcs)`
                                )
                                .join("<br>")

                            :

                            item.barang || "-"
                        }
                    </td>

                    <td>
                        ${item.jumlah || 0}
                    </td>

                    <td>
                        ${item.tempat || "-"}
                    </td>

                    <td>
                        ${item.barangHilang || "Tidak"}
                    </td>

                    <td>

                        <button
                            class="btn btn-success"
                            onclick="
                                setujuiPengembalian(
                                    ${pengembalian.indexOf(item)}
                                )
                            "
                        >
                            ✓ Setujui
                        </button>


                        <button
                            class="btn btn-danger"
                            onclick="
                                tolakPengembalian(
                                    ${pengembalian.indexOf(item)}
                                )
                            "
                        >
                            ✕ Tolak
                        </button>

                    </td>

                </tr>

            `;

        }
    );


    return `

        <div class="card table-card">

            <div class="table-title">

                🟠 Pengembalian
                Menunggu Persetujuan Admin

            </div>


            <div class="table-wrapper">

                <table>

                    <thead>

                        <tr>

                            <th>
                                Nama
                            </th>

                            <th>
                                Barang
                            </th>

                            <th>
                                Jumlah
                            </th>

                            <th>
                                Tempat
                            </th>

                            <th>
                                Barang Hilang
                            </th>

                            <th>
                                Aksi
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        ${rows}

                    </tbody>

                </table>

            </div>

        </div>

    `;

}

function setujuiPengembalian(index) {

    const data = pengembalian[index];

    if (!data) {
        alert("Data pengembalian tidak ditemukan.");
        return;
    }

    const pinjam = peminjaman.find(
        item =>
            item.nama === data.nama &&
            item.status === "Dipinjam" &&
            item.tanggalPinjam === data.tanggalPinjam
    );

    if (!pinjam) {
        alert("Data peminjaman asli tidak ditemukan.");
        return;
    }

    if (pinjam.detailBarang && pinjam.detailBarang.length > 0) {

        pinjam.detailBarang.forEach(detail => {

            const barangDitemukan = barang.find(
                item => item.nama === detail.nama
            );

            if (barangDitemukan) {
                barangDitemukan.jumlah += Number(detail.jumlah) || 0;
            }

        });

    } else {

        const barangDitemukan = barang.find(
            item => item.nama === pinjam.barang
        );

        if (barangDitemukan) {
            barangDitemukan.jumlah += Number(pinjam.jumlah) || 0;
        }
    }

    pinjam.status = "Dikembalikan";

    data.status = "Disetujui";

    localStorage.setItem(
        "barang",
        JSON.stringify(barang)
    );

    localStorage.setItem(
        "peminjaman",
        JSON.stringify(peminjaman)
    );

    localStorage.setItem(
        "pengembalian",
        JSON.stringify(pengembalian)
    );

    alert("Pengembalian berhasil disetujui!");

    showPage("riwayat");
}

/* =====================================================
   TOLAK PENGEMBALIAN
===================================================== */

function tolakPengembalian(
    index
) {

    const pending =
        pengembalian.filter(
            item =>
                item.status ===
                "Menunggu Persetujuan Admin"
        );


    const data =
        pending[index];


   data.status =
    "Ditolak";


localStorage.setItem(
    "pengembalian",
    JSON.stringify(pengembalian)
);


alert(
    "Pengembalian ditolak."
);

    showPage("riwayat");

}


/* =====================================================
   TABEL PENGEMBALIAN
===================================================== */
function buatTabelPengembalian() {

    if (pengembalian.length === 0) {

        return `
            <p>
                Belum ada pengembalian.
            </p>
        `;

    }

    let rows = "";

    pengembalian
        .slice()
        .reverse()
        .forEach(item => {

            let badge = "badge-blue";

            if (item.status === "Disetujui") {
                badge = "badge-green";
            }

            if (item.status === "Ditolak") {
                badge = "badge-red";
            }

            const indexAsli =
                pengembalian.indexOf(item);

            rows += `

                <tr>

                    <td>
                        ${item.nama || "-"}
                    </td>

                    <td>
                        ${
                            item.detailBarang
                                ? item.detailBarang
                                    .map(
                                        barang =>
                                            `${barang.nama} (${barang.jumlah} pcs)`
                                    )
                                    .join("<br>")
                                : item.barang || "-"
                        }
                    </td>

                    <td>
                        ${item.jumlah || 0}
                    </td>

                    <td>
                        ${formatTanggal(item.tanggal)}
                    </td>

                    <td>

                        <span
                            class="badge ${badge}"
                        >
                            ${item.status || "-"}
                        </span>

                    </td>

                    <td>

                        <button
                            class="btn btn-secondary"
                            onclick="
                                printBuktiPengembalian(
                                    ${indexAsli}
                                )
                            "
                        >
                            🖨️ Print
                        </button>

                    </td>

                </tr>

            `;

        });


    return `

        <div class="table-wrapper">

            <table>

                <thead>

                    <tr>

                        <th>
                            Peminjam
                        </th>

                        <th>
                            Barang
                        </th>

                        <th>
                            Jumlah
                        </th>

                        <th>
                            Tanggal Kembali
                        </th>

                        <th>
                            Status
                        </th>

                        <th>
                            Aksi
                        </th>

                    </tr>

                </thead>

                <tbody>

                    ${rows}

                </tbody>

            </table>

        </div>

    `;

}


/* =====================================================
   TANGGAL
===================================================== */

function tanggalHariIni() {

    const sekarang =
        new Date();


    const tahun =
        sekarang.getFullYear();


    const bulan =
        String(
            sekarang.getMonth() + 1
        ).padStart(2, "0");


    const hari =
        String(
            sekarang.getDate()
        ).padStart(2, "0");


    return `${tahun}-${bulan}-${hari}`;

}



function formatTanggal(
    tanggal
) {

    if (!tanggal)
        return "-";


    return new Date(
        tanggal
    ).toLocaleDateString(
        "id-ID",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    );

}

function printBuktiPengembalian(index) {

    const data = pengembalian[index];

    if (!data) {
        alert("Data pengembalian tidak ditemukan.");
        return;
    }

    const detailBarang =
        data.detailBarang &&
        data.detailBarang.length > 0
            ? data.detailBarang.map(item => `
                <tr>
                    <td>${item.nama || "-"}</td>
                    <td>${item.jumlah || 0} pcs</td>
                    <td>${item.tempat || "-"}</td>
                </tr>
            `).join("")
            : `
                <tr>
                    <td>${data.barang || "-"}</td>
                    <td>${data.jumlah || 0} pcs</td>
                    <td>${data.tempat || "-"}</td>
                </tr>
            `;


    const barangHilang =
        data.barangHilang === "Ya"
            ? `
                <div class="section">

                    <h3>Data Barang Hilang</h3>

                    <table>

                        <tr>
                            <td>Nama Barang</td>
                            <td>${data.namaBarangHilang || "-"}</td>
                        </tr>

                        <tr>
                            <td>Jumlah</td>
                            <td>${data.jumlahBarangHilang || 0} pcs</td>
                        </tr>

                        <tr>
                            <td>Terakhir Digunakan Untuk</td>
                            <td>${data.kegiatanBarangHilang || "-"}</td>
                        </tr>

                    </table>

                    <div class="warning">
                        Barang yang hilang wajib diganti oleh orang yang meminjam.
                    </div>

                </div>
            `
            : `
                <div class="section">

                    <h3>Barang Hilang</h3>

                    <p>Tidak ada barang yang hilang.</p>

                </div>
            `;


    const foto =
        data.fotoPengembalian
            ? `
                <div class="section foto-section">

                    <h3>Bukti Foto Pengembalian</h3>

                    <img
                        src="${data.fotoPengembalian}"
                        class="foto"
                    >

                </div>
            `
            : "";


    const printWindow = window.open(
        "",
        "_blank",
        "width=900,height=900"
    );


    printWindow.document.write(`

        <!DOCTYPE html>

        <html lang="id">

        <head>

            <meta charset="UTF-8">

            <title>Bukti Pengembalian Barang</title>

            <style>

                * {
                    box-sizing: border-box;
                }

                @page {
                    size: A4 portrait;
                    margin: 12mm;
                }

                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    color: #222;
                    font-size: 11px;
                }


                /* HEADER */

                .header {
                    display: flex;
                    align-items: center;
                    gap: 15px;

                    padding-bottom: 12px;

                    border-bottom: 2px solid #222;

                    margin-bottom: 15px;
                }

                .logo {
                    width: 120px;
                    height: auto;
                    object-fit: contain;
                }

                /* JUDUL */

                h2 {
                    text-align: center;
                    font-size: 17px;
                    margin: 14px 0 16px;
                }


                /* INFORMASI */

                .info {
                    margin-bottom: 12px;
                }

                .info-row {
                    display: grid;
                    grid-template-columns: 175px 1fr;

                    padding: 5px 0;

                    border-bottom: 1px solid #e5e5e5;
                }


                /* SECTION */

                .section {
                    margin-top: 13px;

                    page-break-inside: avoid;
                    break-inside: avoid;
                }

                .section h3 {
                    margin: 0 0 6px;
                    font-size: 13px;
                }


                /* TABLE */

                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 5px;
                }

                th,
                td {
                    border: 1px solid #ccc;
                    padding: 6px 8px;
                    text-align: left;
                }

                th {
                    font-weight: bold;
                }


                /* FOTO */

                .foto-section {
                    page-break-inside: avoid;
                    break-inside: avoid;
                }

                .foto {
                    display: block;

                    max-width: 100%;
                    width: auto;

                    max-height: 220px;

                    object-fit: contain;

                    border: 1px solid #ddd;

                    margin-top: 5px;
                }


                /* BARANG HILANG */

                .warning {
                    margin-top: 7px;

                    padding: 8px;

                    border: 1px solid #ddd;

                    border-radius: 5px;
                }


                /* TTD */

                .ttd {
                    display: flex;
                    justify-content: flex-end;

                    margin-top: 20px;

                    page-break-inside: avoid;
                    break-inside: avoid;
                }

                .ttd-box {
                    width: 210px;
                    text-align: center;
                }

                .ttd-space {
                    height: 55px;
                }

                .ttd-line {
                    border-top: 1px solid #222;
                    padding-top: 5px;
                    font-weight: bold;
                }


                /* FOOTER */

                .footer {
                    margin-top: 10px;

                    padding-top: 6px;

                    border-top: 1px solid #ddd;

                    text-align: center;

                    font-size: 9px;
                }


                @media print {

                    body {
                        margin: 0;
                    }

                }

            </style>

        </head>


        <body>


            <!-- LOGO -->

           <div class="header">

    <img
        src="logovedu.png"
        class="logo"
        alt="VernonEdu"
    >

</div>
            <!-- JUDUL -->

            <h2>
                BUKTI PENGEMBALIAN BARANG
            </h2>


            <!-- DATA -->

            <div class="info">

                <div class="info-row">
                    <strong>Peminjam</strong>
                    <span>${data.nama || "-"}</span>
                </div>

                <div class="info-row">
                    <strong>Tanggal Peminjaman</strong>
                    <span>${formatTanggal(data.tanggalPinjam)}</span>
                </div>

                <div class="info-row">
                    <strong>Batas Pengembalian</strong>
                    <span>${formatTanggal(data.tanggalPengembalian)}</span>
                </div>

                <div class="info-row">
                    <strong>Tanggal Pengembalian</strong>
                    <span>${formatTanggal(data.tanggal)}</span>
                </div>

                <div class="info-row">
                    <strong>Tempat Barang</strong>
                    <span>${data.tempat || "-"}</span>
                </div>

                <div class="info-row">
                    <strong>Kegiatan</strong>
                    <span>${data.kegiatan || "-"}</span>
                </div>

                <div class="info-row">
                    <strong>Status</strong>
                    <span>${data.status || "-"}</span>
                </div>

            </div>


            <!-- DETAIL BARANG -->

            <div class="section">

                <h3>Detail Barang</h3>

                <table>

                    <thead>

                        <tr>
                            <th>Nama Barang</th>
                            <th>Jumlah</th>
                            <th>Tempat Barang</th>
                        </tr>

                    </thead>

                    <tbody>

                        ${detailBarang}

                    </tbody>

                </table>

            </div>


            <!-- BARANG HILANG -->

            ${barangHilang}


            <!-- FOTO -->

            ${foto}


            <!-- TTD -->

            <div class="ttd">

                <div class="ttd-box">

                    <div>
                        Mengetahui,
                    </div>

                    <div class="ttd-space"></div>

                    <div class="ttd-line">
                        Admin VernonEdu
                    </div>

                </div>

            </div>


            <div class="footer">

                Bukti ini merupakan catatan pengembalian
                barang inventaris VernonEdu.

            </div>


        </body>

        </html>

    `);


    printWindow.document.close();


    setTimeout(() => {

        printWindow.focus();

        printWindow.print();

    }, 1000);

}

/* =====================================================
   PRINT BUKTI PEMINJAMAN
===================================================== */

function printBuktiPeminjaman(index) {

    const data =
        peminjaman[index];


    if (!data) {

        alert(
            "Data peminjaman tidak ditemukan."
        );

        return;

    }


    const printWindow =
        window.open(
            "",
            "_blank"
        );


    const detailBarang =
        data.detailBarang ||
        [
            {
                nama:
                    data.barang,

                jumlah:
                    data.jumlah,

                tempat:
                    data.tempat
            }
        ];


    let rowsBarang = "";


    detailBarang.forEach(
        (item, nomor) => {

            rowsBarang += `

                <tr>

                    <td class="center">
                        ${nomor + 1}
                    </td>

                    <td>
                        ${item.nama}
                    </td>

                    <td class="center">
                        ${item.jumlah} pcs
                    </td>

                    <td>
                        ${item.tempat}
                    </td>

                </tr>

            `;

        }
    );


    printWindow.document.write(`

        <!DOCTYPE html>

        <html>

        <head>

            <title>
                Bukti Peminjaman - ${data.nama}
            </title>


            <style>

                * {
                    box-sizing: border-box;
                }


                body {

                    font-family:
                        Arial,
                        Helvetica,
                        sans-serif;

                    color: #29232f;

                    margin: 0;

                    padding: 35px;

                }


                .print-container {

                    max-width: 850px;

                    margin: auto;

                }


                .header {

                    text-align: center;

                    padding-bottom: 18px;

                    border-bottom:
                        2px solid #7043a8;

                }


                .header img {

                    width: 220px;

                    max-height: 90px;

                    object-fit: contain;

                }


                .title {

                    text-align: center;

                    margin:
                        25px 0 20px;

                }


                .title h1 {

                    margin: 0;

                    font-size: 22px;

                    color: #33234f;

                }


                .title p {

                    margin:
                        7px 0 0;

                    font-size: 13px;

                    color: #77717f;

                }


                table {

                    width: 100%;

                    border-collapse:
                        collapse;

                    margin-top: 15px;

                }


                th,
                td {

                    border:
                        1px solid #d9d2df;

                    padding:
                        10px 12px;

                    font-size: 13px;

                    vertical-align:
                        middle;

                }


                th {

                    background:
                        #f3edfa;

                    color:
                        #4b3560;

                    font-weight:
                        700;

                }


                .center {

                    text-align:
                        center;

                }


                .section-title {

                    margin-top: 22px;

                    margin-bottom: 8px;

                    font-size: 14px;

                    font-weight: 700;

                    color: #4b3560;

                }


                .signature-wrapper {

                    margin-top: 70px;

                    display: flex;

                    justify-content:
                        flex-end;

                }


                .signature {

                    width: 250px;

                    text-align: center;

                }


                .signature-space {

                    height: 80px;

                }


                .signature-line {

                    border-bottom:
                        1px solid #333;

                    margin-bottom: 7px;

                }


                .footer {

                    margin-top: 35px;

                    text-align: center;

                    font-size: 11px;

                    color: #8a8390;

                }


                @media print {

                    body {

                        padding: 20px;

                    }

                }

            </style>

        </head>


        <body>

            <div class="print-container">


                <!-- LOGO -->

                <div class="header">

                    <img
                        src="logovedu.png"
                        alt="VernonEdu"
                    >

                </div>


                <!-- JUDUL -->

                <div class="title">

                    <h1>
                        BUKTI PEMINJAMAN BARANG
                    </h1>

                    <p>
                        Inventory VernonEdu
                    </p>

                </div>


                <!-- DATA PEMINJAM -->

                <div class="section-title">
                    Data Peminjaman
                </div>


                <table>

                    <tr>

                        <th width="30%">
                            Nama Peminjam
                        </th>

                        <td>
                            ${data.nama}
                        </td>

                    </tr>


                    <tr>

                        <th>
                            Tanggal Peminjaman
                        </th>

                        <td>
                            ${formatTanggal(
                                data.tanggalPinjam
                            )}
                        </td>

                    </tr>


                    <tr>

                        <th>
                            Tanggal Pengembalian
                        </th>

                        <td>
                            ${formatTanggal(
                                data.tanggalPengembalian
                            )}
                        </td>

                    </tr>


                    <tr>

                        <th>
                            Kegiatan
                        </th>

                        <td>
                            ${data.kegiatan}
                        </td>

                    </tr>

                </table>


                <!-- BARANG -->

                <div class="section-title">
                    Daftar Barang yang Dipinjam
                </div>


                <table>

                    <thead>

                        <tr>

                            <th width="8%">
                                No
                            </th>

                            <th>
                                Nama Barang
                            </th>

                            <th width="18%">
                                Jumlah
                            </th>

                            <th width="28%">
                                Tempat Barang
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        ${rowsBarang}


                        <tr>

                            <th colspan="2">
                                Total
                            </th>

                            <th class="center">
                                ${data.jumlah} pcs
                            </th>

                            <th>
                                ${data.tempat}
                            </th>

                        </tr>

                    </tbody>

                </table>


                <!-- TANDA TANGAN -->

                <div class="signature-wrapper">

                    <div class="signature">

                        <div>
                            Peminjam
                        </div>

                        <div class="signature-space">
                        </div>

                        <div class="signature-line">
                        </div>

                        <strong>
                            ${data.nama}
                        </strong>

                    </div>

                </div>


                <div class="footer">

                    Bukti ini merupakan catatan
                    peminjaman barang inventaris
                    VernonEdu.

                </div>


            </div>


            <script>

                window.onload = function() {

                    window.print();

                };

            <\/script>

        </body>

        </html>

    `);


    printWindow.document.close();

}

/* =====================================================
   TAMPILKAN FIELD BARANG HILANG
===================================================== */

function toggleBarangHilang() {

    const pilihan =
        document
            .getElementById(
                "barangHilang"
            )
            ?.value;


    const field =
        document.getElementById(
            "fieldBarangHilang"
        );


    if (!field) return;


    if (pilihan === "Ya") {

        field.style.display =
            "block";

    }

    else {

        field.style.display =
            "none";


        const nama =
            document.getElementById(
                "namaBarangHilang"
            );

        const jumlah =
            document.getElementById(
                "jumlahBarangHilang"
            );

        const kegiatan =
            document.getElementById(
                "kegiatanBarangHilang"
            );


        if (nama)
            nama.value = "";


        if (jumlah)
            jumlah.value = "";


        if (kegiatan)
            kegiatan.value = "";

    }

}

/* =====================================================
   SIMPAN DATA BARANG
===================================================== */

if (!barangDataAwal) {
    localStorage.setItem(
        "barang",
        JSON.stringify(barang)
    );
}