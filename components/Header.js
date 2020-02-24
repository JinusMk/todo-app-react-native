import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header(props){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>MyTodos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
})