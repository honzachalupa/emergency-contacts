"use client";

import data from "@/data";
import { alphanumericSorter, removeArrayDuplicates } from "@/helpers";
import { useTranslations } from "@/hooks";
import { IItemsGroup, TItemCategory } from "@/types";
import {
  Autocomplete,
  Button,
  Grid,
  Sheet,
  ToggleButtonGroup,
  Typography,
} from "@mui/joy";
import { useEffect, useState } from "react";
import { Icons } from "../Icons";

interface IProps {
  groups: IItemsGroup[];
  onChange: ({ categories, district }: TFilter) => void;
}

export type TFilter = {
  categories: TItemCategory[];
  district: string | null;
};

export const initialFilter: TFilter = {
  categories: ["hospital", "pharmacy", "vet"],
  district: "",
};

export const Filter: React.FC<IProps> = ({ groups, onChange }) => {
  const { t } = useTranslations();

  const [filter_categories, setFilter_categories] = useState<
    TFilter["categories"]
  >(initialFilter.categories);
  const [filter_district, setFilter_district] = useState<TFilter["district"]>(
    initialFilter.district
  );

  const districtOptions = removeArrayDuplicates(
    data.map(({ address }) => address.district)
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
      variant="outlined"
      sx={{
        p: 2,
        my: 2,
      }}
    >
      <Typography level="title-md" sx={{ pb: 1, mt: -1 }}>
        Filtr
      </Typography>

      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid>
          <ToggleButtonGroup value={filter_categories}>
            {groups.map(({ id, label }) => {
              const items = data.filter(({ category }) => category === id);

              const icon = filter_categories.includes(id) ? (
                <Icons.CheckBox />
              ) : (
                <Icons.CheckBoxOutlineBlank />
              );

              return (
                <Button
                  key={id}
                  value={id}
                  startDecorator={icon}
                  onClick={() => handleTypeChange(id)}
                >
                  {label} ({items.length})
                </Button>
              );
            })}
          </ToggleButtonGroup>
        </Grid>

        <Grid>
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
