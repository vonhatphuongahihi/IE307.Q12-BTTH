import React, { useState, useContext } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import Header from './AuthComponent/Header';
import InputContainer from './AuthComponent/InputContainer';
import LogButton from './AuthComponent/LogButton';
import Footer from './AuthComponent/Footer';
// 22521172 - Vo Nhat Phuong
function LoginScreen({ navigation }) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Header title="Welcome" />
      <InputContainer placeHolder={'Email'} value={email} onChange={setEmail} security={false} icon='envelope-o' />
      <InputContainer placeHolder={'Password'} value={password} onChange={setPassword} security={true} icon='lock' />
      <Text style={styles.forgot}>Forgot password?</Text>
      <LogButton text='LOG IN' funct={() => login(email, password)} />
      <View style={styles.otherOption}>
        <Text style={styles.title}>Or login with</Text>
        <View style={styles.iconRow}>
          <Image style={styles.socialMediaIcon} source={require('../../assets/fbIcon.png')} />
          <Image style={styles.socialMediaIcon} source={require('../../assets/googleIcon.png')} />
        </View>
      </View>
      <Footer text1={"Don't have an account?"} text2={'Sign up here!'} funct={() => navigation.navigate('Register')} />
    </View>
  );
}
export default LoginScreen;
// 22521172 - Vo Nhat Phuong
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  forgot: {
    width: '100%',
    color: 'pink',
    textAlign: 'right',
    marginRight: 50,
  },
  otherOption: {
    marginTop: 10,
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconRow: { flexDirection: 'row' },
  socialMediaIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 20,
  },
})