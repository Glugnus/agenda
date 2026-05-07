import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    {
      id: "dummyId",
      title: "My Title",
      location: "Au bureau",
      phoneNumber: "0607614815",
      description: "Réunion React Native",
      startDate: "2026-11-24T10:30:00",
      endDate: "2026-11-24T11:30:00",
      isOnline: false,
    },
    {
      id: "dummyId-2",
      title: "My Title-2",
      location: "https://www.hellowork.com/fr-fr/emplois/77386873.html",
      phoneNumber: "0607614815",
      description:
        "Réunion Next JS à faire, avec formulaire car sans formulaire ca marche pas",
      startDate: "2026-11-10T10:30:00",
      endDate: "2026-11-10T11:30:00",
      isOnline: true,
    },
  ],
};

export const agendaSlice = createSlice({
  name: "agenda",
  initialState,
  reducers: {},
});

export default agendaSlice.reducer;
