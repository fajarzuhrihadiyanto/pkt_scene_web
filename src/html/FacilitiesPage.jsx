import { Html } from "@react-three/drei"

import styles from './styles/FacilitiesPage.module.css'

const FacilitiesPage = () => {
    return (
        <Html
            transform
            position={[0, 0.01, -1.225]} 
            scale={[.05, .05, .05]}
            rotation={[0, Math.PI/2, 0]}
            className={styles.html}
            >
            <div className={styles.container}>
                <h1>Fasilitas</h1>
                <ul className={styles.list}>
                <li>Processor Intel Core i3 Gen-3, i5 Gen-8, sampai Intel® Xeon® E5-2640 dengan RAM 4GB-16GB.</li>
                <li>Untuk HDD sebagian besar minimal 1TB.</li>
                <li>Semua monitor berukuran 19″ untuk memudahkan mahasiswa dalam melakukan penelitian dan pembelajaran.</li>
                <li>Dilengkapi LED TV 55″ untuk mahasiswa dalam melakukan demo pembelajaran.</li>
                <li>LCD Projector untuk memudahkan mahasiswa yang membutuhkan beberapa display.</li>
                <li>Ploter Untung menunjang kebutuhan mahasiswa mencetak hasil tugas2 yang dibutuhkan.</li>
                </ul>
            </div>
        </Html>
    )
}

export default FacilitiesPage