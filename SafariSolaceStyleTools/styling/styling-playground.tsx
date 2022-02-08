import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { ssContext } from "../DEVELOPER STYLING TOOLS/ss-context";

import { sliderStyler } from "../DEVELOPER STYLING TOOLS/SLIDER GROUPS/ssText";
import ssViewConstruction from "../DEVELOPER STYLING TOOLS/SLIDER GROUPS/ssView";
import { key } from "./keys";


export default function StylingPlayground(props:{child: JSX.Element}){

    //const [rerender]
    const newslider: sliderStyler = new ssViewConstruction(key.MainView)
    console.log("🚀 ~ file: styling-playground.tsx ~ line 19 ~ StylingPlayground ~ newslider", newslider)


    return(<View>
        {newslider.getSliders()} 
        {props.child}
    </View>)

}
