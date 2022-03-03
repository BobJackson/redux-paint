import {endStroke} from "../sharedActions";
import {RootState} from "../../utils/types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: RootState["strokes"] = []

const stroke = createSlice({
    name: "strokes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(endStroke, (state, action) => {
            const {historyIndex, stroke} = action.payload
            if (historyIndex === 0) {
                state.push(stroke)
            } else {
                state.splice(-historyIndex, historyIndex, stroke)
            }
        })
    }
})

export default stroke.reducer

export const strokesLengthSelector = (state: RootState) => state.strokes.length

export const strokesSelector = (state: RootState) => state.strokes