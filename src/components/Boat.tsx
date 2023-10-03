import { useLoader } from '@react-three/fiber'
import { MathUtils } from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export default function Boat({ x = 0, z = 0 }: { x: number; z: number }) {
  const gltf = useLoader(GLTFLoader, '/models/boat.glb')

  return (
    <>
      <pointLight position={[0, 1, 0]} power={20} distance={10} />
      <primitive
        object={gltf.scene}
        position-x={x}
        position-z={z}
        rotation={[0, MathUtils.degToRad(180), 0]}
      />
    </>
  )
}
