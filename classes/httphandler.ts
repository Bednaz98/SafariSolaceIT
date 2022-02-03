import axios from "axios"
import Employee from "../entities/user";
import EmployeeInterface from "../interfaces/employee-api-interface";



export default class HttpHandler implements EmployeeInterface{
    private useURL:string = "http://localhost";
    private port:number = 3000;
    private devMode:boolean = false;

    constructor(dev:boolean =false){
        this.devMode=dev;
    }


    /**this function returns the URL to work with, if devMod is set to false, it will return the production URL, if true, it will return 'http//localhost:[port]'*/
    private getURL(){
        if(this.devMode){ return `http//localhost:${this.port}`}
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


    async getAllEmployees(): Promise<Employee[]> {
        throw new Error("Method not implemented.");
    }
    
    async changeEmployeePasswords(): Promise<Employee> {
        throw new Error("Method not implemented.");
    }
    
    async getAllManagers(): Promise<Employee[]> {
        throw new Error("Method not implemented.");
    }

    async getEmployee(ID: string): Promise<Employee> {
        let body = {room:"there", owner:"hgrehre"}
        const fetchReturn = await axios.patch(`${this.getURL(),body}/EXAMPLE/${ID}`)
        fetchReturn.data
        return
    }

    
}