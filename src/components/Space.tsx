import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useGame } from '../hooks/useGame'
import Boat from './Boat'
import { useMove } from '../hooks/useMove'
import Bombs from './Bombs'
import StartButton from './StartButton'
import ResultButton from './ResultButton'
import { isIntersecting } from '../utils/isIntersecting'

export default function Space() {
  const { start, startGame, endGame, duration } = useGame()
  const { x, z, resetMovement } = useMove()

  const bombsRef = useRef<THREE.Group>(null!)
  const boatRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (!bombsRef.current || !boatRef.current) return

    if (
      isIntersecting({
        target: boatRef.current,
        objects: bombsRef.current.children,
      }) ||
      duration >= 30
    ) {
      endGame()
    }
  })

  return (
    <>
      {!start && duration ? (
        <ResultButton
          duration={duration}
          startGame={startGame}
          resetMovement={resetMovement}
        />
      ) : (
        <StartButton start={start} startGame={startGame} duration={duration} />
      )}
      <mesh ref={boatRef}>
        <Boat x={x} z={z} />
      </mesh>
      <Bombs fire={start} ref={bombsRef} />
    </>
  )
}
