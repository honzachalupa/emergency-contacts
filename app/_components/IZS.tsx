import DataContext from "@/context/DataContext";
import { Box, Button, Grid, Typography } from "@mui/joy";
import { useContext } from "react";
import { Icons } from "./Icons";

export const IZS: React.FC = () => {
  const { izsItems } = useContext(DataContext);

  return (
    <Box>
      <Typography level="title-md" sx={{ pb: 1 }}>
        Kontakty IZS
      </Typography>

      <Grid container columns={2} spacing={1} sx={{ flexGrow: 1 }}>
        {izsItems.map(({ name, phoneNumber }) => (
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
