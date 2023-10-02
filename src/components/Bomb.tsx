import { ThreeElements } from '@react-three/fiber'

export default function Bomb(props?: ThreeElements['mesh']) {
  return (
    <mesh {...props}>
      <pointLight position={[0, 0, 0]} power={30} color="red" />
      <sphereGeometry args={[0.1]} />
      <shaderMaterial />
    </mesh>
  )
}
