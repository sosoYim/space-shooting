import { ThreeElements, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { useGame } from '../hooks/useGame'
import Boat from './Boat'
import dat from 'dat.gui'
import { useMove } from '../hooks/useMove'
import Bombs from './Bombs'
import { Text } from '@react-three/drei'

function Box(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => (meshRef.current.rotation.x += delta))
  return (
    <mesh {...props} ref={meshRef} onClick={props.onClick}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  )
}

export default function Space() {
  const { start, startGame, endGame, duration } = useGame()
  const { x, z } = useMove()

  const camera = useThree(({ camera }) => camera)
  const ref = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    const gui = new dat.GUI()

    gui.add(ref.current.position, 'y', -100, 100, 0.01).name('TEXT Y')
    gui.add(ref.current.position, 'x', -100, 100, 0.01).name('TEXT X')
    gui.add(ref.current.position, 'z', -100, 100, 0.01).name('TEXT Z')
    gui.add(camera.position, 'y', -100, 100, 0.01).name('카메라 Y')
    gui.add(camera.position, 'z', -100, 100, 0.01).name('카메라 Z')
  }, [])

  console.log({ start, duration })

  const [hover, setHover] = useState(false)

  return (
    <>
      <Text
        position={[0, 13, 0]}
        font="Snowburst One"
        fontSize={2}
        color={hover ? 'gold' : 'blue'}
        ref={ref}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        START
      </Text>
      <Box position={[-1.2, 0, 0]} onClick={startGame} />
      <Box position={[1.2, 0, 0]} onClick={endGame} />
      <Boat x={x} z={z} />
      <Bombs fire={start} />
    </>
  )
}
