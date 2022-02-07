import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import BasicText from "./basictext";
import GetColor, { Color } from "./colorstyle";

//creates a dropdown list

export default function BasicDropdown(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <View style={{ flexDirection: "column" }}>
          <View>
            <BasicText text={props.title} />
          </View>
          <TouchableOpacity><View>{expanded && props.children}</View></TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}
