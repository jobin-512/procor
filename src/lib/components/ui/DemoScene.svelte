<!-- DemoScene — Three.js interactive 3D visualization for the demo page card -->
<script>
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';

	let canvas = $state(null);
	let animId = 0;

	onMount(() => {
		if (!canvas) return;

		const parent = canvas.parentElement;
		const width = parent.clientWidth;
		const height = parent.clientHeight;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
		camera.position.set(0, 0, 6);

		const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
		renderer.setSize(width, height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setClearColor(0x000000, 0);

		// ── Wireframe sphere ──
		const sphereGeo = new THREE.IcosahedronGeometry(1.8, 2);
		const sphereMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.25 });
		const sphere = new THREE.Mesh(sphereGeo, sphereMat);
		scene.add(sphere);

		// ── Inner wireframe icosahedron ──
		const innerGeo = new THREE.IcosahedronGeometry(1.0, 1);
		const innerMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, wireframe: true, transparent: true, opacity: 0.35 });
		const inner = new THREE.Mesh(innerGeo, innerMat);
		scene.add(inner);

		// ── Orbiting ring ──
		const ringGeo = new THREE.TorusGeometry(2.4, 0.02, 16, 100);
		const ringMat = new THREE.MeshBasicMaterial({ color: 0x75c2f6, transparent: true, opacity: 0.4 });
		const ring = new THREE.Mesh(ringGeo, ringMat);
		ring.rotation.x = Math.PI / 2.5;
		scene.add(ring);

		// ── Second ring ──
		const ring2Geo = new THREE.TorusGeometry(2.8, 0.015, 16, 100);
		const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.2 });
		const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
		ring2.rotation.x = Math.PI / 1.8;
		ring2.rotation.y = Math.PI / 4;
		scene.add(ring2);

		// ── Floating particles ──
		const PARTICLE_COUNT = 200;
		const pGeo = new THREE.BufferGeometry();
		const pPos = new Float32Array(PARTICLE_COUNT * 3);
		const pColors = new Float32Array(PARTICLE_COUNT * 3);
		const palette = [
			new THREE.Color(0x38bdf8),
			new THREE.Color(0x8b5cf6),
			new THREE.Color(0x6366f1),
			new THREE.Color(0x75c2f6)
		];

		for (let i = 0; i < PARTICLE_COUNT; i++) {
			const i3 = i * 3;
			const r = 2.5 + Math.random() * 2;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);
			pPos[i3] = r * Math.sin(phi) * Math.cos(theta);
			pPos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
			pPos[i3 + 2] = r * Math.cos(phi);
			const c = palette[Math.floor(Math.random() * palette.length)];
			pColors[i3] = c.r;
			pColors[i3 + 1] = c.g;
			pColors[i3 + 2] = c.b;
		}

		pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
		pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

		const pMat = new THREE.PointsMaterial({
			size: 0.04,
			vertexColors: true,
			transparent: true,
			opacity: 0.8,
			blending: THREE.AdditiveBlending,
			depthWrite: false,
			sizeAttenuation: true
		});
		const particles = new THREE.Points(pGeo, pMat);
		scene.add(particles);

		// ── Connection lines ──
		const lineGeo = new THREE.BufferGeometry();
		const maxLines = PARTICLE_COUNT * 3;
		const linePos = new Float32Array(maxLines * 6);
		const lineCol = new Float32Array(maxLines * 6);
		lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
		lineGeo.setAttribute('color', new THREE.BufferAttribute(lineCol, 3));
		const lineMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending, depthWrite: false });
		const lines = new THREE.LineSegments(lineGeo, lineMat);
		scene.add(lines);

		// ── Small orbiting dots ──
		const dots = [];
		for (let i = 0; i < 8; i++) {
			const dotGeo = new THREE.SphereGeometry(0.06, 8, 8);
			const dotMat = new THREE.MeshBasicMaterial({ color: palette[i % palette.length], transparent: true, opacity: 0.9 });
			const dot = new THREE.Mesh(dotGeo, dotMat);
			scene.add(dot);
			dots.push({ mesh: dot, angle: (i / 8) * Math.PI * 2, radius: 2.2 + Math.random() * 0.6, speed: 0.3 + Math.random() * 0.4, yOffset: (Math.random() - 0.5) * 0.8 });
		}

		// ── Mouse tracking ──
		let mouseX = 0, mouseY = 0, targetMX = 0, targetMY = 0;
		const onMouseMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			targetMX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
			targetMY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
		};
		canvas.addEventListener('mousemove', onMouseMove);

		// ── Resize ──
		const onResize = () => {
			const w = parent.clientWidth;
			const h = parent.clientHeight;
			camera.aspect = w / h;
			camera.updateProjectionMatrix();
			renderer.setSize(w, h);
		};
		window.addEventListener('resize', onResize);

		// ── Animate ──
		const clock = new THREE.Clock();
		const animate = () => {
			animId = requestAnimationFrame(animate);
			const t = clock.getElapsedTime();

			mouseX += (targetMX - mouseX) * 0.05;
			mouseY += (targetMY - mouseY) * 0.05;

			sphere.rotation.y = t * 0.15 + mouseX * 0.3;
			sphere.rotation.x = t * 0.1 + mouseY * 0.2;

			inner.rotation.y = -t * 0.25;
			inner.rotation.z = t * 0.15;

			ring.rotation.z = t * 0.2;
			ring2.rotation.z = -t * 0.15;

			// Orbiting dots
			dots.forEach((d) => {
				d.angle += d.speed * 0.01;
				d.mesh.position.x = Math.cos(d.angle) * d.radius;
				d.mesh.position.y = Math.sin(d.angle) * 0.5 + d.yOffset;
				d.mesh.position.z = Math.sin(d.angle) * d.radius;
			});

			// Particle drift
			const pp = pGeo.attributes.position.array;
			for (let i = 0; i < PARTICLE_COUNT; i++) {
				const i3 = i * 3;
				pp[i3 + 1] += Math.sin(t + i) * 0.001;
			}
			pGeo.attributes.position.needsUpdate = true;

			// Connection lines
			let lineIdx = 0;
			for (let i = 0; i < PARTICLE_COUNT && lineIdx < maxLines; i++) {
				for (let j = i + 1; j < PARTICLE_COUNT && lineIdx < maxLines; j++) {
					const i3 = i * 3, j3 = j * 3;
					const dx = pp[i3] - pp[j3];
					const dy = pp[i3 + 1] - pp[j3 + 1];
					const dz = pp[i3 + 2] - pp[j3 + 2];
					const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
					if (dist < 1.2) {
						const alpha = 1 - dist / 1.2;
						const l6 = lineIdx * 6;
						linePos[l6] = pp[i3]; linePos[l6 + 1] = pp[i3 + 1]; linePos[l6 + 2] = pp[i3 + 2];
						linePos[l6 + 3] = pp[j3]; linePos[l6 + 4] = pp[j3 + 1]; linePos[l6 + 5] = pp[j3 + 2];
						const lc = new THREE.Color(0x38bdf8);
						lineCol[l6] = lc.r * alpha; lineCol[l6 + 1] = lc.g * alpha; lineCol[l6 + 2] = lc.b * alpha;
						lineCol[l6 + 3] = lc.r * alpha; lineCol[l6 + 4] = lc.g * alpha; lineCol[l6 + 5] = lc.b * alpha;
						lineIdx++;
					}
				}
			}
			for (let i = lineIdx * 6; i < maxLines * 6; i++) { linePos[i] = 0; lineCol[i] = 0; }
			lineGeo.attributes.position.needsUpdate = true;
			lineGeo.attributes.color.needsUpdate = true;
			lineGeo.setDrawRange(0, lineIdx * 2);

			// Camera
			camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
			camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.02;
			camera.lookAt(0, 0, 0);

			renderer.render(scene, camera);
		};
		animate();

		return () => {
			cancelAnimationFrame(animId);
			canvas.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('resize', onResize);
			scene.traverse((obj) => {
				if (obj.geometry) obj.geometry.dispose();
				if (obj.material) obj.material.dispose();
			});
			renderer.dispose();
		};
	});
</script>

<canvas bind:this={canvas} class="w-full h-full block"></canvas>
