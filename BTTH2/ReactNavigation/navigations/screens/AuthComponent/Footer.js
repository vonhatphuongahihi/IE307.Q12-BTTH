import { StyleSheet, View, TouchableOpacity, Text,} from 'react-native';
// 22521172 - Vo Nhat Phuong
function Footer({text1, text2, funct}){
    return(
        <View style={styles.footer}>
            <Text style={styles.footerText}>{text1}</Text>
            <TouchableOpacity onPress={funct}>
              <Text style={styles.buttonText}> {text2}</Text>
            </TouchableOpacity>
      </View>   
    )
}
export default Footer;
const styles = StyleSheet.create({
    footer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      footerText:{
        fontSize: 16,
      },
      buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue'
      }
})