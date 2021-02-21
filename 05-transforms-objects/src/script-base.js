import './style.css'
import * as THREE from 'three'
import { MaxEquation, Scene } from 'three'

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
 *
 * Rotation also has x, y and z properties but it's a Euler (https://threejs.org/docs/#api/en/math/Euler),
 * it's rotate the objects from the center of it based on the property
 *
 * Example, the image below is one side of the mesh (cube), it will be rotated from the X in the center of
 * the shape
 *
 * xxxxxxx
 * x     x
 * x  X  x
 * x     x
 * xxxxxxx
 *
 * Rotation and Quaternion properties are similar, both are used to rotate objects, updating rotation
 * property, will update Quaternion.
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
 * Rotation
 *
 * Be careful, rotating on an axis, it could change the axis order,  default is x, y and z,
 * if so, you could get strange results:
 *
 * i.e: rotating PI/2 x axis, will change y axis to z axis, so rotating y axis, will looks like
 * rotating z axis. Yeah, weird and its called gimbal lock.
 *
 * To solve this use the reorder method, this receives as parameter a string 'XYZ', but it can use
 * any combination YZX, and so on.
 *
 */
// mesh.rotation.x = 2
mesh.rotation.reorder('YXZ') // Keeps the axis order after doing X rotation
mesh.rotation.x = Math.PI / 2
mesh.rotation.y = Math.PI / 2

/**
 * Euler is easy to understand but this axis order can be problematic.
 * This is why most engines and 3D software use Quaternion.
 *
 * Quaternion allows to apply rotation but in a more mathematical way, and are updated when
 * the rotation property changes.
 */

/**
 * Axes helper
 *
 * A kind of perspective guide
 */

const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Look at
 *
 * Object 3D instances have a lookAt method which rotates the object so that is -z face the target provided,
 * target must be Vector3 (like the position property)
 */

camera.lookAt(mesh.position)

/**
 * Scene Graph
 *
 * Objects can be grouped through the Group class, it allows to use
 * position, scale, rotation or quaternion on those groups.
 */

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
