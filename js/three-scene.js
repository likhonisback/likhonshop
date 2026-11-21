/**
 * ═══════════════════════════════════════════════════════════════
 *  RTX STORE — Three.js 3D Interactive Engine v3.0
 *  Immersive Cyberpunk 3D Hero, Orbiting Particles, Hologram Mesh
 * ═══════════════════════════════════════════════════════════════
 */

window.RTX3D = (function () {
  'use strict';

  var heroState = {
    renderer: null,
    scene: null,
    camera: null,
    animId: null,
    container: null,
    coreGroup: null,
    particles: null,
    grid: null,
    lights: [],
    mouseX: 0,
    mouseY: 0,
    targetRotationX: 0,
    targetRotationY: 0,
    isDragging: false,
    prevMouseX: 0,
    prevMouseY: 0
  };

  var viewerState = {
    renderer: null,
    scene: null,
    camera: null,
    animId: null,
    mesh: null
  };

  function getThemeColors() {
    var style = getComputedStyle(document.documentElement);
    var p = style.getPropertyValue('--color-primary').trim() || '#6C5CE7';
    var s = style.getPropertyValue('--color-secondary').trim() || '#FF6B6B';
    var a = style.getPropertyValue('--color-accent').trim() || '#F39C12';
    var bg = style.getPropertyValue('--bg-primary').trim() || '#0a0a1a';

    var heroStyle = (window.APP && window.APP.settings && window.APP.settings.hero3dStyle) || '';
    if (heroStyle === 'emerald') {
      p = '#10b981'; s = '#059669'; a = '#34d399';
    } else if (heroStyle === 'crimson') {
      p = '#e11d48'; s = '#f43f5e'; a = '#fb7185';
    } else if (heroStyle === 'gold') {
      p = '#f59e0b'; s = '#ef4444'; a = '#fbbf24';
    } else if (heroStyle === 'cyber') {
      p = '#0284c7'; s = '#06b6d4'; a = '#38bdf8';
    } else if (heroStyle === 'royal') {
      p = '#6C5CE7'; s = '#FF6B6B'; a = '#F39C12';
    }

    return {
      primary: new THREE.Color(p),
      secondary: new THREE.Color(s),
      accent: new THREE.Color(a),
      bg: new THREE.Color(bg)
    };
  }

  // ─────────────────────────────────────────────────────────────
  // 1. HERO 3D SCENE
  // ─────────────────────────────────────────────────────────────
  function initHero(container) {
    if (typeof THREE === 'undefined') {
      console.warn('Three.js not loaded. Skipping 3D hero scene.');
      return;
    }

    if (!container) {
      container = document.getElementById('hero3dCanvas');
    }
    if (!container) return;

    // Clean up previous instance if any
    destroyHero();

    heroState.container = container;
    var width = container.clientWidth || window.innerWidth;
    var height = container.clientHeight || 550;

    // 1. Scene
    var scene = new THREE.Scene();
    heroState.scene = scene;
    scene.fog = new THREE.FogExp2(0x0a0a1a, 0.0018);

    // 2. Camera
    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
    camera.position.set(0, 10, 85);
    heroState.camera = camera;

    // 3. Renderer
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    heroState.renderer = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    var colors = getThemeColors();

    // 4. Lighting
    var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    var light1 = new THREE.PointLight(colors.primary.getHex(), 3.5, 250);
    light1.position.set(-30, 25, 40);
    scene.add(light1);

    var light2 = new THREE.PointLight(colors.secondary.getHex(), 3.0, 250);
    light2.position.set(35, -20, 30);
    scene.add(light2);

    var light3 = new THREE.PointLight(colors.accent.getHex(), 2.0, 200);
    light3.position.set(0, 35, -20);
    scene.add(light3);

    heroState.lights = [light1, light2, light3];

    // 5. Centerpiece: Holographic Cyber Core
    var coreGroup = new THREE.Group();
    heroState.coreGroup = coreGroup;
    scene.add(coreGroup);

    // Outer Polyhedron Cage
    var outerGeo = new THREE.IcosahedronGeometry(18, 1);
    var outerMat = new THREE.MeshStandardMaterial({
      color: colors.primary.getHex(),
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.9
    });
    var outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Inner Glowing Crystal Core
    var innerGeo = new THREE.OctahedronGeometry(11, 0);
    var innerMat = new THREE.MeshPhysicalMaterial({
      color: colors.secondary.getHex(),
      emissive: colors.primary.getHex(),
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.8,
      transmission: 0.6,
      transparent: true,
      opacity: 0.85
    });
    var innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Floating Quantum Rings
    var ring1Geo = new THREE.TorusGeometry(26, 0.5, 16, 80);
    var ring1Mat = new THREE.MeshStandardMaterial({
      color: colors.accent.getHex(),
      emissive: colors.accent.getHex(),
      emissiveIntensity: 0.4,
      metalness: 0.9,
      roughness: 0.2
    });
    var ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    var ring2Geo = new THREE.TorusGeometry(32, 0.35, 16, 90);
    var ring2Mat = new THREE.MeshStandardMaterial({
      color: colors.primary.getHex(),
      emissive: colors.primary.getHex(),
      emissiveIntensity: 0.3,
      metalness: 0.95,
      roughness: 0.1
    });
    var ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    coreGroup.add(ring2);

    // Orbiting Satellite Orbs
    var satellites = [];
    var satColors = [colors.primary, colors.secondary, colors.accent];
    for (var s = 0; s < 4; s++) {
      var satGeo = new THREE.SphereGeometry(1.4, 16, 16);
      var satMat = new THREE.MeshStandardMaterial({
        color: satColors[s % 3].getHex(),
        emissive: satColors[s % 3].getHex(),
        emissiveIntensity: 0.8,
        metalness: 0.9
      });
      var sat = new THREE.Mesh(satGeo, satMat);
      sat.userData = {
        radius: 28 + s * 6,
        speed: 0.015 + s * 0.007,
        angle: (s * Math.PI) / 2,
        yOffset: (s - 1.5) * 8
      };
      scene.add(sat);
      satellites.push(sat);
    }
    heroState.satellites = satellites;

    // 6. 1,600 Cyber Particles Field
    var particleCount = 1600;
    var particleGeo = new THREE.BufferGeometry();
    var positions = new Float32Array(particleCount * 3);
    var scales = new Float32Array(particleCount);

    for (var i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 450;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 400;
      scales[i] = Math.random() * 2.5 + 0.5;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Create Circular Glow Particle Texture
    var particleCanvas = document.createElement('canvas');
    particleCanvas.width = 32;
    particleCanvas.height = 32;
    var pCtx = particleCanvas.getContext('2d');
    var pGrad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    pGrad.addColorStop(0, 'rgba(255,255,255,1)');
    pGrad.addColorStop(0.35, 'rgba(162,155,254,0.8)');
    pGrad.addColorStop(1, 'rgba(108,92,231,0)');
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 32, 32);

    var pTexture = new THREE.CanvasTexture(particleCanvas);

    var particleMat = new THREE.PointsMaterial({
      size: 2.2,
      map: pTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    var particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    heroState.particles = particles;

    // 7. Perspective Cyber Grid Floor
    var gridHelper = new THREE.GridHelper(500, 50, colors.primary.getHex(), 0x221a44);
    gridHelper.position.y = -45;
    gridHelper.material.opacity = 0.35;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);
    heroState.grid = gridHelper;

    // 8. Event Listeners for Mouse Parallax & Drag
    function onMouseMove(e) {
      var rect = container.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      var y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      heroState.mouseX = x;
      heroState.mouseY = y;

      if (heroState.isDragging) {
        var deltaX = e.clientX - heroState.prevMouseX;
        var deltaY = e.clientY - heroState.prevMouseY;
        heroState.targetRotationY += deltaX * 0.01;
        heroState.targetRotationX += deltaY * 0.01;
        heroState.prevMouseX = e.clientX;
        heroState.prevMouseY = e.clientY;
      }
    }

    function onMouseDown(e) {
      heroState.isDragging = true;
      heroState.prevMouseX = e.clientX;
      heroState.prevMouseY = e.clientY;
    }

    function onMouseUp() {
      heroState.isDragging = false;
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    function onResize() {
      if (!heroState.renderer || !heroState.camera || !container) return;
      var w = container.clientWidth || window.innerWidth;
      var h = container.clientHeight || 550;
      heroState.camera.aspect = w / h;
      heroState.camera.updateProjectionMatrix();
      heroState.renderer.setSize(w, h);
    }
    window.addEventListener('resize', onResize);

    // 9. Animation Loop
    var clock = new THREE.Clock();

    function animate() {
      heroState.animId = requestAnimationFrame(animate);

      var elapsed = clock.getElapsedTime();

      // Smooth core rotations
      if (coreGroup) {
        coreGroup.rotation.y += 0.007;
        coreGroup.rotation.x += 0.003;
        coreGroup.position.y = Math.sin(elapsed * 1.5) * 3;

        // Apply interactive drag rotation smoothly
        coreGroup.rotation.y += (heroState.targetRotationY - coreGroup.rotation.y) * 0.05;
        coreGroup.rotation.x += (heroState.targetRotationX - coreGroup.rotation.x) * 0.05;

        ring1.rotation.z += 0.015;
        ring2.rotation.x += 0.012;
        innerMesh.rotation.y -= 0.015;
      }

      // Orbit satellites
      if (heroState.satellites) {
        heroState.satellites.forEach(function (sat) {
          sat.userData.angle += sat.userData.speed;
          sat.position.x = Math.cos(sat.userData.angle) * sat.userData.radius;
          sat.position.z = Math.sin(sat.userData.angle) * sat.userData.radius;
          sat.position.y = sat.userData.yOffset + Math.sin(elapsed * 2 + sat.userData.angle) * 2;
        });
      }

      // Slow particle field drift
      if (particles) {
        particles.rotation.y = elapsed * 0.02;
        particles.rotation.x = Math.sin(elapsed * 0.03) * 0.1;
      }

      // Grid wave drift
      if (gridHelper) {
        gridHelper.position.z = (elapsed * 15) % 20 - 45;
      }

      // Parallax camera lerp
      var targetCamX = heroState.mouseX * 18;
      var targetCamY = 10 + heroState.mouseY * 12;
      camera.position.x += (targetCamX - camera.position.x) * 0.04;
      camera.position.y += (targetCamY - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }

    animate();
  }

  function destroyHero() {
    if (heroState.animId) {
      cancelAnimationFrame(heroState.animId);
      heroState.animId = null;
    }
    if (heroState.renderer && heroState.renderer.domElement) {
      if (heroState.renderer.domElement.parentNode) {
        heroState.renderer.domElement.parentNode.removeChild(heroState.renderer.domElement);
      }
      heroState.renderer.dispose();
      heroState.renderer = null;
    }
  }

  // ─────────────────────────────────────────────────────────────
  // 2. 3D PRODUCT DETAIL VIEWER (Interactive Package Inspection)
  // ─────────────────────────────────────────────────────────────
  function initProductViewer(containerId, product) {
    if (typeof THREE === 'undefined') return;
    var container = document.getElementById(containerId);
    if (!container) return;

    if (viewerState.animId) {
      cancelAnimationFrame(viewerState.animId);
      viewerState.animId = null;
    }
    if (viewerState.renderer && viewerState.renderer.domElement) {
      if (viewerState.renderer.domElement.parentNode) {
        viewerState.renderer.domElement.parentNode.removeChild(viewerState.renderer.domElement);
      }
      viewerState.renderer.dispose();
      viewerState.renderer = null;
    }
    container.innerHTML = '';

    var width = container.clientWidth || 360;
    var height = container.clientHeight || 360;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);
    camera.lookAt(0, 0, 0);

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    var colors = getThemeColors();

    var ambLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambLight);

    var dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight1.position.set(4, 5, 8);
    scene.add(dirLight1);

    var dirLight2 = new THREE.DirectionalLight(colors.primary.getHex(), 1.8);
    dirLight2.position.set(-5, -3, 6);
    scene.add(dirLight2);

    // Front digital cover material
    var frontMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.1
    });

    var imgUrl = product && (product.image || product.imageUrl || (Array.isArray(product.images) && product.images[0]) || '');
    if (imgUrl) {
      if (imgUrl.indexOf('../') === 0) imgUrl = imgUrl.substring(3);
      var loader = new THREE.TextureLoader();
      loader.load(imgUrl, function(texture) {
        texture.anisotropy = 4;
        frontMaterial.map = texture;
        frontMaterial.needsUpdate = true;
      });
    }

    var sideMaterial = new THREE.MeshStandardMaterial({
      color: 0x121426,
      roughness: 0.3,
      metalness: 0.8
    });

    var geometry = new THREE.BoxGeometry(3.0, 4.0, 0.5);
    var materials = [
      sideMaterial, // right
      sideMaterial, // left
      sideMaterial, // top
      sideMaterial, // bottom
      frontMaterial, // front
      sideMaterial  // back
    ];

    var box = new THREE.Mesh(geometry, materials);
    box.position.set(0, 0, 0);
    scene.add(box);

    // Glowing Neon Edge Wireframe
    var edges = new THREE.EdgesGeometry(geometry);
    var lineMat = new THREE.LineBasicMaterial({ color: colors.accent.getHex(), linewidth: 2 });
    var wireframe = new THREE.LineSegments(edges, lineMat);
    box.add(wireframe);

    // Floating Hologram Halo
    var badgeGeo = new THREE.TorusGeometry(2.4, 0.04, 16, 64);
    var badgeMat = new THREE.MeshBasicMaterial({ color: colors.secondary.getHex(), transparent: true, opacity: 0.6 });
    var halo = new THREE.Mesh(badgeGeo, badgeMat);
    halo.rotation.x = Math.PI / 2;
    halo.position.y = -2.2;
    scene.add(halo);

    viewerState.renderer = renderer;
    viewerState.scene = scene;
    viewerState.camera = camera;
    viewerState.mesh = box;

    // Responsive Viewer Resize
    function onViewerResize() {
      if (!container || !viewerState.renderer || !viewerState.camera) return;
      var w = container.clientWidth || 360;
      var h = container.clientHeight || 360;
      viewerState.camera.aspect = w / h;
      viewerState.camera.updateProjectionMatrix();
      viewerState.renderer.setSize(w, h);
    }
    window.addEventListener('resize', onViewerResize);
    viewerState.resizeHandler = onViewerResize;

    // Interactive Drag to Rotate with Touch Support
    var isDragging = false;
    var prevX = 0;
    var prevY = 0;

    function onPointerDown(e) {
      isDragging = true;
      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      var clientY = e.touches ? e.touches[0].clientY : e.clientY;
      prevX = clientX;
      prevY = clientY;
    }

    function onPointerUp() {
      isDragging = false;
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      var clientY = e.touches ? e.touches[0].clientY : e.clientY;
      var dX = clientX - prevX;
      var dY = clientY - prevY;
      box.rotation.y += dX * 0.015;
      box.rotation.x += dY * 0.015;
      prevX = clientX;
      prevY = clientY;
    }

    container.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('mousemove', onPointerMove);

    container.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchend', onPointerUp, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });

    var clock = new THREE.Clock();

    function renderViewer() {
      viewerState.animId = requestAnimationFrame(renderViewer);
      var t = clock.getElapsedTime();
      if (!isDragging) {
        box.rotation.y += 0.008;
        box.position.y = Math.sin(t * 1.8) * 0.1;
      }
      halo.rotation.z += 0.015;
      renderer.render(scene, camera);
    }
    renderViewer();
  }

  function updateProductTexture(imgUrl) {
    if (!viewerState.mesh || !imgUrl) return;
    if (imgUrl.indexOf('../') === 0) imgUrl = imgUrl.substring(3);
    var loader = new THREE.TextureLoader();
    loader.load(imgUrl, function(texture) {
      texture.anisotropy = 4;
      if (Array.isArray(viewerState.mesh.material) && viewerState.mesh.material[4]) {
        viewerState.mesh.material[4].map = texture;
        viewerState.mesh.material[4].needsUpdate = true;
      }
    });
  }

  function destroyProductViewer() {
    if (viewerState.animId) {
      cancelAnimationFrame(viewerState.animId);
      viewerState.animId = null;
    }
    if (viewerState.resizeHandler) {
      window.removeEventListener('resize', viewerState.resizeHandler);
      viewerState.resizeHandler = null;
    }
    if (viewerState.renderer) {
      if (viewerState.renderer.domElement && viewerState.renderer.domElement.parentNode) {
        viewerState.renderer.domElement.parentNode.removeChild(viewerState.renderer.domElement);
      }
      viewerState.renderer.dispose();
      viewerState.renderer = null;
    }
    viewerState.scene = null;
    viewerState.camera = null;
    viewerState.mesh = null;
  }

  // ─────────────────────────────────────────────────────────────
  // 3. THEME DYNAMIC COLOR UPDATES
  // ─────────────────────────────────────────────────────────────
  function updateThemeColors() {
    var colors = getThemeColors();
    if (heroState.lights && heroState.lights.length >= 3) {
      heroState.lights[0].color.set(colors.primary);
      heroState.lights[1].color.set(colors.secondary);
      heroState.lights[2].color.set(colors.accent);
    }
  }

  return {
    initHero: initHero,
    destroyHero: destroyHero,
    initProductViewer: initProductViewer,
    destroyProductViewer: destroyProductViewer,
    updateProductTexture: updateProductTexture,
    updateThemeColors: updateThemeColors
  };
})();
