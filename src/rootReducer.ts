import {RootState} from "./utils/types";
import {Action, UPDATE_STOKE, BEGIN_STOKE, END_STOKE, SET_STROKE_COLOR} from "./actions";

const initialState: RootState = {
    currentStroke: {points: [], color: "#000"},
    strokes: [],
    historyIndex: 0
}

export const historyIndexSelector = (state: RootState) => state.historyIndex
export const strokesSelector = (state: RootState) => state.strokes
export const currentStrokeSelector = (state: RootState) => state.currentStroke

export const rootReducer = (
    state: RootState = initialState,
    action: Action
) => {
    switch (action.type) {
        case "BEGIN_STOKE": {
            return {
                ...state,
                currentStroke: {
                    ...state.currentStroke,
                    points: [action.payload]
                }
            }
        }
        case "UPDATE_STOKE": {
            return {
                ...state,
                currentStroke: {
                    ...state.currentStroke,
                    points: [...state.currentStroke.points, action.payload]
                }
            }
        }
        case "END_STOKE": {
            if (!state.currentStroke.points.length) {
                return state
            }
            const historyIndex = state.strokes.length - state.historyIndex
            return {
                ...state,
                historyIndex: 0,
                currentStroke: {...state.currentStroke, points: []},
                strokes: [
                    ...state.strokes.slice(0, historyIndex),
                    state.currentStroke
                ]
            }
        }
        case "SET_STROKE_COLOR": {
            return {
                ...state,
                currentStroke: {
                    ...state.currentStroke,
                    ...{color: action.payload}
                }
            }
        }
        case "UNDO": {
            const historyIndex = Math.min(
                state.historyIndex + 1,
                state.strokes.length
            )
            return {...state, historyIndex}
        }
        case "REDO": {
            const historyIndex = Math.max(state.historyIndex - 1, 0)
            return {...state, historyIndex}
        }
        default:
            return state
    }
}
