export default interface Employee{
    id: number
    isManager: boolean
    fname: string
    lname: string
    username: string
    password: string
}

interface WorkLog{
    wId: number
    type: "CHEKIN" | "CHECKOUT" 
    timestamp: number
}