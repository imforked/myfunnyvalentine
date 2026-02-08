import { useState, useRef, useCallback, useEffect } from "react";

export const useTabsFlip = (flipDelay: number) => {
  const [showFrontTabs, setShowFrontTabs] = useState(true);
  const tabsFlipTimeoutRef = useRef<number | null>(null);

  const flipTabs = useCallback(() => {
    if (tabsFlipTimeoutRef.current) {
      clearTimeout(tabsFlipTimeoutRef.current);
    }

    tabsFlipTimeoutRef.current = window.setTimeout(() => {
      setShowFrontTabs((prev) => !prev);
      tabsFlipTimeoutRef.current = null;
    }, flipDelay);
  }, [flipDelay]);

  useEffect(() => {
    return () => {
      if (tabsFlipTimeoutRef.current) clearTimeout(tabsFlipTimeoutRef.current);
    };
  }, []);

  return { showFrontTabs, flipTabs };
};
