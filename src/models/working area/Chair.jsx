const Chair = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.lab_chair_structure.geometry}
                material={materials['lab chair_structure']}
                
            />
            <mesh
                geometry={nodes.lab_chair_seat_pillow.geometry}
                material={materials['lab chair_pillow']}
                position={[0, 0.403, -.203]}
                scale={[0.15, 1, 0.25]}
            />
            <mesh
                geometry={nodes.lab_chair_seat_base.geometry}
                material={materials['lab chair_base']}
                position={[0, 0.399, -.203]}
                scale={[0.15, 1, 0.25]}
            />
            <mesh
                geometry={nodes.lab_chair_backrest_pillow.geometry}
                material={materials['lab chair_pillow']}
                position={[0, 0.65, .005]}
                scale={[0.15, 1, 0.25]}
            />
            <mesh
                geometry={nodes.lab_chair_backrest_base.geometry}
                material={materials['lab chair_base']}
                position={[0, 0.65, .009]}
                scale={[0.15, 1, 0.25]}
            />
        </group>
    )
}

export default Chair