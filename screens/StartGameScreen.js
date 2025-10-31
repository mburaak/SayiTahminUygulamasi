import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";


function StartGameScreen(){
    return (
        <View style = {styles.inputontainer}>
            <TextInput style = {styles.numberInput} maxLength={2} keyboardType="number-pad"/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputontainer : {
        padding : 16,
        marginTop : 100,
        backgroundColor : '#57012cff',
        marginHorizontal : 24,
        borderRadius : 8,
        elevation : 4,
        shadowColor : 'black',
        shadowOffset : {width : 0, height : 2},
        shadowRadius : 6,
        shadowOpacity : 0.25
    },
    numberInput : {
        height : 50,
        width : 50,
        fontSize : 32,
        borderBottomColor : '#ddb52f',
        borderBottomWidth : 2,
        color : '#ddb52f',
        marginVertical : 8,
        fontWeight : 'bold',
        textAlign : 'center'
    }
})