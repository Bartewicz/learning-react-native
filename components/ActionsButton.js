import React from "react";
import { StyleSheet } from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

const ActionsButton = (props) => (
  <ActionButton buttonColor="rgba(231,76,60,1)">
    <ActionButton.Item
      buttonColor="#9b59b6"
      title="New event"
      onPress={props.navigateToForm}
    >
      <Icon name="md-create" style={styles.actionButtonIcon} />
    </ActionButton.Item>
    <ActionButton.Item
      buttonColor="#3498db"
      title="Events list"
      onPress={props.navigateToList}
    >
      <Icon name="md-calendar" style={styles.actionButtonIcon} />
    </ActionButton.Item>
  </ActionButton>
);

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
});

export default ActionsButton;
