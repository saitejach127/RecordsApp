import React from "react";
import { Text, View, Button,StyleSheet } from "react-native";

export default function About({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text>This is about Page</Text>
      <Button onPress={pressHandler} title="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});