import React from 'react';
import { View, StyleSheet, Image, Text} from "react-native";

import colors from '../../config/colors';

function Card({ title, category, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.category}>{category}</Text>
            </View>
        </View>
    );
  }

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        color: colors.black,
        fontSize: 18,
        fontWeight: 'bold',
    },
    category: {
        color: colors.primary,
        fontSize: 15,
    },
})

export default Card;