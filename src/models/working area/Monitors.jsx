const Monitors = ({ nodes, materials, children, ...props }) => {
    return (
        <group {...props}>
            <group>
                <mesh
                    geometry={nodes.monitor_base.geometry}
                    material={materials.monitor_base}
                />
                <mesh
                    geometry={nodes.monitor_pole.geometry}
                    material={materials.monitor_base}
                    position={[0, .08, -.033]}
                />
                <group position={[0, 0.212, 0]}>
                    <mesh geometry={nodes.Plane008.geometry} material={materials.monitor_base} />
                    <mesh geometry={nodes.Plane008_1.geometry} material={materials.monitor_light} />
                    {children}
                </group>
            </group>
            <group position={[.475, 0, .13]}>
                <mesh
                    geometry={nodes.monitor_base001.geometry}
                    material={materials.monitor_base}
                />
                <mesh
                    geometry={nodes.monitor_pole001.geometry}
                    material={materials.monitor_base}
                    position={[0, .08, -.033]}
                />
                <group position={[0, 0.212, 0]}>
                    <mesh geometry={nodes.Plane012.geometry} material={materials.monitor_base} />
                    <mesh geometry={nodes.Plane012_1.geometry} material={materials.monitor_light} />
                </group>
            </group>
            <group position={[-.476, 0, .13]}>
                <mesh
                    geometry={nodes.monitor_base002.geometry}
                    material={materials.monitor_base}
                />
                <mesh
                    geometry={nodes.monitor_pole002.geometry}
                    material={materials.monitor_base}
                    position={[0, .08, -.033]}
                />
                <group position={[0, 0.212, 0]}>
                    <mesh geometry={nodes.Plane018.geometry} material={materials.monitor_base} />
                    <mesh geometry={nodes.Plane018_1.geometry} material={materials.monitor_light} />
                </group>
            </group>
        </group>
    )
}

export default Monitors