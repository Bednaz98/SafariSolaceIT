export interface Employee{
    id: number
    isManager: boolean
    fname: string
    lname: string
    username: string
    password: string
}

export interface WorkLog{
    wId: number
    type: "CHEKIN" | "CHECKOUT" 
    timestamp: number
}

export enum Status{
    unChanged,
    add,
    changed,
    delete
}
export default interface LocalEmployee{
    serverData:Employee
    status:Status
}


