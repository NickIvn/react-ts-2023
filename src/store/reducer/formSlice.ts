import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IForm } from "../../type";

// type FormState = {
//   submissions: string[];
//   searchText: string;
// };
interface IState {
  cards: IForm[];
}

// const initialState: FormState = {
//   submissions: [],
//   searchText: "",
// };
const initialState: IState = {
  cards: [],
};

const formSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    // addSubmission: (state, action: PayloadAction<string>) => {
    //   state.submissions.push(action.payload);
    addCard(state, action: PayloadAction<IForm>) {
      state.cards.push(action.payload);
    },
    // setSearchText: (state, action: PayloadAction<string>) => {
    //   state.searchText = action.payload;
    removeCard(state, action: PayloadAction<number>) {
      state.cards = state.cards.filter((card) => card.id! == action.payload);
    },
  },
});

// export const { addSubmission, setSearchText } = formSlice.actions;
export const { addCard, removeCard } = formSlice.actions;

export default formSlice.reducer;
