
import {createContext}from 'react';
export const cartContext = createContext({});



const cartContextProvider = (children)=>{
     return <cartContext.Provider>{children}</cartContext.Provider>
}

export default  cartContextProvider;



