import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class HomeScreen extends React.Component {

  goToBuzzerScreen=(buzzercolor)=> {
      this.props.navigation.navigate('BuzzerScreen',{color:buzzercolor})
    }
  render(){
    return(
      <View>
        <AppHeader/>
        
        <TouchableOpacity 
            style={styles.button} 
            onPress={this.goToBuzzerScreen}>
            <Text style={styles.buttonText}>Equipe 1</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"green"}]} 
            onPress={()=>this.goToBuzzerScreen("green")}>
            <Text style={styles.buttonText}>Equipe 2</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"blue"}]} 
            onPress={()=>this.goToBuzzerScreen("blue")}>
            <Text style={styles.buttonText}>Equipe 3</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button,{backgroundColor:"yellow"}]} 
            onPress={()=>this.goToBuzzerScreen("yellow")}>
            <Text style={styles.buttonText}>Equipe 4</Text>
          </TouchableOpacity>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:50,
    width : 200,
    height:50,
    backgroundColor:'red',
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})