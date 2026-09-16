import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemStatement() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 100, rotationX: 20, transformPerspective: 1000 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'center center',
            scrub: 1.5, // Más suave
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="w-full min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 md:px-20 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={textRef}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.3] md:leading-[1.3] tracking-tight text-white"
        >
          <span className="text-neutral-600 block mb-4 md:mb-6 text-sm md:text-xl tracking-widest uppercase">1. Resumen del Proyecto</span>
          La anemia por deficiencia de hierro es una de las afecciones nutricionales más prevalentes a nivel mundial. El desarrollo de <span className="text-white">gomitas nutracéuticas</span> representa una estrategia altamente efectiva para mejorar la <span className="text-[#e63946]">adherencia al tratamiento</span>, especialmente en poblaciones infantiles y adultas con dificultad para deglutir tabletas convencionales.
        </h2>
      </div>
    </section>
  );
}
