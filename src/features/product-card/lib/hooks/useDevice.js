import { useMediaQuery } from "react-responsive";

export const useDevice = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1023 });

  return { isMobile, isTablet };
};
