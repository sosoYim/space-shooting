import { useFrame } from '@react-three/fiber'
import { useCallback, useState } from 'react'

export const useGame = () => {
  const [duration, setDuration] = useState(0)
  const [start, setStart] = useState(false)

  const startGame = useCallback(() => {
    setStart(true)
  }, [])

  const endGame = useCallback(() => {
    setStart(false)
  }, [])

  useFrame((state) => {
    if (start) {
      if (state.clock.running) {
        setDuration(state.clock.getElapsedTime())
        return
      }
      console.log('started')
      state.clock.start()
      setDuration(0)
    }

    if (!start && state.clock.running) {
      state.clock.stop()
      console.log('stopped')
    }
  })

  return { start, startGame, endGame, duration }
}
