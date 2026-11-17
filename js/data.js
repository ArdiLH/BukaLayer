/* BukaLayer — data materi (lokal). Tambah materi baru dengan fungsi L(...) di bawah. */
const CATS=[
{id:"space",name:"Space & Universe",icon:"🚀",color:"#2f6bff",desc:"Bintang, planet, dan misteri alam semesta."},
{id:"history",name:"History & Civilization",icon:"🏛️",color:"#ff9f43",desc:"Peristiwa dan peradaban yang membentuk dunia."},
{id:"human",name:"Human & Psychology",icon:"🧠",color:"#ff3df0",desc:"Otak, perilaku, dan cara kerja tubuh manusia."},
{id:"math",name:"Mathematics & Logic",icon:"➕",color:"#ffe14d",desc:"Angka, pola, dan trik berpikir logis."},
{id:"nature",name:"Nature & Science",icon:"🌿",color:"#c6ff3d",desc:"Fenomena alam dan makhluk hidup."},
{id:"tech",name:"Technology & AI",icon:"🤖",color:"#a974ff",desc:"Teknologi yang kamu pakai setiap hari."},
{id:"geo",name:"Geography & World",icon:"🌍",color:"#2ed3c6",desc:"Negara, lautan, dan keunikan bumi."},
{id:"eco",name:"Economy & Business",icon:"💰",color:"#ff6b4a",desc:"Uang, harga, dan cara ekonomi bekerja."},
{id:"physics",name:"Physics & Discovery",icon:"⚛️",color:"#5cc8ff",desc:"Hukum alam di balik hal sehari-hari."},
{id:"general",name:"General Knowledge",icon:"💡",color:"#ff9ecb",desc:"Wawasan umum yang menarik dan berguna."}];

const LESSONS=[];
/* quiz item: [pertanyaan, [pilihan], indeksJawabanBenar, penjelasan] */
function L(id,cat,title,min,summary,body,fact,example,extra,quiz){LESSONS.push({id,cat,title,min,summary,body,fact,example,extra,quiz})}

L(1,"space","Mengapa luar angkasa tidak memiliki suara?",3,"Suara butuh sesuatu untuk bergetar. Di ruang hampa, tidak ada apa-apa.",
["Suara adalah getaran yang merambat lewat medium seperti udara, air, atau benda padat. Tanpa partikel yang bisa bergetar, suara tidak punya jalan untuk berjalan.","Luar angkasa nyaris hampa: partikelnya sangat jarang sehingga gelombang suara tidak bisa merambat. Karena itu ledakan di film luar angkasa sebenarnya berlangsung sunyi."],
"Astronaut di luar pesawat berbicara lewat radio, karena gelombang radio bisa merambat di ruang hampa.",
"Bel di dalam toples yang udaranya disedot perlahan akan terdengar makin pelan hingga nyaris hening.",
"Di dalam pesawat luar angkasa ada udara, jadi astronaut tetap bisa mengobrol langsung.",
[["Mengapa suara tidak merambat di luar angkasa?",["Terlalu dingin","Tidak ada medium yang bergetar","Terlalu gelap","Tidak ada Matahari"],1,"Suara membutuhkan medium, sedangkan ruang angkasa nyaris hampa."],
["Apa yang tetap bisa merambat di ruang hampa?",["Gema","Getaran udara","Gelombang radio","Suara ledakan"],2,"Gelombang radio adalah gelombang elektromagnetik yang tidak butuh medium."],
["Suara pada dasarnya adalah...",["Getaran yang merambat lewat medium","Cahaya yang lambat","Aliran listrik","Panas"],0,"Suara berupa getaran pada medium."]]);

L(2,"space","Apa itu lubang hitam?",4,"Wilayah dengan gravitasi sangat kuat sampai cahaya pun tak bisa lolos.",
["Lubang hitam adalah wilayah di ruang angkasa dengan gravitasi begitu kuat sehingga tak ada apa pun, termasuk cahaya, yang bisa lolos setelah melewati batas yang disebut cakrawala peristiwa.","Banyak lubang hitam terbentuk saat bintang yang sangat masif kehabisan bahan bakar, lalu intinya runtuh oleh gravitasinya sendiri. Lubang hitam tidak menyedot semuanya seperti penyedot debu; planet yang mengorbit pada jarak aman tetap aman."],
"Pada 2019 para ilmuwan merilis foto pertama bayangan lubang hitam, yaitu di galaksi M87.",
"Seperti air terjun: di atas bendungan kamu masih bisa berenang menjauh, tetapi setelah melewati tepi, arusnya terlalu kuat untuk dilawan.",
"Lubang hitam tidak terlihat langsung. Kita mendeteksinya dari gas panas yang berputar di sekitarnya dan dari gerak bintang di dekatnya.",
[["Apa nama batas titik tanpa kembali pada lubang hitam?",["Korona","Cakrawala peristiwa","Orbit","Atmosfer"],1,"Itulah cakrawala peristiwa."],
["Bagaimana banyak lubang hitam terbentuk?",["Dari tabrakan planet","Dari bintang masif yang intinya runtuh","Dari awan debu dingin","Dari komet"],1,"Inti bintang masif runtuh oleh gravitasinya sendiri."],
["Foto lubang hitam 2019 diambil di galaksi...",["Bima Sakti","Andromeda","M87","Triangulum"],2,"Foto pertama berasal dari galaksi M87."]]);

