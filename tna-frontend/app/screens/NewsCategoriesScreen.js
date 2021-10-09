import React from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'

import colors from '../../config/colors'
import AppButton from '../components/AppButton'
import AppIconButton from '../components/AppIconButton'

export default function NewsCategoriesScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Select your favourite topics</Text>
                <Text style={styles.subtitle}>Select some of your favorite topics to let us suggest better news for you.</Text>
            </View>
            <View style={styles.categoryContainer}>
            <View style={styles.categoryRow}>
                    <View style={styles.categoryColumn}>
                        <AppIconButton title='Politics' iconName='vote' iconSize={20} color='lightGrey'/>
                    </View>
                    <View style={styles.categoryColumn}>
                        <AppIconButton title='Entertainment' iconName='movie' iconSize={20} color='lightGrey'/>
                    </View>
                </View>
                <View style={styles.categoryRow}>
                <View style={styles.categoryColumn}>
                        <AppIconButton title='World' iconName='globe-model' iconSize={20} color='lightGrey'/>
                    </View>
                    <View style={styles.categoryColumn}>
                        <AppIconButton title='Technology' iconName='gamepad-variant' iconSize={20} color='lightGrey'/>
                    </View>
                </View>
                <View style={styles.categoryRow}>
                <View style={styles.categoryColumn}>
                        <AppIconButton title='Sports' iconName='football' iconSize={20} color='lightGrey'/>
                    </View>
                    <View style={styles.categoryColumn}>
                        <AppIconButton title='Business' iconName='store' iconSize={20} color='lightGrey'/>
                    </View>
                </View>
                <View style={styles.categoryRow}>
                <View style={styles.categoryColumn}>
                        <AppIconButton title='Health' iconName='run' iconSize={20} color='lightGrey'/>
                    </View>
                    <View style={styles.categoryColumn}>
                        <AppIconButton title='Religion' iconName='hinduism' iconSize={20} color='lightGrey'/>
                    </View>
                </View>
                <View style={styles.categoryRow}>
                <View style={styles.categoryColumn}>
                        <AppIconButton title='Travel' iconName='beach' iconSize={20} color='lightGrey'/>
                    </View>
                    <View style={styles.categoryColumn}>
                        <AppIconButton title='Fashion' iconName='tshirt-v' iconSize={20} color='lightGrey'/>
                    </View>
                </View>
            </View>
            <View style={styles.categoryButtonContainer}>
                <AppButton title='Next'></AppButton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    categoryRow: {
        flex: 1,
        flexDirection: 'row',
    },
    categoryColumn: {
        flex: 1,
        margin: 10,
    },
    titleContainer: {
        flex: 1,
    },
    title: {
        color: colors.black,
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 40,
        marginStart: 20,
    },
    subtitle: {
        color: colors.grey,
        fontSize: 13,
        marginStart: 20,
        marginEnd: 20,
    },
    categoryContainer: {
        flex: 6,
        marginTop: 50,
        marginStart: 20,
        marginEnd: 20,
        justifyContent:  'space-evenly'
    },
    categoryButtonContainer: {
        width: '85%',
        margin: 20,
        justifyContent: 'center',
        alignSelf: 'center',
    }
})
