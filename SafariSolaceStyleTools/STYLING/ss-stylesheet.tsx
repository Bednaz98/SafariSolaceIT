import { useContext } from "react"
import { ssContext, ssContextInterface} from "../DEVELOPER STYLING TOOLS/ss-context"

/** Get a style by its key.
 * @param keys The UI type that you want to change
 * @param developerMode Setting this to true will use the slyderStyler context instead of the regular stylesheet
 */
export function ssStyleSheet(keys: string, developerMode?: boolean){
    
   
    if (developerMode){

        //use context
        const context: ssContextInterface = useContext(ssContext)
        const retrievedContext = context.getByKey(keys)
        return retrievedContext
           
    }
    else{}
      
}