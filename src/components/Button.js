import React from "react";
import  { Dimensions, StyleSheet, Text, TouchableHighlight} from "react-native";

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').widht /4,
        width: Dimensions.get('window').widht /4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidt: 1,
        borderColor: '#888888'
    },
    operationButton: {
        color: '#ffffff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        widht: (Dimensions.get('window').width / 4) *2,
    },
    buttonTriple: {
        widht: (Dimensions.get('window').widht / 4) *3
    }
})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.double) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)

    return (
    <TouchableHighlight onPress={props.onClick}>
        <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
    )
}