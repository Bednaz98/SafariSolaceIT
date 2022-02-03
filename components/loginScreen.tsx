import React, { useState } from "react";
import { TextInput, View} from "react-native";
import BasicText from "../SafariSolaceStyleTools/basictext";


export function LoginScreen(props){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


//axios fetch call here

/* 
  const employee = await response.json();


  props.updateUser({
    username: employee.username,
    isAuthorized: employee.isAuthorized,
    isAdmin: employee.isAdmin,
  }); */

  return (
    <View>
        <BasicText text={"Login"}/>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={t => setUsername(t)}
        
        placeholder="Enter username"
        autoCapitalize="none"
        >
        </TextInput>

        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        secureTextEntry={true}
        onChangeText={t => setPassword(t)}
        placeholder="Enter password"
        autoCapitalize="none"
        >
        </TextInput>


        <button onClick={()=>{props.setUser(username,password)}}>Login</button>

    </View>
  )

}
