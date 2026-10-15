import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-32 pb-10 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-4 text-white/90">
            GOMIBET
          </h2>
          <p className="text-neutral-500 text-sm max-w-xs">
            Propuesta técnica de gomitas nutracéuticas fortificadas con hierro para el tratamiento de la anemia.
          </p>
        </div>

        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-3">
            <span className="text-neutral-600 mb-2">Proyecto</span>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Formulación</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Sinergia</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Specs</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-neutral-600 mb-2">Social</span>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Awwwards</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Behance</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-6 border-t border-white/10 flex justify-between text-xs text-neutral-600">
        <p>© IESTP - ET - EIML - 2026.</p>
        <p>Gomitas Fortificadas</p>
      </div>
    </footer>
  );
}
