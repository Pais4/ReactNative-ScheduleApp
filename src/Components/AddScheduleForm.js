import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { sendData } from '../Utils/fetchApi';

const windowWidth = Dimensions.get('window').width;

export const AddScheduleForm = (props) => {

    const { navigation } = props;

    const [formData, setFormData] = useState({})

    const onChange = (e, type) => {
        setFormData({
          ...formData,
          [type]: e.nativeEvent.text,
        });
    };

    const onSubmit = () => {

        if(!formData.name || !formData.lastName || !formData.neighborhood || !formData.phone || !formData.identification || !formData.birthDate || !formData.city) {
            Alert.alert('Warning', 'There are some fields that are empty, please fill all fields.')
        } 
        else if(isNaN(formData.phone) || isNaN(formData.identification)){
            Alert.alert('Warning', 'You must enter a numeric value in the field phone number or id field')
        }
        else if(formData.phone.length < 10){
            Alert.alert('Waring', 'Phone number must contain 10 numbers')
        }else {
            sendData(formData) 
                .then(() => {
                    navigation.navigate('Appointment')
                })
                .catch((e) => {
                    console.log(e);
                })
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Name'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'name')}
            />
            <TextInput 
                placeholder='Last Name'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'lastName')}
            />
            <TextInput 
                placeholder='Id'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'identification')}
            />
            <TextInput 
                placeholder='Birthdate'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'birthDate')}
            />
            <TextInput 
                placeholder='City'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'city')}
            />
            <TextInput 
                placeholder='Neighborhood'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'neighborhood')}
            />
            <TextInput 
                placeholder='Phone number'
                style={styles.formInput}
                onChange={(e) => onChange(e, 'phone')}
            />
            <Button 
                title='Create'
                onPress={onSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: "black",
        borderColor: 'lightgray',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignContent: 'center',
    },
    formInput: {
        margin: 10,
        padding: 10,
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'lightgray'
    }
})
