import { StyleSheet, View, Text, Image, } from 'react-native';
// 22521172 - Vo Nhat Phuong
function Header({title}){
    return(
    <View style={styles.logoContainer}>
        <Image style={styles.logo} alt='logo' source={require('../../../assets/logo.png')}/>
        <Text style={styles.title}>{title}</Text>
    </View>
    );
}

export default Header;
const styles = StyleSheet.create({
    logoContainer:{
      marginTop: 100,
      width: '100%',
      height: 150,
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo:{
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    title:{
      fontSize: 25,
      fontWeight: 'bold',
    },
  })