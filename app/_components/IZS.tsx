import { izs } from "@/data/izs";
import { Button, Sheet, Stack, Typography } from "@mui/joy";
import { Icons } from "./Icons";

export const IZS: React.FC = () => {
  return (
    <Sheet
      variant="outlined"
      sx={{
        p: 2,
        my: 2,
      }}
    >
      <Typography level="title-md" sx={{ pb: 1, mt: -1 }}>
        Kontakty IZS
      </Typography>

      <Stack direction="row" spacing={1}>
        {izs.map(({ name, phoneNumber }) => (
          <Button
            key={name}
            component="a"
            href={`tel:${phoneNumber}`}
            startDecorator={<Icons.Phone />}
          >
            {phoneNumber}
          </Button>
        ))}
      </Stack>
    </Sheet>
  );
};
