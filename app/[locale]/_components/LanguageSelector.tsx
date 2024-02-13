import { useRouter } from "@/helpers";
import { Button, Stack, ToggleButtonGroup } from "@mui/joy";
import { useLocale } from "next-intl";
import { useState } from "react";

export const LanguageSelector: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<string | null>();

  const languages = [
    {
      locale: "cs",
      label: "Česky",
    },
    {
      locale: "en",
      label: "English",
    },
  ];

  const handleLanguageChange = (nextLocale: string) => {
    if (locale !== nextLocale) {
      setIsLoading(nextLocale);

      router.push("/", { locale: nextLocale });
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      <ToggleButtonGroup value={locale}>
        {languages.map(({ locale, label }) => (
          <Button
            key={locale}
            value={locale}
            loading={isLoading === locale}
            onClick={() => handleLanguageChange(locale)}
          >
            {label}
          </Button>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
};
