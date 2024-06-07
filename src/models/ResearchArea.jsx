import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../store/useMainStore"
import WorkingArea from "./working area/WorkingArea"
import { FOCUS_RESEARCH } from "../constants"
import Tooltip from "../components/Tootlip"
import ResearchPage from "../html/ResearchPage"

const ResearchArea = ({ nodes, materials }) => {
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
            setFocusTarget(FOCUS_RESEARCH)
            setCameraPosition([-.7  , .8, -2])
            setControlsTargetOffset([0, 0, -0.01])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <group onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                {Array(3).fill().map((_, i) => (
                    <WorkingArea nodes={nodes} materials={materials} position={[-2.877 + i * 2.5, 0.62, -3.803 + 1.5]}>
                        {i === 1 && focusTarget === FOCUS_RESEARCH && <ResearchPage />}
                    </WorkingArea>
                ))}
                </group>
            </Select>
            <Tooltip position={[-.6, 1.5, -3.803 + 1.5]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Penelitian</p>
            </Tooltip>
        </>
    )
}

export default ResearchArea