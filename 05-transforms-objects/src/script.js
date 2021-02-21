import './style.css'
import * as THREE from 'three'
import { Scene } from 'three'

/**
 * Classes that are based in the Object3D object, inherit the properties:
 *
 * - Position (move objects)
 * - Scale
 * - Rotation
 * - Quaternion (kind of rotation)
 *
 * Position and scale are not objects, but Vector3, which allows to
 * position things in the space, it has useful methods, like length, add, ceil and more
 * (https://threejs.org/docs/#api/en/math/Vector3)
 */

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// console.log(mesh.position.length()) // Length of the vector, distance of the center of the scene and the object's position

// Using Position with mesh
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
// Same as above (x, y, z)
mesh.position.set(0.7, -0.6, 1)

// Using Scale with mesh
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
// Same as above (x, y, z)
mesh.scale.set(2, 0.5, 0.5)

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
// console.log(mesh.position.distanceTo(camera.position)) // Vector3 distanceTo (mesh to the camera)

// mesh.position.normalize() // Takes the vector length and reduce it to 1
// console.log(mesh.position.length()) // Length of the vector, distance of the center of the scene and the object's position

/**
 * Axes helper
 * Helps to
 */

// const axesHelper = new THREE.AxesHelper(2)
// scene.add(axesHelper)
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

/**
 * It doesn't work after "take the picture", so after .render, the mesh is not affected
 * mesh.position.x = 0.7
 * mesh.position.y = -0.6
 * mesh.position.z = 1
 */
