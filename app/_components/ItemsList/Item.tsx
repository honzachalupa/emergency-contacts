"use client";

import { formatPhoneNumber, formatPhoneNumberHref, getMapUrl } from "@/helpers";
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
import { Icons } from "../Icons";

export const Item: React.FC<IItem> = ({ name, address, contact }) => {
  const { t } = useTranslations();

  return (
    <Card variant="outlined" sx={{ p: 2, my: 2 }}>
      <Typography level="h3">{name}</Typography>

      <Box>
        <Typography>{address.street}</Typography>
        <Typography>{address.district}</Typography>
      </Box>

      {address.note && (
        <Typography level="body-sm">({address.note})</Typography>
      )}

      <Stack direction="row" spacing={1}>
        <Button
          component="a"
          href={getMapUrl(address)}
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
            startDecorator={<Icons.Web />}
          >
            {t("contact.url")}
          </Button>
        )}
      </Stack>
    </Card>
  );
};
