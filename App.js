import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Navbar } from "./src/Navbar";
import { AddTodo } from "./src/AddTodo";
import { Todo } from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([
    // {id:1, title: 'test'},
    // {id:2, title: 'test'},
    // {id:3, title: 'test'},
    // {id:4, title: 'test'},
    // {id:5, title: 'test'},
    // {id:6, title: 'test'},
    // {id:7, title: 'test'},
    // {id:8, title: 'test'},
    // {id:9, title: 'test'},
    // {id:10, title: 'test'},
    // {id:11, title: 'test'},
    // {id:12, title: 'test'},
    // {id:13, title: 'test'},
    // {id:14, title: 'test'},
    // {id:15, title: 'test'},
  ]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar title="Todo App!" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList 
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({item}) => (
          <Todo todo={item} onRemove={removeTodo}/>
        )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
