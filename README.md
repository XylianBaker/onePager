# onePager 📟
A onepager website 📟 for school 🏫

- [onePager 📟](#onepager-)
  - [WebGL Animation 🏃‍♂️](#webgl-animation-️)
    - [three.js ➗](#threejs-)
    - [WebGL renderer 🎞](#webgl-renderer-)
    - [Scene 🎭](#scene-)
    - [Perspective Camera 🎥](#perspective-camera-)
    - [cubeRenderTarget 🎯](#cuberendertarget-)
    - [cubeCamera🎲🎥](#cubecamera)
    - [OrbitControls 🌌🎮](#orbitcontrols-)
  - [Vectors 📉](#vectors-)
    - [Vector2 🥈](#vector2-)
    - [Vector3 🥉](#vector3-)
    - [Vector4 🍀](#vector4-)
  - [Geometry 📐](#geometry-)
    - [BufferGeometry 🐃](#buffergeometry-)
    - [SphereGeometry ⚽](#spheregeometry-)
    - [SphereBufferGeometry ⚽🐃](#spherebuffergeometry-)
  - [ShaderMaterial 🧱](#shadermaterial-)
  - [TextureLoader 🍁](#textureloader-)
  - [MeshStandardMaterial 🕸🧱](#meshstandardmaterial-)
  - [GSAP (GreenSock 🧦 Animation 🏃‍♂️ Platform 💻)](#gsap-greensock--animation-️-platform-)

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

### cubeCamera🎲🎥
Erstellt 6 Kameras, die in ein WebGLCubeRenderTarget gerendert werden.

```javascript
const cubeCamera = new $.CubeCamera(.1, 1000, cubeRenderTarget);
```

[-> cubeCamera🎲🎥](https://translate.google.at/?sl=en&tl=de&text=Creates%206%20cameras%20that%20render%20to%20a%20WebGLCubeRenderTarget.&op=translate)

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

## Geometry 📐

### BufferGeometry 🐃
Eine effiziente Darstellung der Netz-, Linien- oder Punktgeometrie. Enthält Scheitelpunktpositionen, Gesichtsindizes, Normalen, Farben, UVs und benutzerdefinierte Attribute in Puffern, wodurch die Kosten für die Übergabe all dieser Daten an die GPU reduziert werden.

[-> BufferGeometry](https://threejs.org/docs/#api/en/core/BufferGeometry)

### SphereGeometry ⚽
Eine Klasse zum Erzeugen von Kugelgeometrien.

[-> SphereGeometry](https://threejs.org/docs/#api/en/geometries/SphereGeometry)
### SphereBufferGeometry ⚽🐃
Dies ist der BufferGeometry-Port von SphereGeometry.

```javascript
const geometry = new $.SphereBufferGeometry(4, 32, 32);
```

[-> SphereBufferGeometry](https://threejs.org/docs/#api/en/geometries/SphereBufferGeometry)

## ShaderMaterial 🧱
Ein Material, das mit benutzerdefinierten Shadern gerendert wurde. Ein Shader ist ein kleines Programm, das in GLSL geschrieben ist und auf der GPU ausgeführt wird. Möglicherweise möchte man einen benutzerdefinierten Shader verwenden, wenn man:

- Implementiert man einen Effekt, der in keinem der eingebauten Materialien enthalten ist
- Kombiniert man viele Objekte zu einer einzigen Geometrie oder BufferGeometry, um die Leistung zu verbessern

Bei der Verwendung eines ShaderMaterials sind folgende Hinweise zu beachten:

- Ein ShaderMaterial wird nur von WebGLRenderer ordnungsgemäß gerendert, da der GLSL-Code in den Eigenschaften vertexShader und fragmentShader kompiliert und mit WebGL auf der GPU ausgeführt werden muss.
- Ab DREI r72 wird das direkte Zuweisen von Attributen in einem ShaderMaterial nicht mehr unterstützt. Stattdessen muss eine BufferGeometry-Instanz (anstelle einer Geometry-Instanz) verwendet werden, wobei benutzerdefinierte Attribute mithilfe von BufferAttribute-Instanzen definiert werden.
- Ab DREI r77 sollten WebGLRenderTarget- oder WebGLCubeRenderTarget-Instanzen nicht mehr als Uniformen verwendet werden. Stattdessen muss ihre Textur-Eigenschaft verwendet werden.
- Eingebaute Attribute und Uniformen werden zusammen mit Ihrem Code an die Shader übergeben. Wenn man nicht möchte, dass das WebGLProgramm Ihrem Shader-Code etwas hinzufügt, kann man RawShaderMaterial anstelle dieser Klasse verwenden.
- Man kann die Direktiven #pragma unroll_loop_start und #pragma unroll_loop_end verwenden, um eine for-Schleife in GLSL vom Shader-Präprozessor abzuwickeln. Die Direktive muss direkt über der Schleife platziert werden. Die Schleifenformatierung muss einem definierten Standard entsprechen.
    - Die Schleife muss normalisiert werden.
    - Die Schleifenvariable muss i sein.
    - Der Wert UNROLLED_LOOP_INDEX wird für die angegebene Iteration durch den Explizitätswert i ersetzt und kann in Präprozessoranweisungen verwendet werden.

```javascript
const material = new $.ShaderMaterial();
```

[-> ShaderMaterial](https://threejs.org/docs/#api/en/materials/ShaderMaterial)

## TextureLoader 🍁
Klasse zum Laden einer Textur. Dies verwendet den ImageLoader intern zum Laden von Dateien.

```javascript
const texture = new $.TextureLoader().load(IMGURL);
```

[-> TextureLoader](https://threejs.org/docs/#api/en/loaders/TextureLoader)

## MeshStandardMaterial 🕸🧱
Ein Standardmaterial auf physikalischer Basis unter Verwendung des Metallic-Roughness-Workflows.

Physikalisch basiertes Rendering (PBR) ist in letzter Zeit zum Standard in vielen 3D-Anwendungen wie Unity, Unreal und 3D Studio Max geworden.

Dieser Ansatz unterscheidet sich von älteren Ansätzen darin, dass anstelle von Näherungen für die Art und Weise, wie Licht mit einer Oberfläche interagiert, ein physikalisch korrektes Modell verwendet wird. Die Idee ist, dass anstatt Materialien so zu optimieren, dass man unter bestimmten Lichtverhältnissen gut aussehen, ein Material erstellt werden kann, das unter allen Beleuchtungsszenarien „richtig“ reagiert.

In der Praxis ergibt dies ein genaueres und realistischeres Ergebnis als das MeshLambertMaterial oder das MeshPhongMaterial, was etwas rechenintensiver ist.

Die Schattierung wird auf die gleiche Weise wie für das MeshPhongMaterial unter Verwendung eines Phong-Schattierungsmodells berechnet. Dies berechnet die Schattierung pro Pixel (d. H. Im Fragment-Shader, AKA-Pixel-Shader), was auf Kosten einer gewissen Leistung genauere Ergebnisse liefert als das von MeshLambertMaterial verwendete Gouraud-Modell.

Beachtet man, dass man für optimale Ergebnisse immer eine Umgebungskarte angeben sollten, wenn man dieses Material verwenden.

```javascript
new $.MeshStandardMaterial();
```

[-> MeshStandardMaterial](https://threejs.org/docs/#api/en/materials/MeshStandardMaterial)

## GSAP (GreenSock 🧦 Animation 🏃‍♂️ Platform 💻)
GSAP ist eine JavaScript-Bibliothek zum Erstellen von Hochleistungsanimationen, die in allen gängigen Browsern funktionieren. 

Man kann CSS, SVG, Canvas, React, Vue, WebGL, Farben, Zeichenfolgen, Bewegungspfade, generische Objekte und vieles mehr animieren, alles, was JavaScript berühren kann.

Keine andere Bibliothek bietet eine derart fortschrittliche Sequenzierung, Zuverlässigkeit und strenge Kontrolle bei gleichzeitiger Lösung realer Probleme auf Millionen von Websites. 

GSAP umgeht unzählige Browser-Inkonsistenzen. 

Ihre Animationen funktionieren einfach. 

Im Kern ist GSAP ein Hochgeschwindigkeits-Eigenschaftsmanipulator, der Werte im Laufe der Zeit mit äußerster Genauigkeit aktualisiert. Es ist bis zu 20x schneller als jQuery.

```javascript
gsap.to(mesh.rotation, {
    x: -Math.PI * 2,
    duration: 10,
    repeat: -1,
    ease: 'none'
});
```

[-> GSAP](https://greensock.com/gsap/)
