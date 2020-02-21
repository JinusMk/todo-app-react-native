import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function App() {
  const [ data, setData ] = React.useState(elements)
  const handleRemove = (value) => {
    setData((prevData) => {
      return prevData.filter(item =>  item.value != value )
    })
  }
  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingHorizontal: 40
  }
});
