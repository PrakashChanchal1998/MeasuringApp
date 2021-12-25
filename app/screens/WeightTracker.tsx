import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import ListHeader from '../components/ListHeader';
import { ListView } from '../components/ListView';
import TextField from '../components/TextField';
import {Weight,DeleteUser} from '../localDatabase/Schemas'
const Realm = require('realm');
export default class WeightTracker extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            detaiils:[]
        }
    }

     getData () {
        let realm;
        realm = new Realm({schema: [Weight]});
        var userData = realm.objects('Weight');
        this.setState({details:userData})
      }
      componentDidMount(){
          this.getData()
      }
     async delete(item){
        DeleteUser(item)
        let realm;
        realm = new Realm({schema: [Weight]});
        var userData =await realm.objects('Weight');
        this.setState({details:userData})

      }
     renderDetails(item){
        return(
        <View style={styles.renderContainer}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.KEY_STYLE}>Weight: </Text>
                <Text style={styles.VALUE_STYLE}>{item.weight}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.KEY_STYLE}>Date:    </Text>
                <Text style={styles.VALUE_STYLE}>{item.date}</Text>
            </View>
            <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
            <TouchableOpacity  style={{width:40}}
            onPress={()=>this.props.navigation.navigate('WeightTrackerForm',{
                item:item,
                type:'edit'
            })}
            >
             <Image
                source={
                require('../assets/edit.png')
                }
                style={styles.editIcon}
                resizeMode="contain"
                        />
            </TouchableOpacity>
            <TouchableOpacity style={{width:40}}
            onPress={()=>this.delete(item)}
            >
             <Image
                source={
                require('../assets/delete.png')
                }
                style={styles.deleteIcon}
                resizeMode="contain"
                        />
            </TouchableOpacity>
            </View>
        </View>
        )
    }
    render()
    {
    return (
        <View style={styles.CONTAINER}>
            <ListHeader
            name={'Weight Tracker'}
            navigation={this.props.navigation}
            />
           <ListView
             items={this.state.details}
             keyExtractor={item => item.uid}
             renderItem={({ item }) => this.renderDetails(item)}
            />
            <TouchableOpacity style={styles.MAINCONTAINER}
            onPress={()=>this.props.navigation.navigate('WeightTrackerForm')}
            >
             <Image
                source={
                require('../assets/add.png')
                }
                style={styles.IMAGE_STYLE}
                resizeMode="contain"
                        />
            </TouchableOpacity>
            
        </View>
    )
        }
}
const styles = StyleSheet.create({
    CONTAINER: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    MAINCONTAINER:{
        height:60,
        width:60,
        borderRadius: 60,
        borderStyle: "solid",
        borderWidth:2,
        position:'absolute',
        zIndex:1,
        borderColor:'#48a5f4',
        backgroundColor:'#ecf3f9',
        bottom:0,
        right:0,
        margin:30
    },
    editIcon:{
        margin: 11,
        height: 25,
        width: 25,
        tintColor:'#48a5f4'
    },
    deleteIcon:{
        margin: 11,
        height: 25,
        width: 25,
        tintColor:'#d53939' 
    },
    renderContainer:{
        marginTop:20,
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth:2,
        width:'90%',
        alignSelf:'center'
    },
    KEY_STYLE:{
        fontSize:16,
        fontWeight:'bold',
        margin:5
    },
    VALUE_STYLE:{
        fontSize:16,
        margin:5
    },
    IMAGE_STYLE: {
        margin: 11,
        height: 35,
        width: 35,
        tintColor:'#48a5f4'

    }
})
