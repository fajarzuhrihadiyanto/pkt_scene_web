const Logo = ({ nodes, materials }) => {
    return (
        <mesh
            geometry={nodes.logo_text.geometry}
            material={materials.logo}
            position={[-3.975, 1.652, 2.035]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.5}
        />
    )
}

export default Logo