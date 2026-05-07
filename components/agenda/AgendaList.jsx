import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import Entypo from "@expo/vector-icons/Entypo";
import { colors } from "../../constants/colors";
import Form from "../modal/Form";
import { useState } from "react";

const Header = ({ openForm }) => (
  <View style={styles.headerContainer}>
    <View />
    <Text style={styles.title}>AGENDA</Text>
    <Entypo
      name="circle-with-plus"
      size={32}
      color={colors.PINK}
      suppressHighLighting={true}
      onPress={openForm}
    />
  </View>
);

export default function AgendaList() {
  const agendaItems = useSelector((state) => state.agenda.events);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const closeFormHandler = () => setIsFormVisible(false);
  const openFormHandler = () => setIsFormVisible(true);

  return (
    <>
      <FlatList
        data={agendaItems}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={<View style={{ height: 24 }} />}
        style={styles.listContainer}
        renderItem={({ item }) => <ListItem item={item} />}
        ListHeaderComponent={<Header openForm={openFormHandler} />}
      />
      <Form isFormVisible={isFormVisible} closeForm={closeFormHandler} />
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    paddingHorizontal: 16,
    backgroundColor: colors.DARK,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: colors.VIOLET,
  },
});
