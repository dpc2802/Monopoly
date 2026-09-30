"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();
    
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 4.5, // Centrado en el Océano Atlántico (entre CO y UK)
      theta: 0.15,
      dark: 0, 
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6, // Puntos más definidos
      // Puntos en gris oscuro para que resalten sobre fondo blanco
      baseColor: [0.3, 0.3, 0.3],
      // Marcadores en Teal intenso
      markerColor: [0.1, 0.7, 0.5],
      // Resplandor blanco
      glowColor: [1, 1, 1],
      markers: [
        { location: [51.5074, -0.1278], size: 0.08 },
        { location: [4.7110, -74.0721], size: 0.08 }
      ],
      onRender: (state) => {
        state.phi = phi + 4.5; // Mantiene el centro en el Atlántico mientras rota
        phi += 0.003;
        state.width = width * 2;
        state.height = width * 2;
      }
    });
    
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0.7, // Transparencia para que no abrume
        }}
      />
    </div>
  );
}
