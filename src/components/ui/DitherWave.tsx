'use client';

import React, { useEffect, useRef, CSSProperties } from 'react';
import './DitherWave.css';

export interface DitherWaveProps {
  color?: string;
  color1?: string;
  color2?: string;
  speed?: number;
  frequency?: number;
  amplitude?: number;
  ditherSize?: number;
  waveCount?: number;
  opacity?: number;
  enableMouseInteraction?: boolean;
  mouseInfluence?: number;
  className?: string;
  style?: CSSProperties;
}

function hexToRgb(hex: string): [number, number, number] {
  let clean = hex.trim().replace(/^#/, '');
  if (clean.length === 3) {
    clean = clean.split('').map(c => c + c).join('');
  }
  if (clean.length === 6) {
    const num = parseInt(clean, 16);
    return [
      ((num >> 16) & 255) / 255,
      ((num >> 8) & 255) / 255,
      (num & 255) / 255
    ];
  }
  return [0.008, 0.518, 0.78]; // Default sky blue (#0284c7)
}

const VERTEX_SHADER = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform float uSpeed;
uniform float uFrequency;
uniform float uAmplitude;
uniform float uDitherSize;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uWaveCount;

out vec4 fragColor;

// 4x4 Bayer Matrix
const float bayerMatrix[16] = float[16](
   0.0/16.0,  8.0/16.0,  2.0/16.0, 10.0/16.0,
  12.0/16.0,  4.0/16.0, 14.0/16.0,  6.0/16.0,
   3.0/16.0, 11.0/16.0,  1.0/16.0,  9.0/16.0,
  15.0/16.0,  7.0/16.0, 13.0/16.0,  5.0/16.0
);

float getBayer(vec2 coord, float scale) {
  vec2 p = floor(coord / max(1.0, scale));
  int x = int(mod(p.x, 4.0));
  int y = int(mod(p.y, 4.0));
  return bayerMatrix[y * 4 + x];
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  vec2 p = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);

  // Mouse warp
  vec2 m = (uMouse * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
  float mDist = length(p - m);
  float mWarp = exp(-mDist * 2.5) * 0.18;

  float t = uTime * uSpeed;

  // Wave synthesis
  float w1 = sin(p.x * uFrequency + t + mWarp * 4.0) * uAmplitude;
  float w2 = sin(p.x * (uFrequency * 1.55) - t * 0.8 + p.y * 1.6) * (uAmplitude * 0.55);
  float w3 = cos(p.x * (uFrequency * 0.65) + t * 1.15 + p.y * 0.9) * (uAmplitude * 0.35);

  float totalWave = w1 + w2 + w3;

  // Multi-ribbon layered intensity calculation
  float d1 = abs(p.y - totalWave);
  float r1 = exp(-d1 * 4.2);

  float d2 = abs(p.y - (w1 * 0.85 + w3 * 1.25 - 0.28));
  float r2 = exp(-d2 * 5.2) * 0.75;

  float d3 = abs(p.y - (w2 * 1.1 - w1 * 0.45 + 0.32));
  float r3 = exp(-d3 * 6.0) * 0.55;

  float intensity = clamp(r1 + (uWaveCount > 1.5 ? r2 : 0.0) + (uWaveCount > 2.5 ? r3 : 0.0), 0.0, 1.0);

  // Sample ordered Bayer dither
  float ditherThreshold = getBayer(gl_FragCoord.xy, uDitherSize);
  float dithered = step(ditherThreshold, intensity);

  // Vertical edge fade so content transitions softly
  float edgeFade = smoothstep(0.0, 0.12, uv.y) * smoothstep(1.0, 0.88, uv.y);

  // Dynamic color gradient across wave height
  vec3 col = mix(uColor1, uColor2, clamp(p.y * 0.5 + 0.5, 0.0, 1.0));

  float alpha = dithered * intensity * uOpacity * edgeFade;

  if (alpha <= 0.002) {
    discard;
  }

  fragColor = vec4(col, alpha);
}
`;

export const DitherWave: React.FC<DitherWaveProps> = ({
  color,
  color1 = '#0284c7',
  color2 = '#38bdf8',
  speed = 0.45,
  frequency = 2.4,
  amplitude = 0.32,
  ditherSize = 2.0,
  waveCount = 3,
  opacity = 0.35,
  enableMouseInteraction = true,
  mouseInfluence = 1.0,
  className = '',
  style
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const primaryColor = color || color1;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let gl: WebGL2RenderingContext | null = canvas.getContext('webgl2', {
      alpha: true,
      antialias: false,
      powerPreference: 'low-power',
      preserveDrawingBuffer: false,
    });

    let animationFrameId: number;
    let isVisible = true;
    let mouse = { x: -9999, y: -9999, targetX: -9999, targetY: -9999 };
    let startTime = performance.now();

    const rgb1 = hexToRgb(primaryColor);
    const rgb2 = hexToRgb(color2);

    // Fallback: 2D canvas if WebGL2 not supported
    if (!gl) {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const render2d = () => {
        if (!isVisible) return;
        const width = canvas.width;
        const height = canvas.height;
        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = `rgba(${Math.round(rgb1[0] * 255)}, ${Math.round(rgb1[1] * 255)}, ${Math.round(rgb1[2] * 255)}, ${opacity * 0.5})`;
        const t = (performance.now() - startTime) * 0.001 * speed;
        
        ctx.beginPath();
        for (let x = 0; x < width; x += 4) {
          const normX = (x / width) * 2 - 1;
          const y = (Math.sin(normX * frequency + t) * amplitude * 0.5 + 0.5) * height;
          ctx.fillRect(x, y, 2, 2);
        }
        animationFrameId = requestAnimationFrame(render2d);
      };

      const handleResize2d = () => {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      };
      handleResize2d();
      window.addEventListener('resize', handleResize2d);
      animationFrameId = requestAnimationFrame(render2d);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize2d);
      };
    }

    // Shader compilation
    function createShader(gl: WebGL2RenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertShader = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);

    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }

    gl.useProgram(program);

    // Fullscreen quad buffer
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posLocation);
    gl.vertexAttribPointer(posLocation, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uResLoc = gl.getUniformLocation(program, 'uResolution');
    const uTimeLoc = gl.getUniformLocation(program, 'uTime');
    const uColor1Loc = gl.getUniformLocation(program, 'uColor1');
    const uColor2Loc = gl.getUniformLocation(program, 'uColor2');
    const uSpeedLoc = gl.getUniformLocation(program, 'uSpeed');
    const uFreqLoc = gl.getUniformLocation(program, 'uFrequency');
    const uAmpLoc = gl.getUniformLocation(program, 'uAmplitude');
    const uDitherLoc = gl.getUniformLocation(program, 'uDitherSize');
    const uOpacityLoc = gl.getUniformLocation(program, 'uOpacity');
    const uMouseLoc = gl.getUniformLocation(program, 'uMouse');
    const uWaveCountLoc = gl.getUniformLocation(program, 'uWaveCount');

    // Set static uniforms
    gl.uniform3f(uColor1Loc, rgb1[0], rgb1[1], rgb1[2]);
    gl.uniform3f(uColor2Loc, rgb2[0], rgb2[1], rgb2[2]);
    gl.uniform1f(uSpeedLoc, speed);
    gl.uniform1f(uFreqLoc, frequency);
    gl.uniform1f(uAmpLoc, amplitude);
    gl.uniform1f(uDitherLoc, Math.max(1.0, ditherSize));
    gl.uniform1f(uOpacityLoc, opacity);
    gl.uniform1f(uWaveCountLoc, waveCount);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    let dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      if (!container || !canvas || !gl) return;
      const rect = container.getBoundingClientRect();
      const displayWidth = Math.floor(rect.width * dpr);
      const displayHeight = Math.floor(rect.height * dpr);

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, displayWidth, displayHeight);
        gl.uniform2f(uResLoc, displayWidth, displayHeight);
      }
    };

    resize();

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);

    const intersectionObserver = new IntersectionObserver(
      entries => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Mouse event handling
    const handleMouseMove = (e: MouseEvent) => {
      if (!enableMouseInteraction || !container) return;
      const rect = container.getBoundingClientRect();
      mouse.targetX = (e.clientX - rect.left) * dpr;
      mouse.targetY = (rect.height - (e.clientY - rect.top)) * dpr;
    };

    if (enableMouseInteraction) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Render loop
    const render = (time: number) => {
      if (isVisible && gl) {
        // Smooth mouse lerp
        mouse.x += (mouse.targetX - mouse.x) * 0.08 * mouseInfluence;
        mouse.y += (mouse.targetY - mouse.y) * 0.08 * mouseInfluence;

        gl.uniform1f(uTimeLoc, (time - startTime) * 0.001);
        gl.uniform2f(uMouseLoc, mouse.x, mouse.y);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (enableMouseInteraction) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (gl) {
        gl.deleteBuffer(positionBuffer);
        gl.deleteProgram(program);
        gl.deleteShader(vertShader);
        gl.deleteShader(fragShader);
      }
    };
  }, [
    primaryColor,
    color2,
    speed,
    frequency,
    amplitude,
    ditherSize,
    waveCount,
    opacity,
    enableMouseInteraction,
    mouseInfluence,
  ]);

  return (
    <div
      ref={containerRef}
      className={`dither-wave-container ${className}`}
      style={style}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="dither-wave-canvas" />
    </div>
  );
};

export default DitherWave;
