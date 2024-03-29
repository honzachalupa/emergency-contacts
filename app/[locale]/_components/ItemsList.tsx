"use client";

import DataContext from "@/context/DataContext";
import { IItem } from "@/types";
import { Typography } from "@mui/joy";
import { useTranslations } from "next-intl";
import { forwardRef, useContext, useImperativeHandle, useState } from "react";
import { Filter, TFilter, initialFilter } from "./ItemsList.Filter";
import { Item, formatItemHtmlId } from "./ItemsList.Item";

export interface IItemsListRef {
  focusItem: (name: IItem["name"] | null) => void;
}

export const ItemsList = forwardRef<IItemsListRef, unknown>((_, ref) => {
  const t = useTranslations();

  const { items } = useContext(DataContext);

  const [filter, setFilter] = useState<TFilter>(initialFilter);
  const [selectedItemName, setSelectedItemName] = useState<
    IItem["name"] | null
  >(null);

  const filteredItems = items.filter(
    ({ category, address }) =>
      filter.categories.includes(category) &&
      (!filter.district ||
        address.district.toLowerCase().includes(filter.district.toLowerCase()))
  );

  const focusItem = (name: IItem["name"] | null) => {
    setSelectedItemName(name);

    if (name) {
      document
        .getElementById(formatItemHtmlId(name))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useImperativeHandle(
    ref,
    (): IItemsListRef => ({
      focusItem: (name: IItem["name"] | null) => focusItem(name),
    })
  );

  return (
    <>
      <Filter onChange={setFilter} />

      {filteredItems.map((item) => (
        <Item
          key={item.name}
          isHighlighted={selectedItemName === item.name}
          {...item}
        />
      ))}

      {!filteredItems.length && <Typography>Upravte filtr</Typography>}
    </>
  );
});

ItemsList.displayName = "ItemsList";
