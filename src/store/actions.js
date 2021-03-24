import axios from 'axios'
import {
    ADD_STARSHIP_ERROR,
    ADD_STARSHIP_REQUEST, ADD_STARSHIP_SUCCESS, DELETE_STARSHIP_ERROR, DELETE_STARSHIP_REQUEST, DELETE_STARSHIP_SUCCESS,
    DISCARD_ERROR,
    FETCH_ALL_STARSHIPS_ERROR,
    FETCH_ALL_STARSHIPS_REQUEST,
    FETCH_ALL_STARSHIPS_SUCCESS
} from "./constants";

export const fetchAllShips = () => {
    return async (dispatch) => {
        dispatch({type: FETCH_ALL_STARSHIPS_REQUEST})
        try {
            const {data: starships} = await axios.get('http://localhost:3000/starships')
            dispatch({type: FETCH_ALL_STARSHIPS_SUCCESS, payload: starships})
        }
        catch(e) {
            dispatch({type:FETCH_ALL_STARSHIPS_ERROR, payload: e })
        }
    }
}

export const addShip = (starship) => {
    return async (dispatch) => {
        dispatch({type: ADD_STARSHIP_REQUEST})
        try {
            const { data } = await axios.post('http://localhost:3000/starships', starship)
            dispatch({type: ADD_STARSHIP_SUCCESS, payload: data})
        } catch (e) {
            dispatch({type:ADD_STARSHIP_ERROR, payload: e })
        }
    }
}

export const deleteShip = (id) => {
    return async (dispatch) => {
        dispatch({type: DELETE_STARSHIP_REQUEST})
        try {
            const { status } = await axios.delete(`http://localhost:3000/starships/${id}`)
            if ( status === 200) {
                dispatch({type: DELETE_STARSHIP_SUCCESS, payload: id})
            } else {
                throw new Error ('Delete Failed')
            }
        } catch (e) {
            dispatch({type:DELETE_STARSHIP_ERROR, payload: e })
        }
    }
}

export const discardError = () => ({
    type: DISCARD_ERROR,
})