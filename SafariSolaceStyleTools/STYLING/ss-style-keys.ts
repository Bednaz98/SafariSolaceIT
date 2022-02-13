/** Keys dude */

export enum key{
    MainView,
    NavView,
    InfoView,
    Text,
    Modal,
    MenuButton,
    SyncButton,
    infoText,
    titleText
}

export interface ssKeysInterface{
    MainView: Object
    NavView: Object
    InfoView: Object
    Text: Object
    Modal: Object
    MenuButton: Object
    SyncButton: Object
    infoText: Object
    titleText: Object
}

/**object with key value pairs being objects as well */
export const ssKeys: ssKeysInterface = { 
    MainView: {},
    NavView: {},
    InfoView: {},
    Text: {},
    Modal: {},
    MenuButton: {},
    SyncButton: {},
    infoText: {},
    titleText: {},    
}