import { useTheme } from "@mui/joy";
import { useMedia } from "react-use";

export const useIsMobile = () => {
  let theme = useTheme();
  let isMobile = useMedia(`(max-width: ${theme.breakpoints.values.xl}px)`);

  return isMobile;
};