L(3,"space","Mengapa Bulan selalu menunjukkan sisi yang sama?",3,"Rotasi dan revolusi Bulan sama lama, jadi wajahnya selalu mengarah ke Bumi.",
["Bulan berputar pada porosnya sekali setiap kali mengelilingi Bumi, sekitar 27,3 hari. Karena kedua gerakan itu sama lama, dari Bumi kita selalu melihat sisi yang sama.","Kondisi ini disebut tidal locking. Gravitasi Bumi menarik Bulan dan, selama miliaran tahun, memperlambat rotasinya sampai terkunci."],
"Sisi Bulan yang tak terlihat dari Bumi disebut sisi jauh, bukan sisi gelap. Sisi itu tetap mendapat sinar Matahari.",
"Seperti mengitari meja sambil terus menghadap ke meja: kamu berputar sekali tiap satu putaran, dan wajahmu selalu menghadap ke tengah.",
"Bulan menjauh dari Bumi sekitar 3,8 cm per tahun.",
[["Istilah untuk rotasi Bulan yang terkunci pada Bumi?",["Tidal locking","Gerhana","Presesi","Pasang naik"],0,"Itu disebut tidal locking."],
["Sisi Bulan yang tak terlihat dari Bumi disebut...",["Sisi gelap","Sisi jauh","Sisi mati","Sisi dingin"],1,"Namanya sisi jauh; ia tetap disinari Matahari."],
["Satu rotasi Bulan lamanya sekitar...",["1 hari","7 hari","27,3 hari","365 hari"],2,"Sama dengan waktu revolusinya, sekitar 27,3 hari."]]);

L(4,"history","Sejarah Tembok Besar China",4,"Bukan satu tembok, melainkan rangkaian benteng yang dibangun berabad-abad.",
["Pembangunan tembok pertama dikaitkan dengan Qin Shi Huang, kaisar pertama China yang menyatukan negeri itu pada 221 SM. Ia menyambung tembok-tembok lama dari negara yang ditaklukkan untuk menahan serangan suku nomaden dari utara.","Tembok yang paling terkenal dan masih berdiri sekarang sebagian besar dibangun dan diperkuat pada masa Dinasti Ming (1368–1644) memakai batu bata dan batu."],
"Tembok Besar adalah rangkaian banyak tembok; survei resmi China mencatat panjang totalnya lebih dari 20.000 km.",
"Seperti pagar kompleks yang dibangun berkali-kali oleh banyak pengurus: tiap era menambah dan memperbaiki bagian yang berbeda.",
"Mitos bahwa Tembok Besar terlihat dari Bulan tidak benar. Dari orbit rendah pun sulit dilihat dengan mata telanjang.",
[["Kaisar pertama yang dikaitkan dengan pembangunannya?",["Kublai Khan","Qin Shi Huang","Sun Yat-sen","Kaisar Ming"],1,"Qin Shi Huang menyatukan China pada 221 SM."],
["Bagian yang paling terkenal sebagian besar berasal dari dinasti...",["Han","Tang","Ming","Qing"],2,"Dinasti Ming (1368–1644) memperkuat banyak bagian yang kini berdiri."],
["Benarkah Tembok Besar terlihat jelas dari Bulan?",["Ya, sangat jelas","Tidak, itu mitos","Hanya saat malam","Hanya dari Mars"],1,"Itu mitos."]]);

L(5,"history","Bagaimana Piramida Giza dibangun?",4,"Makam megah firaun dari sekitar 4.500 tahun lalu.",
["Piramida Agung di Giza dibangun untuk Firaun Khufu dari Dinasti ke-4 Mesir Kuno, sekitar 2560 SM. Tingginya semula sekitar 146 meter dan tersusun dari jutaan balok batu.","Temuan arkeologi menunjukkan pekerjanya adalah tenaga kerja terorganisir yang diberi makan dan tempat tinggal, bukan sekadar budak. Balok diangkut dengan kereta luncur, tuas, dan tenaga banyak orang."],
"Selama sekitar 3.800 tahun, Piramida Agung adalah bangunan buatan manusia tertinggi di dunia.",
"Seperti proyek konstruksi besar masa kini: ada perencana, mandor, logistik makanan, dan ribuan pekerja yang bergantian.",
"Piramida adalah makam, tempat firaun dipercaya melanjutkan perjalanan ke kehidupan setelah mati.",
[["Piramida Agung dibangun untuk firaun...",["Tutankhamun","Khufu","Ramses II","Cleopatra"],1,"Khufu dari Dinasti ke-4."],
["Fungsi utama piramida adalah...",["Pasar","Makam firaun","Observatorium","Benteng"],1,"Piramida adalah makam."],
["Temuan arkeologi menunjukkan pekerjanya adalah...",["Tentara asing saja","Robot kuno","Tenaga kerja terorganisir yang diberi makan","Tahanan perang saja"],2,"Mereka diberi makan dan tempat tinggal."]]);

L(6,"history","Proklamasi Kemerdekaan Indonesia 1945",5,"Dari menyerahnya Jepang sampai teks proklamasi dibacakan.",
["Pada 15 Agustus 1945 Jepang menyerah kepada Sekutu. Kekosongan kekuasaan itu mendorong para pemuda mendesak Soekarno dan Hatta segera memproklamasikan kemerdekaan. Pada 16 Agustus, mereka dibawa ke Rengasdengklok.","Malam harinya naskah proklamasi dirumuskan di rumah Laksamana Maeda di Jakarta, lalu diketik oleh Sayuti Melik. Pada 17 Agustus 1945 sekitar pukul 10.00, Soekarno membacakannya di Jalan Pegangsaan Timur 56."],
"Bendera Sang Saka Merah Putih yang dikibarkan saat proklamasi dijahit oleh Fatmawati.",
"Seperti keputusan yang menunggu momen tepat: pemuda ingin segera, tokoh tua ingin berhitung. Kompromi lahir di Rengasdengklok.",
"Tanggal 17 Agustus 1945 bertepatan dengan 17 Ramadan 1364 H, hari Jumat.",
[["Kapan Proklamasi dibacakan?",["17 Agustus 1945","15 Agustus 1945","1 Juni 1945","10 November 1945"],0,"17 Agustus 1945."],
["Siapa yang mengetik naskah proklamasi?",["Hatta","Sayuti Melik","Maeda","Sutan Sjahrir"],1,"Sayuti Melik mengetiknya."],
["Peristiwa 16 Agustus yang membawa Soekarno-Hatta terjadi di...",["Rengasdengklok","Bandung","Surabaya","Yogyakarta"],0,"Peristiwa Rengasdengklok."]]);

