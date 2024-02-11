"use client";

import data from "@/data";
import { useTranslations } from "@/hooks";
import { Box, Stack, Typography } from "@mui/joy";
import { useRef } from "react";
import { Drawer } from "./_components/Drawer";
import { IZS } from "./_components/IZS";
import { IItemsListRef, ItemsList } from "./_components/ItemsList";
import { IMarker, Map } from "./_components/Map";

const markers: IMarker[] = data.map(({ id, name, category, coordinates }) => ({
  id,
  category,
  name,
  coordinates,
}));

export default function Home({ params: { lang } }: any) {
  const { t } = useTranslations();

  const listRef = useRef<IItemsListRef>(null);

  return (
    <Box component="main" sx={{ p: 2 }}>
      <Typography level="h1">{t("app.name")}</Typography>
      <Typography>{t("app.description")}</Typography>

      <Map
        markers={markers}
        onMarkerClick={(id) => listRef.current?.focusItem(id)}
      />

      <Drawer
        header={
          <Stack>
            <Typography level="h1">{t("app.name")}</Typography>
            <Typography>{t("app.description")}</Typography>
          </Stack>
        }
      >
        <IZS />

        <ItemsList ref={listRef} />
      </Drawer>
    </Box>
  );
}
