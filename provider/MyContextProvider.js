import React,{useContext,createContext,Text} from 'react';
export const newContext = createContext();
//in order for a function hook to access this provider, we need to write a custom hook
export function useProvider() {
    return useContext(newContext);
}
export function MyProvider({ChildComponents}) {
    const { Provider } = newContext;
    console.log("my context provider called", ChildComponents)
    const obj ={
        status: false,
        name:'shashank',
        salary:150000
    }
    return(
        <Provider value={obj}>
            {ChildComponents}
        </Provider>
    )
}