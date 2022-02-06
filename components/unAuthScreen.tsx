import React, { useState } from "react"
import { View } from "react-native"
import LoadingScreen from "./loadingScreen"
import { LoginScreen } from "./loginScreen"


export default function UnAuthScreen(){
    const [page, setPage] = useState(0);

    function SwitchAuth(){
          switch(page){
           case 0:{return(<View><LoginScreen setPage={setPage}/></View>)}
           case 1:{return(<View><LoadingScreen setPage={setPage}/></View>)}
           default:{return(<View><LoginScreen setPage={setPage}/></View>)}
         }
         
        }

    return(
        <View>
            {SwitchAuth()}
        </View>
    )
}