"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RotateCw, ZoomIn, Box } from "lucide-react";

interface CadViewerProps {
  modelUrl: string;
  className?: string;
}

export function CadViewer({ modelUrl, className = "" }: CadViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [autoRotate, setAutoRotate] = useState(true);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.05, 100);
    camera.position.set(2.2, 1.8, 2.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 1.4;
    controls.maxDistance = 6;
    controls.minDistance = 0.6;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.position.set(4, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00747a, 1.6);
    dirLight2.position.set(-4, -2, -3);
    scene.add(dirLight2);

    const dirLight3 = new THREE.DirectionalLight(0xffffff, 1.0);
    dirLight3.position.set(0, -5, 2);
    scene.add(dirLight3);

    // Subtle CAD Floor Grid
    const gridHelper = new THREE.GridHelper(3, 20, 0x00747a, 0x233134);
    gridHelper.position.y = -0.45;
    (gridHelper.material as THREE.Material).opacity = 0.45;
    (gridHelper.material as THREE.Material).transparent = true;
    scene.add(gridHelper);

    // Load Model
    const loader = new GLTFLoader();
    let loadedObject: THREE.Group | null = null;

    loader.load(
      modelUrl,
      (gltf) => {
        loadedObject = gltf.scene;

        // Auto center and scale model
        const box = new THREE.Box3().setFromObject(loadedObject);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 1.5 / (maxDim || 1);

        loadedObject.scale.setScalar(scale);
        loadedObject.position.sub(center.multiplyScalar(scale));
        loadedObject.position.y += 0.05;

        // Industrial brushed metallic styling for meshes
        loadedObject.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            if (mesh.material) {
              const mat = (mesh.material as THREE.MeshStandardMaterial).clone();
              mat.roughness = 0.32;
              mat.metalness = 0.85;
              mesh.material = mat;
            }
          }
        });

        scene.add(loadedObject);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading CAD model:", error);
        setLoading(false);
      }
    );

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelUrl]);

  // Sync auto rotate state
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = autoRotate;
    }
  }, [autoRotate]);

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      {/* 3D Canvas Mount */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0f1719]/90 backdrop-blur-sm z-20">
          <div className="w-8 h-8 rounded-full border-2 border-[#00747a] border-t-transparent animate-spin mb-3" />
          <span className="text-xs font-mono text-[#00747a] tracking-widest uppercase">
            Loading CAD Model...
          </span>
        </div>
      )}

      {/* Interactive HUD Toolbar */}
      <div className="absolute top-3 right-3 flex items-center gap-2 z-20 pointer-events-auto">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`p-2 rounded text-xs font-mono flex items-center gap-1.5 transition-colors border ${
            autoRotate
              ? "bg-[#00747a] text-white border-[#00747a]"
              : "bg-[#141f22]/80 text-[#9da8a9] border-[#233134] hover:text-white"
          }`}
          title="Toggle Auto Rotation"
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? "animate-spin" : ""}`} />
          <span className="hidden sm:inline">{autoRotate ? "Rotating" : "Rotate"}</span>
        </button>
      </div>

      {/* CAD Helper Overlay Tag */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1 bg-[#0f1719]/80 backdrop-blur-md rounded border border-[#233134] text-[10px] font-mono text-[#7f7c7d] pointer-events-none z-20">
        <Box className="w-3 h-3 text-[#00747a]" />
        <span>Click + Drag to Orbit • Scroll to Zoom</span>
      </div>
    </div>
  );
}
