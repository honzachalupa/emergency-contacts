import { useTranslations } from "@/hooks";
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
        <section key={label} className="border-t border-t-black my-2 py-2">
          <h3 className="font-bold">{label}</h3>

          <ul>
            {items.map((item) => (
              <Item key={item.name} {...item} />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};
