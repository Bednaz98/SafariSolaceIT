import React, { useState } from "react";
import { Modal, View,StyleSheet, Button } from "react-native";
import BasicButton from "./basicbutton";
import BasicText from "./basictext";
import GetColor, { Color } from "./colorstyle";



export default function BasicModal(props){
  let child = props.child
  const openTitle = props?.openTitle ?? "null open title"
  

  const [show, setShow] = useState(false);
  const styles = StyleSheet.create({
    modalView: {
      flexDirection:"column",
      margin: 20,
      backgroundColor:GetColor(Color.Modal),
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0
      }
  }
});

    return(
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={show}
          onRequestClose={() => {setShow(!show)}}>
          <View style={ {flex: 1, justifyContent: "center", alignItems: "center", marginTop: 22, backgroundColor:GetColor(Color.Modal)} }>
            <View style={styles.modalView}>

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



