import React from 'react';
import { Text, StyleSheet, View, Button } from "react-native";

export default function MaterialItem({navigation, subject}){
    return (
        <View style={styles.container}>
            <Text>{subject.year}</Text>
            <Text>{subject.title}</Text>
            <Button title="some where" onPress={() => navigation.navigate('Record',{ uri:subject.url })} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    }
  });
  
