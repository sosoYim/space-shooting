import { ThreeElements } from '@react-three/fiber'

export default function Bomb(props?: ThreeElements['mesh']) {
  return (
    <mesh {...props}>
      <sphereGeometry args={[0.1]} />
      <shaderMaterial />
    </mesh>
  )
}
