"use client";

import { formatPhoneNumber, formatPhoneNumberHref } from "@/helpers";
import { useTranslations } from "@/hooks";
import { IItem } from "@/types";
import {
  Box,
  Button,
  Card,
  Dropdown,
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

export const Item: React.FC<IItem & { isHighlighted: boolean }> = ({
  name,
  address,
  contact,
  googleMapsUrl,

  isHighlighted,
}) => {
  const { t } = useTranslations();

  return (
    <div id={formatItemHtmlId(name)}>
      <Card variant={isHighlighted ? "solid" : "outlined"} sx={{ p: 2, my: 2 }}>
        <Typography level="h3">{name}</Typography>

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