L(7,"human","Bagaimana otak menyimpan ingatan?",4,"Ingatan adalah sambungan antarneuron yang menguat.",
["Otak menyimpan ingatan lewat perubahan kekuatan sambungan antarneuron (sinapsis). Saat kamu mempelajari sesuatu, jalur neuron tertentu aktif bersamaan dan sambungannya menguat.","Ingatan melewati beberapa tahap: sensorik, jangka pendek yang terbatas, lalu jangka panjang. Hipokampus penting untuk membentuk ingatan baru, dan tidur membantu memantapkannya."],
"Pasien terkenal H.M. kehilangan sebagian lobus temporal termasuk hipokampus, dan sulit membentuk ingatan baru, namun masih bisa belajar keterampilan motorik.",
"Mengulang materi dengan jeda (spaced repetition), misalnya hari ini, lusa, lalu minggu depan, lebih awet daripada belajar semalam suntuk.",
"Kurang tidur mengganggu proses pemantapan ingatan.",
[["Ingatan disimpan lewat perubahan pada...",["Tulang","Sinapsis antarneuron","Pembuluh darah","Kulit kepala"],1,"Kekuatan sinapsis berubah saat belajar."],
["Bagian otak penting untuk membentuk ingatan baru?",["Hipokampus","Serebelum","Batang otak","Kelenjar pineal"],0,"Hipokampus."],
["Cara belajar yang membantu ingatan awet?",["Belajar sekali semalaman","Pengulangan berjeda","Hanya membaca sekilas","Belajar sambil begadang"],1,"Spaced repetition."]]);

L(8,"human","Mengapa manusia bermimpi?",4,"Ilmuwan punya beberapa teori, belum ada satu jawaban pasti.",
["Mimpi paling jelas terjadi saat tidur REM, ketika otak sangat aktif sementara otot sebagian besar lumpuh sementara agar kita tidak mempraktikkan mimpi.","Beberapa teori: mimpi membantu memantapkan ingatan, mengolah emosi, atau muncul dari aktivitas acak otak yang lalu dirangkai menjadi cerita. Para ilmuwan belum sepakat soal fungsi pastinya."],
"Tidur REM kira-kira 20–25% dari total tidur orang dewasa.",
"Setelah hari yang penuh emosi atau belajar banyak, potongan kejadian itu sering muncul dalam mimpi.",
"Satu siklus tidur berlangsung sekitar 90 menit dan berulang beberapa kali semalam.",
[["Mimpi paling jelas terjadi pada tahap...",["REM","Terjaga","Pingsan","Mengantuk"],0,"Tidur REM."],
["Mengapa otot lumpuh sementara saat REM?",["Karena dingin","Agar kita tidak menjalankan isi mimpi","Karena lapar","Karena kurang oksigen"],1,"Itu mekanisme perlindungan."],
["Bagaimana status ilmiah fungsi mimpi?",["Sudah pasti satu jawaban","Masih ada beberapa teori","Terbukti hanya kebetulan","Tidak ada penelitian"],1,"Belum ada kesepakatan."]]);

L(9,"human","Apa itu efek plasebo?",3,"Harapan bisa mengubah cara tubuh merasakan gejala.",
["Efek plasebo terjadi ketika perlakuan tanpa zat aktif membuat seseorang merasa lebih baik karena harapan dan konteks pengobatan. Efeknya paling terlihat pada gejala subjektif seperti nyeri, mual, dan kelelahan.","Plasebo tidak menyembuhkan penyakit seperti infeksi bakteri atau tumor. Karena itu uji klinis selalu membandingkan obat baru dengan plasebo."],
"Beberapa studi menemukan efek plasebo bahkan muncul saat pasien tahu itu plasebo.",
"Dalam uji coba obat sakit kepala, sebagian kelompok plasebo melaporkan nyeri berkurang meski hanya menelan pil gula.",
"Kebalikannya, efek nosebo, adalah munculnya gejala buruk karena mengharapkan efek samping.",
[["Efek plasebo paling terlihat pada...",["Infeksi bakteri","Gejala subjektif seperti nyeri","Patah tulang","Tumor"],1,"Gejala subjektif lebih mudah dipengaruhi harapan."],
["Mengapa uji klinis memakai plasebo?",["Agar murah","Sebagai pembanding untuk obat asli","Supaya pasien tidur","Tanpa alasan"],1,"Untuk mengukur efek obat yang sebenarnya."],
["Efek kebalikan plasebo disebut...",["Nosebo","Metabo","Anti-efek","Hiperplasebo"],0,"Nosebo."]]);

L(10,"math","Cara menghitung persentase dengan cepat",4,"Pakai 10% dan 5% sebagai jalan pintas di kepala.",
["Kunci utamanya: 10% dari angka = geser koma satu tempat (bagi 10). Dari situ, 5% adalah setengahnya, dan 1% adalah bagi 100.","Langkah menghitung 15% dari 240: (1) 10% dari 240 = 24. (2) 5% = setengah dari 24 = 12. (3) Jumlahkan 24 + 12 = 36."],
"Persentase berasal dari kata Latin per centum, artinya per seratus.",
"Soal: Diskon 20% untuk sepatu Rp350.000. 10% = 35.000, jadi 20% = 70.000. Harga akhir = 350.000 − 70.000 = Rp280.000.",
"Trik dua arah: 8% dari 50 sama dengan 50% dari 8, hasilnya 4. Pilih arah yang lebih mudah.",
[["Berapa 10% dari 480?",["4,8","48","480","24"],1,"Bagi 10: 480 ÷ 10 = 48."],
["Berapa 15% dari 240?",["24","30","36","48"],2,"24 + 12 = 36."],
["Diskon 20% untuk Rp100.000 membuat harga menjadi...",["Rp20.000","Rp80.000","Rp90.000","Rp120.000"],1,"20% = 20.000, sisa 80.000."]]);

