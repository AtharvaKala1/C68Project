import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View>
          <h1 style={{backgroundColor:'#FDB9C8',width:1280,textAlign:'center',margin:0}}>Buzz App</h1>       
      </View>
    );
  }
}

export default AppHeader;