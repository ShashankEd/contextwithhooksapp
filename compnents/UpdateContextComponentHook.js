import React, { useState, useEffect,useContext } from 'react';
import {
    View,
    Text,
    Button,
} from 'react-native';

// import {newContext} from '../App'
import {useProvider} from '../provider/MyContextProvider';
function UpdateContextComponentHook() {
    const {storeObj,updateContextStore} = useProvider();
    console.log("context store ", useProvider());
    // const {contextstore, setContextstore} = useState(useProvider())
    const[name,setName] = useState();
    const[status,setStatus] = useState()
    const[salary,setSalary] = useState()
    useEffect(() => {
        console.log("context store ", storeObj);
        if(storeObj) {
            setStatus(storeObj['status']);
            setName(storeObj['name']);
            setSalary(storeObj['salary']);
        }
    })
    return (
        <View>
            <Text style={{ fontSize:30 }}> Reading from context</Text>
            <Text style={{ fontSize: 15 }}>Name:  {name +" Status: " + status + " Salary :" +salary }</Text>
            <Button title="Update store" onPress={() => updateContextStore('shubham',150000,true)}/>
        </View>
    )
}

export default UpdateContextComponentHook;