import { useLocation } from "react-router-dom";
import { Column, HeaderH1, HeaderH2, Row } from "./Components"
import { useEffect } from "react";
import { usePathname } from "../hooks/Pathname";

export function Header() {

    //const {pathname} = useLocation()

    const titles = {
        "my_lists": "My Bills",
        "me_included": "Bills I'm Included In",
        "default":"Expense Sharing App"
    }

    // useEffect(() => {
    //     console.log(pathname)
    // }, [pathname])
    

    return (
        <HeaderH1 onClick={() => {window.location.href = "/"}} style={{ position: "sticky", top: 0, width: "100%", padding: "0.5em", justifyContent:"flex-start" }}>{titles["default"]}</HeaderH1>
    )
}

export const Footer = ({name}: {name: string}) => {
    return (
        <Row style={{ position: "sticky", bottom: 0, width: "100%", height: "5em", backgroundColor: "black", justifyContent: "flex-start" }}>
            <Column style={{ padding: "1em" }}>
                <Column style={{ borderRadius: "50%", width: "2em", height: "2em", backgroundColor: "greenyellow" }}>
                    {name[0].toUpperCase()}
                </Column>
            </Column>
            <Column>
                <HeaderH2 onClick={() => window.location.href = "/me"}>{name}</HeaderH2>
            </Column>
        </Row>
    )
}