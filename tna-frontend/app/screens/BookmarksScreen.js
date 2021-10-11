import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native'

import colors from '../../config/colors'
import Card from '../components/Card'

const data = require('../assets/data/bookmarks.json');

export default function BookmarksScreen() {

    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        setBookmarks(data);

        return () => {
            setBookmarks([])
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Bookmarks</Text>
                <Text style={styles.subtitle}>Saved articles in the library</Text>
            </View>
            <View style={styles.bookmarksContainer}>
                <FlatList
                    data={bookmarks}
                    renderItem={({ item }) => 
                        <Card
                            title={item.title}
                            category={item.category.name}
                            image={item.image}
                            onPress={() => {console.log('Button tapped')}}/>}
                    keyExtractor={item => item.id}
                />
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
    bookmarksContainer: {
        flex: 6,
    },
})

