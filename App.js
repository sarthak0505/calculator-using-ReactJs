import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput,Appbar,Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { render } from 'react-dom';

import Displaylove from './components/Displaylove'
class App extends React.Component {
  state ={
    fname:'',
    sname:'',
    result:"loading"
  }
  submitit(){
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,{
      headers:{
        "x-rapidapi-key": "b547ef111cmsh0221cb751d2fbb9p1c462ajsn430d4ad178cf",
        "x-rapidapi-host": "love-calculator.p.rapidapi.com"
      }
      }).then(data=>data.json())
      .then(data2=>{
        console.log(data2);
        this.setState({
          result:data2
        })
      })
    }
  
  render(){
  return (
    <View style={styles.container}>
     <Appbar.Header>
       <Appbar.Content
         title = "Test Your Love(CR:Sarthak_d05)"
         style={{alignItems:'center'}}
         />
     </Appbar.Header>

    <TextInput
    label="person1(male)"
    value ={this.state.fname}
    onChangeText={text=>this.setState({fname:text})}
    />
     <TextInput
    label="person2(female)"
    value ={this.state.sname}
    onChangeText={text=>this.setState({sname:text})}

    />
    <Button style={{margin:10}}  mode="contained" 
    onPress={this.submitit.bind(this)}>
      Calculate
    </Button>
      <Displaylove data={this.state.result}/>
    </View>
  );
}}


export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