L(11,"math","Deret Fibonacci: pola angka yang muncul di mana-mana",4,"Setiap angka adalah jumlah dua angka sebelumnya.",
["Deret Fibonacci dimulai 1, 1, 2, 3, 5, 8, 13, 21, 34, 55... Aturannya sederhana: setiap suku sama dengan jumlah dua suku sebelumnya.","Contoh langkah: suku setelah 21 dan 34 adalah 21 + 34 = 55. Semakin jauh, perbandingan dua suku berurutan mendekati 1,618, yang dikenal sebagai rasio emas."],
"Banyak bunga memiliki kelopak berjumlah angka Fibonacci, seperti 3, 5, 8, atau 13.",
"Soal: berapa suku ke-10? Urutkan: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55. Jawabannya 55.",
"Leonardo dari Pisa (Fibonacci) memperkenalkannya di Eropa lewat bukunya tahun 1202.",
[["Suku setelah 8 dan 13 adalah...",["18","21","26","24"],1,"8 + 13 = 21."],
["Perbandingan suku berurutan mendekati...",["1,618","2,5","3,14","0,5"],0,"Rasio emas, sekitar 1,618."],
["Berapa suku ke-10 deret Fibonacci (mulai 1, 1)?",["34","55","89","44"],1,"Suku ke-10 adalah 55."]]);

L(12,"math","Teorema Pythagoras",5,"Rumus segitiga siku-siku yang dipakai tukang sampai insinyur.",
["Pada segitiga siku-siku, kuadrat sisi miring (c) sama dengan jumlah kuadrat dua sisi lainnya: a² + b² = c². Sisi miring adalah sisi terpanjang, di seberang sudut 90°.","Contoh: sisi 6 dan 8. Langkah: 6² = 36, 8² = 64, jumlahnya 100, akar dari 100 adalah 10. Jadi sisi miringnya 10."],
"Segitiga 3-4-5 sudah dipakai tukang sejak lama untuk memastikan sudut siku-siku.",
"Soal: tangga 5 m disandarkan ke dinding, kaki tangga 3 m dari dinding. Tinggi ujung tangga: 5² − 3² = 25 − 9 = 16, akarnya 4. Jadi 4 meter.",
"Rumus ini hanya berlaku untuk segitiga siku-siku.",
[["Rumus Pythagoras adalah...",["a + b = c","a² + b² = c²","a × b = c","a² − b² = c"],1,"Jumlah kuadrat sisi tegak = kuadrat sisi miring."],
["Sisi miring segitiga dengan sisi 6 dan 8 adalah...",["10","12","14","9"],0,"36 + 64 = 100, akarnya 10."],
["Rumus ini berlaku untuk segitiga...",["Sembarang","Sama sisi","Siku-siku","Tumpul"],2,"Hanya segitiga siku-siku."]]);

L(13,"nature","Mengapa langit berwarna biru?",3,"Cahaya biru paling banyak dihamburkan oleh atmosfer.",
["Cahaya Matahari tampak putih, tetapi terdiri dari banyak warna. Saat masuk atmosfer, molekul udara menghamburkan cahaya berpanjang gelombang pendek (biru) jauh lebih kuat daripada merah. Peristiwa ini disebut hamburan Rayleigh.","Biru tersebar ke segala arah, sehingga ke mana pun kamu menatap langit, ada cahaya biru yang sampai ke matamu. Ungu juga terhambur kuat, tetapi Matahari memancarkan lebih sedikit ungu dan mata kita kurang peka padanya."],
"Saat senja langit memerah karena cahaya menempuh atmosfer lebih tebal; biru sudah terhambur keluar jalur, sisa merah dan jingga yang sampai.",
"Seperti bola kecil yang lebih mudah terpental oleh banyak rintangan dibanding bola besar. Gelombang biru pendek lebih mudah terhambur.",
"Di Bulan yang tak berudara, langit tampak hitam bahkan di siang hari.",
[["Fenomena yang membuat langit biru disebut...",["Hamburan Rayleigh","Pembiasan prisma","Efek rumah kaca","Aurora"],0,"Hamburan Rayleigh."],
["Mengapa langit tidak tampak ungu?",["Ungu tidak ada","Matahari memancarkan lebih sedikit ungu dan mata kurang peka","Ungu diserap awan semua","Karena hujan"],1,"Kombinasi sumber cahaya dan sensitivitas mata."],
["Mengapa senja berwarna jingga atau merah?",["Matahari berubah warna","Cahaya menempuh atmosfer lebih tebal sehingga biru terhambur keluar","Bumi lebih panas","Ada polusi saja"],1,"Jalur lebih panjang membuang biru."]]);

L(14,"nature","Bagaimana pelangi terbentuk?",3,"Tetes air bekerja seperti prisma kecil.",
["Pelangi muncul saat sinar Matahari masuk ke tetes air hujan, dibiaskan, dipantulkan di bagian dalam tetes, lalu dibiaskan lagi saat keluar. Tiap warna dibelokkan dengan sudut sedikit berbeda, sehingga cahaya terpisah menjadi spektrum.","Untuk melihat pelangi, Matahari harus berada di belakangmu dan hujan di depanmu. Merah berada di sisi luar busur dan ungu di sisi dalam."],
"Pelangi sebenarnya lingkaran penuh. Dari tanah kita hanya melihat separuhnya karena tertutup horizon.",
"Setelah hujan sore, berdirilah membelakangi Matahari dan lihat ke arah awan hujan yang menjauh.",
"Kadang muncul pelangi ganda; busur kedua lebih redup dan urutan warnanya terbalik.",
[["Posisi Matahari agar pelangi terlihat?",["Di depan pengamat","Di belakang pengamat","Tepat di atas","Tidak berpengaruh"],1,"Matahari di belakangmu, hujan di depanmu."],
["Warna di sisi luar busur pelangi utama?",["Ungu","Hijau","Merah","Kuning"],2,"Merah di luar, ungu di dalam."],
["Apa yang memisahkan warna dalam tetes air?",["Pembiasan dan pemantulan","Gravitasi","Magnet","Suhu"],0,"Cahaya dibiaskan dan dipantulkan."]]);

