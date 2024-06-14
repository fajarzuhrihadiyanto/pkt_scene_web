import { Html } from "@react-three/drei"

import styles from './styles/GeneralInformationPage.module.css'
import useDataStore from "../store/dataStore"

const GeneralInformationPage = () => {
    const labDescription = useDataStore.useLabDescription()
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
                <p style={{fontSize: '18pt', margin: 0, textAlign: 'justify'}}>{labDescription}</p>
            </div>
        </Html>
    )
}

export default GeneralInformationPage