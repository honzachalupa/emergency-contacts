"use client";

import { alphanumericSorter } from "@/helpers";
import { useTranslations } from "@/hooks";
import { IItem, IItemsGroup } from "@/types";
import { Button, Sheet, Typography } from "@mui/joy";
import { forwardRef, useImperativeHandle, useState } from "react";
import data from "../../../data";
import { Icons } from "../Icons";
import { Filter, TFilter, initialFilter } from "./Filter";
import { Item, formatItemId } from "./Item";

type FocusItemIdType = IItem["id"] | null;

export interface IItemsListRef {
  focusItem: (id: FocusItemIdType) => void;
}

export const ItemsList = forwardRef<IItemsListRef, unknown>((_, ref) => {
  const { t } = useTranslations();

  const [filter, setFilter] = useState<TFilter>(initialFilter);
  const [selectedItemId, setSelectedItemId] = useState<FocusItemIdType>(null);

  const groups: IItemsGroup[] = [
    {
      id: "hospital",
      label: t("common.hospitals"),
    },
    {
      id: "pharmacy",
      label: t("common.pharmacies"),
    },
    {
      id: "vet",
      label: t("common.vets"),
    },
  ];

  const filteredGroups = groups.filter(({ id }) =>
    filter.categories.includes(id)
  );

  const filterItems = (items: IItem[]) =>
    filter.district
      ? items.filter((item) =>
          item.address.district
            .toLowerCase()
            .includes(filter.district!.toLowerCase())
        )
      : items;

  const focusItem = (id: FocusItemIdType) => {
    setSelectedItemId(id);

    if (id) {
      document
        .getElementById(formatItemId(id))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useImperativeHandle(
    ref,
    (): IItemsListRef => ({
      focusItem: (id: FocusItemIdType) => focusItem(id),
    })
  );

  return (
    <>
      <Filter groups={groups} onChange={setFilter} />

      {filteredGroups.map(({ id, label }) => {
        const filteredItems = filterItems(
          data.filter(({ category }) => category === id)
        ).sort((a, b) =>
          alphanumericSorter(a.address.district, b.address.district)
        );

        return (
          <Sheet
            key={id}
            variant="outlined"
            component="section"
            sx={{ p: 2, mb: 2 }}
          >
            <Typography level="h2">{label}</Typography>

            {filteredItems.map((item) => (
              <Item
                key={item.id}
                isHighlighted={selectedItemId === item.id}
                {...item}
              />
            ))}
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
});

ItemsList.displayName = "ItemsList";
