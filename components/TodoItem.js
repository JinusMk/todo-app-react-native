import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function TodoItem({ item, pressHandler }){
    return(
        <View style={styles.item}>
            <Text>{item.text}</Text> 
            <TouchableOpacity key={item.key} onPress={() => pressHandler(item.key, item.text)}>
                <MaterialIcons name="delete" size={18} color={'#333'}></MaterialIcons>
            </TouchableOpacity>
        </View>
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
        fontSize: 20 ,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})