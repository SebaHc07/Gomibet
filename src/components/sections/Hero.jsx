import React from 'react';
import { ArrowUpRight, ArrowRight, FlaskConical, Leaf, Images } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> CONOCE GOMIBET</p>
        <h1><span className="hero-title-mask"><span className="hero-title-line">Pequeñas gomitas.</span></span><span className="hero-title-mask"><span className="hero-title-line hero-title-accent">Una propuesta<br />con propósito.</span></span></h1>
        <p className="hero-description">Desarrollo de Gomitas Fortificadas contra la Anemia. Explora sus ingredientes, conoce el proceso y descubre las experiencias de quienes las incluyen en su día a día.</p>
        <div className="hero-actions">
          <a className="primary-action" href="/producto/#formulacion">Conoce la formulación <ArrowRight size={17} aria-hidden="true" /></a>
          <a className="secondary-action" href="/proyecto/#proyecto">Sobre el proyecto <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="hero-details"><span><FlaskConical size={15} aria-hidden="true" /> Hierro + vitamina C</span><span><Leaf size={15} aria-hidden="true" /> Alimento funcional</span></div>
        <a className="hero-proof" href="/experiencias/#testimonios"><span className="proof-avatars" aria-hidden="true"><span>KS</span><span>AC</span></span><span><strong>Historias en primera persona</strong><small>Conoce a Karen y Azumi</small></span><ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>
      <div className="hero-visual product-visual">
        <div className="product-preview-header"><span><span className="preview-dot" /> EL PRODUCTO, DE CERCA</span><span>GOMIBET</span></div>
        <div className="product-preview-photo"><img src="/images/Gemini_Generated_Image_fh1js4fh1js4fh1j.webp" alt="Una mano sostiene una gomita roja con forma de oso sobre un plato de gomitas." width="816" height="1302" fetchPriority="high" /><span className="product-preview-caption">Pequeña en tamaño.<br />Llena de detalles.</span></div>
        <div className="product-preview-footer"><div><strong>Gomitas fortificadas</strong><span>Frutos rojos / cítricos · Infantil y adultos</span></div><a href="/experiencias/#galeria" aria-label="Ver la galería de GOMIBET"><Images size={19} aria-hidden="true" /><span>Ver galería</span><ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </div>
    </section>
  );
}
