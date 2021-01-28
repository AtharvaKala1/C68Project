import React from 'react';
import {Text,View} from 'react-native';
import AppHeader from '../components/AppHeader'

export default class fbScreen extends React.Component {
   render() {
     return(
       <View style={{justifyContent:'center',alignItems:'center'}}>
           <AppHeader/>
           <p  style={{color:'blue',fontSize:25,margin:225}}><i><b>Facebook</b></i></p>
       </View>
     
     )
   }
  }