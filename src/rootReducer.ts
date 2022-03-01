import {RootState} from "./utils/types";
import {Action, UPDATE_STOKE, BEGIN_STOKE, END_STOKE} from "./actions";

const initialState: RootState = {
    currentStroke: {points: [], color: "#000"},
    strokes: []
}

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
        default:
            return state
    }
}
