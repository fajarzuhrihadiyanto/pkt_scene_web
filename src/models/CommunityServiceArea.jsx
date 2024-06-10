import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../store/useMainStore"
import WorkingArea from "./working area/WorkingArea"
import { FOCUS_COMMUNITY_SERVICE } from "../constants"
import Tooltip from "../components/Tootlip"
import CommunityServicePage from "../html/CommunityServicePage"
import { useResponsiveScreen } from "../utils"

const CommunityServiceArea = ({ nodes, materials }) => {
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
            const cameraPosition = isMobile ? [-.275  , .8, 1.7] : [-.3  , .8, 2]
            setIsHovered(false)
            setFocusTarget(FOCUS_COMMUNITY_SERVICE)
            setCameraPosition(cameraPosition)
            setControlsTargetOffset([0, 0, 0.01])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                {Array(3).fill().map((_, i) => (
                    <group onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                        <WorkingArea nodes={nodes} materials={materials} position={[-3.077 + i * 2.5, 0.62, 3.703 - 1.5]} rotation={[0, Math.PI, 0]} >
                            {i === 1 && focusTarget === FOCUS_COMMUNITY_SERVICE && <CommunityServicePage />}
                        </WorkingArea>
                    </group>
                ))}
            </Select>
            <Tooltip position={[-.3, 1.5, 3.703 - 1.5]} rotation={[0, Math.PI, 0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '4pt',
                    margin: 0
                }}>Pengabdian Masyarakat</p>
            </Tooltip>
        </>
    )
}

export default CommunityServiceArea