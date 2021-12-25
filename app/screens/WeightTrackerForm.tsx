import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Button,
    TouchableHighlight
} from 'react-native';
import moment from 'moment'
import ListHeader from '../components/ListHeader';
import Pickers from '../components/Picker';
import TextField from '../components/TextField';
const Realm = require('realm');
import {addUser,Weight,editUser} from '../localDatabase/Schemas'
const WeightTrackerForm = (props) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    useEffect(()=>{
        const route = props?.route?.params
         const date=(route) ? route.item.date:moment().format('YYYY-MM-DD')
         const weight=(route)?route.item.weight:''
         setDate(date)
         setText(weight)
    },[])
    const onsubmit=()=>{
        let realm,uid;

        realm = new Realm({schema: [Weight]});
        var userData = realm.objects('Weight');
        if(userData.length>0)
        {
        let lastArr=userData[0]?.uid
        userData.filter((item)=>{
            if(parseInt(item.uid)>parseInt(lastArr))
            lastArr=item.uid
        })
         uid=parseInt(lastArr)+1
    }
    else
        uid=1
     
        console.log(uid,"last arr")
        const data={
            uid:uid.toString(),
            weight:text,
            date:date
        }
        addUser(data);
        props.navigation.navigate('WeightTracker')
    }
    const onUpdate=()=>{
        console.log('edit')
          let realm;
        realm = new Realm({schema: [Weight]});
        var userData = realm.objects('Weight');
        const route = props?.route?.params
        const data={
            uid:route?.item.uid,
            weight:text,
            date:date
        }
        editUser(data)
     
        props.navigation.navigate('WeightTracker')
    }
    const route = props?.route?.params
    return (
        <View style={styles.CONTAINER}>
            <ListHeader
                name={'Weight Tracker Form'}
                navigation={props.navigation}
            />
            <View style={{ marginTop: 100 }}>
                <TextField
                    onChangeText={(text) => setText(text)}
                    value={text}
                    placeHolder={"Enter the weight(in Kg)"}
                    keyboardType="numeric"
                />
                <TextField
                    placeHolder="0"
                    value={date}
                    style={{ backgroundColor: '#F5F5F5', fontWeight: 'bold', color: '#000000' }}
                    editable={false}
                />
               
            </View>
            <TouchableHighlight style={{marginTop:20,width:'80%',height:80, alignSelf:'center'}}>
                    <Button
                        onPress={()=>(route?.type=='edit')?onUpdate(): onsubmit()}
                        title={(route?.type=='edit')?"UPDATE":"SUBMIT"}
                        color="#841584"
                        
                    />
                </TouchableHighlight>
        </View>
    )
}
const styles = StyleSheet.create({
    CONTAINER: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    TEXT_STYLE: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    TEMP_COLOR: {
        borderColor: '#d53939',
        backgroundColor: '#f7f2f5',
    },
    HORIZANTALAYOUT: {
        flexDirection: 'row',
        justifyContent: 'space-between'
        , marginTop: 10
    },
    MAINCONTAINER: {
        marginVertical: 7,
        marginHorizontal: 7.9,
        alignSelf: "center",
        width: '80%',
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        flexWrap: "wrap",
        marginTop: 40,
        padding: 10
    }
})
export default WeightTrackerForm
