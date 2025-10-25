import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Torus, Sparkles, Html, Float, Effects } from "@react-three/drei";
import { UnrealBloomPass } from "three-stdlib";
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Button } from "./ui/button";
import vrHero from "@/assets/vr-hero.jpg";
import workspaceHero from "@/assets/workspace-hero.jpg";
import { Play } from "lucide-react";

// NOTE: This file is a single-file React component with Tailwind classes.
// Requirements (install in your project):
// npm i three @react-three/fiber @react-three/drei @react-three/postprocessing three-stdlib framer-motion
// TailwindCSS must be configured in your project.

function Orb({ mouse }) {
  const ref = useRef<any>();
  const glowRef = useRef<any>();
  const { viewport } = useThree();

  useFrame((state, delta) => {
    // gentle rotation
    if (ref.current) ref.current.rotation.y += delta * 0.15;
    // subtle follow of mouse
    if (ref.current) {
      ref.current.rotation.x += (mouse.current.y * 0.5 - ref.current.rotation.x) * 0.08;
      ref.current.rotation.y += (mouse.current.x * 0.5 - ref.current.rotation.y) * 0.08;
    }
    // pulse glow scale
    if (glowRef.current) {
      const s = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.03;
      glowRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={ref} dispose={null}>
      {/* outer wireframe ring */}
      <group rotation={[0.3, 0.6, 0]}>
        <mesh>
          <torusGeometry args={[1.55, 0.04, 16, 200]} />
          <meshStandardMaterial emissive="#7ce7ff" emissiveIntensity={0.08} color="#000000" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh rotation={[0.2, -0.3, 0]}>
          <torusGeometry args={[1.25, 0.03, 16, 200]} />
          <meshStandardMaterial emissive="#b36bff" emissiveIntensity={0.06} color="#000000" metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* core glowing sphere */}
      <mesh>
        <sphereGeometry args={[0.9, 64, 64]} />
        <meshStandardMaterial emissive="#9effff" emissiveIntensity={1.2} color="#120016" metalness={0.6} roughness={0.15} />
      </mesh>

      {/* inner animated pattern - torus knot to give complexity */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI * 0.2, 0, 0]}> 
        <torusKnotGeometry args={[0.5, 0.12, 128, 32]} />
        <meshStandardMaterial emissive="#ff73e1" emissiveIntensity={0.7} color="#2a0030" metalness={0.7} roughness={0.1} />
      </mesh>

      {/* soft glow layer (scaled translucent sphere) */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.4, 64, 64]} />
        <meshBasicMaterial transparent opacity={0.18} toneMapped={false} color="#8df0ff" />
      </mesh>

      {/* sparkles for extra neon flakes */}
      <Sparkles count={40} scale={2.2} size={6} speed={0.35} />
    </group>
  );
}

function Scene({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <pointLight position={[-3, 2, -5]} intensity={0.8} color="#47f0ff" />
      <pointLight position={[3, -2, 5]} intensity={0.5} color="#b46bff" />

      <Float floatIntensity={0.8} rotationIntensity={0.2}>
        <Orb mouse={mouse} />
      </Float>

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

      {/* postprocessing bloom to get neon glow */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.1} mipmapBlur intensity={0.9} />
      </EffectComposer>
    </>
  );
}

export default function Hero() {
  const mouse = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.current.x = x;
      mouse.current.y = y;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* background gradient similar to reference */}
      <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(90deg, #000000 0%, #0b0420 35%, #2b0050 70%)' }} />

      {/* left-side content */}
      <div className="container mx-auto px-6 lg:px-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6">

          {/* Left text column */}
          <div className="lg:col-span-6 text-left pt-16 lg:pt-32">
            <div className="max-w-xl">
              <h1 className="text-6xl md:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-[#9be9ff]">
                Meet the
                <br />
                <span className="block text-6xl md:text-7xl">New Reality</span>
              </h1>
              <p className="mt-6 text-lg text-[#b8c6d8]">Conquer leaderboards, crush workouts — create with friends and more.</p>

              <div className="mt-8 flex items-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-[#7b3cff] to-[#05d3ff] text-white shadow-2xl px-6 py-3">Get Started</Button>

                <div className="ml-4 flex items-center gap-3 bg-black/30 border border-white/6 rounded-lg px-3 py-2 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-md overflow-hidden">
                    <img src={vrHero} alt="vr" className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">PC VR</div>
                    <div className="text-xs text-[#9aa6b6]">Play has no limits</div>
                  </div>
                  <div className="ml-3 w-10 h-10 rounded-full bg-gradient-to-br from-[#ff7bd4]/20 to-[#05d3ff]/20 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Center 3D canvas */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[520px]">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Canvas camera={{ position: [0, 0, 4], fov: 50 }} style={{ width: '100%', height: '100%' }}>
                <Suspense fallback={null}>
                  <Scene mouse={mouse} />
                </Suspense>
              </Canvas>
            </div>

            {/* decorative floating cards and orbs over canvas - purely DOM to match reference */}
            <div className="absolute left-8 top-12 w-36 h-36 rounded-xl overflow-hidden shadow-2xl border border-white/6 backdrop-blur-sm">
              <img src={workspaceHero} className="w-full h-full object-cover" alt="workspace" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>

            <div className="absolute right-12 top-20 w-20 h-20 rounded-full bg-gradient-to-br from-[#05d3ff]/20 to-[#7b3cff]/20 shadow-2xl" />
            <div className="absolute left-20 bottom-14 w-14 h-14 rounded-full bg-gradient-to-br from-[#7b3cff]/20 to-[#05d3ff]/20 shadow-2xl" />
          </div>

        </div>
      </div>

      {/* subtle vignette and extra glow */}
      <div className="absolute inset-0 -z-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, rgba(34,12,60,0.28), transparent 20%), radial-gradient(circle at 20% 80%, rgba(0,20,40,0.2), transparent 15%)' }} />
    </section>
  );
}
