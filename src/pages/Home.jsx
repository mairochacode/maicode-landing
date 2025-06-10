// Home.jsx com suporte a tema escuro e internacionalização
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="pt-20 pb-20 bg-pearl text-prussian dark:bg-prussian dark:text-pearl text-center">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t("home_title")}
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 dark:text-gray-300 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Criação de sites, bots e sistemas com agilidade e estilo.
      </motion.p>

      <motion.a
        href="#servicos"
        className="inline-block bg-prussian text-white dark:bg-pearl dark:text-prussian px-6 py-3 rounded-full shadow hover:scale-105 transition-all"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {t("home_button")}
      </motion.a>
    </section>
  );
}
