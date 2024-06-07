export const SUBJECT = [
    {
        title: 'Aljabar Linier',
        mandatory: true,
        description: `Pada mata kuliah ini, mahasiswa belajar menyelesaikan masalah sistem persamaan linier (SPL) dengan menggunakan komputasi matriks. SPL dapat diselesaikan dengan menggunakan eliminasi gauss, Gauss Jordan, Cramer. Agar mahasiswa lebih memahami materi, maka perlu diimplementasikan ke dalam bahasa pemprograman tertentu.Masalah operasi matrix diawali dengan mencari Determinan dan dilanjutkan dengan mencari invers matrix. Determinan dapat dicari dengan menggunakan Operasi Baris Elementer (OBE) dan kofaktor. Invers matrix dapat dicari dengan menggunakan OBE, kofaktor dan Pseudo-inverse. Implementasi ke dalam program juga diperlukan agar mahasiswa lebih mahir. Pada materi Ruang vektor, akan dicari persamaan bidang, persamaan parametrik, persamaan simetrik, dot product, cross product dan transformasi linier. Materi Basis meliputi Merentang, bebas linier, persamaan linier homogen, basis lama dan basis baru, general solusi, basis ruang baris, basis ruang kolom, basis orthonormal, gram schmidt. Berikutnya adalah tentang eigen, yang akan dicari adalah eigenvalue dan eigenvektor, diagonalization, ortogonal diagonalization (praktek menggunakan program). Agar lebih mendalami materi, akan di berikan Contoh-contoh kasus aljabar linier.`,
        objective: [
            `Mahasiswa mampu menyelesaikan masalah sistem persamaan linier dengan menggunakan komputasi matriks.`,
            `Mahasiswa mampu menyelesaikan masalah operasi matriks dan Pseudoinverse.`,
            `Mahasiswa mampu menyelesaikan masalah ruang vektor.`,
            `Mahasiswa mampu mencari basis.`,
            `Mahasiswa mampu menyelesaikan masalah eigen`,
            `Mahasiswa mampu mengimplementasikan masalah sistem persamaan linier, matrix dan basis ke dalam program`,
            `Mahasiswa mampu mengaplikasikan aljabar linier dalam beberapa contoh kasus`,
        ]
    },
    {
        title: 'Komputasi Numerik',
        mandatory: true,
        description: `Mata kuliah ini bertujuan untuk memberikan bekal pengetahuan dan kemampuan komputasi kepada mahasiswa agar mampu menganalisa permasalahan numerik dan melakukan komputasi untuk mencari solusi pendekatan dengan metode yang benar, baik secara mandiri atau juga dalam kerjasama tim.`,
        objective: [
            `Mahasiswa mampu memahami pengertian bilangan berarti dan pembulatan serta deret Taylor`,
            `Mahasiswa mampu mengaplikasikan metode-metode untuk memperolah akar persamaan`,
            `Mahasiswa mampu mengaplikasikan metode-metode untuk pencocokan kurva dengan teknik regresi maupun interpolasi`,
            `Mahasiswa mampu mengaplikasikan metode-metode untuk mencari nilai diferensiasi beda-hingga melalui pendekatan numeris`,
            `Mahasiswa mampu mengaplikasikan metode-metode untuk mencari nilai integrasi melalui pendekatan numeris`,
            `Mahasiswa mampu mengaplikasikan metode-metode pendekatan untuk mencari nilai diferensiasi fungsi dengan variabel bebas tunggal (diferensiasi biasa) maupun dengan 2 atau lebih variabel bebas (diferensiasi parsial)`,
        ]
    },
    {
        title: 'Matematika Diskrit',
        mandatory: true,
        description: `MataDalam mata kuliah ini, mahasiswa akan belajar konsep logika, metode-metode pembuktian, struktur diskrit yang meliputi himpunan, fungsi dan relasi, konsep penghitungan, dan rekursif. Tujuan dari mata kuliah ini mahasiswa mampu menjelaskan konsep logika, metode pembuktian, himpunan, fungsi, induksi matematis & rekursi, relasi dan dapat mengaplikasikannya pada permasalahan nyata, baik dengan kinerja individu maupun secara berkelompok dalam kerjasama tim. Mata kuliah ini merupakan prasyarat untuk mata kuliah Aljabar Linier, PAA I, Teori Graf, Statistik, dan Otomata. kuliah ini membahas proses bisnis dan sistem informasi enterprise. Mahasiswa diharapkan memiliki kompetensi dalam analisis, sintesis, evaluasi dan inovasi sistem enterprise yang sesuai kebutuhan proses bisnis. Berbagai sistem akan dibahas, antara lain Sistem Akuntansi (financial accounting, management accounting, cost accounting). Customer Relationship Management (CRM), Supplier Relationship Management (SRM), dan Enterprise Resource Planning (ERP).`,
        objective: [
            `Mahasiswa mampu menjelaskan konsep logika dan penarikan kesimpulan`,
            `Mahasiswa mampu mengaplikasikan metode-metode pembuktian`,
            `Mahasiswa mengaplikasikan konsep himpunan dan fungsi`,
            `Mahasiswa mengaplikasikan induksi matematis dan rekursi pada permasalahan nyata`,
            `Mahasiswa mengaplikasikan konsep relasi pada permasalahan nyata`,
        ]
    },
    {
        title: 'Probabilitas dan Statistik',
        mandatory: true,
        description: `Pada mata kuliah ini, mahasiswa akan belajar memahami Ruang Sampel, Ruang Kejadian, Aksioma probabilitas dan Menghitung Probabilitas, Probabilitas Bersyarat, Teorema Bayes, Probabilitas Diskrit dan Kontinu, Ekspektasi, Distribusi Sampling, Estimasi, Uji Hipotesis, Analisis Variansi dan Principle Component Analysis.`,
        objective: [
            `Mahasiswa dapat menjelaskan konsep dasar statistika dalam kaitan dengan analisis data.`,
            `Mahasiswa dapat memodelkan probabilitas atas suatu kejadian dari suatu percobaan random.`,
            `Mahasiswa dapat memodelkan percobaan random dengan pendekatan teorema bayes.`,
            `Mahasiswa dapat memodelkan percobaan random dengan pendekatan variabel random.`,
            `Mahasiswa dapat menghitung probabilitas dari variabel random diskrit dan kontinu dengan berbagai macam distribusi khusus.`,
            `Mahasiswa dapat menjelaskan konsep ekspektasi, variansi, ko-variansi dan korelasi.`,
            `Mahasiswa dapat menjelaskan konsep pendekatan antar distribusi probabilitas dan Teorema Chebyshev.`,
            `Mahasiswa menguasai pendekatan parameter populasi dengan sampel.`,
            `Mahasiswa dapat menghitung estimator dari parameter populasi dan mengambil kesimpulan.`,
            `Mahasiswa dapat melakukan uji hipotesis dari parameter populasi dan mengambil kesimpulan.`,
            `Mahasiswa dapat membuat model anova atas data multiatribut berskala nominal/rasio`,
            `Mahasiswa dapat menerapkan rancangan percobaan orthogonal untuk menganalisis pengaruh multi faktor.`,
            `Mahasiswa dapat membuat model PCA untuk mereduksi dimensi data.`,
        ]
    },
    {
        title: 'Teori Graf & Otomata',
        mandatory: true,
        description: `Dalam mata kuliah ini, mahasiswa akan belajar konsep graf, merepresentasikan graf dalam struktur data, memodelkan dan menyelesaikan beberapa kasus optimasi pada kehidupan sehari-hari ke dalam bentuk graf. Beberapa kasus optimasi yang dapat diselesaikan dengan teori graf aatara lain: menentukan lintasan terpendek, pohon merentang minimum, menentukan rute minimimum suatu perjalanan, penjadwalan, penugasan SDM, pencocokan dan optimasi aliran pada jaringan. Mata kuliah ini bertujuan untuk memberikan bekal pengetahuan mengenai latar belakang perancangan bahasa pemrograman dan memberikan kemampuan memodelkan permasalahan nyata menggunakan otomata sebagai alat pemodelannya (dengan studi kasus bahasa pemrograman). Selain itu mahasiswa diharapkan dapat mengasah kemampuan mendefinisikan obyek atau himpunan tertentu dengan menggunakan definisi rekursif, baik secara mandiri atau juga dalam kerjasama tim.`,
        objective: [
            `Mahasiswa mampu mengimplementasikan representasi graf (struktur data non linear) secara statis (array) dan dinamis (linked-list dan STL) dengan bahasa pemrograman tertentu (missal C atau C++).`,
            `Mahasiswa mampu menyelesaikan permasalahan dalam kehidupan sehari-hari yang dimungkinkan dapat dimodelkan dalam bentuk graf dengan memanfaatkan algoritma-algoritma yang berkaitan dengan teori graf`,
            `Mahasiswa mampu mengaplikasikan konsep pendefinisian bahasa dan operasi-operasi matematis pendukungnya`,
            `Mahasiswa mampu memahami pemodelan bahasa menggunakan Finite Automata dan mesin-mesin lain yang sejenis`,
            `Mahasiswa mampu memahami perbedaan konsep Determinism dan Non Determinism serta mampu mengaplikasikan mesin-mesin pendukung keduanya`,
            `Mahasiswa mampu memahami teknik pendefinisian, peran dan cara kerja Grammar pada bahasa pemrograman`,
            `Mahasiswa mampu mengaplikasikan Teori Komputabilitas`,
            `Mahasiswa mampu mengaplikasikan Teori Kompleksitas`
        ]
    },
    {
        title: 'Pemodelan dan Simulasi',
        mandatory: false,
        description: `Pada mata kuliah ini, mahasiswa akan belajar Konsep Pemodelan dan simulasi, Hubungan pemodelan dan simulasi, Distribusi probabilitas dan visualisasi dalam pemodelan dan simulasi, Pemodelan input, Analisis output, Pembuatan model simulasi dengan kakas simulasi`,
        objective: [
            `Mahasiswa mampu menerapkan konsep & prosedur dalam pembuatan model simulasi dari suatu sistem nyata yang dipelajari efisiensi kinerjanya,mengeksekusi model simulasi, membuat mengambil kesimpulan tentang kinerja berdasarkan analisis terhadap luaran simulasi, mengembangkan sistem alternatif serta membandingkan kinerja berdasarkan luaran simulasi sistem nyata dan sistem alternatif tersebut, baik dengan bekerja secara individu meupun secara berkelompok dalam kerjasama tim`,
        ]
    },
    {
        title: 'Analisis Data Multivariat',
        mandatory: false,
        description: `Pada mata kuliah ini, mahasiswa akan belajar memahami Konsep dasar data multivariat, Aljabar multivariat, Multivariat Normal, Pemetaan Teknik Univariat dan multivariat, Eksplorasi data multivariat/Analisis Deskriptif Multivariat. Selanjutnya mahasiswa akan mampu melakukan pemodelan dan analisis dengan berbagai metode analisis multiariat, yaitu Model Multiple Dependent: MANOVA, PCA, Canonical Analysis. Klasifikasi dan Pengelompokan: Analisis Kelompok, Analisis Diskriminan. Teknik Reduksi Data: Analisis Faktor. Perceptual Mapping: Multidimensional Scaling, Correspondence Analysis, Conjoint Analysis, Structural Equation Modeling.`,
        objective: [
            `Mahasiswa dapat menjelaskan perbedaan analisa univariat dan multivariat`,
            `Mahasiswa dapat menggunakan berbagai pemodelan multivariat sesuai tujuan analisis`,
            `Mahasiswa dapat menganalisis hasil pengolahan data multivariat`,
            `Mahasiswa dapat menggunakan software pengolahan data statistik multivariat.`,
        ]
    },
    {
        title: 'Riset Operasi',
        mandatory: false,
        description: `Pada mata kuliah ini, mahasisawa belajar memodelkan persoalan yang ada di dunia nyata ke dalam pemodelan Program Linier (PL). Mahasiswa akan mempelajari materi PL dengan 2 variabel, mempelajari solusi PL dengan menggunakan grafik, Solusi PL dengan menggunakan Excel Solver dan TORA. Metode Simplex diawali dengan bentuk persamaan Model PL kemudianTransisi dari grafik ke solusi aljabar, untuk persoalan yang lebih komplex menggunakanM-method dan metoda dua fasedan dilanjutkan denganAnalisa Sensitivitas. Duality diawali dengan definisi dual problem, kemudian hubungan antara primal dan dual, dilanjutkan dengan interpretasi ekonomi dari duality, algoritma simplex additional dan analisa post-optimal. Model transportasi diawali dengan definisi dari model transportasi, model transportasi nontradisional, algoritma transportasi dan model penugasan. Model Jaringan diawali dengan skope dan definisi dari model jaringan, algoritma minimal spanning tree, problem rute terpendek, model maximal flow, CPM dan PERT. Pemrograman Linier Integer diawali dengan ilustrasi contoh aplikasi, algoritma integer programming dan traveling salesmen. Untuk tiap-tiap sub bahasan akan diimplementasikan ke dalam program.`,
        objective: [
            `Mahasiswa mampu menyelesaikan masalah Pemodelan Program Linier.`,
            `Mahasiswa mampu menyelesaikan masalah Program linier dengan menggunakan metoda simplex.`,
            `Mahasiswa mampu melakukan analisa sensitivitas pada program linier.`,
            `Mahasiswa mampu menyelesaikan masalah duality.`,
            `Mahasiswa mampu menyelesaikan masalah transportasi.`,
            `Mahasiswa mampu menyelesaikan masalah jaringan.`,
            `Mahasiswa mampu menyelesaikan masalah pemprograman integer.`,
            `Mahasiswa mampu mengimplementasikan masalah tersebut diatas ke dalam program`,
        ]
    },
]