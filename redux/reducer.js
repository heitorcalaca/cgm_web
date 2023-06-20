import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    client: { toggleForm: false }
}

export const ReducerSlicer = createSlice({
    name: 'cgmweb',
    initialState,
    reducers: {
        toogleChangeAction: (state) => {
            state.client.toggleForm = !state.client.toggleForm
        }
    }
})

export const { toogleChangeAction } = ReducerSlicer.actions
export default ReducerSlicer.reducer;