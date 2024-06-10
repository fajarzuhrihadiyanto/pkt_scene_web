import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import WorkingArea from "./working area/WorkingArea"
import useMainStore from "../store/useMainStore"
import { FOCUS_SUBJECT } from "../constants"
import Tooltip from "../components/Tootlip"
import SubjectPage from "../html/SubjectPage"
import { useResponsiveScreen } from "../utils"

const SubjectArea = ({ nodes, materials }) => {
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
            const cameraPosition = isMobile ? [-.675  , .8, -3.2] : [-.7  , .8, -3.5]
            setIsHovered(false)
            setFocusTarget(FOCUS_SUBJECT)
            setCameraPosition(cameraPosition)
            setControlsTargetOffset([0, 0, -0.01])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <group onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    {Array(3).fill().map((_, i) => (
                        <WorkingArea nodes={nodes} materials={materials} position={[-2.877 + i * 2.5, 0.62, -3.803]}>
                            {i === 1 && focusTarget === FOCUS_SUBJECT && <SubjectPage />}
                        </WorkingArea>
                    ))}
                </group>
            </Select>
            <Tooltip position={[-.6, 1.5, -3.803]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Mata Kuliah</p>
            </Tooltip>
        </>
    )
}

export default SubjectArea