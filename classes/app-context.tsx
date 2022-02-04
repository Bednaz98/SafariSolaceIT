import { createContext, useContext } from "react";
import LocalEmployee, { Employee } from "../entities/user";
import { Theme } from "../SafariSolaceStyleTools/colorstyle";


export interface AppContextInterface{
    pageIndex:number
    setPageIndex:Function
    user:Employee,
    setUser:React.Dispatch<React.SetStateAction<Employee>>,
    employeeList:LocalEmployee[],
    setEmployeeList:React.Dispatch<React.SetStateAction<LocalEmployee[]>>,
    employeeIndex:number, 
    setEmployeeIndex:React.Dispatch<React.SetStateAction<number>>,
    theme:Theme, 
    setTheme:React.Dispatch<React.SetStateAction<Theme>>,
    sync:boolean, 
    setSync:React.Dispatch<React.SetStateAction<boolean>>
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