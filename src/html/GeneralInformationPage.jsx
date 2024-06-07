import { Html } from "@react-three/drei"

import styles from './styles/GeneralInformationPage.module.css'

const GeneralInformationPage = () => {
    return (
        <Html
            transform
            position={[0, .01, -1.23]} 
            scale={[.05, .05, .05]}
            rotation={[0, Math.PI/2, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <h1 style={{margin: 0, marginBottom: '16px'}}>Selamat datang di Laboratorium Pemodelan dan Komputasi Terapan</h1>
                <p style={{fontSize: '18pt', margin: 0, textAlign: 'justify'}}>Laboratorium ini mewadahi riset dan kerjasama industri di bidang pemodelan & simulasi, peramalan sains, optimasi, serta komputasional saintifik. Beberapa mata kuliah pendukung yg diajarkan antara lain Matematika Diskrit, Aljabar Linier & Matriks, Teori Graph & Otomata, Komputasi Numerik,  Probabilistik & Statistik, Riset Operasi, Pemodelan & Simulasi, Analisis Data Multivariat. Serta beberapa mata kuliah pasca sarjana lainnya.</p>
            </div>
        </Html>
    )
}

export default GeneralInformationPage