import {
  formatAddress,
  formatPhoneNumber,
  formatPhoneNumberHref,
  getMapUrl,
} from "@/helpers";
import { useTranslations } from "@/hooks";
import { useMemo } from "react";
import data from "../../data";

export const ItemsList = () => {
  const { t } = useTranslations("cs");

  const sections = useMemo(
    () => [
      {
        label: t("common.hospitals"),
        items: data.filter(({ type }) => type === "hospital"),
      },
      {
        label: t("common.pharmacies"),
        items: data.filter(({ type }) => type === "pharmacy"),
      },
      {
        label: t("common.vets"),
        items: data.filter(({ type }) => type === "vet"),
      },
    ],
    [t]
  );

  return (
    <>
      {sections.map(({ label, items }) => (
        <section key={label} className="border-t border-t-black my-2 py-2">
          <h3 className="font-bold">{label}</h3>

          <ul>
            {items.map(({ name, address, contact }) => (
              <li key={name} className="my-5">
                <h4 className="font-bold">{name}</h4>

                <ul>
                  <li>
                    <p className="font-medium">{t("address.address")}</p>
                    <p>{formatAddress(address)}</p>

                    {address.note && (
                      <p className="opacity-50">({address.note})</p>
                    )}

                    <a href={getMapUrl(address)} className="underline">
                      Navigovat
                    </a>
                  </li>

                  <li>
                    <p className="font-medium">{t("contact.phoneNumber")}</p>

                    {contact.phoneNumbers.map((phoneNumber, index) => (
                      <>
                        <a
                          key={phoneNumber}
                          href={formatPhoneNumberHref(phoneNumber)}
                          className="underline"
                        >
                          {formatPhoneNumber(phoneNumber)}
                        </a>

                        {index < contact.phoneNumbers.length - 1 && ", "}
                      </>
                    ))}
                  </li>

                  {contact.emailAddress && (
                    <li>
                      <p className="font-medium">{t("contact.emailAddress")}</p>

                      <a
                        href={`mailto:${contact.emailAddress}`}
                        className="underline"
                      >
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
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};
