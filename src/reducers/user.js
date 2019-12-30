import { SET_SECRET_KEY } from '../actions/UserActions';

const initialState = {
  secretKey: 'CI0vqcgop1BMc0UVi2vDL8f3kKdtz31'
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SECRET_KEY:
      return { ...state, secretKey: action.payload };

    default:
      return state;
  }
}
