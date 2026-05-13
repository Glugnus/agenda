import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import Entypo from "@expo/vector-icons/Entypo";
import { colors } from "../../constants/colors";
import Form from "../modal/Form";
import { useEffect, useState } from "react";
import FormWithFormik from "../modal/FormWithFormik";
import { getAllEvents } from "../../lib";
import { setEvents } from "../../store/slices/agendaSlice";
import { useGetAllEventsQuery } from "../../store/api/agendaApi";

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

const ListEmptyComponent = ({ isLoading, error }) => (
  <View style={styles.listEmptyContainer}>
    {isLoading ? <ActivityIndicator color={colors.WHITE} size="large" /> : null}
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
  </View>
);

export default function AgendaList() {
  const agendaItems = useSelector((state) => state.agenda.events);
  const dispatch = useDispatch();

  // const getEvents = async () => {
  //   try {
  //     const events = await getAllEvents();
  //     dispatch(setEvents(events));
  //   } catch (e) {
  //     setHttpError(true);
  //   }
  // };

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     getEvents();
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);

  // const [isLoading, setIsLoading] = useState(false);
  // const [httpError, setHttpError] = useState(false);

  const { data, isLoading: loading, error } = useGetAllEventsQuery();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState();

  const openFormHandler = () => setIsFormVisible(true);
  const closeFormHandler = () => {
    setIsFormVisible(false);
    setSelectedEvent();
  };

  const selectedEventHandler = (id) => {
    setSelectedEvent(id);
    setIsFormVisible(true);
  };

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={<View style={{ height: 24 }} />}
        style={styles.listContainer}
        renderItem={({ item }) => (
          <ListItem item={item} selectItem={selectedEventHandler} />
        )}
        ListHeaderComponent={<Header openForm={openFormHandler} />}
        ListEmptyComponent={
          <ListEmptyComponent isLoading={loading} error={error} />
        }
      />
      <FormWithFormik
        isFormVisible={isFormVisible}
        closeForm={closeFormHandler}
        selectedEvent={selectedEvent}
      />
    </>
  );
}

const styles = StyleSheet.create({
  listEmptyContainer: {
    height: Dimensions.get("screen").height / 1.5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  errorText: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.WHITE,
    textAlign: "center",
  },
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
