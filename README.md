# onePager 📟
A onepager website 📟 for school 🏫

- [onePager 📟](#onepager-)
  - [WebGL Animation 🏃‍♂️](#webgl-animation-️)
    - [three.js ➗](#threejs-)
    - [WebGL renderer 🎞](#webgl-renderer-)
    - [Scene 🎭](#scene-)
    - [Perspective Camera 🎥](#perspective-camera-)
    - [cubeRenderTarget 🎯](#cuberendertarget-)
    - [OrbitControls 🌌🎮](#orbitcontrols-)
  - [Vectors 📉](#vectors-)
    - [Vector2 🥈](#vector2-)
    - [Vector3 🥉](#vector3-)
    - [Vector4 🍀](#vector4-)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## WebGL Animation 🏃‍♂️
WeGL ist eine Javascript API zum rendern von Interaktiven 2D und 3D Grafiken innerhalb des Web Browsers ohne zusätzliche Plugins wie Adobe flash.

Es bietet die Möglichkeit in HTML5 Animationen und Videospiele ohne der Hilfe von Flash zu erstellen.

WebGL Elemente können mit anderen HTML Elementen in Kombination verwendet werden, um es zum Beispiel als Hintergrundanimation anzeigen zu lassen.

WebGL wird in Javascript und der shader code wird in OpenGL ES Shading Language geschrieben, um damit die Grafikkarte des Rechners anzusprechen.

### three.js ➗
Three.js ist eine browserübergreifende JavaScript-Bibliothek und eine Anwendungsprogrammierschnittstelle, mit der mithilfe von WebGL animierte 3D-Computergrafiken in einem Webbrowser erstellt und angezeigt werden.

### WebGL renderer 🎞
Der WebGL-Renderer zeigt Szenen mit WebGL an.

```javascript
const renderer = new $.WebGLRenderer({ antialias: true });
```

[ -> WebGLRenderer](https://threejs.org/docs/#api/en/renderers/WebGLRenderer)

### Scene 🎭
In Szenen kann man festlegen, was und wo von three.js gerendert werden soll. Hier platziert man Objekte, Lichter und Kameras.

```javascript
const scene = new $.Scene();
```

[ -> Scene](https://threejs.org/docs/#api/en/scenes/Scene)

### Perspective Camera 🎥
Dieser Projektionsmodus soll die Art und Weise nachahmen, wie das menschliche Auge sieht. Dies ist der am häufigsten verwendete Projektionsmodus zum Rendern einer 3D-Szene.

```javascript
onst camera = new $.PerspectiveCamera(75, 2, .1, 1000);
```

[ -> Perspective Camera](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera)

### cubeRenderTarget 🎯
Wird von der CubeCamera als WebGLRenderTarget verwendet.

```javascript
const cubeRenderTarget = new $.cubeRenderTarget(128);
```

[-> cubeRenderTarget](https://threejs.org/docs/#api/en/renderers/WebGLCubeRenderTarget)

### OrbitControls 🌌🎮
Mit den Orbit-Steuerelementen kann die Kamera ein Ziel umkreisen.
Um dies zu verwenden, muss man, wie bei allen Dateien im Verzeichnis / examples, die Datei separat in Ihren HTML-Code aufnehmen.

```javascript
const controls = new OrbitControls(camera, renderer.domElement);
```

[-> OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls)

## Vectors 📉
### Vector2 🥈
Klasse, die einen 2D-Vektor darstellt. Ein 2D-Vektor ist ein geordnetes Zahlenpaar (mit x und y bezeichnet), mit dem eine Reihe von Dingen dargestellt werden können, z.bsp:

- Ein Punkt im 2D-Raum (d. H. Eine Position in einer Ebene).
- Eine Richtung und Länge über eine Ebene. In drei js ist die Länge immer der euklidische Abstand (geradliniger Abstand) von (0, 0) nach (x, y), und   die Richtung wird auch von (0, 0) nach (x, y) gemessen.
- Beliebig geordnetes Zahlenpaar.

Es gibt andere Dinge, die ein 2D-Vektor darstellen kann, wie Impulsvektoren, komplexe Zahlen usw. Diese sind jedoch die häufigsten Verwendungen in three.js.

```javascript
vec2 uv = vUv * vec2(2.0, 10.0) + vec2(0.5, 0.5);
```

[->  Vector2](https://threejs.org/docs/#api/en/math/Vector2)

### Vector3 🥉
Klasse, die einen 3D-Vektor darstellt. Ein 3D-Vektor ist ein geordnetes Triplett von Zahlen (mit x, y und z bezeichnet), das zur Darstellung einer Reihe von Dingen verwendet werden kann, z.

- Ein Punkt im 3D-Raum.
- Eine Richtung und Länge im 3D-Raum. In drei js ist die Länge immer der euklidische Abstand (geradliniger Abstand) von (0, 0, 0) bis (x, y, z), und die Richtung wird auch von (0, 0, 0) bis ( x, y, z).
- Beliebig geordnetes Triplett von Zahlen.

Es gibt andere Dinge, die mit einem 3D-Vektor dargestellt werden können, z. B. Impulsvektoren usw. Diese sind jedoch die häufigsten Verwendungen in three.js.

[-> Vector3](https://threejs.org/docs/#api/en/math/Vector3)

### Vector4 🍀
Klasse, die einen 4D-Vektor darstellt. Ein 4D-Vektor ist ein geordnetes Vierfach von Zahlen (mit x, y, z und w bezeichnet), das zur Darstellung einer Reihe von Dingen verwendet werden kann, wie z.

- Ein Punkt im 4D-Raum.
- Eine Richtung und Länge im 4D-Raum. In drei js ist die Länge immer der euklidische Abstand (geradliniger Abstand) von (0, 0, 0, 0) bis (x, y, z, w), und die Richtung wird auch von (0, 0, 0, 0) in Richtung (x, y, z, w).
- Beliebig geordnetes Vierfach von Zahlen.

Es gibt andere Dinge, die ein 4D-Vektor darstellen kann, dies sind jedoch die häufigsten Verwendungen in three.js.

```javascript
vec4 o = texture2D(map, uv);
```

[-> Vector4](https://threejs.org/docs/#api/en/math/Vector4)