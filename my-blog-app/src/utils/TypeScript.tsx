import { ActionType } from "."
export interface BlogData{
    title:string,
    description:string,
    images:Array<string>
   
}

interface IBlogAction{
    type:ActionType.BLOG
    payload:BlogData
}
interface IshowPopup{
    type:ActionType.POPUP,
    payload:Boolean
}
interface IgetData{
    type:ActionType.getDATA,
    payload:number
    
}


export type Action = IBlogAction | IshowPopup | IgetData

