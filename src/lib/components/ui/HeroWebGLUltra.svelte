<!-- HeroWebGLUltra — INSANE WebGL with blackhole, aurora, DNA helix, and reactive particles -->
<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let canvas = $state(null);
	let animId = 0;

	onMount(() => {
		if (!canvas) return;

		// ═══════════════════════════════════════════════════════════════════════════
		// SCENE SETUP
		// ═══════════════════════════════════════════════════════════════════════════
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
		camera.position.z = 100;

		const renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
			antialias: true,
			powerPreference: 'high-performance'
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0);

		let mouse = { x: 0, y: 0 };
		let targetMouse = { x: 0, y: 0 };

		// ═══════════════════════════════════════════════════════════════════════════
		// BLACKHOLE CORE WITH EVENT HORIZON
		// ═══════════════════════════════════════════════════════════════════════════
		const blackholeVertexShader = `
			uniform float uTime;
			uniform vec2 uMouse;
			varying vec2 vUv;
			varying vec3 vPosition;
			varying float vDistortion;
			
			// 3D Simplex Noise
			vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
			vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
			vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
			vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
			
			float snoise(vec3 v) {
				const vec2 C = vec2(1.0/6.0, 1.0/3.0);
				const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
				vec3 i = floor(v + dot(v, C.yyy));
				vec3 x0 = v - i + dot(i, C.xxx);
				vec3 g = step(x0.yzx, x0.xyz);
				vec3 l = 1.0 - g;
				vec3 i1 = min(g.xyz, l.zxy);
				vec3 i2 = max(g.xyz, l.zxy);
				vec3 x1 = x0 - i1 + C.xxx;
				vec3 x2 = x0 - i2 + C.yyy;
				vec3 x3 = x0 - D.yyy;
				i = mod289(i);
				vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
				float n_ = 0.142857142857;
				vec3 ns = n_ * D.wyz - D.xzx;
				vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
				vec4 x_ = floor(j * ns.z);
				vec4 y_ = floor(j - 7.0 * x_);
				vec4 x = x_ * ns.x + ns.yyyy;
				vec4 y = y_ * ns.x + ns.yyyy;
				vec4 h = 1.0 - abs(x) - abs(y);
				vec4 b0 = vec4(x.xy, y.xy);
				vec4 b1 = vec4(x.zw, y.zw);
				vec4 s0 = floor(b0)*2.0 + 1.0;
				vec4 s1 = floor(b1)*2.0 + 1.0;
				vec4 sh = -step(h, vec4(0.0));
				vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
				vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
				vec3 p0 = vec3(a0.xy, h.x);
				vec3 p1 = vec3(a0.zw, h.y);
				vec3 p2 = vec3(a1.xy, h.z);
				vec3 p3 = vec3(a1.zw, h.w);
				vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
				p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
				vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
				m = m * m;
				return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
			}
			
			void main() {
				vUv = uv;
				vPosition = position;
				
				vec3 pos = position;
				
				// Multi-layer distortion
				float noise1 = snoise(pos * 0.03 + uTime * 0.15) * 8.0;
				float noise2 = snoise(pos * 0.06 + uTime * 0.25) * 4.0;
				float noise3 = snoise(pos * 0.12 + uTime * 0.35) * 2.0;
				
				// Mouse reactive waves
				float mouseWave = sin(length(pos.xy - uMouse * 50.0) * 0.1 - uTime * 3.0) * 3.0;
				mouseWave *= smoothstep(100.0, 0.0, length(pos.xy - uMouse * 50.0));
				
				float distortion = noise1 + noise2 + noise3 + mouseWave;
				vDistortion = distortion;
				
				pos += normal * distortion;
				
				gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
			}
		`;

		const blackholeFragmentShader = `
			uniform float uTime;
			uniform vec3 uColor1;
			uniform vec3 uColor2;
			uniform vec3 uColor3;
			uniform vec3 uColor4;
			varying vec2 vUv;
			varying vec3 vPosition;
			varying float vDistortion;
			
			void main() {
				// Dynamic color mixing based on distortion and position
				float angle = atan(vPosition.y, vPosition.x);
				float dist = length(vPosition.xy);
				
				// Aurora-like color bands
				float band1 = sin(angle * 3.0 + uTime + vDistortion * 0.5) * 0.5 + 0.5;
				float band2 = sin(angle * 5.0 - uTime * 1.3 + dist * 0.02) * 0.5 + 0.5;
				float band3 = sin(vDistortion * 0.3 + uTime * 0.7) * 0.5 + 0.5;
				
				vec3 color = mix(uColor1, uColor2, band1);
				color = mix(color, uColor3, band2 * 0.6);
				color = mix(color, uColor4, band3 * 0.4);
				
				// Fresnel glow
				float fresnel = pow(1.0 - abs(dot(normalize(vPosition), vec3(0.0, 0.0, 1.0))), 2.5);
				color += fresnel * uColor2 * 0.8;
				
				// Pulsing intensity
				float pulse = sin(uTime * 2.0) * 0.15 + 0.85;
				
				// Edge fade
				float edgeFade = smoothstep(40.0, 25.0, dist);
				
				float alpha = (0.12 + fresnel * 0.25) * pulse * edgeFade;
				
				gl_FragColor = vec4(color, alpha);
			}
		`;

		const blackholeGeometry = new THREE.IcosahedronGeometry(35, 128);
		const blackholeMaterial = new THREE.ShaderMaterial({
			vertexShader: blackholeVertexShader,
			fragmentShader: blackholeFragmentShader,
			uniforms: {
				uTime: { value: 0 },
				uMouse: { value: new THREE.Vector2(0, 0) },
				uColor1: { value: new THREE.Color(0x253BDA) },
				uColor2: { value: new THREE.Color(0x3B5BFF) },
				uColor3: { value: new THREE.Color(0x38bdf8) },
				uColor4: { value: new THREE.Color(0x06b6d4) }
			},
			transparent: true,
			side: THREE.DoubleSide,
			depthWrite: false,
			blending: THREE.AdditiveBlending
		});
		const blackhole = new THREE.Mesh(blackholeGeometry, blackholeMaterial);
		scene.add(blackhole);

		// ═══════════════════════════════════════════════════════════════════════════
		// ACCRETION DISK (Rotating energy ring)
		// ═══════════════════════════════════════════════════════════════════════════
		const accretionVertexShader = `
			varying vec2 vUv;
			varying vec3 vPosition;
			void main() {
				vUv = uv;
				vPosition = position;
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}
		`;

		const accretionFragmentShader = `
			uniform float uTime;
			varying vec2 vUv;
			varying vec3 vPosition;
			
			void main() {
				float dist = length(vPosition.xy);
				float angle = atan(vPosition.y, vPosition.x);
				
				// Swirling pattern
				float swirl = sin(angle * 12.0 + dist * 0.3 - uTime * 4.0) * 0.5 + 0.5;
				float swirl2 = sin(angle * 8.0 - dist * 0.2 + uTime * 2.5) * 0.5 + 0.5;
				
				// Brightness based on angle
				float brightness = pow(swirl * swirl2, 1.5);
				
				// Color gradient
				vec3 innerColor = vec3(0.95, 0.6, 0.2);
				vec3 outerColor = vec3(0.5, 0.2, 0.9);
				vec3 color = mix(innerColor, outerColor, (dist - 45.0) / 30.0);
				
				// Fade at edges
				float innerFade = smoothstep(42.0, 50.0, dist);
				float outerFade = smoothstep(80.0, 65.0, dist);
				
				float alpha = brightness * 0.4 * innerFade * outerFade;
				
				gl_FragColor = vec4(color * brightness, alpha);
			}
		`;

		const accretionGeometry = new THREE.RingGeometry(45, 80, 128, 1);
		const accretionMaterial = new THREE.ShaderMaterial({
			vertexShader: accretionVertexShader,
			fragmentShader: accretionFragmentShader,
			uniforms: {
				uTime: { value: 0 }
			},
			transparent: true,
			side: THREE.DoubleSide,
			depthWrite: false,
			blending: THREE.AdditiveBlending
		});
		const accretionDisk = new THREE.Mesh(accretionGeometry, accretionMaterial);
		accretionDisk.rotation.x = Math.PI * 0.45;
		scene.add(accretionDisk);

		// Second angled disk
		const accretionDisk2 = new THREE.Mesh(accretionGeometry.clone(), accretionMaterial.clone());
		accretionDisk2.rotation.x = Math.PI * 0.55;
		accretionDisk2.rotation.y = Math.PI * 0.3;
		accretionDisk2.material.uniforms.uTime = { value: 0 };
		scene.add(accretionDisk2);

		// ═══════════════════════════════════════════════════════════════════════════
		// DNA HELIX PARTICLES
		// ═══════════════════════════════════════════════════════════════════════════
		const DNA_COUNT = 400;
		const dnaGeometry = new THREE.BufferGeometry();
		const dnaPositions = new Float32Array(DNA_COUNT * 3);
		const dnaColors = new Float32Array(DNA_COUNT * 3);
		const dnaSizes = new Float32Array(DNA_COUNT);
		const dnaPhases = new Float32Array(DNA_COUNT);

		const dnaColors1 = [
			new THREE.Color(0x38bdf8),
			new THREE.Color(0x22d3ee),
			new THREE.Color(0x06b6d4)
		];

		for (let i = 0; i < DNA_COUNT; i++) {
			const t = (i / DNA_COUNT) * Math.PI * 8;
			const radius = 60 + Math.sin(t * 2) * 15;
			const strand = i % 2;
			
			dnaPositions[i * 3] = Math.cos(t + strand * Math.PI) * radius;
			dnaPositions[i * 3 + 1] = (i / DNA_COUNT - 0.5) * 200;
			dnaPositions[i * 3 + 2] = Math.sin(t + strand * Math.PI) * radius;
			
			const color = dnaColors1[i % 3];
			dnaColors[i * 3] = color.r;
			dnaColors[i * 3 + 1] = color.g;
			dnaColors[i * 3 + 2] = color.b;
			
			dnaSizes[i] = Math.random() * 4 + 2;
			dnaPhases[i] = Math.random() * Math.PI * 2;
		}

		dnaGeometry.setAttribute('position', new THREE.BufferAttribute(dnaPositions, 3));
		dnaGeometry.setAttribute('color', new THREE.BufferAttribute(dnaColors, 3));
		dnaGeometry.setAttribute('size', new THREE.BufferAttribute(dnaSizes, 1));

		const dnaVertexShader = `
			attribute float size;
			varying vec3 vColor;
			uniform float uTime;
			
			void main() {
				vColor = color;
				vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
				gl_PointSize = size * (200.0 / -mvPosition.z) * (0.7 + 0.3 * sin(uTime * 3.0 + position.y * 0.05));
				gl_Position = projectionMatrix * mvPosition;
			}
		`;

		const dnaFragmentShader = `
			varying vec3 vColor;
			
			void main() {
				float dist = length(gl_PointCoord - vec2(0.5));
				if (dist > 0.5) discard;
				
				float alpha = 1.0 - smoothstep(0.2, 0.5, dist);
				vec3 glow = vColor * (1.5 - dist);
				
				gl_FragColor = vec4(glow, alpha * 0.6);
			}
		`;

		const dnaMaterial = new THREE.ShaderMaterial({
			vertexShader: dnaVertexShader,
			fragmentShader: dnaFragmentShader,
			uniforms: { uTime: { value: 0 } },
			transparent: true,
			vertexColors: true,
			blending: THREE.AdditiveBlending,
			depthWrite: false
		});

		const dnaHelix = new THREE.Points(dnaGeometry, dnaMaterial);
		scene.add(dnaHelix);

		// ═══════════════════════════════════════════════════════════════════════════
		// ORBITAL PARTICLE STREAMS
		// ═══════════════════════════════════════════════════════════════════════════
		const STREAM_COUNT = 2000;
		const streamGeometry = new THREE.BufferGeometry();
		const streamPositions = new Float32Array(STREAM_COUNT * 3);
		const streamColors = new Float32Array(STREAM_COUNT * 3);
		const streamSizes = new Float32Array(STREAM_COUNT);
		const streamData = [];

		const streamPalette = [
			new THREE.Color(0x38bdf8),
			new THREE.Color(0x818cf8),
			new THREE.Color(0xa78bfa),
			new THREE.Color(0x22d3ee),
			new THREE.Color(0xf472b6),
			new THREE.Color(0x34d399)
		];

		for (let i = 0; i < STREAM_COUNT; i++) {
			const orbitRadius = 50 + Math.random() * 100;
			const orbitSpeed = (0.0003 + Math.random() * 0.001) * (Math.random() > 0.5 ? 1 : -1);
			const orbitTilt = (Math.random() - 0.5) * Math.PI * 0.6;
			const orbitPhase = Math.random() * Math.PI * 2;
			const verticalOffset = (Math.random() - 0.5) * 80;
			
			streamData.push({ orbitRadius, orbitSpeed, orbitTilt, orbitPhase, verticalOffset, angle: orbitPhase });
			
			streamPositions[i * 3] = Math.cos(orbitPhase) * orbitRadius;
			streamPositions[i * 3 + 1] = verticalOffset + Math.sin(orbitTilt) * Math.sin(orbitPhase) * orbitRadius * 0.3;
			streamPositions[i * 3 + 2] = Math.sin(orbitPhase) * orbitRadius;
			
			const color = streamPalette[Math.floor(Math.random() * streamPalette.length)];
			streamColors[i * 3] = color.r;
			streamColors[i * 3 + 1] = color.g;
			streamColors[i * 3 + 2] = color.b;
			
			streamSizes[i] = Math.random() * 3 + 1;
		}

		streamGeometry.setAttribute('position', new THREE.BufferAttribute(streamPositions, 3));
		streamGeometry.setAttribute('color', new THREE.BufferAttribute(streamColors, 3));
		streamGeometry.setAttribute('size', new THREE.BufferAttribute(streamSizes, 1));

		const streamVertexShader = `
			attribute float size;
			varying vec3 vColor;
			varying float vAlpha;
			uniform float uTime;
			
			void main() {
				vColor = color;
				vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
				float dist = length(position);
				vAlpha = smoothstep(150.0, 50.0, dist);
				gl_PointSize = size * (250.0 / -mvPosition.z) * (0.6 + 0.4 * sin(uTime * 2.0 + position.x * 0.1));
				gl_Position = projectionMatrix * mvPosition;
			}
		`;

		const streamFragmentShader = `
			varying vec3 vColor;
			varying float vAlpha;
			
			void main() {
				float dist = length(gl_PointCoord - vec2(0.5));
				if (dist > 0.5) discard;
				
				float core = 1.0 - smoothstep(0.0, 0.2, dist);
				float glow = 1.0 - smoothstep(0.0, 0.5, dist);
				
				vec3 finalColor = vColor * (core * 2.0 + glow);
				float alpha = glow * 0.5 * vAlpha;
				
				gl_FragColor = vec4(finalColor, alpha);
			}
		`;

		const streamMaterial = new THREE.ShaderMaterial({
			vertexShader: streamVertexShader,
			fragmentShader: streamFragmentShader,
			uniforms: { uTime: { value: 0 } },
			transparent: true,
			vertexColors: true,
			blending: THREE.AdditiveBlending,
			depthWrite: false
		});

		const particleStreams = new THREE.Points(streamGeometry, streamMaterial);
		scene.add(particleStreams);

		// ═══════════════════════════════════════════════════════════════════════════
		// ENERGY PULSE WAVES
		// ═══════════════════════════════════════════════════════════════════════════
		const pulseWaves = [];
		const createPulseWave = (delay) => {
			const pulseGeometry = new THREE.RingGeometry(0.1, 2, 64);
			const pulseMaterial = new THREE.MeshBasicMaterial({
				color: 0x38bdf8,
				transparent: true,
				opacity: 0.6,
				side: THREE.DoubleSide,
				blending: THREE.AdditiveBlending
			});
			const pulse = new THREE.Mesh(pulseGeometry, pulseMaterial);
			pulse.userData = { 
				scale: 0.1, 
				maxScale: 120, 
				speed: 0.8,
				delay,
				currentDelay: delay
			};
			scene.add(pulse);
			return pulse;
		};

		for (let i = 0; i < 4; i++) {
			pulseWaves.push(createPulseWave(i * 1.5));
		}

		// ═══════════════════════════════════════════════════════════════════════════
		// FLOATING HOLOGRAPHIC SHAPES
		// ═══════════════════════════════════════════════════════════════════════════
		const holoShapes = [];
		const holoGeometries = [
			new THREE.OctahedronGeometry(8, 0),
			new THREE.IcosahedronGeometry(7, 0),
			new THREE.TetrahedronGeometry(9, 0),
			new THREE.TorusGeometry(6, 2, 8, 16),
			new THREE.TorusKnotGeometry(5, 1.5, 64, 8, 2, 3)
		];

		for (let i = 0; i < 12; i++) {
			const geometry = holoGeometries[i % holoGeometries.length];
			const hue = (i / 12) * 0.3 + 0.5;
			const material = new THREE.MeshBasicMaterial({
				color: new THREE.Color().setHSL(hue, 0.8, 0.6),
				wireframe: true,
				transparent: true,
				opacity: 0.15
			});
			const mesh = new THREE.Mesh(geometry, material);
			
			const angle = (i / 12) * Math.PI * 2;
			const radius = 90 + Math.random() * 40;
			mesh.position.x = Math.cos(angle) * radius;
			mesh.position.y = (Math.random() - 0.5) * 60;
			mesh.position.z = Math.sin(angle) * radius;
			
			mesh.userData = {
				angle,
				radius,
				orbitSpeed: 0.0001 + Math.random() * 0.0002,
				rotSpeed: {
					x: (Math.random() - 0.5) * 0.015,
					y: (Math.random() - 0.5) * 0.015,
					z: (Math.random() - 0.5) * 0.015
				},
				floatSpeed: 0.5 + Math.random() * 0.5,
				floatOffset: Math.random() * Math.PI * 2
			};
			
			scene.add(mesh);
			holoShapes.push(mesh);
		}

		// ═══════════════════════════════════════════════════════════════════════════
		// LIGHT RAYS / GOD RAYS
		// ═══════════════════════════════════════════════════════════════════════════
		const rayCount = 8;
		const rays = [];
		
		for (let i = 0; i < rayCount; i++) {
			const rayGeometry = new THREE.PlaneGeometry(3, 300);
			const rayMaterial = new THREE.MeshBasicMaterial({
				color: i % 2 === 0 ? 0x38bdf8 : 0x8b5cf6,
				transparent: true,
				opacity: 0.03,
				side: THREE.DoubleSide,
				blending: THREE.AdditiveBlending
			});
			const ray = new THREE.Mesh(rayGeometry, rayMaterial);
			ray.rotation.z = (i / rayCount) * Math.PI;
			ray.userData = { baseRotation: (i / rayCount) * Math.PI };
			scene.add(ray);
			rays.push(ray);
		}

		// ═══════════════════════════════════════════════════════════════════════════
		// EVENT HANDLERS
		// ═══════════════════════════════════════════════════════════════════════════
		const onMouseMove = (e) => {
			targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
			targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
		};
		window.addEventListener('mousemove', onMouseMove);

		const onResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener('resize', onResize);

		// ═══════════════════════════════════════════════════════════════════════════
		// ANIMATION LOOP
		// ═══════════════════════════════════════════════════════════════════════════
		const clock = new THREE.Clock();

		const animate = () => {
			animId = requestAnimationFrame(animate);
			const time = clock.getElapsedTime();
			const delta = clock.getDelta();

			// Smooth mouse
			mouse.x += (targetMouse.x - mouse.x) * 0.05;
			mouse.y += (targetMouse.y - mouse.y) * 0.05;

			// Update blackhole
			blackholeMaterial.uniforms.uTime.value = time;
			blackholeMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y);
			blackhole.rotation.y = time * 0.05 + mouse.x * 0.2;
			blackhole.rotation.x = Math.sin(time * 0.1) * 0.1 + mouse.y * 0.15;

			// Update accretion disks
			accretionMaterial.uniforms.uTime.value = time;
			accretionDisk.rotation.z = time * 0.2;
			accretionDisk2.material.uniforms.uTime.value = time;
			accretionDisk2.rotation.z = -time * 0.15;

			// Update DNA helix
			dnaMaterial.uniforms.uTime.value = time;
			dnaHelix.rotation.y = time * 0.1;
			const dnaPos = dnaGeometry.attributes.position.array;
			for (let i = 0; i < DNA_COUNT; i++) {
				const t = (i / DNA_COUNT) * Math.PI * 8 + time * 0.5;
				const radius = 60 + Math.sin(t * 2 + time) * 15;
				const strand = i % 2;
				dnaPos[i * 3] = Math.cos(t + strand * Math.PI) * radius;
				dnaPos[i * 3 + 2] = Math.sin(t + strand * Math.PI) * radius;
			}
			dnaGeometry.attributes.position.needsUpdate = true;

			// Update particle streams
			streamMaterial.uniforms.uTime.value = time;
			const streamPos = streamGeometry.attributes.position.array;
			for (let i = 0; i < STREAM_COUNT; i++) {
				const data = streamData[i];
				data.angle += data.orbitSpeed;
				
				const x = Math.cos(data.angle) * data.orbitRadius;
				const z = Math.sin(data.angle) * data.orbitRadius;
				const y = data.verticalOffset + Math.sin(data.orbitTilt) * Math.sin(data.angle) * data.orbitRadius * 0.3;
				
				// Mouse attraction
				const dx = mouse.x * 50 - x;
				const dy = mouse.y * 50 - y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				const attraction = Math.max(0, 1 - dist / 100) * 0.3;
				
				streamPos[i * 3] = x + dx * attraction;
				streamPos[i * 3 + 1] = y + dy * attraction;
				streamPos[i * 3 + 2] = z;
			}
			streamGeometry.attributes.position.needsUpdate = true;

			// Update pulse waves
			pulseWaves.forEach(pulse => {
				if (pulse.userData.currentDelay > 0) {
					pulse.userData.currentDelay -= delta;
					pulse.visible = false;
				} else {
					pulse.visible = true;
					pulse.userData.scale += pulse.userData.speed;
					pulse.scale.set(pulse.userData.scale, pulse.userData.scale, 1);
					pulse.material.opacity = 0.4 * (1 - pulse.userData.scale / pulse.userData.maxScale);
					
					if (pulse.userData.scale >= pulse.userData.maxScale) {
						pulse.userData.scale = 0.1;
						pulse.userData.currentDelay = pulse.userData.delay;
					}
				}
			});

			// Update holographic shapes
			holoShapes.forEach(shape => {
				shape.userData.angle += shape.userData.orbitSpeed;
				shape.position.x = Math.cos(shape.userData.angle) * shape.userData.radius;
				shape.position.z = Math.sin(shape.userData.angle) * shape.userData.radius;
				shape.position.y += Math.sin(time * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.03;
				
				shape.rotation.x += shape.userData.rotSpeed.x;
				shape.rotation.y += shape.userData.rotSpeed.y;
				shape.rotation.z += shape.userData.rotSpeed.z;
			});

			// Update light rays
			rays.forEach((ray, i) => {
				ray.rotation.z = ray.userData.baseRotation + time * 0.02 + Math.sin(time * 0.5 + i) * 0.1;
				ray.material.opacity = 0.02 + Math.sin(time * 2 + i * 0.5) * 0.01;
			});

			// Camera movement
			camera.position.x += (mouse.x * 15 - camera.position.x) * 0.02;
			camera.position.y += (mouse.y * 10 - camera.position.y) * 0.02;
			camera.lookAt(0, 0, 0);

			renderer.render(scene, camera);
		};

		animate();

		// ═══════════════════════════════════════════════════════════════════════════
		// CLEANUP
		// ═══════════════════════════════════════════════════════════════════════════
		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('resize', onResize);

			blackholeGeometry.dispose();
			blackholeMaterial.dispose();
			accretionGeometry.dispose();
			accretionMaterial.dispose();
			dnaGeometry.dispose();
			dnaMaterial.dispose();
			streamGeometry.dispose();
			streamMaterial.dispose();
			
			pulseWaves.forEach(p => { p.geometry.dispose(); p.material.dispose(); });
			holoShapes.forEach(s => { s.geometry.dispose(); s.material.dispose(); });
			rays.forEach(r => { r.geometry.dispose(); r.material.dispose(); });

			renderer.dispose();
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="absolute inset-0 w-full h-full z-0"
	style="display: block;"
></canvas>
