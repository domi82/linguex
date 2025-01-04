import { useEffect, useState } from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

/**
 * Custom hook for mobile/desktop view.
 * @returns the custom hook
 */
const useResponsiveLayout = () => {
  const key = "desktop";
  const storedDesktop = localStorage.getItem(key);
  const [desktop, setDesktop] = useState<boolean>(
    storedDesktop === null || storedDesktop === "true"
  );
  const screens = useBreakpoint();

  useEffect(() => {
    const load = async () => {
      if (Object.entries(screens).length > 0) {
        const currentDesktop: boolean = Object.entries(screens)
          .filter((screen) => !!screen[1])
          .some((s) => ["lg", "xl", "xxl"].includes(s[0]));
        setDesktop(currentDesktop);
        if (currentDesktop !== desktop) {
          localStorage.setItem(key, currentDesktop.toString());
        }
      }
    };

    load();
  }, [screens, desktop]);

  return [desktop, setDesktop] as const;
};

export default useResponsiveLayout;
