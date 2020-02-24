import React from 'react'
import { View, StyleSheet, Text, TextInput, Alert, Button } from 'react-native'

export default function AddTodoForm(props){
    const [title, setTitle] = React.useState('')

    const handleChange = (value) => {
        setTitle(value)
    }
    const submitHandler = () => {
        if(title.length >= 4){   
            setTitle('')
            props.addTodo(title)
        }else{
            Alert.alert('OOPS!', 'Todos must be minimum 4 chars long', [
                { text: 'Understood', onPress: () => console.log('Understood clicked')}
            ])
        }
    }
    return(
        <View style={styles.form}>
            <TextInput 
                placeholder="Add new todo.."
                onChangeText={handleChange}
                style={styles.input}
                value={title}
            />
            <Button 
                onPress={submitHandler} 
                title='Add todo'
                color="coral"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 6,
        borderColor: 'coral',
        shadowColor: '#ddd',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.3,
        // shadowRadius: 10,  
        // elevation: 5
    },
    input: {
        marginBottom: 15,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})