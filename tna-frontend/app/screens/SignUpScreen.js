import React, { useState} from 'react';
import { StyleSheet, SafeAreaView, Text, View} from 'react-native';

import colors from '../../config/colors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

export default function SignUpScreen() {
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rPassword, setRPassword] = useState();
    return (
        <SafeAreaView style= {styles.container}>
            <Text style= {styles.title}>Welcome to News App 👋</Text>
            <Text numberOfLines={2} style= {styles.subtitle}>Hello, we guess you are new here. You can start using the application after a quick sign up.</Text>
            <View style= {styles.textInputContainer}>
                <AppTextInput 
                    icon='account' 
                    placeholder='Username' 
                    maxLength={10}  
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    textContentType='username'
                    onChangeText={text => setUserName(text)}
                />
                <AppTextInput 
                    icon='email'
                    placeholder='Email Address' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    keyboardType='email-address' 
                    textContentType='emailAddress'
                    onChangeText={text => setEmail(text)}
                />
                <AppTextInput 
                    icon='lock'
                    placeholder='Password' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    secureTextEntry 
                    textContentType='password'
                    onChangeText={text => setPassword(text)}
                />
                <AppTextInput 
                    icon='lock' 
                    placeholder='Repeat password' 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    secureTextEntry 
                    textContentType='password'
                    onChangeText={text => setRPassword(text)}
                />
            </View>
            <View style={styles.signUpButtonContainer}>
                <AppButton title='Sign Up' onPress={() => console.log(userName, email, password, rPassword)}></AppButton>
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
    signUpButtonContainer: {
        width: '90%',
        margin: 20,
    }
})
