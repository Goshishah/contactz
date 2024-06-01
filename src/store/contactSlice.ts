import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export interface ContactState {
  id?: string;
  name: string;
  email: string;
}

interface ContactsInitialState {
  show: boolean;
  list: ContactState[];
  contact: ContactState;
}
const initialState: ContactsInitialState = {
  show: false,
  contact: {
    name: "",
    email: "",
  },
  list: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.show = action.payload;
    },

    selectedContact: (state, action: PayloadAction<ContactState>) => {
      state.contact = action.payload;
    },

    mutateContact: (state, action: PayloadAction<ContactState>) => {
      if (action.payload.id) {
        state.list = state.list.map((item) => {
          if (action.payload.id === item.id) {
            return { ...action.payload };
          }
          return item;
        });
      } else {
        state.list = [
          ...state.list,
          { ...action.payload, id: Math.floor(Math.random() * 26).toString() },
        ];
      }
    },
  },
});

export const { mutateContact, toggle, selectedContact } = contactSlice.actions;

export const contacts = (state: RootState) => state.contacts;

export default contactSlice.reducer;
