"use client";

import { formatPhoneNumber, formatPhoneNumberHref, getMapUrl } from "@/helpers";
import { useTranslations } from "@/hooks";
import { IItem } from "@/types";
import MailIcon from "@mui/icons-material/Mail";
import NavigationIcon from "@mui/icons-material/Navigation";
import PhoneIcon from "@mui/icons-material/Phone";
import WebIcon from "@mui/icons-material/Web";
import {
  Button,
  Card,
  Divider,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Typography,
} from "@mui/joy";

export const Item: React.FC<IItem> = ({ name, address, contact }) => {
  const { t } = useTranslations();

  return (
    <Card variant="outlined" sx={{ padding: 2, marginY: 2 }}>
      <li>
        <Typography level="h3">{name}</Typography>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Typography>{address.street}</Typography>
            <Typography>{address.district}</Typography>

            {address.note && (
              <Typography level="body-sm">({address.note})</Typography>
            )}

            <Button
              component="a"
              href={getMapUrl(address)}
              startDecorator={<NavigationIcon />}
            >
              {t("address.navigate")}
            </Button>
          </li>

          <Divider />

          <li>
            <Dropdown>
              <MenuButton variant="solid" startDecorator={<PhoneIcon />}>
                {t("contact.phoneNumber")}
              </MenuButton>

              <Menu>
                {contact.phoneNumbers.map((phoneNumber) => (
                  <MenuItem key={phoneNumber}>
                    <a
                      href={formatPhoneNumberHref(phoneNumber)}
                      className="underline"
                    >
                      {formatPhoneNumber(phoneNumber)}
                    </a>
                  </MenuItem>
                ))}
              </Menu>
            </Dropdown>
          </li>

          {contact.emailAddress && (
            <li>
              <Button
                component="a"
                href={`mailto:${contact.emailAddress}`}
                startDecorator={<MailIcon />}
              >
                {t("contact.emailAddress")}
              </Button>
            </li>
          )}

          {contact.url && (
            <li>
              <Button
                component="a"
                href={contact.url}
                startDecorator={<WebIcon />}
              >
                {t("contact.url")}
              </Button>
            </li>
          )}
        </ul>
      </li>
    </Card>
  );
};
