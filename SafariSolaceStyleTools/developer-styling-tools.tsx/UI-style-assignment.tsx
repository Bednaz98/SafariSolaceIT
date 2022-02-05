import { styleTweaker } from "./ssText";


export enum uiType {
    Text,
    View
}

export default function getSliderStyling(key, uiTypeSelected: uiType, sliderGroup: styleTweaker){
    switch (uiTypeSelected){
        case uiType.Text : { return ( {height: sliderGroup.getHeight(), width: sliderGroup.getWidth(), backgroundColor: sliderGroup.getColorState()} ) }
        case uiType.View : { return ( {height: sliderGroup.getHeight(), width: sliderGroup.getWidth(), padding: sliderGroup.getPadding(), backgroundColor: sliderGroup.getColorState(), borderRadius: sliderGroup.getBorderRadius()} ) }
        default : {}
    }
     
    
    
    
    
    
    
    
    
    
    //tel the slider object instance what id it is using, and what type of ui component is is changing, as well as the theme
     // tell the ui component what sliders are controlling it
     // change the ui component using the sliders
     //save the slider info, assinging that save a key, uitype, and themetype
}