import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const stepsRef = useRef([]);

  const lineRef = useRef(null);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(lineRef.current, { scaleY: 0, transformOrigin: 'top' }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: lineRef.current, start: 'top 75%', end: 'bottom 75%', scrub: 0.5 },
      });
      stepsRef.current.forEach(step => {
        if (step.getBoundingClientRect().top < window.innerHeight * 0.9) return;
        gsap.from(step, {
          opacity: 0, y: 24, duration: 0.65, ease: 'power3.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: step, start: 'top 94%', once: true },
        });
      });
    });
    return () => media.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current.push(el);
    }
  };

  const steps = [
    { num: '1', title: 'Mezcla & Hydration', desc: 'Hidratación de gelatina o pectina con pulpa de fruta a 60°C.' },
    { num: '2', title: 'Adición Activa', desc: 'Enfriar a <50°C e incorporar Hierro y Vitamina C (Anti-degradación).' },
    { num: '3', title: 'Moldeo', desc: 'Dosificación en moldes de silicona o almidón preformados.' },
    { num: '4', title: 'Curado & Empaque', desc: 'Refrigeración/Secado, desmolde y sellado opaco para evitar fotólisis.' }
  ];

  return (
    <section id="proceso" ref={containerRef} className="w-full min-h-0 bg-black py-24 md:py-32 px-4 sm:px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        <div className="flex-1">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-12 md:mb-16 text-white">
            5. Proceso de Elaboración
          </h3>
          
          <div className="flex flex-col gap-8 md:gap-10 ml-8 sm:ml-12 md:ml-4 pl-8 sm:pl-10 relative">
            <div ref={lineRef} className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#e63946] via-[#ff9f1c] to-white/10"></div>
            {steps.map((step, index) => (
              <div key={index} ref={addToRefs} className="relative">
                <div className="absolute -left-[49px] sm:-left-[57px] top-0 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-bold text-white shadow-[0_0_15px_rgba(230,57,70,0.3)]">
                  {step.num}
                </div>
                <h4 className="text-xl sm:text-2xl font-medium mb-2 text-white/90">{step.title}</h4>
                <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 lg:pt-32">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-8 md:mb-12 text-white border-b border-white/10 pb-6">
            Consideraciones Técnicas y Conservación
          </h3>
          
          <div className="flex flex-col gap-8">
            <div className="p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] group hover:bg-[#111] transition-colors">
              <h4 className="text-xl font-medium mb-2 text-white">Control de pH</h4>
              <p className="text-neutral-500 font-light">El pH final de la gomita debe situarse entre <strong>3.2 y 3.6</strong> para asegurar la estabilidad de la pectina y potenciar la conservación natural.</p>
            </div>
            
            <div className="p-8 rounded-3xl border border-white/10 bg-[#0a0a0a] group hover:bg-[#111] transition-colors">
              <h4 className="text-xl font-medium mb-2 text-white">Empaque Opaco</h4>
              <p className="text-neutral-500 font-light">Tanto la Vitamina C como ciertos quelatos de hierro son sensibles a la luz y al oxígeno. Se recomienda envase de <strong>PET ámbar o sobre trilaminado de aluminio</strong>.</p>
            </div>
            
            <div className="p-8 rounded-3xl border border-[#e63946]/30 bg-[#e63946]/5 group hover:bg-[#e63946]/10 transition-colors">
              <h4 className="text-xl font-medium mb-2 text-[#e63946]">Dosificación Sugerida</h4>
              <p className="text-neutral-400 font-light">Para formulación infantil, aportar entre <strong>7 mg y 10 mg de hierro elemental</strong> por gomita (cubriendo aprox. 50-70% del VDR).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
