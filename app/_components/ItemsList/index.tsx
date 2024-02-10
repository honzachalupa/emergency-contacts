import { useTranslations } from "@/hooks";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { Button, Sheet, Typography } from "@mui/joy";
import { useMemo } from "react";
import data from "../../../data";
import { Item } from "./Item";

export const ItemsList = () => {
  const { t } = useTranslations();

  const sections = useMemo(
    () => [
      {
        label: t("common.hospitals"),
        items: data.filter(({ type }) => type === "hospital"),
      },
      {
        label: t("common.pharmacies"),
        items: data.filter(({ type }) => type === "pharmacy"),
      },
      {
        label: t("common.vets"),
        items: data.filter(({ type }) => type === "vet"),
      },
    ],
    [t]
  );

  return (
    <>
      {sections.map(({ label, items }) => (
        <Sheet key={label} variant="outlined">
          <section className="my-2 py-2">
            <Typography level="h2">{label}</Typography>

            <ul>
              {items.map((item) => (
                <Item key={item.name} {...item} />
              ))}
            </ul>
          </section>
        </Sheet>
      ))}

      <Button variant="outlined" startDecorator={<ReportProblemIcon />}>
        {t("app.reportProblem")}
      </Button>
    </>
  );
};
