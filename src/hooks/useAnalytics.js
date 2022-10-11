import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useAnalytics(){
    const location = useLocation();
    useEffect(() => {
        if(window.gtag){
            window.gtag('event', 'page_view', { 'send_to': 'G-SFPKRJDVT3' });
        }
    }, [location]);
    return null;
}