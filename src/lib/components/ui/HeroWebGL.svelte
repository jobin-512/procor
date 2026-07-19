<!-- HeroWebGL — Three.js particle constellation + floating wireframe geometry -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';

	let canvas = $state(null);
	let animId = 0;

	const PARTICLE_COUNT = 600;
	const CONNECTION_DISTANCE = 150;
	const MOUSE_INFLUENCE_RADIUS = 200;
	const MOUSE_REPEL_STRENGTH = 0.8;

	onMount(() => {
		if (!canvas) return;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			60,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 400;

		const renderer = new THREE.WebGLRenderer({
			canvas,
			alpha: true,
			antialias: true,
			powerPreference: 'high-performance'
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0);

		// ── Particle Constellation ──
		const particleGeometry = new THREE.BufferGeometry();
		const positions = new Float32Array(PARTICLE_COUNT * 3);
		const velocities = new Float32Array(PARTICLE_COUNT * 3);
		const colors = new Float32Array(PARTICLE_COUNT * 3);
		const sizes = new Float32Array(PARTICLE_COUNT);

		const palette = [
			new THREE.Color(0x38bdf8), // sky
			new THREE.Color(0x253BDA), // procor blue
			new THREE.Color(0x3B5BFF), // procor blue light
			new THREE.Color(0x4A6BFF), // procor blue lighter
			new THREE.Color(0x1A2BA0) // procor blue dark
		];

		for (let i = 0; i < PARTICLE_COUNT; i++) {
			const i3 = i * 3;
			positions[i3] = (Math.random() - 0.5) * 1200;
			positions[i3 + 1] = (Math.random() - 0.5) * 800;
			positions[i3 + 2] = (Math.random() - 0.5) * 400;

			velocities[i3] = (Math.random() - 0.5) * 0.15;
			velocities[i3 + 1] = (Math.random() - 0.5) * 0.15;
			velocities[i3 + 2] = (Math.random() - 0.5) * 0.05;

			const color = palette[Math.floor(Math.random() * palette.length)];
			colors[i3] = color.r;
			colors[i3 + 1] = color.g;
			colors[i3 + 2] = color.b;

			sizes[i] = Math.random() * 2.5 + 1;
		}

		particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
		particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

		const particleMaterial = new THREE.PointsMaterial({
			size: 2.5,
			vertexColors: true,
			transparent: true,
			opacity: 0.7,
			blending: THREE.AdditiveBlending,
			depthWrite: false,
			sizeAttenuation: true
		});

		const particles = new THREE.Points(particleGeometry, particleMaterial);
		scene.add(particles);

		// ── Connection Lines ──
		const lineGeometry = new THREE.BufferGeometry();
		const maxLines = PARTICLE_COUNT * 6;
		const linePositions = new Float32Array(maxLines * 3);
		const lineColors = new Float32Array(maxLines * 3);
		lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
		lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

		const lineMaterial = new THREE.LineBasicMaterial({
			vertexColors: true,
			transparent: true,
			opacity: 0.3,
			blending: THREE.AdditiveBlending,
			depthWrite: false
		});

		const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
		scene.add(lines);

		// ── Floating Wireframe Geometry ──
		const torusGeometry = new THREE.TorusKnotGeometry(80, 25, 128, 16, 2, 3);
		const torusMaterial = new THREE.MeshBasicMaterial({
			color: 0x253BDA,
			wireframe: true,
			transparent: true,
			opacity: 0.08
		});
		const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
		torusKnot.position.set(250, 20, -50);
		scene.add(torusKnot);

		// Second geometry — smaller icosahedron
		const icoGeometry = new THREE.IcosahedronGeometry(50, 0);
		const icoMaterial = new THREE.MeshBasicMaterial({
			color: 0x3B5BFF,
			wireframe: true,
			transparent: true,
			opacity: 0.06
		});
		const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
		icosahedron.position.set(-280, -60, -30);
		scene.add(icosahedron);

		// ── Mouse Tracking ──
		let mouseX = 0;
		let mouseY = 0;
		let targetMouseX = 0;
		let targetMouseY = 0;

		const onMouseMove = (e) => {
			targetMouseX = (e.clientX - window.innerWidth / 2) * 0.5;
			targetMouseY = -(e.clientY - window.innerHeight / 2) * 0.5;
		};
		window.addEventListener('mousemove', onMouseMove);

		// ── Resize ──
		const onResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener('resize', onResize);

		// ── Render Loop ──
		let time = 0;
		const clock = new THREE.Clock();

		const animate = () => {
			animId = requestAnimationFrame(animate);
			const delta = clock.getDelta();
			time += delta;

			// Smooth mouse follow
			mouseX += (targetMouseX - mouseX) * 0.05;
			mouseY += (targetMouseY - mouseY) * 0.05;

			// Update particles
			const pos = particleGeometry.attributes.position.array;
			for (let i = 0; i < PARTICLE_COUNT; i++) {
				const i3 = i * 3;

				// Drift
				pos[i3] += velocities[i3];
				pos[i3 + 1] += velocities[i3 + 1];
				pos[i3 + 2] += velocities[i3 + 2];

				// Wrap around bounds
				if (pos[i3] > 600) pos[i3] = -600;
				if (pos[i3] < -600) pos[i3] = 600;
				if (pos[i3 + 1] > 400) pos[i3 + 1] = -400;
				if (pos[i3 + 1] < -400) pos[i3 + 1] = 400;

				// Mouse repulsion
				const dx = pos[i3] - mouseX;
				const dy = pos[i3 + 1] - mouseY;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < MOUSE_INFLUENCE_RADIUS && dist > 0) {
					const force = (1 - dist / MOUSE_INFLUENCE_RADIUS) * MOUSE_REPEL_STRENGTH;
					pos[i3] += (dx / dist) * force;
					pos[i3 + 1] += (dy / dist) * force;
				}
			}
			particleGeometry.attributes.position.needsUpdate = true;

			// Update connection lines
			let lineIdx = 0;
			const lp = lineGeometry.attributes.position.array;
			const lc = lineGeometry.attributes.color.array;
			for (let i = 0; i < PARTICLE_COUNT && lineIdx < maxLines; i++) {
				for (let j = i + 1; j < PARTICLE_COUNT && lineIdx < maxLines; j++) {
					const i3 = i * 3;
					const j3 = j * 3;
					const dx = pos[i3] - pos[j3];
					const dy = pos[i3 + 1] - pos[j3 + 1];
					const dz = pos[i3 + 2] - pos[j3 + 2];
					const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

					if (dist < CONNECTION_DISTANCE) {
						const alpha = 1 - dist / CONNECTION_DISTANCE;
						const l3 = lineIdx * 3;
						lp[l3] = pos[i3];
						lp[l3 + 1] = pos[i3 + 1];
						lp[l3 + 2] = pos[i3 + 2];
						lp[l3 + 3] = pos[j3];
						lp[l3 + 4] = pos[j3 + 1];
						lp[l3 + 5] = pos[j3 + 2];

						const lineColor = new THREE.Color(0x253BDA);
						lc[l3] = lineColor.r * alpha;
						lc[l3 + 1] = lineColor.g * alpha;
						lc[l3 + 2] = lineColor.b * alpha;
						lc[l3 + 3] = lineColor.r * alpha;
						lc[l3 + 4] = lineColor.g * alpha;
						lc[l3 + 5] = lineColor.b * alpha;

						lineIdx++;
					}
				}
			}
			// Zero out remaining
			for (let i = lineIdx * 3 * 2; i < maxLines * 3; i++) {
				lp[i] = 0;
				lc[i] = 0;
			}
			lineGeometry.attributes.position.needsUpdate = true;
			lineGeometry.attributes.color.needsUpdate = true;
			lineGeometry.setDrawRange(0, lineIdx * 2);

			// Rotate wireframe geometries
			torusKnot.rotation.x += 0.003;
			torusKnot.rotation.y += 0.002;
			torusKnot.rotation.z += 0.001;

			// Mouse-reactive tilt on torus
			torusKnot.rotation.x += (mouseY * 0.0002 - torusKnot.rotation.x * 0.01) * 0.02;
			torusKnot.rotation.y += (mouseX * 0.0002 - torusKnot.rotation.y * 0.01) * 0.02;

			icosahedron.rotation.x -= 0.004;
			icosahedron.rotation.y += 0.003;

			// Subtle camera sway
			camera.position.x += (mouseX * 0.05 - camera.position.x) * 0.02;
			camera.position.y += (mouseY * 0.05 - camera.position.y) * 0.02;
			camera.lookAt(0, 0, 0);

			renderer.render(scene, camera);
		};

		animate();

		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('resize', onResize);

			particleGeometry.dispose();
			particleMaterial.dispose();
			lineGeometry.dispose();
			lineMaterial.dispose();
			torusGeometry.dispose();
			torusMaterial.dispose();
			icoGeometry.dispose();
			icoMaterial.dispose();
			renderer.dispose();
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="absolute inset-0 w-full h-full z-0 pointer-events-none"
	style="display: block;"
></canvas>
