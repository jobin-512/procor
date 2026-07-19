<!-- HeroWebGLInsane — Ultra-premium WebGL background with shaders, morphing geometry, energy waves -->
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
		const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.z = 50;

		const renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
			antialias: true,
			powerPreference: 'high-performance'
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0);

		// Mouse tracking
		let mouse = { x: 0, y: 0 };
		let targetMouse = { x: 0, y: 0 };

		// ═══════════════════════════════════════════════════════════════════════════
		// CUSTOM SHADERS
		// ═══════════════════════════════════════════════════════════════════════════
		
		// Vertex shader for morphing sphere
		const morphVertexShader = `
			uniform float uTime;
			uniform float uMorph;
			uniform vec2 uMouse;
			varying vec2 vUv;
			varying vec3 vNormal;
			varying float vDisplacement;
			
			// Simplex noise function
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
				vec4 x = x_ *ns.x + ns.yyyy;
				vec4 y = y_ *ns.x + ns.yyyy;
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
				p0 *= norm.x;
				p1 *= norm.y;
				p2 *= norm.z;
				p3 *= norm.w;
				vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
				m = m * m;
				return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
			}
			
			void main() {
				vUv = uv;
				vNormal = normal;
				
				vec3 pos = position;
				
				// Multi-layered noise for organic movement
				float noise1 = snoise(pos * 0.5 + uTime * 0.3) * 2.0;
				float noise2 = snoise(pos * 1.0 + uTime * 0.5) * 1.0;
				float noise3 = snoise(pos * 2.0 + uTime * 0.7) * 0.5;
				
				float displacement = (noise1 + noise2 + noise3) * uMorph;
				
				// Mouse influence
				float mouseInfluence = 1.0 - smoothstep(0.0, 0.5, length(uMouse));
				displacement += mouseInfluence * sin(uTime * 3.0 + length(pos) * 2.0) * 0.5;
				
				vDisplacement = displacement;
				
				pos += normal * displacement;
				
				gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
			}
		`;

		// Fragment shader for morphing sphere
		const morphFragmentShader = `
			uniform float uTime;
			uniform vec3 uColor1;
			uniform vec3 uColor2;
			uniform vec3 uColor3;
			varying vec2 vUv;
			varying vec3 vNormal;
			varying float vDisplacement;
			
			void main() {
				// Dynamic gradient based on displacement and time
				float mixFactor = (vDisplacement + 2.0) / 4.0;
				mixFactor = clamp(mixFactor, 0.0, 1.0);
				
				vec3 color = mix(uColor1, uColor2, mixFactor);
				color = mix(color, uColor3, sin(uTime * 0.5 + vUv.y * 3.14159) * 0.5 + 0.5);
				
				// Fresnel effect for edge glow
				vec3 viewDirection = normalize(cameraPosition);
				float fresnel = pow(1.0 - max(dot(viewDirection, vNormal), 0.0), 3.0);
				color += fresnel * vec3(0.3, 0.6, 1.0) * 0.5;
				
				// Pulsing alpha
				float alpha = 0.15 + fresnel * 0.3 + sin(uTime * 2.0) * 0.05;
				
				gl_FragColor = vec4(color, alpha);
			}
		`;

		// ═══════════════════════════════════════════════════════════════════════════
		// MORPHING CENTRAL SPHERE
		// ═══════════════════════════════════════════════════════════════════════════
		const sphereGeometry = new THREE.IcosahedronGeometry(15, 64);
		const sphereMaterial = new THREE.ShaderMaterial({
			vertexShader: morphVertexShader,
			fragmentShader: morphFragmentShader,
			uniforms: {
				uTime: { value: 0 },
				uMorph: { value: 1.5 },
				uMouse: { value: new THREE.Vector2(0, 0) },
				uColor1: { value: new THREE.Color(0x0ea5e9) }, // sky-500
				uColor2: { value: new THREE.Color(0x253BDA) }, // procor blue
				uColor3: { value: new THREE.Color(0x3B5BFF) }  // procor blue light
			},
			transparent: true,
			side: THREE.DoubleSide,
			depthWrite: false,
			blending: THREE.AdditiveBlending
		});
		const morphSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
		scene.add(morphSphere);

		// ═══════════════════════════════════════════════════════════════════════════
		// PARTICLE SYSTEM WITH TRAILS
		// ═══════════════════════════════════════════════════════════════════════════
		const PARTICLE_COUNT = 1500;
		const particleGeometry = new THREE.BufferGeometry();
		const positions = new Float32Array(PARTICLE_COUNT * 3);
		const velocities = new Float32Array(PARTICLE_COUNT * 3);
		const colors = new Float32Array(PARTICLE_COUNT * 3);
		const sizes = new Float32Array(PARTICLE_COUNT);
		const phases = new Float32Array(PARTICLE_COUNT);

		const palette = [
			new THREE.Color(0x38bdf8), // sky-400
			new THREE.Color(0x60a5fa), // blue-400
			new THREE.Color(0x253BDA), // procor blue
			new THREE.Color(0x3B5BFF), // procor blue light
			new THREE.Color(0x1A2BA0)  // procor blue dark
		];

		for (let i = 0; i < PARTICLE_COUNT; i++) {
			const i3 = i * 3;
			
			// Spherical distribution with bias toward center
			const radius = Math.pow(Math.random(), 0.5) * 80;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);
			
			positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
			positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
			positions[i3 + 2] = radius * Math.cos(phi);

			// Orbital velocities
			velocities[i3] = (Math.random() - 0.5) * 0.02;
			velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
			velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;

			const color = palette[Math.floor(Math.random() * palette.length)];
			colors[i3] = color.r;
			colors[i3 + 1] = color.g;
			colors[i3 + 2] = color.b;

			sizes[i] = Math.random() * 3 + 1;
			phases[i] = Math.random() * Math.PI * 2;
		}

		particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
		particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

		// Custom particle shader with glow
		const particleVertexShader = `
			attribute float size;
			varying vec3 vColor;
			uniform float uTime;
			
			void main() {
				vColor = color;
				vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
				gl_PointSize = size * (300.0 / -mvPosition.z) * (0.8 + 0.2 * sin(uTime * 2.0 + position.x));
				gl_Position = projectionMatrix * mvPosition;
			}
		`;

		const particleFragmentShader = `
			varying vec3 vColor;
			
			void main() {
				float dist = length(gl_PointCoord - vec2(0.5));
				if (dist > 0.5) discard;
				
				float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
				alpha = pow(alpha, 1.5);
				
				// Glow effect
				vec3 glow = vColor * (1.0 + pow(1.0 - dist * 2.0, 2.0) * 0.5);
				
				gl_FragColor = vec4(glow, alpha * 0.7);
			}
		`;

		const particleMaterial = new THREE.ShaderMaterial({
			vertexShader: particleVertexShader,
			fragmentShader: particleFragmentShader,
			uniforms: {
				uTime: { value: 0 }
			},
			transparent: true,
			vertexColors: true,
			blending: THREE.AdditiveBlending,
			depthWrite: false
		});

		const particles = new THREE.Points(particleGeometry, particleMaterial);
		scene.add(particles);

		// ═══════════════════════════════════════════════════════════════════════════
		// ENERGY RINGS
		// ═══════════════════════════════════════════════════════════════════════════
		const ringShaderVertex = `
			varying vec2 vUv;
			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
			}
		`;

		const ringShaderFragment = `
			uniform float uTime;
			uniform vec3 uColor;
			varying vec2 vUv;
			
			void main() {
				float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
				float dist = length(vUv - 0.5);
				
				// Ring pattern
				float ring = smoothstep(0.48, 0.5, dist) * smoothstep(0.52, 0.5, dist);
				
				// Animated segments
				float segments = sin(angle * 8.0 + uTime * 2.0) * 0.5 + 0.5;
				float pulse = sin(uTime * 3.0) * 0.3 + 0.7;
				
				float alpha = ring * segments * pulse;
				
				gl_FragColor = vec4(uColor, alpha * 0.4);
			}
		`;

		const rings = [];
		const ringConfigs = [
			{ radius: 25, color: 0x38bdf8, rotationSpeed: 0.001 },
			{ radius: 32, color: 0x8b5cf6, rotationSpeed: -0.0015 },
			{ radius: 40, color: 0x6366f1, rotationSpeed: 0.0008 }
		];

		ringConfigs.forEach(config => {
			const ringGeometry = new THREE.RingGeometry(config.radius - 0.3, config.radius + 0.3, 128);
			const ringMaterial = new THREE.ShaderMaterial({
				vertexShader: ringShaderVertex,
				fragmentShader: ringShaderFragment,
				uniforms: {
					uTime: { value: 0 },
					uColor: { value: new THREE.Color(config.color) }
				},
				transparent: true,
				side: THREE.DoubleSide,
				depthWrite: false,
				blending: THREE.AdditiveBlending
			});
			const ring = new THREE.Mesh(ringGeometry, ringMaterial);
			ring.rotation.x = Math.PI * 0.5 + Math.random() * 0.3;
			ring.rotation.y = Math.random() * Math.PI;
			ring.userData = { rotationSpeed: config.rotationSpeed };
			scene.add(ring);
			rings.push(ring);
		});

		// ═══════════════════════════════════════════════════════════════════════════
		// FLOATING GEOMETRIC WIREFRAMES
		// ═══════════════════════════════════════════════════════════════════════════
		const wireframes = [];
		const geometries = [
			new THREE.OctahedronGeometry(5, 0),
			new THREE.TetrahedronGeometry(4, 0),
			new THREE.IcosahedronGeometry(4, 0),
			new THREE.DodecahedronGeometry(4, 0)
		];

		for (let i = 0; i < 8; i++) {
			const geometry = geometries[i % geometries.length];
			const material = new THREE.MeshBasicMaterial({
				color: palette[i % palette.length],
				wireframe: true,
				transparent: true,
				opacity: 0.15
			});
			const mesh = new THREE.Mesh(geometry, material);
			
			const angle = (i / 8) * Math.PI * 2;
			const radius = 45 + Math.random() * 20;
			mesh.position.x = Math.cos(angle) * radius;
			mesh.position.y = (Math.random() - 0.5) * 30;
			mesh.position.z = Math.sin(angle) * radius;
			
			mesh.userData = {
				orbitAngle: angle,
				orbitRadius: radius,
				orbitSpeed: 0.0002 + Math.random() * 0.0003,
				rotationSpeed: {
					x: (Math.random() - 0.5) * 0.01,
					y: (Math.random() - 0.5) * 0.01,
					z: (Math.random() - 0.5) * 0.01
				},
				floatOffset: Math.random() * Math.PI * 2
			};
			
			scene.add(mesh);
			wireframes.push(mesh);
		}

		// ═══════════════════════════════════════════════════════════════════════════
		// CONNECTION LINES BETWEEN PARTICLES
		// ═══════════════════════════════════════════════════════════════════════════
		const CONNECTION_DISTANCE = 15;
		const MAX_CONNECTIONS = 500;
		const lineGeometry = new THREE.BufferGeometry();
		const linePositions = new Float32Array(MAX_CONNECTIONS * 6);
		const lineColors = new Float32Array(MAX_CONNECTIONS * 6);
		lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
		lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

		const lineMaterial = new THREE.LineBasicMaterial({
			vertexColors: true,
			transparent: true,
			opacity: 0.3,
			blending: THREE.AdditiveBlending,
			depthWrite: false
		});

		const connections = new THREE.LineSegments(lineGeometry, lineMaterial);
		scene.add(connections);

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

			// Smooth mouse following
			mouse.x += (targetMouse.x - mouse.x) * 0.05;
			mouse.y += (targetMouse.y - mouse.y) * 0.05;

			// Update morphing sphere
			sphereMaterial.uniforms.uTime.value = time;
			sphereMaterial.uniforms.uMouse.value.set(mouse.x, mouse.y);
			morphSphere.rotation.y = time * 0.1 + mouse.x * 0.3;
			morphSphere.rotation.x = Math.sin(time * 0.2) * 0.1 + mouse.y * 0.2;

			// Update particles
			particleMaterial.uniforms.uTime.value = time;
			const pos = particleGeometry.attributes.position.array;
			
			for (let i = 0; i < PARTICLE_COUNT; i++) {
				const i3 = i * 3;
				
				// Orbital motion
				const x = pos[i3];
				const y = pos[i3 + 1];
				const z = pos[i3 + 2];
				const dist = Math.sqrt(x * x + y * y + z * z);
				
				// Rotate around center
				const speed = 0.0005 + (1 / (dist + 1)) * 0.001;
				const angle = Math.atan2(z, x) + speed;
				pos[i3] = Math.cos(angle) * Math.sqrt(x * x + z * z);
				pos[i3 + 2] = Math.sin(angle) * Math.sqrt(x * x + z * z);
				
				// Vertical oscillation
				pos[i3 + 1] += Math.sin(time + phases[i]) * 0.02;
				
				// Mouse attraction/repulsion
				const dx = mouse.x * 30 - pos[i3];
				const dy = mouse.y * 30 - pos[i3 + 1];
				const mouseDist = Math.sqrt(dx * dx + dy * dy);
				if (mouseDist < 30) {
					const force = (1 - mouseDist / 30) * 0.1;
					pos[i3] += dx * force * 0.1;
					pos[i3 + 1] += dy * force * 0.1;
				}
			}
			particleGeometry.attributes.position.needsUpdate = true;

			// Update rings
			rings.forEach(ring => {
				ring.material.uniforms.uTime.value = time;
				ring.rotation.z += ring.userData.rotationSpeed;
				ring.rotation.x += Math.sin(time * 0.5) * 0.001;
			});

			// Update wireframes
			wireframes.forEach(mesh => {
				mesh.userData.orbitAngle += mesh.userData.orbitSpeed;
				mesh.position.x = Math.cos(mesh.userData.orbitAngle) * mesh.userData.orbitRadius;
				mesh.position.z = Math.sin(mesh.userData.orbitAngle) * mesh.userData.orbitRadius;
				mesh.position.y += Math.sin(time * 0.5 + mesh.userData.floatOffset) * 0.02;
				
				mesh.rotation.x += mesh.userData.rotationSpeed.x;
				mesh.rotation.y += mesh.userData.rotationSpeed.y;
				mesh.rotation.z += mesh.userData.rotationSpeed.z;
			});

			// Update connection lines
			let lineIdx = 0;
			const lp = lineGeometry.attributes.position.array;
			const lc = lineGeometry.attributes.color.array;
			
			for (let i = 0; i < PARTICLE_COUNT && lineIdx < MAX_CONNECTIONS; i += 3) {
				for (let j = i + 1; j < PARTICLE_COUNT && lineIdx < MAX_CONNECTIONS; j += 3) {
					const i3 = i * 3;
					const j3 = j * 3;
					const dx = pos[i3] - pos[j3];
					const dy = pos[i3 + 1] - pos[j3 + 1];
					const dz = pos[i3 + 2] - pos[j3 + 2];
					const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

					if (dist < CONNECTION_DISTANCE) {
						const alpha = 1 - dist / CONNECTION_DISTANCE;
						const l6 = lineIdx * 6;
						
						lp[l6] = pos[i3];
						lp[l6 + 1] = pos[i3 + 1];
						lp[l6 + 2] = pos[i3 + 2];
						lp[l6 + 3] = pos[j3];
						lp[l6 + 4] = pos[j3 + 1];
						lp[l6 + 5] = pos[j3 + 2];

						const c = alpha * 0.5;
						lc[l6] = 0.22 * c;
						lc[l6 + 1] = 0.74 * c;
						lc[l6 + 2] = 0.97 * c;
						lc[l6 + 3] = 0.55 * c;
						lc[l6 + 4] = 0.36 * c;
						lc[l6 + 5] = 0.96 * c;

						lineIdx++;
					}
				}
			}
			
			// Zero out remaining
			for (let i = lineIdx * 6; i < MAX_CONNECTIONS * 6; i++) {
				lp[i] = 0;
				lc[i] = 0;
			}
			lineGeometry.attributes.position.needsUpdate = true;
			lineGeometry.attributes.color.needsUpdate = true;
			lineGeometry.setDrawRange(0, lineIdx * 2);

			// Camera subtle movement
			camera.position.x += (mouse.x * 5 - camera.position.x) * 0.02;
			camera.position.y += (mouse.y * 3 - camera.position.y) * 0.02;
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

			// Dispose geometries and materials
			sphereGeometry.dispose();
			sphereMaterial.dispose();
			particleGeometry.dispose();
			particleMaterial.dispose();
			lineGeometry.dispose();
			lineMaterial.dispose();
			
			rings.forEach(ring => {
				ring.geometry.dispose();
				ring.material.dispose();
			});
			
			wireframes.forEach(mesh => {
				mesh.geometry.dispose();
				mesh.material.dispose();
			});

			renderer.dispose();
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="absolute inset-0 w-full h-full z-0"
	style="display: block;"
></canvas>
