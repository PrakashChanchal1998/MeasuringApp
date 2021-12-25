import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
export default class Pickers extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Picker
            selectedValue={this.props.selectedValue}
            mode="dropdown"
            style={{ height: 50, width: 170 }}
            onValueChange={(itemValue) => {this.props.onValueChange(itemValue)}}
          >
            <Picker.Item label="Celcius" value="Celcius" />
            <Picker.Item label="Farenheit" value="Farenheit" />
          </Picker>
        )
    }
}
const styles = StyleSheet.create({
    TEXTINPUT_CONTAINER: {
        height: 40,
        margin: 12,
        width: '50%',
        borderWidth: 1,
        padding: 10,
    },
})

