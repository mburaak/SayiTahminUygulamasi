import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";


function StartGameScreen({onPickNumber}){
    const[enteredNumber, setEnteredNumber] = useState('');

    function resetInputHandler(){
        setEnteredNumber('');
    }
    
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >99){
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [{text : 'Okay', style : 'destructive', onPress : resetInputHandler}]);
            return;
        }
        onPickNumber(chosenNumber);
    }

    return (
        <View style = {styles.inputontainer}>
            <TextInput 
                style = {styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
        <View style = {styles.buttonsContainer}>
            <View style = {styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
            </View>
            <View style = {styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
            </View>
        </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputontainer : {
        justifyContent : 'center',
        alignItems : 'center',
        padding : 16,
        marginTop : 100,
        backgroundColor : '#490225ff',
        marginHorizontal : 24,
        borderRadius : 8,
        elevation : 4,
        shadowColor : 'black',
        shadowOffset : {width : 0, height : 2},
        shadowRadius : 6,
        shadowOpacity : 0.25
    },
    numberInput : {
        height : 60,
        width : 60,
        fontSize : 32,
        borderBottomColor : '#ddb52f',
        borderBottomWidth : 2,
        color : '#ddb52f',
        marginVertical : 8,
        fontWeight : 'bold',
        textAlign : 'center'
    },
    buttonsContainer : {
        flexDirection : 'row'
    },
    buttonContainer : {
        flex : 1
    }
})