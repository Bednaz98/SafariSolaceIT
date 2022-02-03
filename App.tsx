import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { appContext, AppContextInterface } from './classes/app-context';
import EmployeeInfo from './components/employee-info-and-pw-change';
import Employee from './entities/user';
import BasicModal from './SafariSolaceStyleTools/basicmodal';
import BasicText from './SafariSolaceStyleTools/basictext';
import { Theme } from './SafariSolaceStyleTools/colorstyle';
import { themeContext, ThemeContextInterface } from './SafariSolaceStyleTools/themecontext';


export default interface AppContext{ 
  //routing
  pageIndex:number
  setPageIndex:Function
  
  //logged in user
  user:Employee,
  setUser:Function,

  //employee updating
  employeeList:Employee[], 
  setEmployeeList:Function,
  //employeesToUpdate: Employee[],
  //setEmployeesToUpdate: Function
  employeeIndex:number, 
  setEmployeeIndex:Function,

  //styling
  theme:Theme, 
  setTheme:Function,

  //backend updating
  sync:boolean, 
  setSync:Function
}


export default function App() {

  // this is for putting on the variables within the context //
  //##########################################################################  
  const [pageIndx, setPageIndex] = useState<number>(3);
  
  //dummy variables
  const initUser:Employee = {id: 0,isManager: false,fname: 'fname',lname: 'lname',username: 'username',password: 'password1!'}
  const initEmployee: Employee = {id: 1,isManager: false,fname: 'fname2',lname: 'lname2',username: 'username2',password: 'password2!'}
  
  const [user, setUser] = useState<Employee>(initUser); //check
  
  const initEmployeeList:Employee[] = [initEmployee]
  const [employeeList, setEmployeeList] = useState<Employee[]>(initEmployeeList);
  //const [employeesToUpdate, setEmployeesToUpdate] = useState<Employee[]>([])
  const [employeeIndex, setEmployeeIndex] = useState<number>(-1);
  
  const [theme, setTheme] = useState<Theme>(Theme.default);
  
  const [sync, setSync] = useState<boolean>(true);
  //########################################################################## 
  
  // Initial Context for useState
  //+++++++++++++++++++++++++++++++++++++==++++++++++++++++++++++++++++++++++++
  const initContext:AppContextInterface = {
    
    //routing
    pageIndex: pageIndx,
    setPageIndex: setPageIndex,
    
    //logged in user
    user: user,
    setUser: setUser,
    
    //employees
    employeeList: employeeList,
    setEmployeeList: setEmployeeList,
    employeeIndex: employeeIndex,
    setEmployeeIndex:setEmployeeIndex,
    
    theme: theme,
    setTheme: setTheme,
    
    sync: sync,
    setSync: setSync
  }


  function switchDisplay(){
    switch(pageIndx){
        case 0: {return (<BasicText text={"Login in page"}/>)  }
        case 1: {return (<BasicText text={"Main page"}/>)}
        case 2: {return (<BasicText text={"User setting"}/>)}
        case 3: {return (<BasicModal child = {<EmployeeInfo employee={initUser}/>} openTitle="HERRO"/> )}
    }
  }
  // This is the context theme for consistent styling
  const themeContextObject:ThemeContextInterface = {theme:theme,setTheme:setTheme}
  
  
  return (
    <View style={styles.container}>

      <appContext.Provider value = {initContext}>
          <themeContext.Provider value = { themeContextObject }>
            {switchDisplay()}
        </themeContext.Provider>
      </appContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
