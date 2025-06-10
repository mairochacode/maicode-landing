// Servicos.jsx com suporte a tema escuro e internacionalização
import { Monitor, Bot, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Servicos() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Monitor size={40} />,
      title: t("servico_1_titulo"),
      description: t("servico_1_desc"),
    },
    {
      icon: <Bot size={40} />,
      title: t("servico_2_titulo"),
      description: t("servico_2_desc"),
    },
    {
      icon: <BarChart3 size={40} />,
      title: t("servico_3_titulo"),
      description: t("servico_3_desc"),
    },
  ];

  return (
    <section id="servicos" className="py-16 bg-pearl text-prussian dark:bg-prussian dark:text-pearl">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t("servicos_titulo")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-[#1f2937] border border-[#d6e2e9] rounded-xl p-6 text-center shadow transition-transform hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full border-2 border-prussian dark:border-pearl text-prussian dark:text-pearl">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
