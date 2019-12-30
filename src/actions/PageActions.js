import { element } from 'prop-types';

export const GET_ONIBIES_REQUEST = 'GET_ONIBIES_REQUEST';
export const GET_ONIBIES_SUCCESS = 'GET_ONIBIES_SUCCESS';
export const GET_ONIBIES_FAIL = 'GET_ONIBIES_FAIL';

const cached = false;

let lastExec = new Date().getTime();

function pauseBrowser(millis) {
  let date = Date.now();
  let curDate = null;
  do {
    curDate = Date.now();
  } while (curDate - date < millis);
}

function getOnibiInstance(element, secretKey) {
  let curDate = new Date().getTime();
  while (curDate - lastExec < 300) {
    pauseBrowser(100);
    curDate = new Date().getTime();
  }

  lastExec = new Date().getTime();
  let classId = element.class;
  let instanceId = element.instance;

  let itemIndex = classId + '_' + instanceId;
  let requestStr =
    'https://market.dota2.net/api/ItemInfo/' +
    itemIndex +
    '/ru/?key=' +
    secretKey;

  console.log(requestStr);

  fetch(requestStr)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.description.find(t => t.value === 'Стиль-улучшение 15')) {
        element.is18 = 1;
      } else {
        element.is18 = 0;
      }

      if (data.description.find(t => t.value === 'Стиль-улучшение 16')) {
        element.is19 = 1;
      } else {
        element.is19 = 0;
      }

      if (data.description.find(t => t.value === 'Стиль-улучшение 20')) {
        element.is20 = 1;
      } else {
        element.is20 = 0;
      }

      if (data.description.find(t => t.value === 'Стиль-улучшение 21')) {
        element.is21 = 1;
      } else {
        element.is21 = 0;
      }
      element.isFetching = 0;
    });
}

function getOnibiesCache(secretKey, dispatch) {
  let requestStr =
    'https://market.dota2.net/api/v2/search-item-by-hash-name?key=' +
    secretKey +
    '&hash_name=Onibi';
  // '&hash_name=Inscribed Onibi';  расширить на эти варианты
  // '&hash_name=Autographed Onibi';

  let i = 0;
  fetch(requestStr)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('приехали данные ', data);
      console.log(data.success);

      let dataDump2 = { ...data.data };
      console.log('datadump2: ', dataDump2);

      data.data.forEach(element => {
        //if (i < 10) {
        element.isFetching = 1;
        getOnibiInstance(element, secretKey);
        i++;
        //}
      });

      let dataDump = data.data.slice(0);
      console.log('datadump: ', dataDump);

      dispatch({
        type: GET_ONIBIES_SUCCESS,
        payload: dataDump
      });
    });
}

export function getOnibies(secretKey) {
  return dispatch => {
    dispatch({
      type: GET_ONIBIES_REQUEST,
      payload: secretKey
    });

    if (cached) {
      dispatch({
        type: GET_ONIBIES_SUCCESS,
        payload: {}
      });
    } else {
      getOnibiesCache(secretKey, dispatch);
    }
  };
}
