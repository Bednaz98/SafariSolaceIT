import { useMsal } from "@azure/msal-react";
import React, { useState } from "react";



export function LoginScreen(props){

  const {instance} = useMsal()
    
  function login(){
      instance.loginPopup()
  }

  return(<>
      <h1>You are not authenticated</h1>
      <button onClick={login}>Login</button>
  </>)
}

