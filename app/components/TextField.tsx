import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';
export default class TextField extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TextInput
                onChangeText={(text) => this.props.onChangeText(text)}
                value={this.props.value}
                placeholder={this.props.placeHolder}
                keyboardType={this.props.keyboardType}
                editable={this.props.editable}
                style={{...styles.TEXTINPUT_CONTAINER,...this.props.style}}
            />
        )
    }
}
const styles = StyleSheet.create({
    TEXTINPUT_CONTAINER: {
        height: 40,
        margin: 12,
        borderWidth: 0.8,
        padding: 10,
    },
})

