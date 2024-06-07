const Mouse = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.mouse_body.geometry}
                material={materials.mouse_body}
            />
            <mesh
                geometry={nodes.mouse_scroll_button.geometry}
                material={materials['mouse_scroll button']}
                position={[0, -.003, -.022]}
            />
        </group>
    )
}

export default Mouse