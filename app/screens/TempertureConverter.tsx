import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import ListHeader from '../components/ListHeader';
import Pickers from '../components/Picker';
import TextField from '../components/TextField';
const TempratureConverter = (props) => {
    const [text, setText] = useState('');
    const [selectedTemp, setSelectedTemp] = useState('Celcius');
    const [isselectedTemp, setIsSelectedTemp] = useState('Celcius');
    const [Value, setValue] = useState('');

    const changeValue = (value) => {
        let valueIs = ''
        console.log(selectedTemp)
        if (isselectedTemp == 'Farenheit' && selectedTemp == 'Celcius') {
            valueIs = `${value * 1.8 + 32}`
            setValue(valueIs)
            console.log(valueIs)
        }
        else if (isselectedTemp == 'Celcius' && selectedTemp == 'Farenheit') {
            valueIs = `${value / 1.8 - 32}`
            setValue(valueIs)
            console.log(valueIs)
        }
        else {
            setValue(value)
        }
        setText(value)
    }
    const onChangePicker1 = (itemValue) => {
        let valueIs = ''
        console.log(selectedTemp, isselectedTemp)
        if (isselectedTemp == 'Farenheit' && itemValue == 'Celcius') {
            valueIs = `${text * 1.8 + 32}`
            setValue(valueIs)
            console.log(valueIs)
        }
        else if (isselectedTemp == 'Celcius' && itemValue == 'Farenheit') {
            valueIs = `${text / 1.8 - 32}`
            setValue(valueIs)
            console.log(valueIs)
        }
        else {
            setValue(text)
        }
        setSelectedTemp(itemValue);
    }
    const onChangePicker2 = async (itemValue) => {
        let valueIs = ''
        console.log(selectedTemp, isselectedTemp)
        if (itemValue == 'Farenheit' && selectedTemp == 'Celcius') {
            valueIs = `${text * 1.8 + 32}`
            setValue(valueIs)
            console.log(valueIs)
        }
        else if (itemValue == 'Celcius' && selectedTemp == 'Farenheit') {
            valueIs = `${text / 1.8 - 32}`
            setValue(valueIs)
            console.log(valueIs)
        }
        else {
            setValue(text)
        }
        setIsSelectedTemp(itemValue);
    }
    return (
        <View style={styles.CONTAINER}>
            <ListHeader
            name={'Temperature Converter'}
            navigation={props.navigation}
            />
            <View style={{marginTop:100}}>
            <View style={styles.HORIZANTALAYOUT}>
                <TextField
                    onChangeText={(text) => changeValue(text)}
                    placeHolder={"Enter the value"}
                    style={{width: '50%'}}
                    keyboardType="numeric"
                />
                <Pickers
                    selectedValue={selectedTemp}
                    onValueChange={(itemValue, itemIndex) => {
                        onChangePicker1(itemValue)
                    }}
                />
            </View>
            <View style={styles.HORIZANTALAYOUT}>
                <TextField
                    placeHolder="0"
                    value={Value}
                    style={{ backgroundColor: '#F5F5F5', width: '50%', fontWeight: 'bold', color: '#000000' }}
                    editable={false}
                />
                <Pickers
                    selectedValue={isselectedTemp}
                    onValueChange={(itemValue, itemIndex) => {
                        onChangePicker2(itemValue)
                    }}
                />
            </View>
            </View>
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
        justifyContent:'space-between'
        ,marginTop:10
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
export default TempratureConverter
