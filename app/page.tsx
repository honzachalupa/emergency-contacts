import { useTranslations } from "@/hooks";
import { Typography } from "@mui/joy";
import { ItemsList } from "./_components/ItemsList";

export default function Home({ params: { lang } }: any) {
  const { t } = useTranslations();

  return (
    <main className="p-5">
      <Typography level="h1">{t("app.name")}</Typography>
      <Typography>{t("app.description")}</Typography>

      <ItemsList />
    </main>
  );
}
