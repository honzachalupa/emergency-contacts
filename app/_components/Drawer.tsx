import {
  DialogContent,
  DialogTitle,
  Divider,
  Drawer as JoyDrawer,
  Sheet,
} from "@mui/joy";

interface IProps {
  anchor?: "left" | "right" | "top" | "bottom";
  fill?: boolean;
  header?: React.ReactNode;
  children: React.ReactNode;
}

export const Drawer: React.FC<IProps> = ({
  anchor = "left",
  fill,
  header,
  children,
}) => {
  return (
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
          height: fill ? "100%" : "auto",
          overflowY: "auto",
        }}
      >
        {header && (
          <>
            <DialogTitle>{header}</DialogTitle>

            <Divider sx={{ mt: "auto" }} />
          </>
        )}

        <DialogContent sx={{ gap: 2 }}>{children}</DialogContent>
      </Sheet>
    </JoyDrawer>
  );
};
