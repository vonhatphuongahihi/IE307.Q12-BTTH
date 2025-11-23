// 22521172 - Vo Nhat Phuong
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
function InputContainer({placeHolder, value, onChange, security, icon}){
    return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inputContainer}>
          <View style={styles.icon}>
            <Icon name={icon} size={30} color='black'/>
          </View>
          <TextInput 
            placeholder={placeHolder} 
            value={value} 
            onChangeText={onChange} 
            secureTextEntry={security}
            style={styles.textInput}
          />
        </View>
    </TouchableWithoutFeedback>
    );
}
export default InputContainer;

// 22521172 - Vo Nhat Phuong
const styles = StyleSheet.create({
    inputContainer:{
        width: 300,
        height: 50,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 0,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon:{
        width:30,
        height:30,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    textInput: {
        flex: 1,
        padding: 0,
        margin: 0,
    }
})