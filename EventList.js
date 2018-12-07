import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import * as db from "./db.json";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount = () => {
    const events = db.events;
    this.setState({ events });
  };

  render() {
    return (
        <FlatList
          style={styles.list}
          data={this.state.events}
          renderItem={({ item }) => (
            <Text style={styles.listElement}>{item.title}</Text>
          )}
          keyExtractor={(item) => item.id}
        />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "steelblue",
    flexGrow: 0,
    padding: 20,
  },
  listElement: {
    color: "white",
    textAlign: "center",
    height: 20,
  },
});

export default EventList;
