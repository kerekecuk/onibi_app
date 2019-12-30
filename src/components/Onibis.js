import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = store => {
  return {
    page: store.page
  };
};

const onibiData = [
  {
    market_hash_name: 'Onibi',
    price: 519,
    class: 1723106292,
    instance: 1723136320,
    count: 2,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 528,
    class: 1723106292,
    instance: 1723167452,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 569,
    class: 1723106292,
    instance: 1723145900,
    count: 2,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 592,
    class: 1723106292,
    instance: 1509249923,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 592,
    class: 1723106292,
    instance: 1727484520,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 592,
    class: 1723106292,
    instance: 996698943,
    count: 2,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 604,
    class: 1723106292,
    instance: 1507621362,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 604,
    class: 1723106292,
    instance: 1724677939,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 770,
    class: 1723106292,
    instance: 1724480384,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 806,
    class: 1723106292,
    instance: 1723126491,
    count: 3,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 1200,
    class: 1723106292,
    instance: 3348657980,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 1200,
    class: 1723106292,
    instance: 3257050948,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 1200,
    class: 1723106292,
    instance: 1728505125,
    count: 5,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 1200,
    class: 1723106292,
    instance: 1726383261,
    count: 7,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 1200,
    class: 1723106292,
    instance: 1726931685,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 1200,
    class: 1723106292,
    instance: 1725087341,
    count: 7,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 1300,
    class: 1723106292,
    instance: 3571636137,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 1500,
    class: 3131496818,
    instance: 3348848658,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 1500,
    class: 1723106292,
    instance: 1759037987,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 1500,
    class: 1723106292,
    instance: 1727282248,
    count: 44,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 1999,
    class: 1723106292,
    instance: 1892080159,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 2000,
    class: 1723106292,
    instance: 948149725,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 2500,
    class: 1723106292,
    instance: 1725139225,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 5499,
    class: 1723106292,
    instance: 1723156343,
    count: 2,
    isFetching: 0,
    is_eighteen_open: 0,
    is_nineteen_open: 0,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 6469,
    class: 1723106292,
    instance: 1723346424,
    count: 1,
    isFetching: 0,
    is_eighteen_open: 1,
    is_nineteen_open: 1,
    is_twenty_open: 0,
    is_twentyone_open: 0
  },
  {
    market_hash_name: 'Onibi',
    price: 6500,
    class: 1723106292,
    instance: 1723265864,
    count: 2,
    isFetching: 0,
    is_eighteen_open: 1,
    is_nineteen_open: 1,
    is_twenty_open: 0,
    is_twentyone_open: 0
  }
];
class Onibi extends React.Component {
  render() {
    let {
      id,
      price,
      link,
      isEighteen,
      isNineteen,
      isTwenty,
      isTwentyone
    } = this.props;

    return (
      <div className="item">
        <div className="onibiPic">
          <img src={process.env.PUBLIC_URL + '/onibi.jpg'} alt="onibipic" />
        </div>
        <p>Id: {id}</p>
        <p>Price {price}</p>
        <p>Open 18 - {isEighteen}</p>
        <p>Open 19 - {isNineteen}</p>
        <p>Open 20 - {isTwenty}</p>
        <p>Open 21 - {isTwentyone}</p>

        <p>
          <a href={link} target="_blank">
            Open me
          </a>
        </p>
      </div>
    );
  }
}

class OnibiList extends React.Component {
  render() {
    const { page } = this.props;
    const onibiData = page.onibiData;

    console.log('onibies in render: ', onibiData);

    if (onibiData) {
      const onibiList = onibiData.map(onibi => {
        console.log(
          'from map: class_instance: ' +
            onibi.class +
            '_' +
            onibi.instance +
            onibi.is18 +
            ' ' +
            onibi.is19
        );
        return (
          <Onibi
            key={onibi.class + '_' + onibi.instance}
            id={onibi.class + '_' + onibi.instance}
            link={
              'https://market.dota2.net/item/' +
              onibi.class +
              '-' +
              onibi.instance +
              '-Onibi/'
            }
            isEighteen={onibi.is18}
            isNineteen={onibi.is19}
            isTwenty={onibi.is20}
            isTwentyone={onibi.is21}
            price={onibi.price}
          />
        );
      });

      return <div className="wrapper">{onibiList}</div>;
    } else {
      return <h1>Data is null!</h1>;
    }
  }
}

export default connect(mapStateToProps)(OnibiList);
