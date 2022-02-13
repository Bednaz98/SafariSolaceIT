import { createContext, useContext } from "react";
import LocalEmployee, { Employee } from "../entities/user";
import { Theme } from "../SafariSolaceStyleTools/DEVELOPER STYLING TOOLS/get-style";


export interface AppContextInterface{
    pageIndex:number
    setPageIndex:Function
    user:Employee ,
    setUser:Function,
    employeeList:LocalEmployee[], 
    setEmployeeList:Function,
    employeeIndex:number , 
    setEmployeeIndex:Function,
    theme:Theme, 
    setTheme:Function,
    sync:boolean, 
    setSync:Function
}


export const initContext:AppContextInterface = {
    pageIndex:0,
    setPageIndex:()=>{},
    user:{
        id: 0,
        isManager: false,
        fname: '',
        lname: '',
        username: '',
        password: '',
    },
    setUser:()=>{},
    employeeList:[], 
    setEmployeeList:()=>{},
    employeeIndex:0 , 
    setEmployeeIndex:()=>{},
    theme:Theme.default, 
    setTheme:()=>{},
    sync:true, 
    setSync:()=>{}
}
export const appContext = createContext(initContext)
