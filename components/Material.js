import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import MaterialItem from "./MaterialItem";

export default class Material extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      type: props.navigation.getParam("type"),
      year: props.navigation.getParam("year"),
      subject: props.navigation.getParam("subject")
    };
  }

  componentDidMount() {
    fetch(
      `https://recordserver.herokuapp.com/api/record?type=notes&subject=PE`
    )
      .then(res => {
        res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({ loading: false, data: res.records });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Text>Loading....</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text>
          {this.state.type} {this.state.year}
        </Text>
        {this.state.data.map(subject => {
          return (
            <MaterialItem
              subject={subject}
              key={subject._id}
              navigation={this.props.navigation}
            />
          );
        })}
        {/* <FlatList
          data= {this.state.subjects}
          renderItem= {item=> this.renderItem(item)}
          keyExtractor= {item=>item._id.toString()}
       /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
