import axios from "axios"
import { useContext } from "react";
import LocalEmployee, {Employee, Status} from "../entities/user";
import EmployeeInterface, { localInterface } from "../intrerfaces/employee-api-interface";
import { appContext } from "./app-context";
import LocalHandler from "./local-handler";



export default class HttpHandler implements EmployeeInterface{
    private useURL:string = "http://20.121.72.15:3000";
    private devMode:boolean = false;
    /////////////////////////////////////////////
    private context = useContext(appContext);
    private localHander: localInterface = new LocalHandler();

    constructor(dev:boolean = false){
        this.devMode=dev;
    }


    /**this function returns the URL to work with, if devMod is set to false, it will return the production URL, if true, it will return 'http//localhost:[port]'*/
    private getURL(){
        if(this.devMode){ return `https://c27c0348-eb0c-4ac0-afe2-101bc195d6a5.mock.pstmn.io`}
        else {return  this.useURL}
    }

    async getServerAllEmployees(): Promise<Employee[]> {
        const response = await axios.get(`${this.getURL()}/employees`);
        const data: Employee[] = response.data;
        this.localHander.syncEmployees(data);
        return data;
    }

    async syncApp() {
        const usersToSave: LocalEmployee[] = this.context.employeeList.filter(e => e.status === Status.add);
        usersToSave.forEach(async e => {
            console.log(e.serverData);
            console.log("Making post call for:", e.serverData)
            const tempEmployee = {
                isManager: e.serverData.isManager,
                fname: e.serverData.fname,
                lname: e.serverData.lname,
                username: e.serverData.username,
                password: e.serverData.password
            };
            const response = await axios.post(`${this.getURL()}/employees`, tempEmployee);
            const currentEmployee: Employee = response.data; 
            return(currentEmployee);
        });
        const serverEmployees = await this.getServerAllEmployees();
        this.localHander.syncEmployees(serverEmployees);
        this.context.setSync(true);
    }
}