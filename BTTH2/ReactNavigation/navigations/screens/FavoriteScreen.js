import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
// 22521172 - Vo Nhat Phuong
function FavoriteScreen() {  
  return (
    <View style={styles.container}>
      <Text>Favorite Screen</Text>
    </View>
  );
}

export default FavoriteScreen;
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})