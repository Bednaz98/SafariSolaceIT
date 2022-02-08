import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { ssContext } from "../developer-styling-tools.tsx/sliderStyler-context";

import { sliderStyler } from "../developer-styling-tools.tsx/ssText";
import ssViewConstruction from "../developer-styling-tools.tsx/ssView";
import { key } from "./get-styles-by-theme-context";


export default function StylingPlayground(props:{child: JSX.Element}){

    const context = useContext(ssContext)
    console.log("🚀 ~ file: styling-playground.tsx ~ line 14 ~ StylingPlayground ~ context", context)

    //const [rerender]
    const newslider: sliderStyler = new ssViewConstruction(key.MainView)
    console.log("🚀 ~ file: styling-playground.tsx ~ line 19 ~ StylingPlayground ~ newslider", newslider)

    //newPlayground.createSliderGroup(key.MainView, uiType.View)

    return(<View>
        {newslider.getSliders()} 
        {props.child}
    </View>)

}
