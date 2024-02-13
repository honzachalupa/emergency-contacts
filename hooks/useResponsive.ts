import { useTheme } from "@mui/joy";
import { useMedia } from "react-use";

export const useResponsive = () => {
  const theme = useTheme();

  const isMobile = useMedia(
    `(max-width: ${theme.breakpoints.values.xl}px)`,
    false
  );

  return {
    isMobile,
  };
};
