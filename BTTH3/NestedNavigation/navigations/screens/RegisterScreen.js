import React, { useState} from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './AuthComponent/Header';
import InputContainer from './AuthComponent/InputContainer';
import LogButton from './AuthComponent/LogButton';
import Footer from './AuthComponent/Footer';
// 22521172 - Vo Nhat Phuong
function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  return (
    <View style={styles.container}>
      <Header title="Create New Account"/> 
      <InputContainer placeHolder={'Enter username'} value={username} onChange={setUsername} security={false} icon='user'/>
      <InputContainer placeHolder={'Email'} value={email} onChange={setEmail} security={false} icon='envelope-o'/>
      <InputContainer placeHolder={'Password'} value={password} onChange={setPassword} security={true} icon='lock'/>
      <InputContainer placeHolder={'Confirm Password'} value={confirm} onChange={setConfirm} security={true} icon='lock'/>
      <LogButton text='CREATE' funct={()=>alert("Đăng ký thành công!")}/>
      <Footer text1={"Already have an account?"} text2={'Login now!'} funct={()=>navigation.navigate('Login')}/>   
    </View>
  );
}
export default RegisterScreen;
const styles = StyleSheet.create({
  container:{
    flex : 1,
    padding:20,
    alignItems: 'center'
  },
})