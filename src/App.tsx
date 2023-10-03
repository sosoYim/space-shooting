import { Canvas } from '@react-three/fiber'
import Space from './components/Space'
import { OrbitControls, Sky } from '@react-three/drei'
import Ocean from './components/Ocean'

function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas
        dpr={[1, 2]}
        orthographic
        camera={{
          // position: [0, 20, 20],
          left: innerWidth / -2,
          right: innerWidth / 2,
          top: innerHeight / 2,
          bottom: innerHeight / -2,
          near: 0,
          far: 2000,
          zoom: 10,
        }}
      >
        <pointLight position={[100, 100, 100]} />
        <pointLight position={[-100, -100, -100]} />
        <ambientLight intensity={5} />
        <axesHelper />
        <OrbitControls />
        <Space />
        <Sky sunPosition={[500, 150, -1000]} turbidity={0.1} />
        <Ocean />
      </Canvas>
    </div>
  )
}

export default App
