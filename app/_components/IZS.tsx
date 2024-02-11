import { izs } from "@/data/izs";
import { Box, Button, Grid, Typography } from "@mui/joy";
import { Icons } from "./Icons";

export const IZS: React.FC = () => {
  return (
    <Box>
      <Typography level="title-md" sx={{ pb: 1 }}>
        Kontakty IZS
      </Typography>

      <Grid container columns={2} spacing={1} sx={{ flexGrow: 1 }}>
        {izs.map(({ name, phoneNumber }) => (
          <Grid key={name}>
            <Button
              component="a"
              variant="soft"
              href={`tel:${phoneNumber}`}
              startDecorator={<Icons.Phone color="error" />}
            >
              {name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
