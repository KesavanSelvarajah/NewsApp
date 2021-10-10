import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../../config/colors';
import AppSettingsButton from '../components/AppSettingsButton'
import AppButton from '../components/AppButton';

export default function LanguageScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <MaterialCommunityIcons name='arrow-left' size={25} color='black' style={styles.icon}/>
            <Text style={styles.title}>Languages</Text>
            <View style={styles.languagesContainer}>
                <AppSettingsButton title='English' color='lightGrey' iconName='' iconColor='grey' iconSize={26} textColor='grey' fontSize={16}/>
                <AppSettingsButton title='Sinhala (සිංහල)' color='lightGrey' iconName='' iconColor='grey' iconSize={26} textColor='grey' fontSize={16}/>
                <AppSettingsButton title='Tamil (தமிழ்)' color='lightGrey' iconName='' iconColor='grey' iconSize={26} textColor='grey' fontSize={16}/>
            </View>
            <View style={styles.languagesButtonContainer}>
                <AppButton title='Save'></AppButton>
            </View>
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
    languagesContainer: {
        flex: 2,
        width: '90%',
        alignSelf: 'center',
        paddingTop: 20,
    },
    languagesButtonContainer: {
        width: '90%',
        margin: 20,
    }
})
