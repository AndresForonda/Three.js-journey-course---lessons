/**
 * 4 Elements to get started
 *
 * - A scene that will contain objects
 * - Some objects
 * - A camera
 * - A render
 */

const scene = new THREE.Scene();

/**
 * Objects
 *
 * Can be many things
 *
 * - Primitive geometries
 * - Imported models
 * - Particles
 * - Lights
 * - Etc.
 */

/**
 * A simple red cube
 *
 * - Create a Mesh: Combination of geometry (shape) and a material (how it looks)
 *   start with a BoxGeometry and MeshBasicMaterial
 */

const geometry = new THREE.BoxGeometry(1, 1, 1); // Width, Height, Depth https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry

const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

/**
 * Camera
 *
 * - Not visible
 * - Serve as point of view when doing a render
 * - Can have multiple and switch between them
 * - Different types
 */

// Using PerspectiveCamera

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera

/**
 * The field of view (75)
 *
 * - Vertical vision angle
 * - In degrees
 * - Also called fov
 * - Small closer to an object/Big far away of an object
 *
 * Tip: Simon uses 45, 55 max
 *
 * Aspect Ratio
 *
 * The width of the render divided by the height of the render,
 * We don't have a render yet, but we can decide on a size now (sizes object above)
 *
 */

/**
 * To transform an object, we can use the following properties
 *
 * - Position: object with x, y and z properties. Three.js considers the
 *   forward/backward axis to be z
 * - Rotation
 * - Scale
 */

camera.position.z = 3;
// camera.position.x = 2;
// camera.position.y = 1;
scene.add(camera);

/**
 * Renderer
 *
 * - Render the scene from the camera point of view
 * - Result drawn in a canvas
 * - A canvas is a html element in which you can draw stuff
 * - Three.js will use WebGL to draw the render inside the canvas
 * - You can create it or you can let Three.js do it
 */

// Renderer

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  // https://threejs.org/docs/index.html#api/en/renderers/WebGLRenderer
  canvas,
});

// Resize the renderer
renderer.setSize(sizes.width, sizes.height);

// First render!
renderer.render(scene, camera);
// Nothing is visible because the camera is inside the cube,
// We need to move the camera backward
