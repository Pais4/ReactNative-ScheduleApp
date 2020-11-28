import React from 'react';
import { StyleSheet, View, Dimensions, Image } from 'react-native';
import { AddScheduleForm } from '../Components/AddScheduleForm';

const windowWidth = Dimensions.get('window').width;

export const Schedule = ({navigation}) => {
    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image 
                    source={require('../../assets/header2.jpg')}
                    style={style.image}
                />
            </View>
            <View style={style.formContainer}>
                <AddScheduleForm navigation={navigation}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        position: 'relative'
    },
    image: {
        resizeMode: "contain",
        width: windowWidth,
        marginTop: -30,
        height: 270
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
    },
    formContainer: {
        position: 'absolute',
        top: 180, 
        // flex: 1,
        width: windowWidth
        
    }
    
})


