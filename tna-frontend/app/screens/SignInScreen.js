import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import colors from '../../config/colors';

export default function SignInScreen() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <SafeAreaView style= {styles.container}>
            <Text style= {styles.title}>Welcome Back 👋</Text>
            <Text numberOfLines={2} style= {styles.subtitle}>We are happy to see you again. You can continue where you left off by logging in</Text>
            <View style= {styles.textInputContainer}>
                <AppTextInput 
                    icon='email' 
                    placeholder='Email Address' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    keyboardType='email-address'
                    onChangeText={text => setEmail(text)}
                    textContentType='emailAddress'
                />
                <AppTextInput 
                    icon='lock' 
                    placeholder='Password' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    onChangeText={text => setPassword(text)}
                    secureTextEntry 
                    textContentType='password'
                />
            </View>
            <View style={styles.signInButtonContainer}>
                <AppButton title='Sign In' onPress={() => console.log(email, password)}></AppButton>
            </View>
        </SafeAreaView>
    );
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
    subtitle: {
        color: colors.grey,
        fontSize: 13,
        marginStart: 20,
        marginEnd: 20,
    },
    textInputContainer: {
        alignItems: 'center'
    },
    signInButtonContainer: {
        width: '90%',
        margin: 20,
    }
})

