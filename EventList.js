import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import * as db from "./db.json";
import EventCard from "./EventCard";

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount = () => {
    const events = db.events.map((e) => ({
      ...e,
      date: new Date(e.date),
    }));
    this.setState({ events });
  };

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.state.events}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "steelblue",
    flexGrow: 0,
  },
  listElement: {
    color: "white",
    textAlign: "center",
    height: 20,
  },
});
