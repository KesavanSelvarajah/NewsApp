import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

import Card from "../components/Card";
import colors from "../../config/colors";

const data = require("../assets/data/dailyDigests.json");

export default function DailyDigestScreen(props) {
  const [digests, setDigests] = useState([]);

  useEffect(() => {
    setDigests(data);

    return () => {
      setDigests([]);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Daily Digest</Text>
        <Text style={styles.subtitle}>Get to know what happened today.</Text>
      </View>
      <View style={styles.digestsContainer}>
        <FlatList
          data={digests}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              category={item.category.name}
              image={item.image}
              onPress={() => {
                props.navigation.navigate('Shorts', {item: item})
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
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
    fontWeight: "bold",
    marginTop: 40,
    marginStart: 20,
  },
  subtitle: {
    color: colors.grey,
    fontSize: 13,
    marginStart: 20,
    marginEnd: 20,
  },
  digestsContainer: {
    flex: 6,
  },
});
