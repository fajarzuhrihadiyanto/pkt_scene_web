import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"

import useMainStore from "../../store/useMainStore"
import Tv from "./Tv"
import { FOCUS_GENERAL_INFORMATION } from "../../constants"
import Tooltip from "../../components/Tootlip"
import GeneralInformationPage from "../../html/GeneralInformationPage"
import { useResponsiveScreen } from "../../utils"

const GeneralInformationArea = ({ nodes, materials }) => {
    // get the state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const { isMobile } = useResponsiveScreen()

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
            const cameraPosition = isMobile ? [-2.35, 1.95, .1] : [-3.25, 2.25, .1]
            setIsHovered(false)
            setFocusTarget(FOCUS_GENERAL_INFORMATION)
            setCameraPosition(cameraPosition)
            setControlsTargetOffset([-0.01, .003, 0])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <Tv nodes={nodes} materials={materials} position={[-3.884, 2.464, 1.324]} rotation={[0, 0, -0.262]} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    {focusTarget === FOCUS_GENERAL_INFORMATION && <GeneralInformationPage />}
                </Tv>
            </Select>
            <Tooltip position={[-3.884, 4, 0]} rotation={[0,Math.PI/2,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Informasi Umum</p>
            </Tooltip>
        </>
    )
}

export default GeneralInformationArea