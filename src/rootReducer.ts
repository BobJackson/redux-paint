import {RootState} from "./utils/types";
import {Action, UPDATE_STOKE, BEGIN_STOKE, END_STOKE, SET_STROKE_COLOR} from "./actions";

const initialState: RootState = {
    currentStroke: {points: [], color: "#000"},
    strokes: []
}

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
            return {
                ...state,
                currentStroke: {...state.currentStroke, points: []},
                strokes: [...state.strokes, state.currentStroke]
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
        default:
            return state
    }
}
