import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

export default function ShortAndSimpleScreen() {
    return (
        <View>
            <Image source={require('../assets/digests.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({})
