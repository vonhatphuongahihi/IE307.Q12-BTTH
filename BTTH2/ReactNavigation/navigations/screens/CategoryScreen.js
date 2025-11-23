import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
// 22521172 - Vo Nhat Phuong
function CategoryScreen() {  
  return (
    <View style={styles.container}>
      <Text>Category Screen</Text>
    </View>
  );
}

export default CategoryScreen;
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
