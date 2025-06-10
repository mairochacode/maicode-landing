// src/components/Header.jsx
import React from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="bg-pearl shadow px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
      <div className="flex flex-col items-center md:flex-row md:space-x-5">
        <img src={logo} alt="Logo MaiCode" className="h-16 w-auto" />
        <span className="text-center md:text-left text-base md:text-lg text-prussian italic font-medium">
          Soluções digitais sob medida.
        </span>
      </div>
      <nav className="flex space-x-4 text-prussian font-medium text-sm md:text-base">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#services" className="hover:underline">Serviços</a>
        <a href="#about" className="hover:underline">Sobre</a>
        <a href="#portfolio" className="hover:underline">Portfólio</a>
      </nav>
    </header>
  );
}
