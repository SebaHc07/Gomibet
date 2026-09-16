import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechnicalSpecs() {
  const containerRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-black py-32 px-6 md:px-20 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 text-white">
          4. Tabla Comparativa de<br/>Fuentes de Hierro
        </h3>
        
        <div ref={tableRef} className="w-full overflow-x-auto hide-scrollbar">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-6 text-xl font-normal text-white w-1/4">Compound</th>
                <th className="py-6 text-sm font-normal text-neutral-500 w-1/4">Bioavailability</th>
                <th className="py-6 text-sm font-normal text-neutral-500 w-1/4">Gastric Tolerance</th>
                <th className="py-6 text-sm font-normal text-neutral-500 w-1/4">Metallic Taste</th>
              </tr>
            </thead>
            <tbody>
              {/* Highlighted Row */}
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <td className="py-6 text-lg font-medium text-white flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e63946]"></div>
                  Bisglicinato Ferroso
                </td>
                <td className="py-6 text-neutral-300">Alta (Absorción intacta)</td>
                <td className="py-6 text-neutral-300">Excelente</td>
                <td className="py-6 text-neutral-300">Nulo/Bajo</td>
              </tr>
              <tr className="border-b border-white/5 group hover:bg-white/[0.01] transition-colors">
                <td className="py-6 text-neutral-400 pl-4 group-hover:text-neutral-300">Sulfato Ferroso</td>
                <td className="py-6 text-neutral-500">Moderada</td>
                <td className="py-6 text-neutral-500">Baja</td>
                <td className="py-6 text-neutral-500">Alto</td>
              </tr>
              <tr className="border-b border-white/5 group hover:bg-white/[0.01] transition-colors">
                <td className="py-6 text-neutral-400 pl-4 group-hover:text-neutral-300">Fumarato Ferroso</td>
                <td className="py-6 text-neutral-500">Moderada</td>
                <td className="py-6 text-neutral-500">Media</td>
                <td className="py-6 text-neutral-500">Medio</td>
              </tr>
              <tr className="border-b border-white/5 group hover:bg-white/[0.01] transition-colors">
                <td className="py-6 text-neutral-400 pl-4 group-hover:text-neutral-300">Gluconato Ferroso</td>
                <td className="py-6 text-neutral-500">Buena</td>
                <td className="py-6 text-neutral-500">Buena</td>
                <td className="py-6 text-neutral-500">Bajo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
