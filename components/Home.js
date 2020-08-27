import React from "react";

import { Text, Button, View, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("About");
  };

  const records = () => {
    navigation.navigate('Records');
  }

  const materialHandler = () => {
    navigation.navigate('Material');
  }

  const testHandler = () => {
    navigation.navigate('Record');
  }

  return (
    <View style={styles.container}>
      <Text>Hello Again!</Text>
      <Button onPress={pressHandler} title="About" />
      <Button onPress={records} title="Records" />
      <Button onPress={materialHandler} title="Materials" />
      <Button onPress={testHandler} title="Test" />
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
