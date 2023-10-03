import { forwardRef, useEffect, useId, useState } from 'react'
import Bomb from './Bomb'
import { useFrame } from '@react-three/fiber'
import { Group, Object3DEventMap } from 'three'

const initialPositions = () =>
  Array.from({ length: 10 }, () => [0, 0, 0]).reduce((acc) => {
    return [...acc, Math.random() * 10 - 5, 0, Math.random() * 10 - 15]
  }, [])

const Bombs = forwardRef<Group<Object3DEventMap>, { fire: boolean }>(
  ({ fire }, ref) => {
    const [positions, setPositions] = useState(initialPositions())

    const id = useId()
    let bombs = []
    for (let i = 0; i < positions.length / 3; i++) {
      bombs.push(
        <Bomb
          key={`${id}=${i}`}
          position={[
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
          ]}
        />
      )
    }

    useFrame(() => {
      if (!fire) return

      setPositions((prev) => {
        const next = [...prev]

        for (let i = 0; i < next.length / 3; i++) {
          next[i * 3 + 2] += 0.1
        }

        return next
      })
    })

    return <group ref={ref}>{bombs}</group>
  }
)

export default Bombs
