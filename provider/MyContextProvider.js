import React,{useContext,createContext,useState} from 'react';
export const newContext = createContext();
//in order for a function hook to access this provider, we need to write a custom hook
export function useProvider() {
    return useContext(newContext);
}
export function MyProvider({ChildComponents}) {
    const { Provider } = newContext;
    // const [name,setName] = useState('shashank');
    // const [status, setStatus]  = useState(false);
    // const [salary, setSalary] = useState(150000);
    const [storeObj, setStoreObj]  = useState({
        status: false,
        name:'shashank',
        salary:150000
    });

    function updateContextStore(name,salary,status){
        setStoreObj({
            name: name,
            salary: salary,
            status: status
        });
    }
    return(
        <Provider value={{storeObj,updateContextStore}}>
            {ChildComponents}
        </Provider>
    )
}