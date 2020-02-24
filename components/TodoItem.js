import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'

export default function TodoItem({ item, pressHandler }){
    return(
        <TouchableOpacity key={item.key} onPress={() => pressHandler(item.key, item.text)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginTop: 20,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        fontSize: 20 
    }
})