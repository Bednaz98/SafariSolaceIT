import React, { useContext } from "react";
import { useMsal } from "@azure/msal-react";
import { Alert, Dimensions, View } from "react-native";
import BasicButton from "../SafariSolaceStyleTools/basicbutton";
import BasicText, { TextType } from "../SafariSolaceStyleTools/basictext";
import { EventMessage, EventType } from "@azure/msal-browser";
import { ThemeSelect } from "./themeSelector";
import PixelSpacer from "../SafariSolaceStyleTools/pixel-spacer";
import { themeContext } from "../SafariSolaceStyleTools/themecontext";
import GetColor, { borderRadius, Color, margin, paddingRadius, Theme } from "../SafariSolaceStyleTools/styleconfig";

export default function SettingsPage(prop) {

  const {instance} = useMsal();
  const theme = useContext(themeContext)
  instance.enableAccountStorageEvents();
  instance.addEventCallback((message: EventMessage) => {
    if (message.eventType === EventType.LOGOUT_FAILURE) {
      prop.setPage(0);
    } 
    });

  function logout() {
    instance.logout();
    prop.setPage(0);
  } 
    return (
        <View>
            <PixelSpacer width={Dimensions.get("screen").width*.2} height={1}/>
            <BasicText text={"Settings"} textType={TextType.Header}/>
            <View style={{backgroundColor:GetColor(Color.SecondaryColor), borderRadius:borderRadius(), padding:paddingRadius(), margin:margin()}}>
              <BasicButton title={'Set Default theme'} onPress={()=>{theme.setTheme(Theme.default)}}/>
              <BasicButton title={'Set Dark theme'} onPress={()=>{theme.setTheme(Theme.dark)}}/>
              <BasicButton title={'Set Light theme'} onPress={()=>{theme.setTheme(Theme.light)}}/>
              <BasicButton title={'Set Hacker theme'} onPress={()=>{theme.setTheme(Theme.hacker)}}/>

            </View>
            <BasicButton onPress={() => {logout()}} title={"Logout"} />
        </View>
    )
}