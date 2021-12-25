import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
export default class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.CONTAINER}>
                <View style={styles.HORIZANTALAYOUT}>
                    <Text style={styles.TEXTSIZE}>Tracker & Converter</Text>
                    <View>
                        <Image
                            source={
                                require('../assets/home.png')
                                }
                            style={styles.IMAGE_STYLE}
                            resizeMode="contain"
                        />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    CONTAINER: {
        backgroundColor: "#ecf3f9",
        height: 60,
      
    },
    TEXTSIZE: {
        margin: 10,
        fontSize: 26,
        fontWeight:'bold'
    },
    HORIZANTALAYOUT: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    IMAGE_STYLE: {
        margin: 13,
        height: 35,
        width: 35,
    }
})