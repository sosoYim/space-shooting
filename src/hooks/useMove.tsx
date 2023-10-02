import { useFrame } from '@react-three/fiber'
import { useState } from 'react'

export const useMove = () => {
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

  return { x, z }
}
