import { StyleSheet, Text, TouchableOpacity,} from 'react-native';

function LogButton({funct, text}){
    return(
    <TouchableOpacity style={styles.buttonContainer} onPress={funct}>
        <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
    )
}
// 22521172 - Vo Nhat Phuong
export default LogButton;
const styles = StyleSheet.create({
    buttonContainer:{
      width:300,
      height: 60,
      borderRadius: 15,
      backgroundColor: 'orange',
      justifyContent:'center',
      alignItems: 'center',
      margin: 10,
    },
    textButton:{
      color: 'white',
      fontSize: 20,
    },
})