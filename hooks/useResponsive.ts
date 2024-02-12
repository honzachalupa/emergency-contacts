import { useTheme } from "@mui/joy";
import { useMedia } from "react-use";

const or = (...rest: string[]) => rest.join(" or ");

export const useResponsive = () => {
  const theme = useTheme();

  const isMobile = useMedia(`(max-width: ${theme.breakpoints.values.xl}px)`);
  const isNarrowDrawer = useMedia(
    or(
      `(max-width: ${theme.breakpoints.values.sm}px)`,
      `(min-width: ${theme.breakpoints.values.xl}px)`
    )
  );

  return {
    isMobile,
    isNarrowDrawer,
  };
};