L(15,"nature","Fotosintesis: cara tumbuhan membuat makanan",4,"Cahaya + air + karbon dioksida menjadi gula dan oksigen.",
["Fotosintesis adalah proses tumbuhan, alga, dan sebagian bakteri mengubah energi cahaya menjadi energi kimia. Klorofil di dalam kloroplas menangkap cahaya, terutama merah dan biru, sedangkan hijau lebih banyak dipantulkan, itulah mengapa daun tampak hijau.","Persamaan sederhananya: 6CO₂ + 6H₂O + cahaya → C₆H₁₂O₆ + 6O₂. Karbon dioksida dan air diubah menjadi glukosa dan oksigen."],
"Diperkirakan sekitar separuh oksigen di atmosfer dihasilkan fitoplankton di laut.",
"Tanaman di dekat jendela tumbuh condong ke arah cahaya karena cahaya adalah bahan bakar fotosintesis.",
"Fotosintesis juga menyerap karbon dioksida dari udara.",
[["Zat hijau yang menangkap cahaya adalah...",["Klorofil","Hemoglobin","Melanin","Keratin"],0,"Klorofil."],
["Apa yang dihasilkan fotosintesis selain glukosa?",["Nitrogen","Oksigen","Helium","Metana"],1,"Oksigen."],
["Bahan yang diserap dari udara untuk fotosintesis?",["Oksigen","Karbon dioksida","Hidrogen","Argon"],1,"Karbon dioksida."]]);

L(16,"tech","Apa itu kecerdasan buatan (AI)?",4,"Komputer yang belajar pola dari data untuk mengerjakan tugas cerdas.",
["Kecerdasan buatan adalah sistem komputer yang mengerjakan tugas yang biasanya butuh kecerdasan manusia, seperti mengenali gambar, memahami bahasa, atau memberi rekomendasi.","Banyak AI modern memakai machine learning: komputer mempelajari pola dari banyak contoh data, bukan diprogram dengan aturan satu per satu."],
"Filter spam email dan rekomendasi video adalah contoh AI yang kamu pakai sehari-hari.",
"Aplikasi galeri yang mengelompokkan foto berdasarkan wajah belajar dari pola visual pada banyak foto.",
"AI bisa salah dan bisa bias jika data latihnya tidak seimbang, jadi hasilnya tetap perlu diperiksa.",
[["Machine learning berarti...",["Komputer belajar pola dari data","Robot berjalan","Mesin cuci pintar","Menulis kode manual"],0,"Belajar dari contoh data."],
["Contoh AI sehari-hari?",["Filter spam","Kalkulator biasa","Lampu senter","Penggaris"],0,"Filter spam memakai pola yang dipelajari."],
["Mengapa hasil AI perlu diperiksa?",["Selalu sempurna","Bisa salah atau bias","Tidak memakai data","Hanya untuk ahli"],1,"AI bisa salah dan bias."]]);

L(17,"tech","Bagaimana internet bekerja?",4,"Data dipecah jadi paket kecil dan dikirim lewat banyak jalur.",
["Internet adalah jaringan dari banyak jaringan. Saat kamu membuka situs, data dipecah menjadi paket kecil, dikirim lewat berbagai rute, lalu disusun ulang di perangkatmu.","Setiap perangkat punya alamat IP. DNS bertugas seperti buku telepon: menerjemahkan nama situs menjadi alamat IP yang dimengerti komputer."],
"Sebagian besar lalu lintas internet antarbenua lewat kabel serat optik di dasar laut.",
"Mengirim foto lewat chat: foto dipecah jadi paket, tiap paket bisa lewat jalur berbeda, lalu digabung kembali.",
"Internet dan Web bukan hal yang sama: Web adalah salah satu layanan yang berjalan di atas internet.",
[["Fungsi DNS adalah...",["Mempercepat WiFi","Menerjemahkan nama situs ke alamat IP","Menyimpan foto","Mengisi baterai"],1,"DNS menerjemahkan nama domain."],
["Data di internet dikirim dalam bentuk...",["Satu file besar","Paket-paket kecil","Gelombang suara","Kertas"],1,"Dipecah menjadi paket."],
["Lalu lintas antarbenua sebagian besar lewat...",["Satelit saja","Kabel serat optik bawah laut","Burung merpati","Radio AM"],1,"Kabel serat optik bawah laut."]]);

L(18,"tech","Bagaimana GPS menemukan lokasimu?",4,"Menghitung jarak dari beberapa satelit berdasarkan waktu sinyal.",
["Satelit GPS memancarkan sinyal berisi waktu dan posisinya. Ponselmu mengukur selisih waktu sinyal tiba untuk menghitung jarak ke tiap satelit.","Dengan jarak ke minimal empat satelit, ponsel dapat menentukan lintang, bujur, ketinggian, dan koreksi jam. Ponselmu hanya menerima sinyal, tidak mengirim apa pun ke satelit."],
"Tanpa koreksi relativitas, jam satelit akan melenceng dan lokasi bisa meleset sekitar 10 km per hari.",
"Seperti menebak lokasi dari tiga teman yang masing-masing menyebut jarakmu dari mereka: titik pertemuan lingkaran jaraknya adalah posisimu.",
"Di dalam gedung sinyal GPS lemah, jadi ponsel juga memakai WiFi dan menara seluler.",
[["Minimal berapa satelit untuk posisi 3D plus koreksi waktu?",["1","2","4","10"],2,"Empat satelit."],
["Apa yang diukur ponsel dari sinyal satelit?",["Warna","Selisih waktu tiba","Suhu","Suara"],1,"Waktu tiba menentukan jarak."],
["Apakah ponselmu mengirim sinyal ke satelit GPS?",["Ya","Tidak, hanya menerima","Kadang","Hanya saat hujan"],1,"GPS bersifat menerima saja."]]);

