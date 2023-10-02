import { Canvas } from '@react-three/fiber'
import Space from './components/Space'

function App() {
  return (
    <div className="w-screen h-screen">
      <Canvas dpr={[1, 2]}>
        <Space />
      </Canvas>
    </div>
  )
}

export default App
