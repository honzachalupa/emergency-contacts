"use client";

import { formatPhoneNumber, formatPhoneNumberHref } from "@/helpers";
import { useTranslations } from "@/hooks";
import { useResponsive } from "@/hooks/useResponsive";
import { IItem, IItemWithDistance, categories } from "@/types";
import {
  Box,
  Button,
  Card,
  Chip,
  Dropdown,
  Grid,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  Stack,
  Typography,
} from "@mui/joy";
import { Icons } from "./Icons";

export const formatItemHtmlId = (name: IItem["name"]) =>
  name.replace(/\s/, "-");

export const Item: React.FC<IItemWithDistance & { isHighlighted: boolean }> = ({
  category,
  name,
  address,
  contact,
  googleMapsUrl,
  distance,

  isHighlighted,
}) => {
  const { t } = useTranslations();
  const { isNarrowDrawer } = useResponsive();

  return (
    <div id={formatItemHtmlId(name)}>
      <Card variant={isHighlighted ? "solid" : "outlined"} sx={{ p: 2, my: 2 }}>
        <Grid container spacing={1} alignItems="center">
          <Grid>
            <Typography level="h3">{name}</Typography>
          </Grid>

          <Grid>
            <Stack direction="row">
              <Chip>{t(categories[category])}</Chip>

              {distance && (
                <Chip>
                  {t("common.distance")}: {distance} km
                </Chip>
              )}
            </Stack>
          </Grid>
        </Grid>

        <Box>
          <Typography>{address.street}</Typography>
          <Typography>{address.district}</Typography>

          {address.note && (
            <Typography level="body-sm">({address.note})</Typography>
          )}
        </Box>

        <Stack direction="row" spacing={1}>
          <Button
            component="a"
            href={googleMapsUrl}
            target="_blank"
            startDecorator={<Icons.Navigation />}
          >
            {t("address.navigate")}
          </Button>

          <Dropdown>
            <MenuButton variant="solid" startDecorator={<Icons.Phone />}>
              {t("contact.phoneNumber")}
            </MenuButton>

            <Menu>
              {contact.phoneNumbers.map((phoneNumber) => (
                <MenuItem key={phoneNumber}>
                  <Link
                    href={formatPhoneNumberHref(phoneNumber)}
                    underline="none"
                  >
                    {formatPhoneNumber(phoneNumber)}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Dropdown>

          {contact.emailAddress && (
            <Button
              component="a"
              href={`mailto:${contact.emailAddress}`}
              startDecorator={<Icons.Mail />}
            >
              {t("contact.emailAddress")}
            </Button>
          )}

          {contact.url && (
            <Button
              component="a"
              href={contact.url}
              target="_blank"
              startDecorator={<Icons.Web />}
            >
              {t("contact.url")}
            </Button>
          )}
        </Stack>
      </Card>
    </div>
  );
};
