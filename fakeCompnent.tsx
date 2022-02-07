import { useContext } from "react";
import { appContext } from "./classes/app-context";
import HttpHandler from "./classes/httphandler";
import { themeContext } from "./SafariSolaceStyleTools/styling/themecontext";


export default function Component(){
    const ContextName = useContext(appContext)
    ContextName.setEmployeeIndex
    const Http = new  HttpHandler (false)
    return(<>
    </>)
}