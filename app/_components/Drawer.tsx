import { useIsMobile } from "@/hooks/useIsMobile";
import {
  DialogContent,
  DialogTitle,
  Divider,
  Drawer as JoyDrawer,
  Sheet,
} from "@mui/joy";

interface IProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

export const Drawer: React.FC<IProps> = ({ header, children }) => {
  const isMobile = useIsMobile();

  return (
    <JoyDrawer
      size="md"
      variant="plain"
      anchor={isMobile ? "bottom" : "left"}
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
            p: { md: 2, xs: 1 },
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
};
