const defaultState = {
  starships: [],
  error: undefined,
  loading: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_ALL_STARSHIPS_REQUEST:
      return {
        ...state, loading: true
      }

    case FETCH_ALL_STARSHIPS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
      

    case ADD_STARSHIPS_REQUEST:
      return {
        ...state,
        starships: [...state.starships, action.payload],
        loading: false,
      }
      case FETCH_ALL_STARSHIPS_SUCCESS:
      return {
        ...state,
        loading: false,
        starships: action.payload
      }
  }
}