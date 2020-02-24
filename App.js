import React from 'react';
import { StyleSheet, Text, View, FlatList, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { TodoItem, Header, AddTodoForm }   from './components'

export default function App() {
  const [ todos, setTodos ] = React.useState([
    { text: 'buy coffee', key: 1 },
    { text: 'create an app', key: 2 },
    { text: 'learn react-native', key: 3 }
  ])
  const pressHandler = (key, text) => {
    Alert.alert(
      'Remove Task',
      `${text}`,
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => setTodos((prevTodos) => {
          console.log('prevTodos', prevTodos)
          return prevTodos.filter(todo => todo.key != key)
        })},
      ],
      {cancelable: false},
    );
  }
  const addTodo = (title) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { text: title, key: prevTodos.length+1}
      ]
    })
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}> 
          <AddTodoForm addTodo={addTodo}></AddTodoForm>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler}></TodoItem>
              )}
            >
            </FlatList>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    marginTop: 20,
    marginHorizontal: 40,
    flex: 1,
    paddingBottom: 40
  },
  list: {
    flex: 1
  }
});
