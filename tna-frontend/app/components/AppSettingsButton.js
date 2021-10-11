import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../../config/colors';

function AppSettingsButton({title, onPress, color='primary', iconName, iconSize, iconColor='black', textColor='black', fontSize}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text numberOfLines={1} style={[styles.text, {color: colors[textColor]}, {fontSize: fontSize}]}>{title}</Text>
            <MaterialCommunityIcons name={iconName} color={iconColor} size={iconSize} style={styles.icon}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
        width: '100%',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 15,
    },
    text: {
        flex: 4,
        color: colors.white,
        fontSize: 14,
        textTransform: 'none',
        fontWeight: 'bold',
        padding: 7,
        marginStart: 30,
        textAlign: 'left',
    },
    icon: {
        flex: 1,
        padding: 4,
    },
})

export default AppSettingsButton;