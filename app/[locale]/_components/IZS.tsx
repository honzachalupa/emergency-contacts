import DataContext from "@/context/DataContext";
import { Button, Card, Grid, Typography } from "@mui/joy";
import { useTranslations } from "next-intl";
import { useContext } from "react";
import { Icons } from "./Icons";

export const IZS: React.FC = () => {
  const { izsItems } = useContext(DataContext);
  const t = useTranslations();

  return (
    <Card variant="outlined">
      <Typography level="title-md" sx={{ mt: -1 }}>
        {t("common.izs")}
      </Typography>

      <Grid container columns={2} spacing={1} sx={{ flexGrow: 1 }}>
        {izsItems.map(({ name_tk, phoneNumber }) => (
          <Grid key={name_tk}>
            <Button
              component="a"
              variant="soft"
              href={`tel:${phoneNumber}`}
              startDecorator={<Icons.Phone color="error" />}
            >
              {t(name_tk)}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};
