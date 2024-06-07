const Tv = ({ nodes, materials, children, ...props }) => {
    return (
        <group {...props}>
            <mesh geometry={nodes.Cube001.geometry} material={materials.tv_body} />
            <mesh geometry={nodes.Cube001_1.geometry} material={materials.tv_screen} />
            {children}
        </group>
    )
}

export default Tv