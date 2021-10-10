import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../../config/colors';

export default function TermsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <MaterialCommunityIcons name='arrow-left' size={25} color='black' style={styles.icon}/>
            <Text style={styles.title}>Terms & Conditions</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        position: 'absolute',
        left: 20,
        top: 45,
    },
    title: {
        color: colors.black,
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 40,
        alignSelf: 'center',
    },
})
