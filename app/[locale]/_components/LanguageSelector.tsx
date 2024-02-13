import { useRouter } from "@/helpers";
import { Button, Stack, ToggleButtonGroup } from "@mui/joy";
import { useLocale } from "next-intl";
import { useState } from "react";

export const LanguageSelector: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<string | null>();

  const handleLanguageChange = (nextLocale: any) => {
    if (locale !== nextLocale) {
      setIsLoading(nextLocale);

      router.push("/", { locale: nextLocale });
    }
  };

  return (
    <Stack direction="row" spacing={1}>
      <ToggleButtonGroup value={locale}>
        <Button
          value="cs"
          loading={isLoading === "cs"}
          onClick={() => handleLanguageChange("cs")}
        >
          Česky
        </Button>

        <Button
          value="en"
          loading={isLoading === "en"}
          onClick={() => handleLanguageChange("en")}
        >
          English
        </Button>
      </ToggleButtonGroup>
    </Stack>
  );
};
