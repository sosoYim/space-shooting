import { useState } from 'react'
import { Text } from '@react-three/drei'

export default function StartButton({
  duration,
  start,
  startGame,
}: {
  duration: number
  start: boolean
  startGame: () => void
}) {
  const [hover, setHover] = useState(false)

  return (
    <Text
      position={[0, 10.5, 3]}
      fontSize={2}
      color={hover ? 'gold' : 'blue'}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onClick={startGame}
    >
      {start ? duration : 'START'}
    </Text>
  )
}
