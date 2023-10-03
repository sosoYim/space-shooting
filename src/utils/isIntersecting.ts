import { Object3D, Object3DEventMap, Box3 } from 'three'

export const isIntersecting = ({
  target,
  objects,
}: {
  target: Object3D<Object3DEventMap>
  objects: Object3D<Object3DEventMap>[]
}) => {
  const targetBox = new Box3().setFromObject(target)

  return objects.some((obj) => {
    const box = new Box3().setFromObject(obj)
    return targetBox.intersectsBox(box)
  })
}
