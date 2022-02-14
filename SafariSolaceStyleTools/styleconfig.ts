import { useContext } from "react";
import { Platform } from "react-native";
import { themeContext } from "./themecontext";




export enum Theme{
    default,
    light,
    dark,
    hacker
}

export enum Color{
    Text,
    textHeader,
    textTitle,
    Button,
    ModalBackground,
    ModalInner,
    InputText,
    primaryColor,
    SecondaryColor,
    TertiaryColor,
}

export default function GetColor(colorType:Color){
    const context = useContext(themeContext);
    let returnColor = '#ffffff'

    switch(context.theme){
        case Theme.light:{
            switch(colorType){
                case Color.Text: { returnColor = 'ivory' ; break}
                case Color.textHeader: { returnColor = 'ivory' ; break}
                case Color.textTitle: { returnColor = 'ivory' ; break}
                case Color.Button: { returnColor = 'chocolate' ; break}
                case Color.InputText: { returnColor ='linen'; break}
                case Color.ModalBackground: { returnColor = '#96D65E'}
                case Color.ModalInner: { returnColor = '#ffffff'}
                case Color.primaryColor: { returnColor = '#5B995A' ; break}
                case Color.SecondaryColor: { returnColor = '#824026' ; break}
                case Color.TertiaryColor: { returnColor = '#12FF5A' ; break}
                default:      { returnColor = '#ffffff' ; break}
            }
        }
        case Theme.dark:{
            switch(colorType){
                case Color.Text: { returnColor = 'ivory' ; break}
                case Color.textHeader: { returnColor = 'ivory' ; break}
                case Color.textTitle: { returnColor = 'ivory' ; break}
                case Color.Button: { returnColor = 'chocolate' ; break}
                case Color.InputText: { returnColor ='linen'; break}
                case Color.ModalBackground: { returnColor = '#96D65E'}
                case Color.ModalInner: { returnColor = '#ffffff'}
                case Color.primaryColor: { returnColor = '#5B995A' ; break}
                case Color.SecondaryColor: { returnColor = '#824026' ; break}
                case Color.TertiaryColor: { returnColor = '#12FF5A' ; break}
                default:      { returnColor = '#ffffff' ; break}
            }
        }
        case Theme.hacker:{
            switch(colorType){
                case Color.Text: { returnColor = 'ivory' ; break}
                case Color.textHeader: { returnColor = 'ivory' ; break}
                case Color.textTitle: { returnColor = 'ivory' ; break}
                case Color.Button: { returnColor = 'chocolate' ; break}
                case Color.InputText: { returnColor ='linen'; break}
                case Color.ModalBackground: { returnColor = '#96D65E'}
                case Color.ModalInner: { returnColor = '#ffffff'}
                case Color.primaryColor: { returnColor = '#5B995A' ; break}
                case Color.SecondaryColor: { returnColor = '#824026' ; break}
                case Color.TertiaryColor: { returnColor = '#12FF5A' ; break}
                default:      { returnColor = '#ffffff' ; break}
            }
        }
        default:{
            switch(colorType){
                case Color.Text: { returnColor = 'ivory' ; break}
                case Color.textHeader: { returnColor = 'ivory' ; break}
                case Color.textTitle: { returnColor = 'ivory' ; break}
                case Color.Button: { returnColor = 'chocolate' ; break}
                case Color.InputText: { returnColor ='linen'; break}
                case Color.ModalBackground: { returnColor = '#96D65E'}
                case Color.ModalInner: { returnColor = '#ffffff'}
                case Color.primaryColor: { returnColor = '#5B995A' ; break}
                case Color.SecondaryColor: { returnColor = '#824026' ; break}
                case Color.TertiaryColor: { returnColor = '#12FF5A' ; break}
                default:      { returnColor = '#ffffff' ; break}
            }
        }
    }
    if(Platform.OS == "android"){ return `${returnColor }`}
    else return returnColor 

}


export function shadowRadius(){
    const context = useContext(themeContext);
    switch(context.theme){
        case Theme.light:   {return 5}
        case Theme.dark:    {return 5}
        case Theme.hacker:  {return 1}
        default:            {return 5}
    }

}

export function borderRadius(){
    const context = useContext(themeContext);
    switch(context.theme){
        case Theme.light:   {return 10}
        case Theme.dark:    {return 10}
        case Theme.hacker:  {return 2}
        default:            {return 10}
    }

}

export function paddingRadius(){
    const context = useContext(themeContext);
    switch(context.theme){
        case Theme.light:   {return 5}
        case Theme.dark:    {return 5}
        case Theme.hacker:  {return 0}
        default:            {return 5}
    }
}

export function margin(){
    const context = useContext(themeContext);
    switch(context.theme){
        case Theme.light:   {return 5}
        case Theme.dark:    {return 5}
        case Theme.hacker:  {return 2}
        default:            {return 5}
    }
}
