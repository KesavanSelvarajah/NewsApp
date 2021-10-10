import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, FlatList } from 'react-native'

import colors from '../../config/colors'
import Card from '../components/Card'

const datas = [
    {
        id: 1,
        category: 'Category 1',
        title: 'Title 1',
        image: require('../assets/shorts.jpg')
    },
    {
        id: 2,
        category: 'Category 2',
        title: 'Title 2',
        image: require('../assets/trends.jpg')
    },
    {
        id: 3,
        category: 'Category 3',
        title: 'Title 3',
        image: require('../assets/digests.jpg')
    },
    {
        id: 4,
        category: 'Category 2',
        title: 'Title 4',
        image: require('../assets/shorts.jpg')
    },
    {
        id: 5,
        category: 'Category 3',
        title: 'Title 5',
        image: require('../assets/trends.jpg')
    },
    {
        id: 6,
        category: 'Category 1',
        title: 'Title 6',
        image: require('../assets/digests.jpg')
    },
]

export default function BookmarksScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Bookmarks</Text>
                <Text style={styles.subtitle}>Saved articles in the library</Text>
            </View>
            <View style={styles.bookmarksContainer}>
                <FlatList
                    data={datas}
                    keyExtractor={datas => datas.id.toString()}
                    renderItem={({ item }) => 
                        <Card
                            title={item.title}
                            category={item.category}
                            image={item.image}
                            onPress={() => {console.log('Button tapped')}}/>}/>
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

