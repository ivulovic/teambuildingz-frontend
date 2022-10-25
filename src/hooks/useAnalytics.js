import { useEffect } from "react";
import { useHref, useSearchParams } from "react-router-dom";

export default function useAnalytics() {
  const href = useHref();
  const [search] = useSearchParams();
  useEffect(() => {
    const s = search.toString();
    const searchString = s ? `?${s}` : '';
    if (window.gtag) {
      window.gtag("event", "page_view", {
        send_to: "G-SFPKRJDVT3",
        page_location: window.origin + href.slice(1) + searchString,
      });
    }
  }, [href, search]);
  return null;
}
