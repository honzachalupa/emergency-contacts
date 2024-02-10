import {
  formatAddress,
  formatPhoneNumber,
  formatPhoneNumberHref,
  getMapUrl,
} from "@/helpers";
import { useTranslations } from "@/hooks";
import { IItem } from "@/types";
import { Fragment } from "react";

export const Item: React.FC<IItem> = ({ name, address, contact }) => {
  const { t } = useTranslations();

  return (
    <li className="my-5">
      <h4 className="font-bold">{name}</h4>

      <ul>
        <li>
          <p className="font-medium">{t("address.address")}</p>
          <p>{formatAddress(address)}</p>

          {address.note && <p className="opacity-50">({address.note})</p>}

          <a href={getMapUrl(address)} className="underline">
            Navigovat
          </a>
        </li>

        <li>
          <p className="font-medium">{t("contact.phoneNumber")}</p>

          {contact.phoneNumbers.map((phoneNumber, index) => (
            <Fragment key={phoneNumber}>
              <a
                href={formatPhoneNumberHref(phoneNumber)}
                className="underline"
              >
                {formatPhoneNumber(phoneNumber)}
              </a>

              {index < contact.phoneNumbers.length - 1 && ", "}
            </Fragment>
          ))}
        </li>

        {contact.emailAddress && (
          <li>
            <p className="font-medium">{t("contact.emailAddress")}</p>

            <a href={`mailto:${contact.emailAddress}`} className="underline">
              {contact.emailAddress}
            </a>
          </li>
        )}

        {contact.url && (
          <li>
            <p className="font-medium">{t("contact.url")}</p>

            <a href={contact.url} className="underline">
              Web
            </a>
          </li>
        )}
      </ul>
    </li>
  );
};
