import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
    }



    return (
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.btn}>
                    <View style={styles.button}>
                        <Button title="CLOSE" color="red" onPress={props.closeModal} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 10
    },
    btn: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "60%"
    },
    button:{
        width: '40%'
    }
})

export default GoalInput