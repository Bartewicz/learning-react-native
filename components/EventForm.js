import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import ActionsButton from "./ActionsButton";
import { formatDateTime } from "./api";

class EventForm extends Component {
  state = {
    title: null,
    date: "",
    showDatePicker: false,
  };

  handleChangeTitle = (title) => {
    this.setState({ title });
  };

  handleDatePicked = (date) => {
    this.setState({ date });
    this.handleDatePickerHide();
  };

  handleDatePickerHide = () => {
    this.setState({
      showDatePicker: false,
    });
  };

  handleDatePress = () => {
    this.setState({
      showDatePicker: true,
    });
  };

  handleAddPress = () => {
    const { title, date } = this.state;
    const id = Date.now().toString()
    if (title && date) {
      this.setState({
        title: null,
        date: "",
      });
      // console.log(title, date);
      this.props.navigation.push("List", {
        newEvent: { title, date, id },
      });
    }
  };

  render() {
    const { navigation } = this.props;
    return [
      <View key="event-form" style={styles.formWrapper}>
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.text}
            onChangeText={this.handleChangeTitle}
            placeholder="Event title"
            spellCheck={false}
            value={this.state.title}
          />
          <TextInput
            style={[styles.text, styles.borderTop]}
            placeholder="Event date"
            spellCheck={false}
            value={formatDateTime(this.state.date.toString())}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}
          />
          <DateTimePicker
            isVisible={this.state.showDatePicker}
            mode="datetime"
            onConfirm={this.handleDatePicked}
            onCancel={this.handleDatePickerHide}
          />
        </View>
        <TouchableHighlight onPress={this.handleAddPress} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>,
      <ActionsButton
        key="event-form-actions"
        navigateToForm={() => navigation.navigate("Form")}
        navigateToList={() => navigation.navigate("List")}
      />,
    ];
  }
}

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
  },
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  text: {
    height: 40,
    margin: 0,
    marginLeft: 7,
    marginRight: 7,
    paddingLeft: 10,
  },
  borderTop: {
    borderColor: "#edeeef",
    borderTopWidth: 0.5,
  },
  button: {
    height: 50,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default EventForm;
