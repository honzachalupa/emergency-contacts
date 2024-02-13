"use client";

import { DataProvider } from "@/context/DataContext";
import { useResponsive, useTranslations } from "@/hooks";
import { Box, Stack, Typography } from "@mui/joy";
import { useRef } from "react";
import { Drawer } from "../_components/Drawer";
import { IZS } from "../_components/IZS";
import { IItemsListRef, ItemsList } from "../_components/ItemsList";
import { Map } from "../_components/Map";

export default function Home({ params: { language } }: any) {
  const { t } = useTranslations(language);
  const { isMobile } = useResponsive();

  const listRef = useRef<IItemsListRef>(null);

  return (
    <DataProvider>
      <Box component="main">
        <Map onMarkerClick={(name) => listRef.current?.focusItem(name!)} />

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
    </DataProvider>
  );
}
