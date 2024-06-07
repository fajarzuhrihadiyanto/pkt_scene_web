const Room = ({ nodes, materials }) => {
    return (
        <>
            <group scale={[4, 4.476, 4]}>
                <mesh geometry={nodes.Plane.geometry} material={materials.room} />
                <mesh geometry={nodes.Plane_1.geometry} material={materials.room_floor} />
                <mesh geometry={nodes.Plane_2.geometry} material={materials.room_light} />
            </group>
            <mesh
                geometry={nodes.door_left_body.geometry}
                material={materials['Material.002']}
                position={[3.972, 0, 1.018]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.5, 1, 1.125]}
            />
            <group position={[4.027, 1.138, 0.168]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.Cylinder.geometry} material={materials.door_handle_base} />
                <mesh geometry={nodes.Cylinder_1.geometry} material={materials.door_handle_light} />
                <mesh geometry={nodes.Cylinder_2.geometry} material={materials['Material.003']} />
            </group>
            <mesh
                geometry={nodes.door_right_body.geometry}
                material={materials['Material.002']}
                position={[3.972, 0, -0.982]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.5, 1, 1.125]}
            />
            <group position={[4.027, 1.138, -0.132]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.Cylinder001.geometry} material={materials.door_handle_base} />
                <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.door_handle_light} />
                <mesh geometry={nodes.Cylinder001_2.geometry} material={materials['Material.003']} />
            </group>
            <mesh
                geometry={nodes.door_frame.geometry}
                material={materials['Material.004']}
                position={[3.997, 2.325, 0.018]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1, 0.075, 0.1]}
            />
            <group position={[3.967, 1.138, 0.168]} rotation={[0, -1.571, 0]}>
                <mesh geometry={nodes.Cylinder002.geometry} material={materials.door_handle_base} />
                <mesh geometry={nodes.Cylinder002_1.geometry} material={materials.door_handle_light} />
                <mesh geometry={nodes.Cylinder002_2.geometry} material={materials['Material.003']} />
            </group>
            <group position={[3.967, 1.138, -0.132]} rotation={[0, -1.571, 0]}>
                <mesh geometry={nodes.Cylinder003.geometry} material={materials.door_handle_base} />
                <mesh geometry={nodes.Cylinder003_1.geometry} material={materials.door_handle_light} />
                <mesh geometry={nodes.Cylinder003_2.geometry} material={materials['Material.003']} />
            </group>
        </>
    )
}

export default Room