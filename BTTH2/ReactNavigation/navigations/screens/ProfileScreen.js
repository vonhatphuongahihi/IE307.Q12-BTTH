import React, { useContext } from 'react';
import { View, Text, Button , StyleSheet} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
// 22521172 - Vo Nhat Phuong
function AccountScreen() {
  const { logout } = useContext(AuthContext);  
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="LOG OUT" onPress={logout} />
    </View>
  );
}

export default AccountScreen;
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
