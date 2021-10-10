import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'

import colors from '../../config/colors'
import AppSettingsButton from '../components/AppSettingsButton'

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.profile}>
                <Image resizeMode='cover' style={styles.profileImage} source={require('../assets/profile.png')}/>
                <View style={styles.detailsContainer}>
                    <Text style={styles.profileName}>Kesavan Selvarajah</Text>
                    <Text style={styles.profileEmail}>kesavan@tna.com</Text>
                </View>
            </View>
            <View style={styles.settingsContainer}>
                <AppSettingsButton title='Languages' color='lightGrey' iconName='menu-right' iconColor='grey' iconSize={26} textColor='grey' fontSize={16}/>
                <AppSettingsButton title='Favourite Categories' color='lightGrey' iconName='menu-right' iconColor='grey' iconSize={26} textColor='grey' fontSize={16}/>
                <AppSettingsButton title='Change Password' color='lightGrey' iconName='menu-right' iconColor='grey' iconSize={26} textColor='grey' fontSize={16}/>
                <AppSettingsButton title='Terms & Conditions' color='lightGrey' iconName='menu-right' iconColor='grey' iconSize={26} textColor='grey' fontSize={16}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: colors.black,
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 40,
        marginStart: 20,
    },
    profile: {
        width: '90%',
        padding: 20,
        flexDirection: 'row',
    },
    profileImage: {
        width: 75,
        height: 75,
        borderRadius: 50,
        alignSelf: 'center'
    },
    detailsContainer: {
        flex: 2,
        paddingStart: '7%',
        paddingTop: 7,
        paddingBottom: 7,
        justifyContent: 'space-evenly',
    },
    profileName: {
        fontSize: 18,
        color: colors.black,
        fontWeight: 'bold'
    },
    profileEmail: {
        fontSize: 14,
        color: colors.grey,
    },
    settingsContainer: {
        width: '90%',
        alignSelf: 'center',
        paddingTop: 20,
    },
})