L(19,"geo","Negara terkecil di dunia",3,"Vatikan: hanya sekitar 0,44 km².",
["Negara terkecil di dunia adalah Vatikan, dengan luas sekitar 0,44 km² dan penduduk sekitar 800 orang. Negara ini berada di tengah kota Roma, Italia.","Kedaulatan Vatikan diakui lewat Perjanjian Lateran tahun 1929. Di sini terdapat Basilika Santo Petrus dan Museum Vatikan. Negara terkecil berikutnya adalah Monako, sekitar 2 km²."],
"Luas Vatikan setara kurang lebih 60 lapangan sepak bola.",
"Kamu bisa berjalan mengelilingi seluruh wilayah Vatikan dalam waktu sekitar satu jam.",
"Kepala negaranya adalah Paus.",
[["Negara terkecil di dunia?",["Monako","Vatikan","Nauru","San Marino"],1,"Vatikan."],
["Vatikan terletak di dalam kota...",["Paris","Madrid","Roma","Wina"],2,"Roma, Italia."],
["Perjanjian yang mengakui kedaulatannya?",["Lateran 1929","Versailles","Westphalia","Jenewa"],0,"Perjanjian Lateran 1929."]]);

L(20,"geo","Fakta lautan terdalam: Palung Mariana",4,"Titik terdalam bumi sekitar 11 kilometer di bawah permukaan laut.",
["Palung Mariana berada di Samudra Pasifik bagian barat, dekat Kepulauan Mariana. Titik terdalamnya, Challenger Deep, sedalam sekitar 10.935 meter.","Di sana tekanan air lebih dari 1.000 kali tekanan di permukaan laut. Pada 1960, Jacques Piccard dan Don Walsh menjadi manusia pertama yang mencapainya dengan kapal selam Trieste."],
"Puncak Everest (8.849 m) akan tenggelam dengan lebih dari 2 km air di atasnya.",
"Tekanan di sana seperti menahan beban puluhan pesawat jumbo di atas satu area seukuran tubuhmu.",
"Meski ekstrem, makhluk hidup tetap ditemukan di sana, termasuk mikroba dan hewan kecil.",
[["Titik terdalam di Palung Mariana disebut...",["Challenger Deep","Blue Hole","Titan Pit","Kraken Point"],0,"Challenger Deep."],
["Kedalamannya sekitar...",["1 km","5 km","11 km","20 km"],2,"Sekitar 10.935 meter."],
["Di samudra mana palung ini berada?",["Atlantik","Pasifik","Hindia","Arktik"],1,"Samudra Pasifik."]]);

L(21,"geo","Indonesia: negara kepulauan terbesar di dunia",4,"Lebih dari 17.000 pulau dan sejarah Deklarasi Djuanda.",
["Indonesia memiliki lebih dari 17.000 pulau yang membentang di sekitar garis khatulistiwa, dan merupakan negara kepulauan terbesar di dunia. Tidak semua pulau berpenghuni.","Pada 13 Desember 1957, Perdana Menteri Djuanda mendeklarasikan bahwa laut di antara pulau-pulau adalah bagian dari wilayah Indonesia. Konsep ini kemudian diakui dunia lewat UNCLOS 1982."],
"Indonesia terbagi dalam tiga zona waktu: WIB, WITA, dan WIT.",
"Jarak dari Sabang di ujung barat sampai Merauke di ujung timur lebih dari 5.000 km.",
"Banyak pulau yang diberi nama dan didata secara resmi, dan angkanya terus diperbarui.",
[["Deklarasi Djuanda dibuat pada...",["1957","1945","1982","1998"],0,"13 Desember 1957."],
["Indonesia memiliki lebih dari berapa pulau?",["1.000","5.000","17.000","50.000"],2,"Lebih dari 17.000."],
["Konsep negara kepulauan diakui dunia lewat...",["UNCLOS 1982","PBB 1945","ASEAN 1967","G20"],0,"UNCLOS 1982."]]);

L(22,"eco","Bagaimana inflasi memengaruhi ekonomi?",4,"Harga naik, nilai uangmu turun.",
["Inflasi adalah kenaikan harga barang dan jasa secara umum dan terus-menerus, sehingga daya beli uang menurun.","Contoh: jika inflasi 5%, barang yang tahun lalu Rp10.000 menjadi Rp10.500. Penyebabnya antara lain permintaan yang naik terlalu cepat atau biaya produksi yang naik. Bank sentral biasanya menaikkan suku bunga untuk menahan inflasi."],
"Kebalikan inflasi disebut deflasi, yaitu harga umum turun terus-menerus.",
"Jika gajimu tetap Rp5.000.000 tapi harga naik 5%, kamu bisa membeli lebih sedikit barang dari sebelumnya.",
"Inflasi rendah dan stabil umumnya dianggap sehat; yang berbahaya adalah inflasi sangat tinggi.",
[["Inflasi berarti...",["Harga umum naik terus-menerus","Harga turun","Uang bertambah banyak otomatis","Pajak naik"],0,"Kenaikan harga umum."],
["Dampak inflasi bagi pendapatan tetap?",["Daya beli turun","Daya beli naik","Tidak ada","Pendapatan ganda"],0,"Barang yang bisa dibeli berkurang."],
["Bank sentral biasanya menahan inflasi dengan...",["Menaikkan suku bunga","Mencetak uang lebih banyak","Menghapus pajak","Menutup bank"],0,"Menaikkan suku bunga."]]);

