"use client";

import data from "@/data";
import { useTranslations } from "@/hooks";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Box, Stack, Typography } from "@mui/joy";
import { useRef } from "react";
import { Drawer } from "./_components/Drawer";
import { IZS } from "./_components/IZS";
import { IItemsListRef, ItemsList } from "./_components/ItemsList";
import { IMarker, Map } from "./_components/Map";

const markers: IMarker[] = data.map(({ name, category, coordinates }) => ({
  category,
  name,
  coordinates,
}));

export default function Home({ params: { lang } }: any) {
  const { t } = useTranslations();
  const isMobile = useIsMobile();

  const listRef = useRef<IItemsListRef>(null);

  return (
    <Box component="main">
      <Map
        markers={markers}
        onMarkerClick={(name) => listRef.current?.focusItem(name!)}
      />

      <Drawer anchor="right">
        <IZS />
      </Drawer>

      <Drawer
        anchor={isMobile ? "bottom" : "left"}
        fill
        header={
          <Stack>
            <Typography level="h1">{t("app.name")}</Typography>
            <Typography>{t("app.description")}</Typography>
          </Stack>
        }
      >
        <ItemsList ref={listRef} />
      </Drawer>
    </Box>
  );
}
