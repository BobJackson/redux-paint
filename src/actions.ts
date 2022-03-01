import {Point} from "./utils/types";

export const BEGIN_STOKE = "BEGIN_STOKE"
export const UPDATE_STOKE = "UPDATE_STOKE"
export const END_STOKE = "END_STOKE"

export type Action =
    | {
    type: typeof BEGIN_STOKE
    payload: Point
}
    | {
    type: typeof UPDATE_STOKE
    payload: Point
}
    | {
    type: typeof END_STOKE
}

export const beginStroke = (x: number, y: number) => {
    return {type: BEGIN_STOKE, payload: {x, y}}
}

export const updateStroke = (x: number, y: number) => {
    return {type: UPDATE_STOKE, payload: {x, y}}
}

export const endStroke = () => {
    return {type: BEGIN_STOKE}
}
