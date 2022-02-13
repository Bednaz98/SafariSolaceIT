import { useContext } from "react"
import { ssContext, ssContextInterface} from "../DEVELOPER STYLING TOOLS/ss-context"
import { Theme } from "./get-style"
import { defaultThemeStyle, coolTheme} from "./stylesheet"
import { themeContext } from "./themecontext"

/** Get a style by its key.
 * @param keys The UI type that you want to change
 * @param developerMode Setting this to true will use the slyderStyler context instead of the regular stylesheet
 */
export function ssStyleSheet(keys: string){  
    const context: ssContextInterface = useContext(ssContext)
    const retrievedContext = context.getByKey(keys)
    return retrievedContext 
      
}