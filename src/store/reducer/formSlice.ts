import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IForm } from "../../type";

interface IState {
  cards: IForm[];
}
const initialState: IState = {
  cards: [],
};

const formSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<IForm>) {
      state.cards.push(action.payload);
    },
    removeCard(state, action: PayloadAction<number>) {
      state.cards = state.cards.filter((card) => card.id! == action.payload);
    },
  },
});

export const { addCard, removeCard } = formSlice.actions;

export default formSlice.reducer;
