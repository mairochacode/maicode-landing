// src/pages/Portfolio.jsx
import React from 'react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 px-6 bg-white text-prussian">
      <h2 className="text-3xl font-bold text-center mb-10">Portfólio</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-pearl p-4 rounded shadow">
          <h3 className="font-semibold text-lg">Site para Psicóloga</h3>
          <p>Landing page com agendamento integrado e visual acolhedor.</p>
        </div>
        <div className="bg-pearl p-4 rounded shadow">
          <h3 className="font-semibold text-lg">Bot para Instagram</h3>
          <p>Automação de respostas para interação com seguidores.</p>
        </div>
        <div className="bg-pearl p-4 rounded shadow">
          <h3 className="font-semibold text-lg">Dashboard de Vendas</h3>
          <p>Visualização de KPIs com dados atualizados em tempo real.</p>
        </div>
        <div className="bg-pearl p-4 rounded shadow">
          <h3 className="font-semibold text-lg">Sistema de Orçamento</h3>
          <p>Plataforma de geração e gerenciamento de orçamentos online.</p>
        </div>
      </div>
    </section>
  );
}