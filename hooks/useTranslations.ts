type LanguageType = "cs" | "en";

type KeyType =
  | "app.name"
  | "app.description"
  | "app.reportProblem"
  | "common.hospital"
  | "common.hospitals"
  | "common.pharmacy"
  | "common.pharmacies"
  | "common.vet"
  | "common.vets"
  | "address.address"
  | "address.district"
  | "address.navigate"
  | "address.note"
  | "contact.phoneNumber"
  | "contact.emailAddress"
  | "contact.url";

type Translations = {
  [language in LanguageType]: {
    [key in KeyType]: string;
  };
};

export const sharedTranslations = {
  cs: {
    "app.name": "Pohotovostní kontakty",
    "app.description": "Najděte nejbližší pohotovost, lékárnu nebo veterináře.",
  },
  en: {
    "app.name": "Emergency Contacts",
    "app.description": "Find the nearest emergency room, pharmacy, or vet.",
  },
};

const translations: Translations = {
  cs: {
    "app.reportProblem": "Nahlásit chybu",
    "common.hospital": "Pohotovost",
    "common.hospitals": "Pohotovosti",
    "common.pharmacy": "Nonstop lékárna",
    "common.pharmacies": "Nonstop lékárny",
    "common.vet": "Veterinární pohotovost",
    "common.vets": "Veterinární pohotovosti",
    "address.address": "Adresa",
    "address.district": "Městská část",
    "address.navigate": "Navigovat",
    "address.note": "Note",
    "contact.phoneNumber": "Zavolat",
    "contact.emailAddress": "Napsat e-mail",
    "contact.url": "Web",
    ...sharedTranslations.cs,
  },
  en: {
    "app.reportProblem": "Report a problem",
    "common.hospital": "Emergency Room",
    "common.hospitals": "Emergency Rooms",
    "common.pharmacy": "Nonstop Pharmacy",
    "common.pharmacies": "Nonstop Pharmacies",
    "common.vet": "Nonstop Vet",
    "common.vets": "Nonstop Vets",
    "address.address": "Address",
    "address.district": "District",
    "address.navigate": "Navigate",
    "address.note": "Note",
    "contact.phoneNumber": "Call",
    "contact.emailAddress": "E-mail",
    "contact.url": "Website",
    ...sharedTranslations.en,
  },
};

export const useTranslations = (/* language: LanguageType */) => ({
  t: (key: KeyType) => translations["cs"][key] || key,
});
