import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [arrayGoal, setArrayGoal] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const addGoalHandler = goalTitle => {
    if(goalTitle.length === 0){
      return;
    }
    setArrayGoal([...arrayGoal, { id: Math.random().toString(), value: goalTitle }])
    setModalVisible(false)
  }

  const removeGoalHandler = goalId => {
    setArrayGoal(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelBtn = () =>{
    setModalVisible(false)
  }

  return (
    <View
      style={styles.screen}>
      <Button title="Add new goal" onPress={() => setModalVisible(true)} />
      <GoalInput isVisible={modalVisible} onAddGoal={addGoalHandler} closeModal={cancelBtn}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={arrayGoal}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
