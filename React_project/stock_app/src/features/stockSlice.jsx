import {createSlice} from "@reduxjs/toolkit"

const stockSlice  = createSlice({
    name: "stock",
    initialState: {
      loading: false,
      error: false,
      sales: [],
      purchases: [],
      firms: [],
      products: [],
    },
    reducers:{
        fetchStart: (state) => {
            state.loading = true
            state.error = false
          },
          fetchFail: (state) => {
            state.loading = false
            state.error = true
          },
    }
})
export const {fetchStart, fetchFail} = stockSlice.actions
export default stockSlice.reducer