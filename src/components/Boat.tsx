import { useLoader } from '@react-three/fiber'
import { MathUtils } from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export default function Boat() {
  const gltf = useLoader(GLTFLoader, '/models/boat.glb')

  return (
    <>
      <pointLight position={[0, 1, 0]} power={20} distance={10} />
      <primitive
        object={gltf.scene}
        position-x={0}
        position-z={0}
        rotation={[0, MathUtils.degToRad(180), 0]}
      />
    </>
  )
}
