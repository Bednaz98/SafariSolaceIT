import React from "react"
import { View } from "react-native"


/**this is a component for spacing elements with absolute pixels. @attribute height, width will default to 0. others include minWidth, maxWidth, minHight, maxHight*/
export default function PixelSpacer(props){
    const height = props?.height ?? 0
    const width = props?.width ?? 0
    const {minHeight,minWidth,maxHeight,maxWidth} = props


    return(<View style={{height:height, width:width, minHeight, minWidth, maxHeight, maxWidth}}/>)
}