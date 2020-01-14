import { getItemIndex } from './onibiTools';

const sstate = {
  isFetching: false,
  downloadCount: 'CI0vqcgop1BMc0UVi2vDL8f3kKdtz31',
  error: '',
  onibiData: [
    {
      market_hash_name: 'Onibi',
      price: 539,
      class: 1000000001,
      instance: 1500000001,
      count: 7
    },
    {
      market_hash_name: 'Onibi',
      price: 542,
      class: 1000000001,
      instance: 1500000002,
      count: 10
    },
    {
      market_hash_name: 'Onibi',
      price: 546,
      class: 1000000001,
      instance: 1500000003,
      count: 4
    },
    {
      market_hash_name: 'Onibi',
      price: 546,
      class: 1000000001,
      instance: 1500000004,
      count: 2
    },
    {
      market_hash_name: 'Onibi',
      price: 546,
      class: 1000000001,
      instance: 1500000005,
      count: 10
    },
    {
      market_hash_name: 'Onibi',
      price: 546,
      class: 1000000001,
      instance: 1500000006,
      count: 3
    },
    {
      market_hash_name: 'Onibi',
      price: 547,
      class: 1000000001,
      instance: 1500000007,
      count: 1
    },
    {
      market_hash_name: 'Onibi',
      price: 547,
      class: 1000000001,
      instance: 1500000008,
      count: 1
    }
  ],
  '1000000001_1500000001': {
    is18: false,
    is19: false,
    is20: false,
    is21: false
  },
  '1000000001_1500000002': {
    is18: false,
    is19: true,
    is20: false,
    is21: false
  },
  '1000000001_1500000003': {
    is18: false,
    is19: true,
    is20: true,
    is21: false
  },
  '1000000001_1500000004': {
    is18: false,
    is19: false,
    is20: true,
    is21: false
  },
  '1000000001_1500000005': {
    is18: false,
    is19: false,
    is20: true,
    is21: true
  },
  '1000000001_1500000006': {
    is18: true,
    is19: false,
    is20: false,
    is21: true
  },
  '1000000001_1500000007': {
    is18: false,
    is19: true,
    is20: false,
    is21: true
  },
  '1000000001_1500000008': {
    is18: true,
    is19: true,
    is20: false,
    is21: false
  }
};

const dataForFilter = [
  {
    market_hash_name: 'Onibi',
    price: 539,
    class: 1000000001,
    instance: 1500000001,
    count: 7
  },
  {
    market_hash_name: 'Onibi',
    price: 542,
    class: 1000000001,
    instance: 1500000002,
    count: 10
  },
  {
    market_hash_name: 'Onibi',
    price: 546,
    class: 1000000001,
    instance: 1500000003,
    count: 4
  },
  {
    market_hash_name: 'Onibi',
    price: 546,
    class: 1000000001,
    instance: 1500000004,
    count: 2
  },
  {
    market_hash_name: 'Onibi',
    price: 546,
    class: 1000000001,
    instance: 1500000005,
    count: 10
  },
  {
    market_hash_name: 'Onibi',
    price: 546,
    class: 1000000001,
    instance: 1500000006,
    count: 3
  },
  {
    market_hash_name: 'Onibi',
    price: 547,
    class: 1000000001,
    instance: 1500000007,
    count: 1
  },
  {
    market_hash_name: 'Onibi',
    price: 547,
    class: 1000000001,
    instance: 1500000008,
    count: 1
  }
];

const filterArray = [18, 19];

export function consoleLog() {
  let result = dataForFilter.filter(onibi => {
    let itemIndex = getItemIndex(onibi);

    let isNeed = false;

    filterArray.forEach(element => {
      let elem = sstate[itemIndex];
      if (elem['is' + element]) {
        isNeed = true;
      }
    });

    return isNeed;
  });

  console.log(result);
}
