import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemStatement() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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
    <section id="proyecto" 
      ref={containerRef} 
      className="w-full min-h-0 flex items-center justify-center bg-black px-4 sm:px-6 md:px-20 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <div className="project-heading"><p className="section-kicker">01 / EL PROPÓSITO</p><h2>Nutrición pensada<br />para el día a día.</h2><span className="project-symbol" aria-hidden="true">Fe<span>+</span></span></div>
        <div className="project-body" ref={textRef}><p className="section-kicker">Resumen del Proyecto</p><p>
          La anemia por deficiencia de hierro es una de las afecciones nutricionales más prevalentes a nivel mundial. El desarrollo de <span className="text-white">gomitas nutracéuticas</span> representa una estrategia altamente efectiva para mejorar la <span className="text-[#e63946]">adherencia al tratamiento</span>, especialmente en poblaciones infantiles y adultas con dificultad para deglutir tabletas convencionales.
        </p><a href="#formulacion" className="project-link">Descubre la formulación <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
  );
}
