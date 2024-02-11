"use client";

import { alphanumericSorter } from "@/helpers";
import { useTranslations } from "@/hooks";
import { IItem, IItemsGroup } from "@/types";
import { Button, Sheet, Typography } from "@mui/joy";
import { useState } from "react";
import data from "../../../data";
import { Icons } from "../Icons";
import { Filter, TFilter, initialFilter } from "./Filter";
import { Item } from "./Item";

export const ItemsList = () => {
  const { t } = useTranslations();

  const [filter, setFilter] = useState<TFilter>(initialFilter);

  const groups: IItemsGroup[] = [
    {
      id: "hospital",
      label: t("common.hospitals"),
      items: data.filter(({ type }) => type === "hospital"),
    },
    {
      id: "pharmacy",
      label: t("common.pharmacies"),
      items: data.filter(({ type }) => type === "pharmacy"),
    },
    {
      id: "vet",
      label: t("common.vets"),
      items: data.filter(({ type }) => type === "vet"),
    },
  ];

  const filteredGroups = groups.filter(({ id }) => filter.types.includes(id));

  const filterItems = (items: IItem[]) =>
    filter.district
      ? items.filter((item) =>
          item.address.district
            .toLowerCase()
            .includes(filter.district!.toLowerCase())
        )
      : items;

  return (
    <>
      <Filter groups={groups} onChange={setFilter} />

      {filteredGroups.map(({ id, label, items }) => {
        const filteredItems = filterItems(items).sort((a, b) =>
          alphanumericSorter(a.address.district, b.address.district)
        );

        return (
          <Sheet key={id} variant="outlined" sx={{ p: 2, mb: 2 }}>
            <section>
              <Typography level="h2">{label}</Typography>

              {filteredItems.map((item) => (
                <Item key={item.name} {...item} />
              ))}
            </section>
          </Sheet>
        );
      })}

      {!filteredGroups.length && <Typography>Upravte filtr</Typography>}

      <Button
        component="a"
        href={`mailto:${t("app.supportEmailAddress")}`}
        variant="outlined"
        startDecorator={<Icons.ReportProblem />}
        sx={{ mt: 2 }}
      >
        {t("app.reportProblem")}
      </Button>
    </>
  );
};
