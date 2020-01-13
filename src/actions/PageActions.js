import { getItemIndex } from '../utils/onibiTools';

export const GET_ONIBIES_REQUEST = 'GET_ONIBIES_REQUEST';
export const GET_ONIBIES_SUCCESS = 'GET_ONIBIES_SUCCESS';
export const GET_ONIBIES_FAIL = 'GET_ONIBIES_FAIL';

export const GET_ONIBIE_INSTANCE_REQUEST = 'GET_ONIBIE_INSTANCE_REQUEST';
export const GET_ONIBIE_INSTANCE_SUCCESS = 'GET_ONIBIE_INSTANCE_SUCCESS';
export const GET_ONIBIE_INSTANCE_FAIL = 'GET_ONIBIE_INSTANCE_FAIL';

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
      //console.log(data);

      const descr = data.description.map(t => t.value);

      result.is18 = descr.includes('Стиль-улучшение 18');
      result.is19 = descr.includes('Стиль-улучшение 19');
      result.is20 = descr.includes('Стиль-улучшение 20');
      result.is21 = descr.includes('Стиль-улучшение 21');

      return result;
    });
}

function getOnibiesFromApi(secretKey) {
  let requestStr =
    'https://market.dota2.net/api/v2/search-item-by-hash-name?key=' +
    secretKey +
    '&hash_name=Onibi';

  let requestStr2 =
    'https://market.dota2.net/api/v2/search-item-by-hash-name?key=' +
    secretKey +
    '&hash_name=Inscribed Onibi';

  let requestStr3 =
    'https://market.dota2.net/api/v2/search-item-by-hash-name?key=' +
    secretKey +
    '&hash_name=Autographed Onibi';

  let request1 = fetch(requestStr).then(response => {
    return response.json();
  });
  let request2 = fetch(requestStr2).then(response => {
    return response.json();
  });
  let request3 = fetch(requestStr3).then(response => {
    return response.json();
  });

  return Promise.all([request1, request2, request3]).then(values => {
    let dataAll = values[0].data.concat(values[1].data.concat(values[2].data));
    //console.log('dataAll: ', dataAll);
    return dataAll;
  });

  /* return fetch(requestStr)
    .then(response => {
      return response.json();
    })
    .then(data => {
      //let dataStart = [...data.data];
      //let dataSpliced = dataStart.splice(5);

      //return dataStart;
      return data.data;
    }); */
}

function getOnibiInstanceAction(element, secretKey) {
  return dispatch => {
    dispatch({
      type: GET_ONIBIE_INSTANCE_REQUEST,
      payload: { secretKey, element }
    });

    getOnibiInstanceFromApi(element, secretKey).then(data => {
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

    const tofetch = pool.splice(0, 4);
    tofetch.forEach(e => getOnibiInstanceAction(e, secretKey)(dispatch));
  }, 1 * 1000);
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
      });
    });
  };
}
