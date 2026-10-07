import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const hotspotData = [
  {
    id: 1,
    title: "Alta Biodisponibilidad",
    subtitle: "Bisglicinato Ferroso",
    content: "A diferencia del sulfato ferroso tradicional, el bisglicinato está quelado (unido a aminoácidos), lo que le permite atravesar intacto el estómago y absorberse directamente en el intestino. Esto elimina el estreñimiento, las náuseas y el sabor metálico.",
    x: 35, // % left
    y: 35  // % top
  },
  {
    id: 2,
    title: "Absorción Multiplicada",
    subtitle: "Vitamina C",
    content: "Actúa como un poderoso agente reductor, manteniendo el hierro en su estado ferroso (Fe2+) y multiplicando hasta por 3 su absorción neta en el tracto gastrointestinal.",
    x: 65,
    y: 40
  },
  {
    id: 3,
    title: "Matriz Vegetal",
    subtitle: "Base de Pectina",
    content: "Proporciona una textura de mordida limpia (clean bite) que se deshace fácilmente en la boca, ideal para niños, sin usar gelatina animal.",
    x: 50,
    y: 75
  }
];

export default function InteractiveHotspots() {
  const [activeSpot, setActiveSpot] = useState(null);
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const textContainerRef = useRef(null);
  const spotsRef = useRef([]);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  // Animación de entrada inicial al hacer scroll
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        spotsRef.current.flatMap(spot => Array.from(spot?.children ?? []).slice(0, 2)),
        { scale: 0.8, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true
          }
        }
      );
    }, containerRef);
    return () => media.revert();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('hotspot-open', Boolean(activeSpot));
    return () => document.documentElement.classList.remove('hotspot-open');
  }, [activeSpot]);

  const closeExploration = () => setActiveSpot(null);

  const handleSpotClick = (spot, trigger) => {
    if (!spot) return;
    triggerRef.current = trigger;
    setActiveSpot(spot);
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (activeSpot) {
      if (!dialog.open) dialog.showModal();
      closeButtonRef.current?.focus({ preventScroll: true });
    } else if (dialog.open) {
      dialog.close();
      triggerRef.current?.focus({ preventScroll: true });
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      gsap.to(imageContainerRef.current, {
        ...(activeSpot && { transformOrigin: `${activeSpot.x}% ${activeSpot.y}%` }),
        scale: activeSpot ? 4 : 1,
        duration: reducedMotion ? 0 : 1.2,
        ease: "power4.inOut",
        overwrite: true,
      });
      if (activeSpot) {
        gsap.fromTo(textContainerRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: reducedMotion ? 0 : 0.8, delay: reducedMotion ? 0 : 0.4, ease: "power3.out" }
        );
      }
    }, containerRef);
    // Stop pending tweens before another selection or unmount.
    return () => ctx.revert();
  }, [activeSpot]);

  return (
    <section id="sinergia" ref={containerRef} className="w-full min-h-[760px] bg-black relative flex flex-col items-center justify-center overflow-hidden border-t border-white/10">
      
      {/* Título Superior (Desaparece al hacer zoom) */}
      <div className={`hotspot-heading text-center z-10 transition-all duration-700 ${activeSpot ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
          3. Anatomía de la <span className="text-[#e63946]">Sinergia</span>
        </h2>
        <p className="text-neutral-400 font-light max-w-2xl mx-auto text-base md:text-lg px-4">
          Haz clic en los puntos interactivos para sumergirte en la estructura y descubrir la ciencia de la formulación a nivel molecular.
        </p>
      </div>

      {/* Contenedor Flotante Central de la Imagen (Sin caja limitante visible) */}
      <div className="hotspot-image relative z-0 flex items-center justify-center">
        
        {/* Este div es el que hace zoom */}
        <div className="absolute inset-0 w-full h-full" ref={imageContainerRef}>
          <img 
            src="/assets/gummy_asset.jpg" 
            alt="Estructura de la gomita" 
            className="w-full h-full object-cover mix-blend-screen opacity-60 rounded-full"
          />

          {/* Puntos Interactivos */}
          {hotspotData.map((spot, index) => (
            <button
              key={spot.id}
              ref={el => { spotsRef.current[index] = el; }}
              onClick={(e) => { e.stopPropagation(); handleSpotClick(spot, e.currentTarget); }}
              className={`absolute z-20 w-12 h-12 -ml-6 -mt-6 group focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 cursor-pointer transition-all duration-500 ${activeSpot && activeSpot.id !== spot.id ? 'opacity-0 scale-50 pointer-events-none' : 'opacity-100 scale-100'}`}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              aria-label={`Ver información de ${spot.title}`}
              aria-haspopup="dialog"
              aria-controls="hotspot-dialog"
              tabIndex={activeSpot ? -1 : 0}
            >
              <div className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${activeSpot?.id === spot.id ? 'border-white scale-125 bg-white/10' : 'border-[#ff9f1c]/50 group-hover:border-white bg-black/40 backdrop-blur-sm'}`}></div>
              <div className={`absolute inset-[14px] rounded-full transition-all duration-300 ${activeSpot?.id === spot.id ? 'bg-white shadow-[0_0_30px_#fff] scale-75' : 'bg-[#e63946] group-hover:bg-[#ff9f1c] shadow-[0_0_15px_#e63946]'}`}></div>
              
              {!activeSpot && <div className="absolute inset-0 rounded-full border border-[#e63946] animate-ping opacity-30 pointer-events-none"></div>}
            </button>
          ))}
        </div>

      </div>

      <dialog
        id="hotspot-dialog"
        ref={dialogRef}
        aria-labelledby="hotspot-title"
        aria-describedby="hotspot-description"
        onCancel={(event) => { event.preventDefault(); closeExploration(); }}
        onClose={closeExploration}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeExploration();
        }}
        className={`fixed inset-0 m-0 w-full h-dvh max-w-none max-h-none border-0 bg-black/70 backdrop-blur-[4px] text-white overflow-y-auto p-6 md:p-12 ${activeSpot ? 'flex' : 'hidden'} items-center justify-center`}
      >
        <div 
          ref={textContainerRef}
          className="opacity-0 translate-y-10 w-full min-w-0 max-w-2xl my-auto shrink-0 text-center flex flex-col items-center"
        >
          <div className="text-xs md:text-sm uppercase tracking-[0.4em] text-[#ff9f1c] mb-6 bg-black/30 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
            {activeSpot?.subtitle}
          </div>
          <h3 id="hotspot-title" className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tighter drop-shadow-2xl">
            {activeSpot?.title}
          </h3>
          <p id="hotspot-description" className="text-neutral-300 font-light leading-relaxed text-base sm:text-xl md:text-2xl drop-shadow-lg">
            {activeSpot?.content}
          </p>
          
          <button 
            ref={closeButtonRef}
            onClick={closeExploration}
            className="mt-14 px-10 py-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs font-bold"
          >
            Cerrar Exploración
          </button>
        </div>
      </dialog>

    </section>
  );
}
