import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Displaylove=(prop)=>{
         console.log(prop)
         if(prop.data=="loading"){
             return <Text style={styles.text}>LOADING</Text>
         }
         if(prop.data.message){
             return <Text style={styles.text}>Something went wrong.Try again</Text>
         }
         else{
         return(
             <View style={styles.container}>
                 <Text style={styles.text}>Male:{prop.data.fname}</Text>
                 <Text style={styles.text}>Female:{prop.data.sname}</Text>
                 <Text style={styles.text1}>Love Percentage:{prop.data.percentage}</Text>
                 <Text style={styles.text}>Conclusion:{prop.data.result}</Text>
             </View>
         )
}
}
export default Displaylove
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
    text:{
        fontSize:30,
        textAlign:"center"
    },
    text1:{
        color:"red",
        fontSize:30,
        textAlign:"center"
    }
});