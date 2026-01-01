import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/color";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
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
            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer : {
        flex : 1,
        marginTop : 100,
        alignItems : 'center'
    },
    inputontainer : {
        justifyContent : 'center',
        alignItems : 'center',
        padding : 16,
        marginTop : 36,
        backgroundColor : Colors.primary800,
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
        borderBottomColor : Colors.accent500,
        borderBottomWidth : 2,
        color : Colors.accent500,
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