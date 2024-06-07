const Keyboard = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.keyboard_buttons.geometry}
                material={materials.keyboard_buttons}
                
            />
            <mesh
                geometry={nodes.keyboard_base.geometry}
                material={materials.keyboard_base}
                position={[-.172, -.005, -.058]}
            />
        </group>
    )
}

export default Keyboard