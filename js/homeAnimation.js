// Import🚚 three.js ➗
import * as $ from '//unpkg.com/three@0.123.0/build/three.module.js'
import { OrbitControls } from '//unpkg.com/three@0.123.0/examples/jsm/controls/OrbitControls.js'

// Boot 🥾
const renderer = new $.WebGLRenderer({ antialias: true });
const scene = new $.Scene();
const camera = new $.PerspectiveCamera(75, 2, .1, 1000);
const cubeRenderTarget = new $.cubeRenderTarget(128);
const controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', () => {
    // device height & width 📱 
    const { clientWidth, clientHeight } = renderer.domElement;

    // renderer size 🗻
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(clientWidth, clientHeight, false);

    // camera 🎥
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectMatrix();
})