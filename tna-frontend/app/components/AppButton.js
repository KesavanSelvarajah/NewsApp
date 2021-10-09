import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../../config/colors';

function AppButton({title, onPress, color='primary'}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
            <Text  style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
        width: '100%'
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'none',
        fontWeight: 'bold'
    }
})

export default AppButton;