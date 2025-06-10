import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import logo from "../assets/logo.png";

export default function Header({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#servicos", label: t("menu_servicos") },
    { href: "#portfolio", label: t("menu_portfolio") },
    { href: "#contato", label: t("menu_contato") },
  ];

  const toggleLanguage = () => {
    const nextLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(nextLang);
  };

  return (
    <motion.header
      className={`bg-white dark:bg-prussian p-4 w-full transition-shadow duration-300 z-50 ${
        scrolled ? "shadow-md" : ""
      }`}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo MaiCode" className="h-10 w-auto" />
          <span className="text-sm sm:text-base text-[#003049] dark:text-pearl font-medium italic hidden sm:inline">
            Soluções digitais sob medida para você
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6 text-gray-700 dark:text-pearl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative hover:text-[#003049] dark:hover:text-pearl transition duration-300
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 
                  after:bg-[#003049] dark:after:bg-pearl hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão idioma */}
          <button
            onClick={toggleLanguage}
            className="text-sm text-[#003049] dark:text-pearl border px-2 py-1 rounded"
          >
            {i18n.language === "pt" ? "EN" : "PT"}
          </button>

          {/* Botão de tema */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-[#003049] dark:text-pearl"
            aria-label="Alternar tema"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Menu mobile toggle */}
          <button
            className="md:hidden text-[#003049] dark:text-pearl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-prussian shadow-md mt-2 rounded-b-lg px-6 py-4 text-center space-y-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-[#003049] dark:text-pearl font-medium"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
