import { ThreeElements, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

function Box(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  return (
    <mesh {...props} ref={meshRef} onClick={props.onClick}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  )
}

export default function Space() {
  const [duration, setDuration] = useState(0)
  const [start, setStart] = useState(false)
  const [result, setResult] = useState<null | string>(null)

  const startGame = () => {
    setDuration(0)
    setStart(true)
    setResult(null)
  }

  const endGame = () => {
    setStart(false)
    setResult(`기록: ${duration}`)
  }

  result && console.log(result)

  start ? console.log('게임 시작') : console.log('대기중...')

  useFrame((_, delta) => {
    start && setDuration((duration) => duration + delta)
  })

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} onClick={startGame} />
      <Box position={[1.2, 0, 0]} onClick={endGame} />
    </>
  )
}
