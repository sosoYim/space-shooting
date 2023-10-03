import { ThreeElements, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { useGame } from '../hooks/useGame'
import Boat from './Boat'
import dat from 'dat.gui'
import { useMove } from '../hooks/useMove'
import Bombs from './Bombs'

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

    gui.add(camera.position, 'y', -10, 10, 0.01).name('카메라 Y')
    gui.add(camera.position, 'z', -10, 10, 0.01).name('카메라 Z')
  }, [])

  console.log({ start, duration })

  return (
    <>
      <Box position={[-1.2, 0, 0]} onClick={startGame} />
      <Box position={[1.2, 0, 0]} onClick={endGame} />
      <Boat x={x} z={z} />
      <Bombs fire={start} />
    </>
  )
}
