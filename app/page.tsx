import { useTranslations } from "@/hooks";
import { ItemsList } from "./_components/ItemsList";

export default function Home({ params: { lang } }: any) {
  const { t } = useTranslations("cs");

  return (
    <main className="p-5">
      <h1 className="font-bold">{t("app.name")}</h1>
      <h2>{t("app.description")}</h2>

      <ItemsList />
    </main>
  );
}
