import React, { Component } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import * as db from "./db.json";
import EventCard from "./EventCard";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount = () => {
    this.updateState()
    setInterval(() => {
      this.updateState()
    }, 1000);
  };

  updateState = () => {
    this.setState({
      events: db.events.map((e) => ({
        ...e,
        currentTime: Date.now(),
        date: new Date(e.date),
      })),
    });
  }

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
    flex: 1,
  },
});

export default EventList;
