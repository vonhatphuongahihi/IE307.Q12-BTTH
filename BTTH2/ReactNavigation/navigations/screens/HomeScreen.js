import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
// 22521172 - Vo Nhat Phuong
function HomeScreen() {  
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default HomeScreen;
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
