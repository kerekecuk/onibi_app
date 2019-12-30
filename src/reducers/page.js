import {
  GET_ONIBIES_REQUEST,
  GET_ONIBIES_SUCCESS,
  GET_ONIBIES_FAIL
} from '../actions/PageActions';
const initialState = {
  isFetching: false
};

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ONIBIES_REQUEST:
      return {
        ...state,
        downloadCount: action.payload,
        isFetching: true,
        error: ''
      };

    case GET_ONIBIES_SUCCESS:
      return {
        ...state,
        onibiData: action.payload,
        isFetching: false,
        error: ''
      };

    case GET_ONIBIES_FAIL:
      return { ...state, error: action.payload.message, isFetching: false };

    default:
      return state;
  }
}
