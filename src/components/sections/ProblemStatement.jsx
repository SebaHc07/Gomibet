import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemStatement() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      if (textRef.current.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      gsap.from(textRef.current, {
        opacity: 0, y: 24, duration: 0.7, ease: 'power3.out',
        clearProps: 'opacity,transform',
        scrollTrigger: { trigger: textRef.current, start: 'top 94%', once: true },
      });
    }, containerRef);
    return () => media.revert();
  }, []);

  return (
    <section id="proyecto" 
      ref={containerRef} 
      className="w-full min-h-0 flex items-center justify-center bg-black px-4 sm:px-6 md:px-20 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <div className="project-heading"><p className="section-kicker">SOBRE EL PROYECTO</p><h2>Nutrición pensada<br />para el día a día.</h2><span className="project-symbol" aria-hidden="true">Fe<span>+</span></span></div>
        <div className="project-body" ref={textRef}><p className="section-kicker">Resumen del Proyecto</p><p>
          La anemia por deficiencia de hierro es una de las afecciones nutricionales más prevalentes a nivel mundial. El desarrollo de <span className="text-white">gomitas nutracéuticas</span> representa una estrategia altamente efectiva para mejorar la <span className="text-[#a43f32]">adherencia al tratamiento</span>, especialmente en poblaciones infantiles y adultas con dificultad para deglutir tabletas convencionales.
        </p><a href="/producto/#formulacion" className="project-link">Descubre la formulación <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
  );
}
