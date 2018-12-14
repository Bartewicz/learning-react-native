import { createStackNavigator, createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import EventList from "./components/EventList";
import EventForm from "./components/EventForm";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
});

const AppNavigator = createStackNavigator(
  {
    List: {
      screen: EventList,
      navigationOptions: {
        title: "Events",
      },
    },
    Form: {
      screen: EventForm,
      navigationOptions: {
        title: "Add an event",
      },
    },
  },
  {
    initialRouteName: "List",
  },
);

export default createAppContainer(AppNavigator);
