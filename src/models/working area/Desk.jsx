const Desk = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <group position={[.72, -.32, 0]} scale={[0.25, 0.3, 0.3]}>
                <mesh geometry={nodes.Cube005.geometry} material={materials.desk_drawer_body} />
                <mesh geometry={nodes.Cube005_1.geometry} material={materials.deak_drawer_handle} />
            </group>
            <group>
                <mesh geometry={nodes.Cube006.geometry} material={materials.desk} />
                <mesh geometry={nodes.Cube006_1.geometry} material={materials.cubicle_desk} />
            </group>
        </group>
    )
}

export default Desk