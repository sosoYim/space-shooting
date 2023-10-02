import { ThreeElements, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { useGame } from '../hooks/useGame'
import Boat from './Boat'
import dat from 'dat.gui'

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
  const [x, setX] = useState(0)
  const [z, setZ] = useState(0)

  const [move, setMove] = useState<
    false | 'left' | 'right' | 'forward' | 'backward'
  >(false)

  useFrame((state, _) => {
    if (!move) {
      state.clock.stop()
      return
    }

    if (move === 'left') {
      setX((x) => x - 0.01)
    } else if (move === 'right') {
      setX((x) => x + 0.01)
    } else if (move === 'forward') {
      setZ((z) => z - 0.01)
    } else if (move === 'backward') {
      setZ((z) => z + 0.01)
    }
  })

  addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      setMove('left')
    } else if (e.key === 'ArrowRight') {
      setMove('right')
    } else if (e.key === 'ArrowUp') {
      setMove('forward')
    } else if (e.key === 'ArrowDown') {
      setMove('backward')
    }
  })

  addEventListener('keyup', (e) => {
    if (
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === 'ArrowUp' ||
      e.key === 'ArrowDown'
    ) {
      setMove(false)
    }
  })

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
    </>
  )
}
