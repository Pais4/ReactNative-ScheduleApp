import React from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const ListItem = ({data}) => {

    const { name, lastName, phone, birthDate, city, identification } = data

    return (
        <View style={style.container}>
            <View style={style.insideContainer}>
                <View style={style.imageStyle}>
                    <Image 
                        source={require(`../../assets/${1}.png`)}
                        style={style.image}
                    />
                </View>
                <View style={style.infoStyle}>
                    <Text>Full name: {name} {lastName}</Text>
                    <Text>ID: {identification}</Text>
                    <Text>Birth date: {birthDate}</Text>
                    <Text>Phone: {phone}</Text>
                    <Text>City: {city}</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    insideContainer: {
        flexDirection: 'row'
    },
    imageStyle: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 150, 
        width: 150,
        borderRadius: 50
    },
    infoStyle: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
})
