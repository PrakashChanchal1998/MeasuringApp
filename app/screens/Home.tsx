import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Header from "../components/Header"

const Home=(props)=>{

return(
    <View style={styles.CONTAINER}>
      <Header/>
      <View style={{justifyContent:'center'}}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('WeightTracker')}>
        <View style={[styles.MAINCONTAINER,styles.WEIGHT_COLOR]}>
          <Text style={[styles.TEXT_STYLE,{color:'#48a5f4'}]}>Weight Tracker</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>props.navigation.navigate('TempCoverter')}>
        <View style={[styles.MAINCONTAINER,styles.TEMP_COLOR]}>
          <Text style={[styles.TEXT_STYLE,{color:'#d53939'}]}>Temperature Covertor</Text>
          </View>
        </TouchableOpacity>
        </View>
        </View>
    
)
}
const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  TEXT_STYLE:{
    fontSize:28,
    fontWeight:'bold',
  },
  WEIGHT_COLOR:{
    borderColor:'#48a5f4',
    backgroundColor:'#ecf3f9',
  },
  TEMP_COLOR:{
    borderColor:'#d53939',
    backgroundColor:'#f7f2f5',
  },
  MAINCONTAINER:{
    marginVertical:7,
    marginHorizontal: 7.9,
    alignSelf:"center",
    width:'80%',
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth:1,
    flexWrap: "wrap",
    marginTop:40,
    padding:10
  }
})
export default Home
