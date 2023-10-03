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

  useEffect(() => {
    const gui = new dat.GUI()
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
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
        onClick={startGame}
      >
        {start ? duration.toFixed(2) : 'START'}
      </Text>
      <Box position={[1.2, 0, 0]} onClick={endGame} />
      <Boat x={x} z={z} />
      <Bombs fire={start} />
    </>
  )
}
