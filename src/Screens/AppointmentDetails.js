import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import { DetailForm } from '../Components/DetailForm';

const windowWidth = Dimensions.get('window').width;

export const AppointmentDetails = ({ route, navigation }) => {

    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image 
                    source={require('../../assets/header3.jpg')}
                    style={style.image}
                />
            </View>
            <View style={style.formContainer}>
                <DetailForm route={ route } navigation={ navigation }/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        resizeMode: "contain",
        width: windowWidth,
        marginTop: -60,
        height: 450
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
    },
    formContainer: {
        position: 'absolute',
        top: 180, 
        width: windowWidth
        
    }
})
