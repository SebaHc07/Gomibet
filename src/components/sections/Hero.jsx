import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> CIENCIA QUE SE DISFRUTA</p>
        <h1><span className="hero-title-mask"><span className="hero-title-line">Gomitas</span></span><span className="hero-title-mask"><span className="hero-title-line hero-title-accent">Fortificadas.</span></span></h1>
        <p className="hero-description">Desarrollo de Gomitas Fortificadas contra la Anemia.</p>
        <div className="hero-actions">
          <a className="primary-action" href="#formulacion">Explorar la formulación <ArrowUpRight size={18} /></a>
          <a className="secondary-action" href="#galeria">Ver las gomitas <ArrowDown size={16} /></a>
        </div>
        <a className="hero-proof" href="#testimonios"><span className="proof-avatars" aria-hidden="true"><span>KS</span><span>AC</span></span><span><strong>Conoce sus historias</strong><small>Karen y Azumi, en primera persona</small></span><ArrowUpRight size={16} aria-hidden="true" /></a>
        <div className="hero-metadata">
          <div><span>Categoría</span><strong>Alimento Funcional</strong></div>
          <div><span>Público Objetivo</span><strong>Infantil y Adultos</strong></div>
          <div><span>Sabor Objetivo</span><strong>Frutos Rojos / Cítricos</strong></div>
        </div>
      </div>
      <div className="hero-visual product-visual">
        <div className="product-image-label"><span>UN PEQUEÑO FORMATO.</span><span>UNA GRAN IDEA.</span></div>
        <img src="/images/gummy_hero.jpg" alt="Imagen conceptual de una gomita de frutos rojos" fetchPriority="high" width="1024" height="1024" />
        <div className="molecule-label label-iron"><span>Fe</span><div><strong>Hierro</strong><small>Bisglicinato ferroso</small></div></div>
        <div className="molecule-label label-vitamin"><span>C</span><div><strong>Vitamina C</strong><small>Ácido ascórbico</small></div></div>
        <p className="visual-caption">IMAGEN CONCEPTUAL <span>Fe²⁺ + VitC</span></p>
      </div>
      <div className="hero-bottom"><span>NUTRICIÓN INTERVENCIONAL</span><a href="#proyecto">Descubre la ciencia detrás <ArrowDown size={14} /></a><span>01 — 06</span></div>
    </section>
  );
}
