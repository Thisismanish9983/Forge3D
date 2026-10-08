import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Box, Layers, Sparkles } from 'lucide-react';

export default function Interactive3DViewer({
  modelType = 'turbine-rotor',
  height = '460px',
  showControls = true,
  className = ''
}) {
  const mountRef = useRef(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [filamentColor, setFilamentColor] = useState('#f97316'); // Copper orange default
  const [renderMode, setRenderMode] = useState('solid'); // 'solid' | 'wireframe' | 'layers'

  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const solidMeshesRef = useRef([]);
  const wireMeshesRef = useRef([]);
  const layerLinesGroupRef = useRef(null);
  const modelGroupRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const width = currentMount.clientWidth || 500;
    const heightPx = currentMount.clientHeight || 460;

    // Three Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 1000);
    camera.position.set(0, 36, 74);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    currentMount.replaceChildren(renderer.domElement);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffedd5, 2.2);
    dirLight1.position.set(45, 65, 45);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 1.1); // Cool rim light
    dirLight2.position.set(-45, 25, -35);
    scene.add(dirLight2);

    const nozzleGlowLight = new THREE.PointLight(0xf97316, 2.5, 60);
    nozzleGlowLight.position.set(0, -6, 0);
    scene.add(nozzleGlowLight);

    // 3D Build Plate Grid (Textured PEI bed simulator)
    const gridHelper = new THREE.GridHelper(65, 32, 0xf97316, 0x262d42);
    gridHelper.position.y = -16;
    scene.add(gridHelper);

    // Model Group
    const modelGroup = new THREE.Group();
    modelGroup.position.y = -1;
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    // Materials
    const solidMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(filamentColor),
      roughness: 0.32,
      metalness: 0.42,
      flatShading: false
    });

    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xffedd5,
      wireframe: true,
      transparent: true,
      opacity: 0.2
    });

    const solidList = [];
    const wireList = [];

    // Helper to add synchronized solid and wireframe parts
    const addPart = (geom, pos = [0, 0, 0], rot = [0, 0, 0]) => {
      const mesh = new THREE.Mesh(geom, solidMat);
      mesh.position.set(...pos);
      mesh.rotation.set(...rot);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      modelGroup.add(mesh);
      solidList.push(mesh);

      const wireMesh = new THREE.Mesh(geom, wireMat);
      wireMesh.position.set(...pos);
      wireMesh.rotation.set(...rot);
      modelGroup.add(wireMesh);
      wireList.push(wireMesh);

      return mesh;
    };

    // Slicing Layer Rings Group
    const layerGroup = new THREE.Group();

    if (modelType === 'planter') {
      // Procedural Architectural Voronoi Planter
      const outerVase = new THREE.CylinderGeometry(15, 10, 26, 24, 12);
      addPart(outerVase, [0, 0, 0]);

      const innerReservoir = new THREE.CylinderGeometry(11, 8, 22, 20);
      const innerMesh = new THREE.Mesh(
        innerReservoir,
        new THREE.MeshStandardMaterial({ color: 0x06b6d4, roughness: 0.2, transparent: true, opacity: 0.85 })
      );
      modelGroup.add(innerMesh);

      const rim = new THREE.TorusGeometry(15, 1.2, 16, 48);
      addPart(rim, [0, 13, 0], [Math.PI / 2, 0, 0]);

      for (let y = -12; y <= 12; y += 1.8) {
        const ringGeo = new THREE.RingGeometry(15.1, 15.35, 36);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xfb923c, side: THREE.DoubleSide, transparent: true, opacity: 0.35 });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2;
        ringMesh.position.y = y;
        layerGroup.add(ringMesh);
      }
    } else if (modelType === 'gyro') {
      // Procedural Triple-Gimbal Kinetic Gyroscope
      const outerRing = new THREE.TorusGeometry(20, 1.8, 16, 64);
      addPart(outerRing, [0, 0, 0]);

      const midRing = new THREE.TorusGeometry(14, 1.5, 16, 64);
      addPart(midRing, [0, 0, 0], [0.8, 0.4, 0]);

      const innerRing = new THREE.TorusGeometry(8.5, 1.3, 16, 48);
      addPart(innerRing, [0, 0, 0], [-0.5, 1.1, 0]);

      const coreSphere = new THREE.SphereGeometry(3.5, 24, 24);
      addPart(coreSphere, [0, 0, 0]);

      const standPole = new THREE.CylinderGeometry(1.2, 1.2, 18, 16);
      addPart(standPole, [0, -9, 0]);
      const standBase = new THREE.CylinderGeometry(12, 14, 2.5, 32);
      addPart(standBase, [0, -15, 0]);
    } else if (modelType === 'hex-caddy') {
      // HexCore Modular Desk Caddy
      const hexBase = new THREE.CylinderGeometry(18, 20, 18, 6, 12);
      addPart(hexBase, [0, 0, 0]);

      const leftCell = new THREE.CylinderGeometry(10, 11, 14, 6);
      addPart(leftCell, [-18, -2, 0]);

      const rightCell = new THREE.CylinderGeometry(10, 11, 14, 6);
      addPart(rightCell, [18, -2, 0]);

      for (let y = -9; y <= 9; y += 1.6) {
        const ringGeo = new THREE.RingGeometry(18.2, 18.45, 6);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xfb923c, side: THREE.DoubleSide, transparent: true, opacity: 0.35 });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2;
        ringMesh.position.y = y;
        layerGroup.add(ringMesh);
      }
    } else {
      // Default: High-Tech 12-Blade Impeller Turbine Rotor
      const hubGeom = new THREE.CylinderGeometry(7, 9.5, 14, 36);
      addPart(hubGeom, [0, 0, 0]);

      const coneGeom = new THREE.ConeGeometry(7, 10, 36);
      addPart(coneGeom, [0, 11, 0]);

      const boltGeom = new THREE.CylinderGeometry(2.5, 2.5, 2.5, 6);
      addPart(boltGeom, [0, 16.5, 0]);

      const boreGeom = new THREE.CylinderGeometry(3.5, 3.5, 16, 24);
      const boreMat = new THREE.MeshStandardMaterial({ color: 0x11141d, metalness: 0.8, roughness: 0.2 });
      const boreMesh = new THREE.Mesh(boreGeom, boreMat);
      modelGroup.add(boreMesh);

      const bladeCount = 12;
      for (let i = 0; i < bladeCount; i++) {
        const angle = (i / bladeCount) * Math.PI * 2;
        const bladeGeom = new THREE.BoxGeometry(1.6, 12, 17);
        const midR = 15.5;
        const bx = Math.sin(angle) * midR;
        const bz = Math.cos(angle) * midR;
        addPart(bladeGeom, [bx, 1, bz], [0.45, -angle + 0.35, 0.25]);
      }

      const shroudGeom = new THREE.CylinderGeometry(25.5, 25.5, 11, 48, 1, true);
      addPart(shroudGeom, [0, 1, 0]);

      const topRimGeom = new THREE.TorusGeometry(25.5, 1.2, 16, 64);
      addPart(topRimGeom, [0, 6.5, 0], [Math.PI / 2, 0, 0]);

      const btmRimGeom = new THREE.TorusGeometry(25.5, 1.2, 16, 64);
      addPart(btmRimGeom, [0, -4.5, 0], [Math.PI / 2, 0, 0]);

      for (let s = 0; s < 6; s++) {
        const sAngle = (s / 6) * Math.PI * 2;
        const strutGeom = new THREE.BoxGeometry(1.4, 3.5, 17);
        const sx = Math.sin(sAngle) * 16;
        const sz = Math.cos(sAngle) * 16;
        addPart(strutGeom, [sx, -3, sz], [0, -sAngle, 0]);
      }

      for (let y = -14; y <= 15; y += 1.5) {
        const ringGeo = new THREE.RingGeometry(25.6, 25.85, 48);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xfb923c, side: THREE.DoubleSide, transparent: true, opacity: 0.35 });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2;
        ringMesh.position.y = y;
        layerGroup.add(ringMesh);
      }
    }

    modelGroup.add(layerGroup);
    layerLinesGroupRef.current = layerGroup;
    layerGroup.visible = false;

    solidMeshesRef.current = solidList;
    wireMeshesRef.current = wireList;

    // Slight initial tilt for dramatic CAD isometric perspective
    modelGroup.rotation.x = 0.35;
    modelGroup.rotation.z = -0.15;

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (autoRotate && !isDraggingRef.current) {
        modelGroup.rotation.y += 0.012; // Fluid mechanical rotation
      }

      renderer.render(scene, camera);
    };
    animate();

    // Mouse Drag Rotation
    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      modelGroup.rotation.y += deltaX * 0.01;
      modelGroup.rotation.x += deltaY * 0.01;

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch Support for Mobile
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.current.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.current.y;

      modelGroup.rotation.y += deltaX * 0.01;
      modelGroup.rotation.x += deltaY * 0.01;

      previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    dom.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Window Resize
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      dom.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      dom.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, [modelType]);

  // Update Color across all solid meshes
  useEffect(() => {
    solidMeshesRef.current.forEach((m) => {
      if (m && m.material) {
        m.material.color.set(filamentColor);
      }
    });
  }, [filamentColor]);

  // Update Render Mode (Solid vs Wireframe vs Slices)
  useEffect(() => {
    const isWire = renderMode === 'wireframe';
    const isLayers = renderMode === 'layers';

    solidMeshesRef.current.forEach((m) => {
      if (m) m.visible = !isWire;
    });

    wireMeshesRef.current.forEach((m) => {
      if (m) {
        m.visible = isWire;
        if (m.material) {
          m.material.opacity = isWire ? 0.75 : 0.2;
        }
      }
    });

    if (layerLinesGroupRef.current) {
      layerLinesGroupRef.current.visible = isLayers;
    }
  }, [renderMode]);

  const hudTitle =
    modelType === 'planter'
      ? 'VORONOI PLANTER CAD'
      : modelType === 'gyro'
      ? 'KINETIC GIMBAL CAD'
      : modelType === 'hex-caddy'
      ? 'HEXCORE MODULAR CAD'
      : 'IMPELLER ROTOR CAD';

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden bg-gradient-to-b from-graphite-900 to-graphite-950 border border-graphite-700/60 shadow-2xl ${className}`}
      style={{ minHeight: height }}
    >
      {/* Background CAD Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none"></div>

      {/* Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" style={{ minHeight: height }} />

      {/* Top HUD Overlay (Clean, no blocking overlays on top of the model) */}
      <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 bg-graphite-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-graphite-700/80 text-xs font-mono text-slate-300 pointer-events-auto shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-white">{hudTitle}</span>
          <span className="text-copper-400">|</span>
          <span className="hidden sm:inline text-slate-300">DRAG TO ORBIT</span>
        </div>

        <div className="flex items-center gap-1.5 pointer-events-auto">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            title={autoRotate ? 'Pause Rotation' : 'Auto Rotate'}
            className={`p-2 rounded-lg text-xs font-medium border backdrop-blur-md transition-colors ${
              autoRotate
                ? 'bg-copper-500/20 text-copper-300 border-copper-500/40'
                : 'bg-graphite-900/90 text-slate-400 border-graphite-700 hover:text-white'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin-slow' : ''}`} />
          </button>
        </div>
      </div>

      {/* Bottom Controls Bar */}
      {showControls && (
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
          {/* Mode Switcher */}
          <div className="flex items-center gap-1 bg-graphite-900/95 backdrop-blur-md p-1 rounded-xl border border-graphite-700/80 pointer-events-auto shadow-lg">
            <button
              onClick={() => setRenderMode('solid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                renderMode === 'solid'
                  ? 'bg-copper-500 text-white font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>Solid</span>
            </button>
            <button
              onClick={() => setRenderMode('wireframe')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                renderMode === 'wireframe'
                  ? 'bg-copper-500 text-white font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Wireframe</span>
            </button>
            <button
              onClick={() => setRenderMode('layers')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                renderMode === 'layers'
                  ? 'bg-copper-500 text-white font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Slices</span>
            </button>
          </div>

          {/* Filament Color Swatches */}
          <div className="flex items-center gap-1.5 bg-graphite-900/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-graphite-700/80 pointer-events-auto shadow-lg">
            <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider mr-1 font-semibold">
              Polymer:
            </span>
            {[
              { color: '#f97316', label: 'Burnt Copper PLA' },
              { color: '#334155', label: 'Carbon Fiber Slate' },
              { color: '#06b6d4', label: 'Cyan PETG' },
              { color: '#e2e8f0', label: 'Matte White' },
              { color: '#10b981', label: 'Emerald TPU' }
            ].map((f) => (
              <button
                key={f.color}
                onClick={() => setFilamentColor(f.color)}
                title={f.label}
                className={`w-4 h-4 rounded-full border transition-transform ${
                  filamentColor === f.color
                    ? 'scale-125 border-white shadow-md ring-2 ring-copper-500'
                    : 'border-transparent hover:scale-110 opacity-80 hover:opacity-100'
                }`}
                style={{ backgroundColor: f.color }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
