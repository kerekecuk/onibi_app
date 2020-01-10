import { element } from 'prop-types';

export const GET_ONIBIES_REQUEST = 'GET_ONIBIES_REQUEST';
export const GET_ONIBIES_SUCCESS = 'GET_ONIBIES_SUCCESS';
export const GET_ONIBIES_FAIL = 'GET_ONIBIES_FAIL';


export const GET_ONIBIE_INSTANCE_REQUEST = 'GET_ONIBIE_INSTANCE_REQUEST';
export const GET_ONIBIE_INSTANCE_SUCCESS = 'GET_ONIBIE_INSTANCE_SUCCESS';
export const GET_ONIBIE_INSTANCE_FAIL = 'GET_ONIBIE_INSTANCE_FAIL';

const getItemIndex = element => {
  let classId = element.class;
  let instanceId = element.instance;
  return classId + '_' + instanceId;
}

function getOnibiInstanceFromApi(element, secretKey) {
  let itemIndex = getItemIndex(element);
  let requestStr =
    'https://market.dota2.net/api/ItemInfo/' +
    itemIndex +
    '/ru/?key=' +
    secretKey;

  const result = {};
  return fetch(requestStr)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.description.find(t => t.value === 'Стиль-улучшение 15')) {
        result.is18 = 1;
      } else {
        result.is18 = 0;
      }

      if (data.description.find(t => t.value === 'Стиль-улучшение 16')) {
        result.is19 = 1;
      } else {
        result.is19 = 0;
      }

      if (data.description.find(t => t.value === 'Стиль-улучшение 20')) {
        result.is20 = 1;
      } else {
        result.is20 = 0;
      }

      if (data.description.find(t => t.value === 'Стиль-улучшение 21')) {
        result.is21 = 1;
      } else {
        result.is21 = 0;
      }
      return result; 
    });
}

function getOnibiesFromApi(secretKey) {
  let requestStr =
    'https://market.dota2.net/api/v2/search-item-by-hash-name?key=' +
    secretKey +
    '&hash_name=Onibi';
  // '&hash_name=Inscribed Onibi';  расширить на эти варианты
  // '&hash_name=Autographed Onibi';

  fetch(requestStr)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data.data;
    });
}


function getOnibiesAction(element, secret) {
  return dispatch => {
     dispatch({
      type: GET_ONIBIE_INSTANCE_REQUEST,
      payload: { secretKey, element }
    });
    
    getOnibiInstanceFromApi(element, secret).then(data => {
       dispatch({
           type: GET_ONIBIE_INSTANCE_SUCCESS,
           payload: { secretKey, element, data }
       });
    });
  };
}


function getAllInstances(list, secretKey, dispatch) {
  let pool = [...list];
  let timer;
  timer = setInterval(() => {
    if (pool.length === 0 && timer) {
      clearInterval(timer);
    }
    const tofetch = pool.slice(0, 5);
    getOnibiesAction.forEach(e => getOnibiesAction(e, secretKey)(dispatch));
  }, 1*1000);
}

export function getOnibiesAction(secretKey) {
  return dispatch => {
    dispatch({
      type: GET_ONIBIES_REQUEST,
      payload: secretKey
    });

    getOnibiesFromApi(secretKey).then(data => {
     getAllInstances(data, secretKey, dispatch);
     dispatch({
        type: GET_ONIBIES_SUCCESS,
        payload: data
      })
    });

  };
}
