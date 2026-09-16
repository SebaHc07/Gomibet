import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const metadataRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
        { y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', duration: 1.5, ease: 'power4.out', delay: 0.2 }
      )
      .fromTo(
        subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' },
        "-=1"
      )
      .fromTo(
        metadataRef.current.children,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
        "-=0.8"
      )
      .fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 0.4, duration: 2, ease: 'power2.out' }, // Bajamos opacidad al 40% para que no tape el texto
        "-=1.5"
      );

      // Flotación sutil
      gsap.to(imageRef.current, {
        y: -30,
        rotation: 2,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });

      // Parallax con el mouse
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(imageRef.current, {
          x: xPos,
          y: yPos - 30, // Mantenemos el offset de la flotación
          duration: 1,
          ease: 'power2.out'
        });
        
        gsap.to(titleRef.current, {
          x: -xPos * 0.5,
          y: -yPos * 0.5,
          duration: 1,
          ease: 'power2.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      
      <img 
        ref={imageRef}
        src="/assets/gummy_asset.jpg" 
        alt="Abstract Gummy Asset" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] object-cover opacity-0 pointer-events-none z-0 mix-blend-screen"
      />

      {/* Un overlay radial sutil para asegurar que el centro donde va el texto siempre sea oscuro */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.9)_100%)] z-0 pointer-events-none"></div>

      <div className="z-10 text-center px-4 mt-20 relative">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] text-white"
        >
          Gomitas <br />
          Fortificadas
        </h1>
        <p 
          ref={subtitleRef}
          className="mt-8 text-lg md:text-2xl text-neutral-400 font-light max-w-4xl mx-auto tracking-tight"
        >
          Desarrollo de Gomitas Fortificadas contra la Anemia.
        </p>

        <div ref={metadataRef} className="mt-16 flex flex-wrap justify-center gap-10 md:gap-16 text-xs md:text-sm uppercase tracking-widest text-neutral-500 font-medium">
          <div className="flex flex-col gap-2 items-center">
            <span className="text-white/30 text-[10px] tracking-[0.3em]">Categoría</span>
            <span className="text-[#e63946]">Alimento Funcional</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-white/30 text-[10px] tracking-[0.3em]">Público Objetivo</span>
            <span className="text-white/80">Infantil y Adultos</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-white/30 text-[10px] tracking-[0.3em]">Sabor Objetivo</span>
            <span className="text-[#ff9f1c]">Frutos Rojos / Cítricos</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50 flex flex-col items-center gap-2 z-10">
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}
