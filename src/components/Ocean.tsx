import * as THREE from 'three'
import { extend } from '@react-three/fiber'
import { Water } from 'three-stdlib'
import { useTexture } from '@react-three/drei'

extend({ Water })

export default function Ocean() {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
    useTexture([
      '/water/Water_002_COLOR.jpg',
      '/water/Water_002_DISP.png',
      '/water/Water_002_NORM.jpg',
      '/water/Water_002_ROUGH.jpg',
      '/water/Water_002_OCC.jpg',
    ])

  return (
    <mesh
      position={[0, -0.7, 0]}
      rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}
    >
      <planeGeometry attach="geometry" args={[10000, 10000, 10, 10]} />
      <meshStandardMaterial
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  )
}
