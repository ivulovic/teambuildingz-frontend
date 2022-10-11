import { useEffect } from "react";
import { useHref } from "react-router-dom";

export default function useAnalytics() {
  const href = useHref();
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        send_to: "G-SFPKRJDVT3",
        page_location: window.origin + href.slice(1),
      });
    }
  }, [href]);
  return null;
}
