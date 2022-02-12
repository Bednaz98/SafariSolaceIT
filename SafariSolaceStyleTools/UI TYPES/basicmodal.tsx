import React, { useState } from "react";
import { Modal, View,StyleSheet, Button, StyleProp, ViewStyle } from "react-native";
import GetStyle from "../DEVELOPER STYLING TOOLS/get-style";
import { key } from "../STYLING/ss-style-keys";
import BasicButton from "./basicbutton";
import BasicText from "./basictext";



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
          <View>
            <View >

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



