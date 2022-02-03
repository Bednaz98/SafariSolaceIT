import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { appContext, AppContextInterface } from './classes/app-context';
import Employee from './entitites/user';
import BasicText from './SafariSolaceStyleTools/basictext';
import { Theme } from './SafariSolaceStyleTools/colorstyle';
import { themeContext, ThemeContextInterface } from './SafariSolaceStyleTools/themecontext';


export default interface AppContext{
  pageIndex:number
  setPageIndex:Function
  user:Employee,
  setUser:Function,
  employeeList:Employee[],
  setEmployeeList:Function,
  employeeIndex:number, 
  setEmployeeIndex:Function,
  theme:Theme, 
  setTheme:Function,
  sync:boolean, 
  setSync:Function
}


export default function App() {

  // this is for putting on the variables within the context //
  //##########################################################################  
  const [pageIndx, setPageIndex] = useState(1);
  //this is a dummy employee
  const intiUser:Employee = {id: 0,isManager: false,fname: '',lname: '',username: '',password: ''}
  const [user, setUser] = useState(intiUser);
  const initEmployeeList:Employee[]= []
  const [employeeList, setEmployeeList] = useState(initEmployeeList);
  const [employeeIndex, setEmployeeIndex] = useState(-1);
  const [theme, setTheme] = useState(Theme.default);
  const [sync, setSync] = useState(true);
  //########################################################################## 
  
  // Initial Context for useState
  //+++++++++++++++++++++++++++++++++++++==++++++++++++++++++++++++++++++++++++
  const initContext:AppContextInterface = {
    pageIndex: pageIndx,
    setPageIndex: setPageIndex,
    user: user,
    setUser: setUser,

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
      case 2: { return (<BasicText text={"User setting"}/>)}
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
