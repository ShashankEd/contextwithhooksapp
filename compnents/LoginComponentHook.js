import React, { useState, useEffect,useContext } from 'react';
import {
    View,
    Text,
} from 'react-native';

// import {newContext} from '../App'
import {useProvider} from '../provider/MyContextProvider';
function LoginComponentHook() {
    const [contextstore, setContextStore] = useState(useProvider())
    const[name,setName] = useState();
    const[status,setStatus] = useState()
    useEffect(() => {
        console.log("context store ", contextstore);
        if(contextstore) {
            setStatus(contextstore['status']);
            setName(contextstore['name']);
        }
    })
    return (
        <View>
            <Text style={{ fontSize:30 }}> Reading from context</Text>
            <Text style={{ fontSize: 15 }}>Name:  {name +" Status: " + status}</Text>
        </View>
    )
}

export default LoginComponentHook;