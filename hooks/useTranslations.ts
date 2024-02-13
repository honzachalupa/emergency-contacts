"use client";

import { getDictionary } from "@/app/get-dictionary";
import { LanguageType } from "@/app/i18n-config";
import { useEffect, useState } from "react";

export type TTranslationKey =
  | "app.name"
  | "app.description"
  | "app.reportProblem"
  | "app.supportEmailAddress"
  | "common.hospital"
  | "common.hospitals"
  | "common.pharmacy"
  | "common.pharmacies"
  | "common.vet"
  | "common.vets"
  | "common.distance"
  | "address.address"
  | "address.district"
  | "address.navigate"
  | "address.note"
  | "contact.phoneNumber"
  | "contact.emailAddress"
  | "contact.url";

export const useTranslations = (language?: LanguageType) => {
  const [dictionary, setDictionary] = useState<any>(null);

  useEffect(() => {
    if (language) {
      getDictionary(language).then(setDictionary);

      localStorage.setItem("language", language);
    } else {
      const language_ = localStorage.getItem("language") as LanguageType;

      getDictionary(language_).then(setDictionary);
    }
  }, [language]);

  return {
    t: (key: TTranslationKey) => dictionary?.[key] || "",
  };
};
