import React from 'react'
import { SafeAreaView, View, Image, StyleSheet, Text, Button } from 'react-native'

import colors from '../../config/colors';
import AppButton from '../components/AppButton'

export default function GetStartScreen() {
    return (
        <SafeAreaView style= {styles.container}>
            <Image style= {styles.startImage} source={require("../assets/start.jpg")}/>
            <View style= {styles.startDescription}> 
                <Text numberOfLines={2} style= {styles.startTitle}>NEWS APP</Text>
                <Text style= {styles.startSubtitle}>All News in one place</Text>
            </View>
            <View style= {styles.startButtonContainer}>
                <AppButton title='Get Started' onPress={() => console.log("Tapped")}></AppButton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    startImage: {
        flex: 7,
        width: '75%',
        height: '50%',
        borderRadius: 15,
        marginTop: 75,
    },
    startDescription: {
        flex: 2,
        width: '100%',
    },
    startTitle: {
        color: colors.secondary,
        fontSize: 50,
        fontWeight: 'bold',
        top: 10,
        alignSelf: 'center',
    },
    startSubtitle: {
        width: '50%',
        color: colors.grey,
        fontSize: 14,
        top: 10,
        textAlign: 'center',
        alignSelf: 'center',
    },
    startButtonContainer: {
        flex: 1,
        width: '90%',
        justifyContent: 'center',
        bottom: 10,
    },
})
