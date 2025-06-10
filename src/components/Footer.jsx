// Footer.jsx com suporte a tema escuro e internacionalização
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <motion.footer
      className="bg-prussian text-pearl dark:bg-pearl dark:text-prussian text-center py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p>&copy; {new Date().getFullYear()} {t("footer_texto")}</p>
    </motion.footer>
  );
}
