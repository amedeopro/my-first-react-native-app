import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [arrayGoal, setArrayGoal] = useState([])

  const addGoalHandler = goalTitle => {
    setArrayGoal([...arrayGoal, { id: Math.random().toString(), value: goalTitle }])
  }

  const removeGoalHandler = goalId => {
    setArrayGoal(currentGoals =>{
      return currentGoals.filter((goal)=> goal.id !== goalId)
    })
  }

  return (
    <View
      style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
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