L(23,"eco","Bunga majemuk dan aturan 72",5,"Bunga yang berbunga lagi, kunci pertumbuhan uang.",
["Bunga majemuk berarti bunga dihitung dari pokok ditambah bunga sebelumnya. Rumusnya: A = P × (1 + r)ⁿ.","Contoh: Rp10.000.000 dengan bunga 8% per tahun selama 3 tahun. Tahun 1: 10.800.000. Tahun 2: 11.664.000. Tahun 3: 12.597.120. Bunga sederhana hanya menghasilkan 12.400.000."],
"Aturan 72: bagi 72 dengan persen bunga untuk memperkirakan lama uang berlipat dua.",
"Soal: bunga 8% per tahun. 72 ÷ 8 = 9, jadi uang kira-kira berlipat dua dalam 9 tahun.",
"Bunga majemuk juga berlaku pada utang, jadi cicilan yang tertunda bisa membengkak.",
[["Bunga majemuk dihitung dari...",["Pokok saja","Pokok ditambah bunga sebelumnya","Bunga saja","Pajak"],1,"Bunga berbunga."],
["Menurut aturan 72, bunga 6% menggandakan uang dalam...",["6 tahun","12 tahun","18 tahun","72 tahun"],1,"72 ÷ 6 = 12."],
["Rp10 juta, 10% per tahun, majemuk 2 tahun menjadi...",["12 juta","12,1 juta","11 juta","13 juta"],1,"11 juta lalu 12,1 juta."]]);

L(24,"eco","Permintaan dan penawaran",4,"Mengapa harga bisa naik turun.",
["Permintaan adalah seberapa banyak orang ingin membeli, penawaran adalah seberapa banyak penjual mau menjual. Jika harga naik, biasanya permintaan turun dan penawaran naik.","Titik pertemuan keduanya disebut harga keseimbangan. Jika permintaan melonjak sementara barang terbatas, harga cenderung naik."],
"Harga tiket dan penginapan sering naik saat musim libur karena permintaan melonjak.",
"Menjelang Lebaran, permintaan tiket mudik naik tajam sehingga harga ikut naik.",
"Pemerintah kadang menetapkan harga maksimum untuk barang pokok agar tetap terjangkau.",
[["Jika permintaan naik dan barang terbatas, harga biasanya...",["Turun","Naik","Tetap","Nol"],1,"Harga cenderung naik."],
["Titik pertemuan permintaan dan penawaran disebut...",["Harga keseimbangan","Harga diskon","Harga paksa","Pajak"],0,"Harga keseimbangan."],
["Saat harga naik, permintaan biasanya...",["Naik","Turun","Tidak berubah","Hilang"],1,"Orang membeli lebih sedikit."]]);

L(25,"physics","Mengapa benda berat dan ringan jatuh bersamaan?",4,"Tanpa hambatan udara, semua benda jatuh dengan percepatan sama.",
["Tanpa hambatan udara, semua benda jatuh dengan percepatan sama, sekitar 9,8 m/s² di Bumi. Benda berat memang ditarik gravitasi lebih kuat, tetapi juga lebih sulit dipercepat, sehingga keduanya saling meniadakan.","Pada 1971, astronaut Apollo 15 David Scott menjatuhkan palu dan bulu di Bulan, dan keduanya mendarat bersamaan karena tak ada udara."],
"Di Bumi, bulu jatuh lebih lambat karena hambatan udara, bukan karena gravitasi berbeda.",
"Soal: benda jatuh 2 detik tanpa hambatan udara. Kecepatan v = g × t = 9,8 × 2 = 19,6 m/s.",
"Galileo disebut-sebut sudah menyimpulkan hal ini jauh sebelum era penerbangan luar angkasa.",
[["Di Bulan, palu dan bulu yang dijatuhkan...",["Palu lebih dulu","Bulu lebih dulu","Mendarat bersamaan","Melayang"],2,"Tidak ada udara."],
["Bulu jatuh lebih lambat di Bumi karena...",["Gravitasi berbeda","Hambatan udara","Magnet","Suhu"],1,"Hambatan udara."],
["Kecepatan setelah 3 detik jatuh bebas (g≈9,8)?",["19,6 m/s","29,4 m/s","9,8 m/s","39,2 m/s"],1,"9,8 × 3 = 29,4."]]);

L(26,"physics","Mengapa es mengapung di air?",3,"Es lebih renggang strukturnya sehingga kurang padat dari air.",
["Saat membeku, molekul air menyusun struktur heksagonal berongga karena ikatan hidrogen. Volume bertambah sekitar 9%, sehingga kerapatan es (sekitar 0,92 g/cm³) lebih kecil daripada air cair (sekitar 1,0 g/cm³).","Benda dengan kerapatan lebih kecil dari cairan akan mengapung. Itu sebabnya es batu mengambang di gelas."],
"Air paling padat pada sekitar 4°C, jadi danau membeku dari atas dan dasar tetap cair.",
"Botol berisi air penuh yang dimasukkan ke freezer bisa retak karena air memuai saat menjadi es.",
"Karena es mengapung dan menyekat, ikan dapat bertahan di bawah danau yang membeku.",
[["Mengapa es mengapung?",["Lebih berat","Kerapatannya lebih kecil dari air","Ada udara saja","Magnet"],1,"Kerapatan es lebih rendah."],
["Air paling padat pada suhu sekitar...",["0°C","4°C","20°C","100°C"],1,"Sekitar 4°C."],
["Saat membeku, volume air...",["Menyusut","Tetap","Bertambah","Hilang"],2,"Bertambah sekitar 9%."]]);

