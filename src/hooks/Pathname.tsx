import { useEffect, useState } from "react";

export function usePathname() {
    const [pathname, setPathname] = useState(window.location.pathname);

    useEffect(() => {
        const listener = () => setPathname(window.location.pathname);
        window.addEventListener("popstate", listener);
        
        // return () => {
        //     window.removeEventListener("popstate", listener);
        // }
    }, [pathname]);

    return pathname;
    
}