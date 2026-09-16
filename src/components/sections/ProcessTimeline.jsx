import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const stepsRef = useRef([]);

  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animar la línea conectora hacia abajo
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%',
            end: 'bottom 80%',
            scrub: true,
          }
        }
      );

      gsap.fromTo(
        stepsRef.current,
        { opacity: 0, x: -50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
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
    <section ref={containerRef} className="w-full bg-black py-32 px-6 md:px-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="flex-1">
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 text-white">
            5. Proceso de Elaboración
          </h3>
          
          <div className="flex flex-col gap-10 ml-4 pl-10 relative">
            <div ref={lineRef} className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#e63946] via-[#ff9f1c] to-white/10"></div>
            {steps.map((step, index) => (
              <div key={index} ref={addToRefs} className="relative">
                <div className="absolute -left-[57px] top-0 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center text-xs font-bold text-white shadow-[0_0_15px_rgba(230,57,70,0.3)]">
                  {step.num}
                </div>
                <h4 className="text-2xl font-medium mb-2 text-white/90">{step.title}</h4>
                <p className="text-neutral-500 font-light max-w-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 lg:pl-20">
          <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-10 text-neutral-400">
            Consideraciones Técnicas
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
