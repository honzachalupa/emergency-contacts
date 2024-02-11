import { izs } from "@/data/izs";
import PhoneIcon from "@mui/icons-material/Phone";
import { Button, Sheet, Stack } from "@mui/joy";

export const IZS: React.FC = () => {
  return (
    <Sheet>
      <Stack direction="row" spacing={1}>
        {izs.map(({ name, phoneNumber }) => (
          <Button
            key={name}
            component="a"
            href={`tel:${phoneNumber}`}
            startDecorator={<PhoneIcon />}
          >
            {phoneNumber}
          </Button>
        ))}
      </Stack>
    </Sheet>
  );
};
