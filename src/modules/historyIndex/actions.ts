import {Stroke} from "../../utils/types";

export const END_STROKE = "END_STROKE"
export const UNDO = "UNDO"
export const REDO = "REDO"

export type HistoryIndexAction =
    | {
    type: typeof REDO
} | {
    type: typeof UNDO
    payload: number
}
    | {
    type: typeof END_STROKE
    payload: { stroke: Stroke; historyIndex: number }
}

export const undo = (undoLimit: number) => {
    return {type: UNDO, payload: undoLimit}
}

export const redo = () => {
    return {type: REDO}
}
