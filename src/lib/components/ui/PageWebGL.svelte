<!-- PageWebGL — Reusable WebGL background with customizable themes -->
<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	let { 
		theme = 'default', 
		intensity = 1,
		particleCount = 1000,
		enableMouse = true
	} = $props();

	let canvas = $state(null);
	let animId = 0;

	const themes = {
		default: {
			colors: [0x38bdf8, 0x8b5cf6, 0x6366f1, 0x22d3ee],
			bgGradient: [0x0ea5e9, 0x8b5cf6],
			coreColor: 0x6366f1
		},
		blue: {
			colors: [0x253BDA, 0x3B5BFF, 0x4A6BFF, 0x1A2BA0],
			bgGradient: [0x253BDA, 0x1A2BA0],
			coreColor: 0x253BDA
		},
		violet: {
			colors: [0x8b5cf6, 0xa855f7, 0xc084fc, 0xe879f9],
			bgGradient: [0x8b5cf6, 0xc026d3],
			coreColor: 0xa855f7
		},
		emerald: {
			colors: [0x10b981, 0x34d399, 0x6ee7b7, 0x22d3ee],
			bgGradient: [0x10b981, 0x06b6d4],
			coreColor: 0x10b981
		},
		rose: {
			colors: [0xf43f5e, 0xec4899, 0xf472b6, 0xfb7185],
			bgGradient: [0xf43f5e, 0xec4899],
			coreColor: 0xf43f5e
		},
		amber: {
			colors: [0xf59e0b, 0xfbbf24, 0xfcd34d, 0xfde68a],
			bgGradient: [0xf59e0b, 0xef4444],
			coreColor: 0xf59e0b
		},
		cyan: {
			colors: [0x06b6d4, 0x22d3ee, 0x67e8f9, 0x38bdf8],
			bgGradient: [0x06b6d4, 0x0ea5e9],
			coreColor: 0x06b6d4
		}
	};

	onMount(() => {
		if (!canvas) return;

		const currentTheme = themes[theme] || themes.default;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.z = 80;

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
		// MORPHING CORE
		// ═══════════════════════════════════════════════════════════════════════════
		const coreVertexShader = `
			uniform float uTime;
			uniform vec2 uMouse;
			varying vec3 vPosition;
			varying vec3 vNormal;
			varying float vNoise;
			
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
				vPosition = position;
				vNormal = normal;
				
				float noise = snoise(position * 0.05 + uTime * 0.2) * 4.0;
				noise += snoise(position * 0.1 + uTime * 0.3) * 2.0;
				noise += snoise(position * 0.2 + uTime * 0.4) * 1.0;
				
				float mouseEffect = sin(length(position.xy - uMouse * 30.0) * 0.1 - uTime * 2.0) * 2.0;
				mouseEffect *= smoothstep(60.0, 0.0, length(position.xy - uMouse * 30.0));
				
				vNoise = noise + mouseEffect;
				vec3 newPosition = position + normal * (noise + mouseEffect) * 0.5;
				
				gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
			}
		`;

		const coreFragmentShader = `
			uniform float uTime;
			uniform vec3 uColor1;
			uniform vec3 uColor2;
			varying vec3 vPosition;
			varying vec3 vNormal;
			varying float vNoise;
			
			void main() {
				float mixFactor = (vNoise + 3.0) / 6.0;
				vec3 color = mix(uColor1, uColor2, mixFactor);
				
				float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 2.0);
				color += fresnel * uColor2 * 0.5;
				
				float alpha = 0.08 + fresnel * 0.15;
				gl_FragColor = vec4(color, alpha);
			}
		`;

		const coreGeometry = new THREE.IcosahedronGeometry(20 * intensity, 64);
		const coreMaterial = new THREE.ShaderMaterial({
			vertexShader: coreVertexShader,
			fragmentShader: coreFragmentShader,
			uniforms: {
				uTime: { value: 0 },
				uMouse: { value: new THREE.Vector2(0, 0) },
				uColor1: { value: new THREE.Color(currentTheme.bgGradient[0]) },
				uColor2: { value: new THREE.Color(currentTheme.bgGradient[1]) }
			},
			transparent: true,
			side: THREE.DoubleSide,
			depthWrite: false,
			blending: THREE.AdditiveBlending
		});
		const core = new THREE.Mesh(coreGeometry, coreMaterial);
		scene.add(core);

		// ═══════════════════════════════════════════════════════════════════════════
		// PARTICLE FIELD
		// ═══════════════════════════════════════════════════════════════════════════
		const particleGeometry = new THREE.BufferGeometry();
		const positions = new Float32Array(particleCount * 3);
		const colors = new Float32Array(particleCount * 3);
		const sizes = new Float32Array(particleCount);
		const particleData = [];

		for (let i = 0; i < particleCount; i++) {
			const radius = 30 + Math.random() * 70;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);
			
			positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
			positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
			positions[i * 3 + 2] = radius * Math.cos(phi);

			const color = new THREE.Color(currentTheme.colors[Math.floor(Math.random() * currentTheme.colors.length)]);
			colors[i * 3] = color.r;
			colors[i * 3 + 1] = color.g;
			colors[i * 3 + 2] = color.b;

			sizes[i] = Math.random() * 3 + 1;
			
			particleData.push({
				angle: theta,
				radius,
				speed: 0.0003 + Math.random() * 0.0005,
				yOffset: (Math.random() - 0.5) * 2
			});
		}

		particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
		particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

		const particleVertexShader = `
			attribute float size;
			varying vec3 vColor;
			uniform float uTime;
			
			void main() {
				vColor = color;
				vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
				gl_PointSize = size * (200.0 / -mvPosition.z) * (0.7 + 0.3 * sin(uTime + position.x * 0.1));
				gl_Position = projectionMatrix * mvPosition;
			}
		`;

		const particleFragmentShader = `
			varying vec3 vColor;
			
			void main() {
				float dist = length(gl_PointCoord - vec2(0.5));
				if (dist > 0.5) discard;
				float alpha = 1.0 - smoothstep(0.1, 0.5, dist);
				gl_FragColor = vec4(vColor * 1.5, alpha * 0.6);
			}
		`;

		const particleMaterial = new THREE.ShaderMaterial({
			vertexShader: particleVertexShader,
			fragmentShader: particleFragmentShader,
			uniforms: { uTime: { value: 0 } },
			transparent: true,
			vertexColors: true,
			blending: THREE.AdditiveBlending,
			depthWrite: false
		});

		const particles = new THREE.Points(particleGeometry, particleMaterial);
		scene.add(particles);

		// ═══════════════════════════════════════════════════════════════════════════
		// ORBITAL RINGS
		// ═══════════════════════════════════════════════════════════════════════════
		const rings = [];
		[35, 50, 65].forEach((radius, i) => {
			const ringGeometry = new THREE.TorusGeometry(radius, 0.3, 8, 128);
			const ringMaterial = new THREE.MeshBasicMaterial({
				color: currentTheme.colors[i % currentTheme.colors.length],
				transparent: true,
				opacity: 0.1,
				blending: THREE.AdditiveBlending
			});
			const ring = new THREE.Mesh(ringGeometry, ringMaterial);
			ring.rotation.x = Math.PI / 2 + (i - 1) * 0.3;
			ring.rotation.y = i * 0.5;
			ring.userData = { speed: 0.001 * (i + 1) * (i % 2 === 0 ? 1 : -1) };
			scene.add(ring);
			rings.push(ring);
		});

		// ═══════════════════════════════════════════════════════════════════════════
		// FLOATING GEOMETRIES
		// ═══════════════════════════════════════════════════════════════════════════
		const floatingShapes = [];
		const geometries = [
			new THREE.OctahedronGeometry(4),
			new THREE.TetrahedronGeometry(3.5),
			new THREE.IcosahedronGeometry(3),
		];

		for (let i = 0; i < 6; i++) {
			const geo = geometries[i % geometries.length];
			const mat = new THREE.MeshBasicMaterial({
				color: currentTheme.colors[i % currentTheme.colors.length],
				wireframe: true,
				transparent: true,
				opacity: 0.15
			});
			const mesh = new THREE.Mesh(geo, mat);
			const angle = (i / 6) * Math.PI * 2;
			const radius = 55 + Math.random() * 20;
			mesh.position.set(
				Math.cos(angle) * radius,
				(Math.random() - 0.5) * 40,
				Math.sin(angle) * radius
			);
			mesh.userData = {
				angle,
				radius,
				orbitSpeed: 0.0002 + Math.random() * 0.0002,
				rotSpeed: { x: Math.random() * 0.01, y: Math.random() * 0.01, z: Math.random() * 0.01 },
				floatOffset: Math.random() * Math.PI * 2
			};
			scene.add(mesh);
			floatingShapes.push(mesh);
		}

		// ═══════════════════════════════════════════════════════════════════════════
		// EVENT HANDLERS
		// ═══════════════════════════════════════════════════════════════════════════
		const onMouseMove = (e) => {
			if (!enableMouse) return;
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

			mouse.x += (targetMouse.x - mouse.x) * 0.05;
			mouse.y += (targetMouse.y - mouse.y) * 0.05;

			// Update core
			coreMaterial.uniforms.uTime.value = time;
			coreMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y);
			core.rotation.y = time * 0.05;
			core.rotation.x = Math.sin(time * 0.1) * 0.1;

			// Update particles
			particleMaterial.uniforms.uTime.value = time;
			const pos = particleGeometry.attributes.position.array;
			for (let i = 0; i < particleCount; i++) {
				const data = particleData[i];
				data.angle += data.speed;
				pos[i * 3] = Math.cos(data.angle) * data.radius;
				pos[i * 3 + 2] = Math.sin(data.angle) * data.radius;
				pos[i * 3 + 1] += Math.sin(time + data.yOffset) * 0.01;
			}
			particleGeometry.attributes.position.needsUpdate = true;

			// Update rings
			rings.forEach(ring => {
				ring.rotation.z += ring.userData.speed;
			});

			// Update floating shapes
			floatingShapes.forEach(shape => {
				shape.userData.angle += shape.userData.orbitSpeed;
				shape.position.x = Math.cos(shape.userData.angle) * shape.userData.radius;
				shape.position.z = Math.sin(shape.userData.angle) * shape.userData.radius;
				shape.position.y += Math.sin(time * 0.5 + shape.userData.floatOffset) * 0.02;
				shape.rotation.x += shape.userData.rotSpeed.x;
				shape.rotation.y += shape.userData.rotSpeed.y;
			});

			// Camera
			camera.position.x += (mouse.x * 8 - camera.position.x) * 0.02;
			camera.position.y += (mouse.y * 5 - camera.position.y) * 0.02;
			camera.lookAt(0, 0, 0);

			renderer.render(scene, camera);
		};

		animate();

		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('resize', onResize);
			coreGeometry.dispose();
			coreMaterial.dispose();
			particleGeometry.dispose();
			particleMaterial.dispose();
			rings.forEach(r => { r.geometry.dispose(); r.material.dispose(); });
			floatingShapes.forEach(s => { s.geometry.dispose(); s.material.dispose(); });
			renderer.dispose();
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="fixed inset-0 w-full h-full pointer-events-none"
	style="z-index: 0;"
></canvas>
