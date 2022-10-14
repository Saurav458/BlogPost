import { ActionType } from "../../utils";
import { Action } from "../../utils/TypeScript";
// type initialState=Array<string>
// const initialState1:initialState=[] ;

export const blogInfo = (state:Array<string> =[], action: Action) => {
  switch (action.type) {
    case ActionType.BLOG:
      return [...state ,action.payload]

    default:
      return state;
  }
};
const popup:Boolean=false;
export const popUpReducer =(state:Boolean = popup,action:Action)=>{
  switch(action.type){
      case ActionType.POPUP:
          return action.payload
      default: return state  
  }
}
// export const productData = (data:number=0, action:Action) => {
 
//   switch (action.type) {
//           case ActionType.getDATA:
//               console.log("PRODUCT_LIST condition ", action.payload)
//               return action.payload+1
//       default:
//           return data
//   }
// }
let initialState=[]
export const productData = (data=[] ,action:any) => {
 
  switch (action.type) {
          case "getdata":
              console.log("PRODUCT_LIST condition ", action.payload)
              return action.payload
      default:
          return data
  }
}