"use client";

import data from "@/data";
import { alphanumericSorter, removeArrayDuplicates } from "@/helpers";
import { useTranslations } from "@/hooks";
import { IItemsGroup, TItemType } from "@/types";
import { Autocomplete, Button, Stack, ToggleButtonGroup } from "@mui/joy";
import { useEffect, useState } from "react";

interface IProps {
  groups: IItemsGroup[];
  onChange: ({
    types,
    district,
  }: {
    types: TItemType[];
    district: string | null;
  }) => void;
}

export const Filter: React.FC<IProps> = ({ groups, onChange }) => {
  const { t } = useTranslations();

  const [filter_types, setFilter_types] = useState<TItemType[]>([
    "hospital",
    "pharmacy",
    "vet",
  ]);
  const [filter_district, setFilter_district] = useState<string | null>(null);

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
    <Stack
      direction="row"
      spacing={1}
      sx={{
        marginY: 2,
      }}
    >
      <ToggleButtonGroup value={filter_types}>
        {groups.map(({ id, label, items }) => (
          <Button key={id} value={id} onClick={() => handleTypeChange(id)}>
            {label} ({items.length})
          </Button>
        ))}
      </ToggleButtonGroup>

      <Autocomplete
        autoSelect
        placeholder={t("address.district")}
        options={districtOptions}
        freeSolo
        onChange={(_, value) => setFilter_district(value)}
      />
    </Stack>
  );
};
