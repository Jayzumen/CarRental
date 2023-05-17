import { useEffect } from "react";

export const useHandleOverflow = (state: boolean) => {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the overflow style when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [state]);
};
