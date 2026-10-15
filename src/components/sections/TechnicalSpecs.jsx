import React from 'react';

const sources = [
  { name: 'Bisglicinato Ferroso', availability: 'Alta (Absorción intacta)', tolerance: 'Excelente', taste: 'Nulo/Bajo' },
  { name: 'Sulfato Ferroso', availability: 'Moderada', tolerance: 'Baja', taste: 'Alto' },
  { name: 'Fumarato Ferroso', availability: 'Moderada', tolerance: 'Media', taste: 'Medio' },
  { name: 'Gluconato Ferroso', availability: 'Buena', tolerance: 'Buena', taste: 'Bajo' },
];

export default function TechnicalSpecs() {
  return (
    <section id="comparativa" className="comparison-section">
      <div className="section-container">
        <p className="section-kicker">COMPARA LAS FUENTES DE HIERRO</p>
        <div className="comparison-heading" data-reveal><h2>Distintas fuentes.<br /><span>Una mirada en detalle.</span></h2><p>Tabla Comparativa de Fuentes de Hierro.<br />Biodisponibilidad, tolerancia y sabor, lado a lado.</p></div>
        <table className="comparison-table" data-reveal>
          <caption className="sr-only">Comparación de cuatro fuentes de hierro</caption>
          <thead><tr><th scope="col">Compuesto</th><th scope="col">Biodisponibilidad</th><th scope="col">Tolerancia gástrica</th><th scope="col">Sabor metálico</th></tr></thead>
          <tbody>{sources.map((source, i) => <tr key={source.name} className={i === 0 ? 'recommended-source' : ''}><th scope="row">{source.name}{i === 0 && <span className="source-badge">Opción recomendada</span>}</th><td>{source.availability}</td><td>{source.tolerance}</td><td>{source.taste}</td></tr>)}</tbody>
        </table>
        <div className="comparison-cards">{sources.map((source, i) => <article key={source.name} className={i === 0 ? 'recommended-source' : ''}>
          <h3>{source.name}</h3>{i === 0 && <span className="source-badge">Opción recomendada</span>}
          <dl><div><dt>Biodisponibilidad</dt><dd>{source.availability}</dd></div><div><dt>Tolerancia gástrica</dt><dd>{source.tolerance}</dd></div><div><dt>Sabor metálico</dt><dd>{source.taste}</dd></div></dl>
        </article>)}</div>
      </div>
    </section>
  );
}
