import {
  GET_ONIBIES_REQUEST,
  GET_ONIBIES_SUCCESS,
  GET_ONIBIES_FAIL,
  GET_FILTERED_CACHED_LIST
} from '../actions/PageActions';
import { getItemIndex } from '../utils/onibiTools';

import {
  GET_ONIBIE_INSTANCE_REQUEST,
  GET_ONIBIE_INSTANCE_SUCCESS,
  //eslint-disable-next-line no-unused-vars
  GET_ONIBIE_INSTANCE_FAIL
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

    case GET_ONIBIE_INSTANCE_REQUEST: {
      const itemIndex = getItemIndex(action.payload.element);
      return {
        ...state,
        [itemIndex]: [...(state[itemIndex] || []), action.payload.data]
      };
    }

    case GET_ONIBIE_INSTANCE_SUCCESS: {
      const itemIndex = getItemIndex(action.payload.element);

      return {
        ...state,
        [itemIndex]: action.payload.data
      };
    }

    case GET_FILTERED_CACHED_LIST: {
      const data = action.payload.dataAllCached;
      const filterArray = action.payload.filteredValues;
      console.log('data: ', data);

      let result = [];
      if (filterArray && filterArray.length > 0) {
        result = data.filter(onibi => {
          let itemIndex = getItemIndex(onibi);

          let isNeed = false;

          filterArray.forEach(element => {
            let elem = state[itemIndex];
            if (elem['is' + element]) {
              isNeed = true;
            }
          });

          return isNeed;
        });
      } else {
        result = [...data];
      }

      return {
        ...state,
        onibiData: result,
        isFetching: false,
        error: ''
      };
    }

    default:
      return state;
  }
}
