import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
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
                <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
            </View>
            <View>
                <Button title="Close" onPress={props.closeModal} />
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 25,
    },
    input: {
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
    }
})

export default GoalInput