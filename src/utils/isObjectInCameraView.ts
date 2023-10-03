import { Frustum, Matrix4 } from 'three'

export const isObjectInCameraView = (
  object: THREE.Object3D,
  camera: THREE.Camera
): boolean => {
  const frustum = new Frustum()
  frustum.setFromProjectionMatrix(
    new Matrix4().multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    )
  )

  return frustum.intersectsObject(object)
}
