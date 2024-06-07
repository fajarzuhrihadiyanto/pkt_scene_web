import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../../store/useMainStore"
import Tv from "./Tv"
import { FOCUS_LECTURER } from "../../constants"
import Tooltip from "../../components/Tootlip"
import LecturerPage from "../../html/LecturerPage"

const LecturerArea = ({ nodes, materials }) => {
    // get the state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    const [isHovered, setIsHovered] = React.useState(false)

    const onPointerOver = React.useCallback((e) => {
        e.stopPropagation()
        if (focusTarget === null) setIsHovered(true)
    }, [focusTarget])

    const onPointerOut = React.useCallback(() => {
        if (focusTarget === null) setIsHovered(false)
    }, [focusTarget])

    const onClick = React.useCallback((e) => {
        e.stopPropagation()
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_LECTURER)
            setCameraPosition([-.3, 2.25, 3.25])
            setControlsTargetOffset([0, .003, 0.01])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <Tv nodes={nodes} materials={materials} position={[0.8545, 2.464, 3.884]} rotation={[0, Math.PI/2, -0.262]} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    {focusTarget === FOCUS_LECTURER && <LecturerPage />}
                </Tv>
            </Select>
            <Tooltip position={[-.3, 4, 3.884]} rotation={[0, Math.PI, 0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Dosen</p>
            </Tooltip>
        </>
    )
}

export default LecturerArea