L(27,"physics","Bagaimana pesawat bisa terbang?",4,"Sayap mengarahkan udara ke bawah, udara mendorong sayap ke atas.",
["Sayap pesawat berbentuk airfoil dan dimiringkan sedikit (sudut serang). Sayap mengarahkan udara ke bawah, dan menurut hukum ketiga Newton, udara mendorong sayap ke atas. Gaya ini disebut gaya angkat.","Tekanan di atas sayap juga lebih rendah daripada di bawahnya. Penjelasan bahwa udara harus menempuh jarak yang sama di atas dan bawah sayap adalah keliru."],
"Pesawat dipengaruhi empat gaya: gaya angkat, berat, dorongan mesin, dan hambatan udara.",
"Mengulurkan tangan dari jendela mobil yang melaju dan memiringkannya sedikit ke atas akan terasa tangan terdorong naik.",
"Wright bersaudara melakukan penerbangan bertenaga pertama pada 17 Desember 1903, selama sekitar 12 detik.",
[["Gaya yang melawan berat pesawat?",["Hambatan","Gaya angkat","Dorongan","Gesekan"],1,"Gaya angkat."],
["Sayap menghasilkan gaya angkat dengan...",["Menarik awan","Mengarahkan udara ke bawah","Memanaskan udara","Memutar baling-baling"],1,"Udara diarahkan ke bawah."],
["Siapa yang mencatat penerbangan bertenaga pertama 1903?",["Wright bersaudara","Edison","Tesla","Montgolfier"],0,"Wright bersaudara."]]);

L(28,"general","Mengapa madu tidak pernah basi?",3,"Gula tinggi, air rendah, dan asam membuat mikroba sulit hidup.",
["Madu mengandung air rendah (sekitar 17–18%) dan gula sangat tinggi, sehingga mikroba kehilangan air dan sulit berkembang. Madu juga bersifat asam (pH sekitar 3,5–4,5).","Enzim yang ditambahkan lebah juga menghasilkan sedikit hidrogen peroksida. Kombinasi itu membuat madu murni yang tertutup rapat awet sangat lama, meski bisa mengkristal."],
"Lebah mengipasi nektar dengan sayapnya untuk menguapkan air sampai kadarnya cukup rendah.",
"Madu mengkristal? Rendam botol dalam air hangat dan ia kembali cair; itu tidak berarti rusak.",
"Madu tidak boleh diberikan kepada bayi di bawah 1 tahun karena risiko botulisme.",
[["Mengapa mikroba sulit hidup di madu?",["Kadar air rendah dan gula tinggi","Terlalu dingin","Terlalu gelap","Banyak oksigen"],0,"Mikroba kehilangan air."],
["Madu yang mengkristal berarti...",["Pasti basi","Masih aman dan bisa dicairkan","Beracun","Palsu"],1,"Kristalisasi alami."],
["Madu tidak boleh untuk bayi di bawah...",["1 bulan","6 bulan","1 tahun","3 tahun"],2,"Di bawah 1 tahun."]]);

L(29,"general","Apa itu zona waktu?",4,"Bumi berputar 15° per jam, jadi jam di tiap tempat berbeda.",
["Bumi berputar 360° dalam 24 jam, berarti 15° tiap jam. Karena itu dunia dibagi menjadi zona waktu yang berbeda sekitar satu jam per 15° bujur.","Indonesia memiliki tiga zona: WIB (UTC+7), WITA (UTC+8), dan WIT (UTC+9). Saat pukul 12.00 di Jakarta, di Makassar pukul 13.00 dan di Jayapura pukul 14.00."],
"China luas wilayahnya melintasi beberapa zona, tetapi memakai satu waktu resmi.",
"Soal: rapat pukul 09.00 WIB. Di WIT selisihnya 2 jam, jadi 11.00 WIT.",
"UTC adalah waktu standar dunia yang dipakai sebagai acuan zona waktu.",
[["Bumi berputar berapa derajat per jam?",["10°","15°","30°","24°"],1,"360° ÷ 24 = 15°."],
["Pukul 08.00 WIB sama dengan di WITA pukul...",["07.00","08.00","09.00","10.00"],2,"WITA lebih cepat 1 jam."],
["Acuan waktu standar dunia disebut...",["UTC","WIB","GPS","ISO"],0,"UTC."]]);

L(30,"general","Bagaimana kopi membuatmu terjaga?",3,"Kafein tidak memberi energi, ia menahan sinyal kantuk.",
["Sepanjang hari zat adenosin menumpuk di otak dan menempel pada reseptornya, membuatmu merasa mengantuk. Kafein mirip adenosin sehingga menempati reseptor itu tanpa mengaktifkannya.","Hasilnya, sinyal kantuk tertahan sementara. Kafein tidak memberi energi baru dan tidak mengganti tidur. Waktu paruhnya sekitar 5 jam (berkisar 3–7 jam)."],
"Kafein tidak melunasi utang tidur; ia hanya menutupi rasa kantuknya sementara.",
"Kopi jam 4 sore bisa masih memengaruhi tidurmu jam 10 malam karena sebagian kafein masih ada di tubuh.",
"Sebagian orang disarankan menghindari kafein sekitar 6 jam sebelum tidur.",
[["Kafein bekerja dengan menahan...",["Reseptor adenosin","Detak jantung","Gula darah","Pernapasan"],0,"Ia menempati reseptor adenosin."],
["Apakah kafein menggantikan tidur?",["Ya","Tidak, hanya menutupi kantuk","Sebagian","Tergantung warna kopi"],1,"Hanya menutupi kantuk."],
["Waktu paruh kafein kira-kira...",["30 menit","5 jam","24 jam","3 hari"],1,"Sekitar 5 jam."]]);
