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
  let baseRequestStr =
    'https://market.dota2.net/api/v2/search-item-by-hash-name?key=' +
    secretKey +
    '&hash_name=';

  let findFor = ['Onibi', 'Inscribed Onibi', 'Autographed Onibi'];
  let promises = findFor.map(element => {
    let requestStr = baseRequestStr + element;

    return fetch(requestStr).then(response => {
      return response.json();
    });
  });

  return Promise.all(promises).then(values => {
    let dataAll = [];
    values.forEach(x => {
      dataAll = dataAll.concat(x.data);
    });

    return dataAll;
  });
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
