import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Dimensions, Image } from 'react-native';

import { getData } from '../Utils/fetchApi';
import { ListItem } from '../Components/ListItem';

const windowWidth = Dimensions.get('window').width;

export const ListAppointment = ({navigation}) => {

    const [appointmentData, setAppointmentData] = useState(null)

    useEffect(() => {
        getData()
            .then(data => setAppointmentData(data))
            .catch(e => console.log(e))
    }, [appointmentData])

    return (
        <View>
            <View style={style.imageContainer}>
                <Image 
                    source={require('../../assets/header1.jpg')}
                    style={style.image}
                />
            </View>
            <View style={style.listContainer}>
                {
                    (!appointmentData)
                        ? <Text>Cargando..</Text>
                        : <FlatList
                            data={appointmentData.quotesDB}
                            renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('Details', item)}><ListItem data={item}/></TouchableOpacity>}
                            // keyExtractor={item => item._id}
                            keyExtractor={item => item._id.$oid}
                            >
                        </FlatList>
                        
                }
            </View>
            
        </View>
    )
}

const style = StyleSheet.create({
    image: {
        resizeMode: "contain",
        width: windowWidth,
        marginTop: -40,
        height: 350
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
    },
    listContainer: {
        position: 'absolute',
        top: 180, 
        width: windowWidth
        
    }
    
})