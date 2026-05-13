import { createContext,useContext,useReducer } from "react";
const CartDispatchContext = createContext()
const CartStatecontext = createContext()
const Reducer =(state,action)=>{

    switch(action.type){
        case "ADD":
            return[...state,
               {
                id: action.id,
                name : action.name,
                price : action.price,
                
                qty : action.qty,
                size : action.size
    
               }
            ]
        case "UPDATE":
            let arr = [...state]
            arr.find((item,index)=>{
                if(item.id === action.id && item.size === action.size){
                    arr[index]={
                        ...item,
                        qty : parseInt(action.qty) + item.qty,
                        price : action.price +item.price

                    }
                }
            })
            return arr;
        case "DROP":
            return []   
        case "REMOVE":
           let newARR = [...state]
           newARR.splice(action.index,1)
           return newARR
        
             
        
        
        default:
            console.log("Error in reducer")
            return state
    }
}
export const  Provider = ({children})=>{
    const [state,dispatch] = useReducer(Reducer,[])
    return(
       <CartDispatchContext.Provider value={dispatch}>
        <CartStatecontext value={state}>
            {children}
        </CartStatecontext>
       </CartDispatchContext.Provider>
    )
}
export const useDispatch = ()=>useContext(CartDispatchContext)
export const useCart = ()=> useContext(CartStatecontext)