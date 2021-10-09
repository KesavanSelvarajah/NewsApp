import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from '../../config/colors';

function WelcomeScreen(props) {
    return (
        <View style={styles.background}>
            <Text numberOfLines={2} style={styles.logo}>NEWS APP</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        width: '50%',
        color: colors.white,
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
    }
  });

export default WelcomeScreen; 