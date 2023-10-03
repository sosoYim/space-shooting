import { ThreeElements, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { useGame } from '../hooks/useGame'
import Boat from './Boat'
import dat from 'dat.gui'
import { useMove } from '../hooks/useMove'
import Bombs from './Bombs'
import StartButton from './StartButton'
import ResultButton from './ResultButton'

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

  return (
    <>
      {!start && duration ? (
        <ResultButton duration={duration} startGame={startGame} />
      ) : (
        <StartButton start={start} startGame={startGame} duration={duration} />
      )}
      <Box position={[1.2, 0, 0]} onClick={endGame} />
      <Boat x={x} z={z} />
      <Bombs fire={start} />
    </>
  )
}
