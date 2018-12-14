import React, { Component } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ActionsButton from "./ActionsButton";
import EventCard from "./EventCard";
import * as db from "../db.json";

class EventList extends Component {
  state = {
    events: [],
  };

  componentDidMount = () => {
    this.updateState();
    setInterval(() => {
      this.updateState();
    }, 1000);
  };

  updateState = () => {
    this.setState({
      events: db.events.map((e) => ({
        ...e,
        date: new Date(e.date),
      })),
    });
  };

  render() {
    const { navigation } = this.props;
    return [
      <View key="event-list" style={styles.listWrapper}>
        <FlatList
          style={styles.list}
          data={this.state.events}
          extraData={this.state}
          renderItem={({ item }) => <EventCard event={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>,
      <ActionsButton
        key="event-list-actions"
        navigateToForm={() => navigation.navigate("Form")}
        navigateToList={() => navigation.navigate("List")}
      />,
    ];
  }
}

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    backgroundColor: "steelblue",
  },
  list: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default EventList;
