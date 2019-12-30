export const SET_SECRET_KEY = 'SET_SECRET_KEY';

export function setSecretKey(secretKey) {
  return dispatch => {
    dispatch({
      type: SET_SECRET_KEY,
      payload: secretKey
    });
  };
}
