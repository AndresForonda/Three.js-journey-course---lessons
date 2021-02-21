import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')
// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
group.position.y = 0.6
group.scale.x = 2
group.rotation.y = Math.PI / 4
scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

cube1.position.set(-0.6, 0.6, 1)
cube2.position.set(0.6, 0, 1)
cube3.position.set(-0.6, -0.6, 1)

group.add(cube1, cube2, cube3)

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
camera.position.z = 5
scene.add(camera)

const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)
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
