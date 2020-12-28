import * as $ from '//unpkg.com/three@0.123.0/build/three.module.js'
import { OrbitControls } from '//unpkg.com/three@0.123.0/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from '//unpkg.com/three@0.123.0/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from '//unpkg.com/three@0.123.0/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from '//unpkg.com/three@0.123.0/examples/jsm/postprocessing/UnrealBloomPass'

// ----
// Boot
// ----

const renderer = new $.WebGLRenderer({ antialias: true });
const scene = new $.Scene();
const camera = new $.PerspectiveCamera(75, 2, .01, 1000);
const controls = new OrbitControls(camera, renderer.domElement);
const composer = new EffectComposer(renderer);
const bufSize = new $.Vector2();
window.addEventListener('resize', () => {
    const { clientWidth, clientHeight } = renderer.domElement;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(clientWidth, clientHeight, false);
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    composer.setPixelRatio(window.devicePixelRatio);
    composer.setSize(clientWidth, clientHeight);
    renderer.getDrawingBufferSize(bufSize);
});
document.body.querySelector('#home').append(renderer.domElement);
//document.getElementById('#home').canvas.style.zIndex = "-100";
window.dispatchEvent(new Event('resize'));
renderer.setAnimationLoop((t) => {
    composer.render();
    controls.update();
    animate(t);
});

// ----
// Main
// ---- 

$.ShaderChunk.my_map_fragment = `
#ifdef USE_MAP
    float t = t * 0.001;
    vec2 uv = vUv * vec2(10.0, 4.0);
    vec4 A = texture2D(map, uv + vec2(t*0.1, 0.0));
    vec4 B = texture2D(map, 10.0 * (uv + vec2(t*0.1)));
    vec4 C = (A * 0.5 + B * 0.5) + A.g * 0.5;
    vec4 texelColor = (pow(C, vec4(10.0))).gbba; 
    texelColor = mapTexelToLinear(texelColor);
    diffuseColor *= texelColor;
#endif
`;

const IMGURL = 'https://images.unsplash.com/photo-1607808982325-0ebc8d1749d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
camera.position.set(-4, 0, -2); // inside torus

const tex = new $.TextureLoader().load(IMGURL);
tex.wrapS = tex.wrapT = $.MirroredRepeatWrapping;
const geom = new $.TorusKnotBufferGeometry(5, 1.5, 100, 50);
const mat = new $.ShaderMaterial({
    uniforms: $.UniformsUtils.merge([ // deep clone
        $.ShaderLib.basic.uniforms,
        { t: 0 }
    ]),
    vertexShader: $.ShaderLib.basic.vertexShader,
    fragmentShader: `
    uniform float t;
    ` + $.ShaderLib.basic.fragmentShader.replace(
        '#include <map_fragment>',
        '#include <my_map_fragment>'
    ),
    side: $.DoubleSide
});
mat.map = mat.uniforms.map.value = tex;
scene.add(new $.Mesh(geom, mat));

//// Pp

const renderPass = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(bufSize, 1, 0.5, 0.2);
composer.addPass(renderPass);
composer.addPass(bloomPass);

//// Anim

function animate(t /*sec*/ ) {
    mat.uniforms.t.value = t;
}