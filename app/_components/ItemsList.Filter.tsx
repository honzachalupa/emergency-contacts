"use client";

import DataContext from "@/context/DataContext";
import { alphanumericSorter, removeArrayDuplicates } from "@/helpers";
import { useTranslations } from "@/hooks";
import { TItemCategory, categories } from "@/types";
import { Autocomplete, Button, Grid, Sheet, ToggleButtonGroup } from "@mui/joy";
import { useContext, useEffect, useState } from "react";
import { Icons } from "./Icons";

interface IProps {
  onChange: ({ categories, district }: TFilter) => void;
}

export type TFilter = {
  categories: TItemCategory[];
  district: string | null;
};

export const initialFilter: TFilter = {
  categories: ["hospital", "pharmacy", "vet"],
  district: null,
};

export const Filter: React.FC<IProps> = ({ onChange }) => {
  const { t } = useTranslations();

  const { items } = useContext(DataContext);

  const [filter_categories, setFilter_categories] = useState<
    TFilter["categories"]
  >(initialFilter.categories);
  const [filter_district, setFilter_district] = useState<TFilter["district"]>(
    initialFilter.district
  );

  const districtOptions = removeArrayDuplicates(
    items.map(({ address }) => address.district)
  ).sort(alphanumericSorter);

  const handleTypeChange = (id: TItemCategory) => {
    setFilter_categories((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((type) => type !== id);
      }

      return [...prevState, id];
    });
  };

  useEffect(() => {
    onChange({
      categories: filter_categories,
      district: filter_district,
    });
  }, [filter_categories, filter_district, onChange]);

  return (
    <Sheet
      variant="plain"
      sx={{
        my: 2,
      }}
    >
      <Grid container rowSpacing={2} columnSpacing={1}>
        <Grid flexBasis="100%">
          <ToggleButtonGroup
            value={filter_categories}
            orientation="horizontal"
            buttonFlex="100%"
          >
            {Object.entries(categories).map(([id, translationKey]) => {
              const icon = filter_categories.includes(id as any) ? (
                <Icons.CheckBox />
              ) : (
                <Icons.CheckBoxOutlineBlank />
              );

              return (
                <Button
                  key={id}
                  value={id}
                  startDecorator={icon}
                  onClick={() => handleTypeChange(id as any)}
                >
                  {t(translationKey)}
                </Button>
              );
            })}
          </ToggleButtonGroup>
        </Grid>

        <Grid flexBasis="100%">
          <Autocomplete
            autoSelect
            placeholder={t("address.district")}
            options={districtOptions}
            startDecorator={<Icons.Home />}
            freeSolo
            onChange={(_, value) => setFilter_district(value)}
          />
        </Grid>
      </Grid>
    </Sheet>
  );
};
