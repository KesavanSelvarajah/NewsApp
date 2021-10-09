import React from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'

import colors from '../../config/colors'
import Card from '../components/Card'

export default function TopTenTrendingScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Top Ten Trending</Text>
                <Text style={styles.subtitle}>Get to know what is trending in your area.</Text>
            </View>
            <View style={styles.trendsContainer}>
                <Card>
                    title='News Title',
                    category='News category',
                    image={require('../assets/favicon.png')}
                </Card>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    trendsContainer: {
        flex: 6,
    },
})
