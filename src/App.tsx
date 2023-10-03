import { Canvas } from '@react-three/fiber'
import Space from './components/Space'
import { OrbitControls } from '@react-three/drei'

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
          near: 1,
          far: 1000,
          zoom: 10,
        }}
      >
        <ambientLight intensity={5} />
        <axesHelper />
        <OrbitControls />
        <Space />
      </Canvas>
    </div>
  )
}

export default App
