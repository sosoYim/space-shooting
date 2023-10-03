import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { useGame } from '../hooks/useGame'
import Boat from './Boat'
import dat from 'dat.gui'
import { useMove } from '../hooks/useMove'
import Bombs from './Bombs'
import StartButton from './StartButton'
import ResultButton from './ResultButton'
import { isIntersecting } from '../utils/isIntersecting'

export default function Space() {
  const { start, startGame, endGame, duration } = useGame()
  const { x, z } = useMove()

  const camera = useThree(({ camera }) => camera)
  useEffect(() => {
    const gui = new dat.GUI()
    gui.add(camera.position, 'y', -100, 100, 0.01).name('카메라 Y')
    gui.add(camera.position, 'z', -100, 100, 0.01).name('카메라 Z')
  }, [])

  const bombsRef = useRef<THREE.Group>(null!)
  const boatRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (!bombsRef.current || !boatRef.current) return

    if (
      isIntersecting({
        target: boatRef.current,
        objects: bombsRef.current.children,
      })
    ) {
      console.log('game over')
      endGame()
    }
  })

  return (
    <>
      {!start && duration ? (
        <ResultButton duration={duration} startGame={startGame} />
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
