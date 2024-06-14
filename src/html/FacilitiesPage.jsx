import { Html } from "@react-three/drei"

import styles from './styles/FacilitiesPage.module.css'
import useDataStore from "../store/dataStore"

const FacilitiesPage = () => {
    const facilities = useDataStore.useFacilities()
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
                    {facilities.map((facility, index) => <li key={index}>{facility.name}</li>)}
                </ul>
            </div>
        </Html>
    )
}

export default FacilitiesPage