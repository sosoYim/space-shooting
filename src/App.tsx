import { Canvas } from '@react-three/fiber'
import Space from './components/Space'
import { Sky } from '@react-three/drei'
import Ocean from './components/Ocean'

function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [0, 10, 43],
          rotation: [-0.1, 0, 0],
          zoom: 5,
        }}
      >
        <pointLight position={[100, 100, 100]} />
        <pointLight position={[-100, -100, -100]} />
        <ambientLight intensity={5} />
        <axesHelper />
        <Space />
        <Sky sunPosition={[500, 150, -1000]} turbidity={0.1} />
        <Ocean />
      </Canvas>
    </div>
  )
}

export default App
