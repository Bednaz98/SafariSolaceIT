import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import BasicText from "./basictext";
import { borderRadius, shadowRadius } from "./styleconfig";

//creates a dropdown list

export default function BasicDropdown(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={{padding:5}}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)} style={{shadowRadius:shadowRadius(),borderRadius:borderRadius()}}>
        <View style={{ flexDirection: "column" }}>
          <View >
            <BasicText text={props.title} />
          </View>
          <TouchableOpacity>
            <View>{expanded && props.children}</View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}
