import { Text } from '@react-three/drei'
import { useState } from 'react'

export default function ResultButton({
  duration,
  startGame,
}: {
  duration: number
  startGame: () => void
}) {
  const [hover, setHover] = useState(false)

  return (
    <>
      <Text
        position={[0, 13, 0]}
        fontSize={2}
        color={'darkblue'}
        onClick={startGame}
      >
        RESULT: {duration}
      </Text>
      <Text
        position={[0, 11, 0]}
        onClick={startGame}
        color={hover ? 'gold' : 'blue'}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        TRY AGAIN
      </Text>
    </>
  )
}
