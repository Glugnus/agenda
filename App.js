import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { colors } from "./constants/colors";
import AgendaList from "./components/agenda/AgendaList";
import { SafeAreaView } from "react-native-safe-area-context";
import StackNavigator from "./navigator/StackNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <StackNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.DARK,
  },
});
