"use client";

import { DataProvider } from "@/context/DataContext";
import { useResponsive } from "@/hooks";
import { Box, Grid, Stack, Typography } from "@mui/joy";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Drawer } from "./_components/Drawer";
import { IZS } from "./_components/IZS";
import { IItemsListRef, ItemsList } from "./_components/ItemsList";
import { LanguageSelector } from "./_components/LanguageSelector";
import { Map } from "./_components/Map";

export default function Home({ params: { language } }: any) {
  const t = useTranslations();
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
            <Grid
              container
              columns={2}
              justifyContent="space-between"
              spacing={2}
              sx={{
                flexBasis: "100%",
              }}
            >
              <Grid>
                <Stack>
                  <Typography level="h1">{t("app.name")}</Typography>
                  <Typography>{t("app.description")}</Typography>
                </Stack>
              </Grid>

              <Grid>
                <LanguageSelector />
              </Grid>
            </Grid>
          }
        >
          <ItemsList ref={listRef} />
        </Drawer>
      </Box>
    </DataProvider>
  );
}
