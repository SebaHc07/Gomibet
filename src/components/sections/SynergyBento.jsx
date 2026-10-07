import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Zap, ShieldCheck, Microscope } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SynergyBento() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      cardsRef.current.forEach(card => {
        if (card.getBoundingClientRect().top < window.innerHeight * 0.9) return;
        gsap.from(card, {
          opacity: 0, y: 32, duration: 0.75, ease: 'power3.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: card, start: 'top 94%', once: true },
        });
      });
    });
    return () => media.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="formulacion" ref={containerRef} className="w-full bg-black py-32 px-6 md:px-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
            2. Formulación e<br/>Ingredientes Clave
          </h3>
          <span className="hidden lg:block text-sm uppercase tracking-[0.2em] text-neutral-500">Mecanismo de Sinergia</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[auto]">
          {/* Card 1: Hierro */}
          <div 
            ref={addToRefs}
            className="lg:col-span-2 min-h-[300px] relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 lg:p-12 flex flex-col justify-between group"
          >
            <div className="absolute top-0 left-0 w-full h-full glow-iron opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="z-10 flex justify-between items-start mb-12">
              <span className="text-xs uppercase tracking-widest text-[#e63946]">Principio Activo</span>
              <Zap className="w-6 h-6 text-[#e63946]" strokeWidth={1.5} />
            </div>
            <div className="z-10">
              <h4 className="text-3xl font-medium mb-4">Bisglicinato Ferroso</h4>
              <p className="text-neutral-400 font-light leading-relaxed max-w-xl text-lg">
                Hierro quelado con dos moléculas de glicina. Ofrece máxima absorción intestinal, reduce drásticamente las molestias gastrointestinales y atenúa el sabor metálico. <span className="text-white">(Opción Recomendada)</span>
              </p>
            </div>
          </div>

          {/* Card 2: Vitamina C */}
          <div 
            ref={addToRefs}
            className="lg:col-span-1 min-h-[300px] relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 lg:p-12 flex flex-col justify-between group"
          >
            <div className="absolute top-0 left-0 w-full h-full glow-vitc opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="z-10 flex justify-between items-start mb-12">
              <span className="text-xs uppercase tracking-widest text-[#ff9f1c]">Potenciador</span>
            </div>
            <div className="z-10">
              <h4 className="text-2xl font-medium mb-4 text-white">Vitamina C <br/><span className="text-lg text-neutral-500 font-normal">(Ácido Ascórbico)</span></h4>
              <p className="text-neutral-400 font-light text-sm leading-relaxed">
                Reduce el hierro férrico (Fe³⁺) a ferroso (Fe²⁺) en el medio gástrico, previniendo complejos insolubles y <strong>multiplicando la tasa de absorción hasta por 3 veces.</strong>
              </p>
            </div>
          </div>

          {/* Card 3: Imagen Abstracta Sinergia */}
          <div 
            ref={addToRefs}
            className="lg:col-span-1 rounded-3xl bg-white/5 border border-white/10 p-1 flex items-center justify-center overflow-hidden relative min-h-[300px] md:min-h-[400px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(230,57,70,0.15)_0%,rgba(0,0,0,0)_70%)] z-10"></div>
            <img 
              src="/assets/synergy_asset.jpg" 
              alt="Sinergia Bioquímica" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-60 mix-blend-screen scale-110"
            />
            
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <span className="text-xs uppercase tracking-widest text-white drop-shadow-md">Sinergia Fe²⁺ + VitC</span>
            </div>
          </div>

          {/* Card 4: Base y Sabor */}
          <div 
            ref={addToRefs}
            className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 lg:p-12 flex flex-col justify-between group"
          >
            <div className="z-10 max-w-2xl mb-8">
              <h4 className="text-2xl font-medium mb-2 flex items-center gap-3"><Microscope className="w-6 h-6 text-neutral-400"/> Base Gelificante y Texturizante</h4>
              <p className="text-neutral-400 font-light mb-6">
                <strong>Pectina Cítrica (Vegetal):</strong> Proporciona textura suave, estable a rangos de pH ácidos. Apto para veganos.<br/>
                <strong>Gelatina (Animal):</strong> Aporta consistencia elástica (Bloom 200-250).
              </p>
            </div>
            <div className="z-10 max-w-2xl border-t border-white/10 pt-6">
              <h4 className="text-xl font-medium mb-2 text-white/80">Sistema Modificador de Sabor</h4>
              <p className="text-neutral-400 font-light text-sm">
                Pulpa concentrada de frutos rojos o maracuyá, Ácido Cítrico/Málico y Endulzantes (eritritol + estevia) para contrarrestar la nota metálica del hierro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
