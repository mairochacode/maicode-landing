// Contato.jsx com suporte a tema escuro e internacionalização
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 4000);
    e.target.reset();
  };

  return (
    <section
      id="contato"
      className="py-20 px-4 bg-pearl text-prussian dark:bg-prussian dark:text-pearl"
    >
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">{t("contato_titulo")}</h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          {t("contato_texto")}
        </p>

        {enviado && (
          <motion.div
            className="mb-6 text-green-600 dark:text-green-400 font-medium bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-500 rounded p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {t("contato_sucesso")}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            placeholder={t("form_nome")}
            name="nome"
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#1f2937] text-prussian dark:text-pearl"
          />
          <input
            type="email"
            placeholder={t("form_email")}
            name="email"
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#1f2937] text-prussian dark:text-pearl"
          />
          <textarea
            placeholder={t("form_mensagem")}
            name="mensagem"
            rows="5"
            required
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-[#1f2937] text-prussian dark:text-pearl"
          ></textarea>
          <button
            type="submit"
            className="bg-prussian text-white dark:bg-pearl dark:text-prussian px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            {t("form_botao")}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
