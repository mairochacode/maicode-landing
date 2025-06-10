// src/pages/Services.jsx
import React from 'react';

export default function Services() {
  return (
    <section id="services" className="py-16 px-6 bg-white text-prussian">
      <h2 className="text-3xl font-bold text-center mb-10">Serviços</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Sites Profissionais</h3>
          <p>Landing pages, portfólios e sites institucionais modernos e responsivos.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Bots Automatizados</h3>
          <p>Automação de tarefas via bots personalizados para redes sociais, WhatsApp e mais.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Dashboards Inteligentes</h3>
          <p>Visualize dados com dashboards sob medida, conectados a APIs e bancos de dados.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Sistemas Web</h3>
          <p>Plataformas e aplicações completas para negócios digitais.</p>
        </div>
      </div>
    </section>
  );
}