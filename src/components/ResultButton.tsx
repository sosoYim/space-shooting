import { Text } from '@react-three/drei'
import { useState } from 'react'

export default function ResultButton({
  duration,
  startGame,
  resetMovement,
}: {
  duration: number
  startGame: () => void
  resetMovement: () => void
}) {
  const [hover, setHover] = useState(false)

  return (
    <>
      <Text
        position={[0, 10.5, 3]}
        fontSize={1.5}
        color={'darkblue'}
        onClick={startGame}
      >
        {duration >= 30 ? 'No more bombs!' : `RESULT: ${duration}`}
      </Text>
      <Text
        position={[0, 9, 0]}
        onClick={() => {
          resetMovement()
          startGame()
        }}
        color={hover ? 'gold' : 'blue'}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        TRY AGAIN
      </Text>
    </>
  )
}
