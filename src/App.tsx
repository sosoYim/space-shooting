import { Canvas } from '@react-three/fiber'
import Space from './components/Space'
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas dpr={[1, 2]}>
        <ambientLight intensity={5} />
        <axesHelper />
        <OrbitControls />
        <Space />
      </Canvas>
    </div>
  )
}

export default App
