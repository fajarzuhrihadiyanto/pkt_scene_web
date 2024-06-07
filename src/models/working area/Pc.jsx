const Pc = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <group>
                <mesh geometry={nodes.Cube009.geometry} material={materials.pc_body_main} />
                <mesh geometry={nodes.Cube009_1.geometry} material={materials.pc_body_rear} />
            </group>
            <mesh
                geometry={nodes.pc_front.geometry}
                material={materials.pc_front}
                position={[0, 0.003, .143]}
            />
        </group>
    )
}

export default Pc