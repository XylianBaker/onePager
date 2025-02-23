// Import🚚 three.js ➗
import * as $ from '//unpkg.com/three@0.123.0/build/three.module.js'
import { OrbitControls } from '//unpkg.com/three@0.123.0/examples/jsm/controls/OrbitControls.js'

// -------
// Boot 🥾
// -------

const renderer = new $.WebGLRenderer({ antialias: true });
const scene = new $.Scene();
const camera = new $.PerspectiveCamera(75, 2, .1, 1000);
const cubeRenderTarget = new $.WebGLCubeRenderTarget(128);
const cubeCamera = new $.CubeCamera(.1, 1000, cubeRenderTarget);
const controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', () => {
    // device height & width 📱 
    const { clientWidth, clientHeight } = renderer.domElement;

    // renderer size 🗻
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(clientWidth, clientHeight, false);

    // camera 🎥
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
});

// add canvas 🧵 to index.html 📟
document.body.querySelector('#home').append(renderer.domElement);
window.dispatchEvent(new Event('resize'));

// --------
// main 🏂
// --------

// images 🖼
const IMGURL = 'https://images.unsplash.com/photo-1603924147107-81e7a2b3051e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
const IMGURL2 = 'https://images.unsplash.com/photo-1608702885483-c9dd2030329a?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60';

$.ShaderChunk.my_map_fragment = `
#ifdef USE_MAP
    float t = t * 0.0001;
    vec2 uv = vUv * vec2(2.0, 10.0) + vec2(0.5, 0.5);
    vec4 o = texture2D(map, uv);
    vec4 nu = 
          // water 🌊
          0.3 * (texture2D(map, uv * vec2(2.0, 2.0) + vec2(0, t + o.b)))
          // cyclone 🌪
        + 0.1 * (texture2D(map, uv * vec2(1.0, 1.0) + vec2(t)))
          // closest 😚
        + 0.6 * (texture2D(map, uv * vec2(1.0, 1.0) + vec2(0.0, t)) + 0.5); 
    vec4 C = pow(nu + 0.1, vec4(4.0));
    C = mapTexelToLinear(C);
    diffuseColor *= C;
#endif
`;

// camera 🎥 & controls 🎮
controls.target.set(-1, 4, 0);
camera.position.set(-1, -4, 1);

// geometry 📐 & material 🧱
const geometry = new $.SphereBufferGeometry(4, 32, 32);
const material = new $.ShaderMaterial({
    uniforms: $.UniformsUtils.merge([$.ShaderLib.basic.uniforms, { t: { value: 0 } }]),
    vertexShader: $.ShaderLib.basic.vertexShader,
    fragmentShader: `uniform float t;\n` + $.ShaderLib.basic.fragmentShader.replace('<map_fragment>', '<my_map_fragment>'),
    side: $.BackSide
});

// texture 🍁 loaded from the image 🖼
const texture = new $.TextureLoader().load(IMGURL);

// texture 🍁 is going to be wrapped 🌯 around the material 🧱
texture.wrapS = texture.wrapT = $.MirroredRepeatWrapping;
material.map = material.uniforms.map.value = texture;

// mesh 🕸 for the texture 🍁
const temporaryMesh = new $.Mesh(geometry, material);
temporaryMesh.scale.set(1, 20, 1);
scene.add(temporaryMesh);

// Mesh 🕸
const mesh = new $.Mesh(
    // Geometry 📐
    new $.SphereBufferGeometry(1, 32, 64),
    // StandardMaterial 🧱 for the Mesh 🕸
    new $.MeshStandardMaterial({
        emissive: 'white',
        emissiveIntensity: 0.12,
        metalness: 1,
        roughness: 0,
        envMap: cubeRenderTarget.texture,
        envMapIntensity: 1,
        // second image 🖼
        map: new $.TextureLoader().load(IMGURL2)
    })
);

// adding Mesh🕸 to the scene 🎭
scene.add(mesh);

// Render⚡ & Animation 🏃‍♂️
renderer.setAnimationLoop((t) => {
    // 🙈
    mesh.visible = false;

    // 🎲🎥
    cubeCamera.position.copy(mesh.position);
    cubeCamera.update(renderer, scene);

    // 🐵
    mesh.visible = true;

    // ⚡🎮
    renderer.render(scene, camera);
    controls.update();
    material.uniforms.t.value = t;
});

// GreenSock 🧦 Animation 🏃‍♂️ Platform 💻
gsap.to(mesh.rotation, {
    x: -Math.PI * 2,
    duration: 10,
    repeat: -1,
    ease: 'none'
});