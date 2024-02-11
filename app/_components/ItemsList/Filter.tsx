"use client";

import data from "@/data";
import { alphanumericSorter, removeArrayDuplicates } from "@/helpers";
import { useTranslations } from "@/hooks";
import { IItemsGroup, TItemType } from "@/types";
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
  onChange: ({ types, district }: TFilter) => void;
}

export type TFilter = {
  types: TItemType[];
  district: string | null;
};

export const initialFilter: TFilter = {
  types: ["hospital", "pharmacy", "vet"],
  district: "",
};

export const Filter: React.FC<IProps> = ({ groups, onChange }) => {
  const { t } = useTranslations();

  const [filter_types, setFilter_types] = useState<TFilter["types"]>(
    initialFilter.types
  );
  const [filter_district, setFilter_district] = useState<TFilter["district"]>(
    initialFilter.district
  );

  const districtOptions = removeArrayDuplicates(
    data.map(({ address }) => address.district)
  ).sort(alphanumericSorter);

  const handleTypeChange = (id: TItemType) => {
    setFilter_types((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((type) => type !== id);
      }

      return [...prevState, id];
    });
  };

  useEffect(() => {
    onChange({
      types: filter_types,
      district: filter_district,
    });
  }, [filter_types, filter_district, onChange]);

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
          <ToggleButtonGroup value={filter_types}>
            {groups.map(({ id, label, items }) => {
              const icon = filter_types.includes(id) ? (
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
