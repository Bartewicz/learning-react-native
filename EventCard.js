import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { formatDate, getCountdownParts } from "./api.js";

const EventCard = ({ event }) => {
  const { days, hours, minutes, seconds } = getCountdownParts(event.date, event.currentTime);

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.date}>{formatDate(event.date)}</Text>
        <Text style={styles.title}>{event.title}</Text>
      </View>
      <View style={styles.counterContainer}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{days}</Text>
          <Text style={styles.counterLabel}>DAYS</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{hours}</Text>
          <Text style={styles.counterLabel}>HOURS</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{minutes}</Text>
          <Text style={styles.counterLabel}>MINUTES</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{seconds}</Text>
          <Text style={styles.counterLabel}>SECONDS</Text>
        </View>
      </View>
    </View>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }),
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    paddingBottom: 20,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  cardHeader: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    color: "steelblue",
  },
  date: {
    color: "steelblue",
    width: "30%",
    textAlign: "left",
    fontSize: 15,
    fontWeight: "200",
  },
  title: {
    fontSize: 15,
    fontWeight: "300",
    textAlign: "right",
    color: "steelblue",
  },
  counterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  counter: {
    width: "25%",
    flex: 1,
  },
  counterText: {
    fontSize: 40,
    textAlign: "center",
    color: "steelblue",
  },
  counterLabel: {
    fontSize: 13,
    fontWeight: "100",
    paddingTop: 0,
    textAlign: "center",
    color: "steelblue",
  },
});

export default EventCard;
