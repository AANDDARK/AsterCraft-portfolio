import globalSchemas from "app/config/seo";
import { SITE_URL } from "@shared/config";
/* @todo requires translation */
import { faqSectionTranslations } from "@widgets/faq-section";

const structuredData = {
  ...globalSchemas.en,
} as const;

export default structuredData;
