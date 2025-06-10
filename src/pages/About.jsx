// About.jsx com suporte a tema escuro e internacionalização
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-pearl text-prussian dark:bg-prussian dark:text-pearl px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">{t("about_titulo")}</h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          {t("about_texto")}
        </p>
      </motion.div>
    </section>
  );
}
