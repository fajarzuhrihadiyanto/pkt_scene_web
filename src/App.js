import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Bloom, Selection, EffectComposer, Outline } from '@react-three/postprocessing'

import BackButton from './components/BackButton'
import ControlContainer from './context/ControlsContext'
import Lab from './models/Lab'
import Loader from './models/Loader'


function App() {
  const cameraPosition = [0, 1.5, 0]
  const controlsTargetOffset = [-.01,0,0]
  const controlsTarget = cameraPosition.map((value, index) => value + controlsTargetOffset[index])

  return (
    <div className="App" style={{width: '100vw', height: '100vh'}}>
      {/* IMPORTANT : DO NOT SET FRAMELOOP TO DEMAND, SOMETIME IT WILL STOP THE ANIMATION RENDERING */}
      <Canvas camera={{position: cameraPosition}}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={5} />

          <ControlContainer target={controlsTarget}>
            <Selection>
              <Lab />
              <EffectComposer autoClear={false}>
                <Bloom intensity={.1} opacity={.25} luminanceThreshold={1}  luminanceSmoothing={0.9} />
                <Outline blur visibleEdgeColor="white" hiddenEdgeColor={'white'} edgeStrength={10} width={1000} />
              </EffectComposer>
            </Selection>
          </ControlContainer>

          {/* PERFORMANCE MONITORING (DEVELOPMENT ONLY) */}
          {/* <Perf /> */}
        </Suspense>
      </Canvas>
    
      <BackButton />
    </div>
  );
}

export default App;
