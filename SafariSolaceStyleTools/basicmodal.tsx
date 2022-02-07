import React, { useState } from "react";
import { Modal, View,StyleSheet, Button, StyleProp, ViewStyle } from "react-native";
import BasicButton from "./basicbutton";
import BasicText from "./basictext";
import GetStyle, { key } from "./styling/get-styles-by-theme-context";



export default function BasicModal(props){
  let child = props.child
  const openTitle = props?.openTitle ?? "null open title"
  

  const [show, setShow] = useState(false);

    return(
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          onRequestClose={() => {setShow(!show)}}>
          <View style={ GetStyle(key.MainView) as StyleProp<ViewStyle>}>
            <View style={GetStyle(key.ModalView) as StyleProp<ViewStyle>}>

              <View>
                {child}
              </View>
              <View>
                <BasicButton title={"close"} onPress={()=>{setShow(!show)}}/>
              </View>

            </View>
          </View>
        </Modal>

        <BasicButton title={openTitle} onPress={()=>{setShow(true)}}/>

      </View>)
      
}



