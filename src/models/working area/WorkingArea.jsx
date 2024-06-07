import Chair from "./Chair"
import Desk from "./Desk"
import Keyboard from "./Keyboard"
import Monitors from "./Monitors"
import Mouse from "./Mouse"
import Pc from "./Pc"

const WorkingArea = ({ nodes, materials, children, ...props }) => {
    return (
        <group {...props}>
            <Desk nodes={nodes} materials={materials} />
            <Chair nodes={nodes} materials={materials} position={[-.298, -.62, .777]} />
            <Monitors nodes={nodes} materials={materials} position={[-.294, .01, -.143]}>
                {children}
            </Monitors>
            <Keyboard nodes={nodes} materials={materials} position={[-.122, 0.03, .215]} />
            <Pc nodes={nodes} materials={materials} position={[.666, 0.204, -.053]} />
            <Mouse nodes={nodes} materials={materials} position={[.127, 0.025, .184]} />
        </group>
    )
}

export default WorkingArea