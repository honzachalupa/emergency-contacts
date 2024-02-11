import {
  DialogContent,
  DialogTitle,
  Divider,
  Drawer as JoyDrawer,
  Sheet,
} from "@mui/joy";

interface IProps {
  header: React.ReactNode;
  anchor?: "top" | "right" | "bottom" | "left";
  children: React.ReactNode;
}

export const Drawer: React.FC<IProps> = ({
  header,
  anchor = "left",
  children,
}) => (
  <JoyDrawer
    size="md"
    variant="plain"
    anchor={anchor}
    hideBackdrop
    open
    slotProps={{
      root: {
        sx: {
          pointerEvents: "none",
        },
      },
      content: {
        sx: {
          bgcolor: "transparent",
          p: { md: 2, sm: 0 },
          boxShadow: "none",
          pointerEvents: "all",
        },
      },
    }}
  >
    <Sheet
      sx={{
        borderRadius: "md",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        height: "100%",
        overflow: "auto",
      }}
    >
      <DialogTitle>{header}</DialogTitle>

      <Divider sx={{ mt: "auto" }} />

      <DialogContent sx={{ gap: 2 }}>{children}</DialogContent>
    </Sheet>
  </JoyDrawer>
);
