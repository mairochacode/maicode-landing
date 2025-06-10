// Portfolio.jsx com suporte a tema escuro e internacionalização
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();

  const projetos = [
    { nome: t("projeto_1_nome"), descricao: t("projeto_1_desc"), id: 1 },
    { nome: t("projeto_2_nome"), descricao: t("projeto_2_desc"), id: 2 },
    { nome: t("projeto_3_nome"), descricao: t("projeto_3_desc"), id: 3 },
  ];

  return (
    <section id="portfolio" className="py-20 bg-pearl text-prussian dark:bg-prussian dark:text-pearl px-4">
      <h2 className="text-3xl font-bold text-center mb-12">{t("portfolio_titulo")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projetos.map((projeto, index) => (
          <motion.div
            key={projeto.id}
            className="bg-white dark:bg-[#1f2937] border border-gray-300 dark:border-gray-600 p-6 rounded-lg shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{projeto.nome}</h3>
            <p className="text-gray-600 dark:text-gray-300">{projeto.descricao}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
