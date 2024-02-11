import { useTranslations } from "@/hooks";
import { Box, Typography } from "@mui/joy";
import { IZS } from "./_components/IZS";
import { ItemsList } from "./_components/ItemsList";

export default function Home({ params: { lang } }: any) {
  const { t } = useTranslations();

  return (
    <main>
      <Box sx={{ p: 2 }}>
        <Typography level="h1">{t("app.name")}</Typography>
        <Typography>{t("app.description")}</Typography>

        <IZS />

        <ItemsList />
      </Box>
    </main>
  );
}
