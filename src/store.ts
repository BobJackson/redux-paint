import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import {RootState} from "./utils/types";
import historyIndex from "./modules/historyIndex/slice"
import {currentStroke} from "./modules/currentStroke/slice"
import strokes from "./modules/strokes/slice"
import {logger} from "redux-logger"
import {modalVisible} from "./modules/modals/slice";

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export const store = configureStore({
    reducer: {
        historyIndex,
        strokes,
        currentStroke,
        modalVisible
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger)
})

