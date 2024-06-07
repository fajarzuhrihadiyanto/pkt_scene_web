import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../store/useMainStore"
import WorkingArea from "./working area/WorkingArea"
import { FOCUS_BOOKS } from "../constants"
import Tooltip from "../components/Tootlip"
import BookPage from "../html/BookPage"

const BookArea = ({ nodes, materials }) => {
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
            setFocusTarget(FOCUS_BOOKS)
            setCameraPosition([-.3  , .8, 3.5])
            setControlsTargetOffset([0, 0, 0.01])
        }
    }, [focusTarget])

    useCursor(isHovered)
    return (
        <>
            <Select enabled={isHovered}>
                <group onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    {Array(3).fill().map((_, i) => (
                        <WorkingArea nodes={nodes} materials={materials} position={[-3.077 + i * 2.5, 0.62, 3.703]} rotation={[0, Math.PI, 0]}>
                            {i === 1 && focusTarget === FOCUS_BOOKS && <BookPage />}
                        </WorkingArea>
                    ))}
                </group>
                <Tooltip position={[-.3, 1.5, 3.703]} rotation={[0, Math.PI, 0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                    <p style={{
                        fontSize: '4pt',
                        margin: 0
                    }}>Buku</p>
                </Tooltip>
            </Select>
            
        </>
    )
}

export default BookArea