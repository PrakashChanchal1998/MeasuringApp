import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
export default class ListHeader extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {navigation}=this.props
        return (
            <View style={styles.CONTAINER}>
                <View style={styles.HORIZANTALAYOUT}>
                    <TouchableOpacity 
                    onPress={()=>navigation.goBack()}
                    >
                        <Image
                            source={
                                require('../assets/back.png')
                                }
                            style={styles.IMAGE_STYLE}
                            resizeMode="contain"
                        />
                        </TouchableOpacity>
                    <Text style={styles.TEXTSIZE}>{this.props.name}</Text>
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
        
    },
    IMAGE_STYLE: {
        margin: 13,
        height: 35,
        width: 35,
    }
})