import axios from "axios"
import { useContext } from "react";
import Employee, {Status} from "../entities/user";
import EmployeeInterface from "../intrerfaces/employee-api-interface";
import { appContext } from "./app-context";



export default class HttpHandler implements EmployeeInterface{
    private useURL:string = "http://20.124.74.192:3000";
    private port:number = 3000;
    private devMode:boolean = true;
    /////////////////////////////////////////////
    private appContext = useContext(appContext);

    constructor(dev:boolean =false){
        this.devMode=dev;
    }


    /**this function returns the URL to work with, if devMod is set to false, it will return the production URL, if true, it will return 'http//localhost:[port]'*/
    private getURL(){
        if(this.devMode){ return `https://c27c0348-eb0c-4ac0-afe2-101bc195d6a5.mock.pstmn.io`}
        else {return  this.useURL}
    }
    /**basic axios calls*/
    private async AxiosCall(ID){
        let fetchReturn = await axios.get(this.getURL())
        const Data = fetchReturn.data

        let body = {}
        fetchReturn = await axios.post(`${this.getURL(),body}/EXAMPLE/${ID}`)

        body = {}
        fetchReturn = await axios.patch(`${this.getURL(),body}/EXAMPLE/${23456}`)
    }

    async tryLogin(userName: string, password: string): Promise<boolean> {
        let response = await axios.post(`${this.getURL(),{}}/EXAMPLE/`)
        const user = response.data.user
        
        if(!user){ return undefined}
        this.appContext.setUser(user)
        this.appContext.setPageIndex(1)
        return (user )
    }
    async getServerAllEmployees(): Promise<Employee[]> {
        const response = await axios.get(`${this.getURL()}/employees`);
        const data: Employee[] = response.data;
        data.forEach(e => {
            e.status = Status.unChanged;
        });
        this.appContext.setEmployeeList({...data});
        return data;
    }

    syncApp() {
        throw new Error("Method not implemented.");
    }

}