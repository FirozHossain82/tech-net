import  {PayloadAction, createSlice}  from "@reduxjs/toolkit";


const initialState = {
    count: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers : {
          increment : (state) =>{
            state.count = state.count + 1;
          } ,
          decrement : (state) =>{
            state.count = state.count - 1;
          }  , 
          incrementByAmount: (sate, action: PayloadAction<number>) => {
            sate.count += action.payload;
          }
    },
}) 
export const { increment, decrement,incrementByAmount } = counterSlice.actions
export default counterSlice.reducer;