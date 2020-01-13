import React from 'react';
import { connect } from 'react-redux';
import { getItemIndex, number_format } from '../utils/onibiTools';

const mapStateToProps = store => {
  return {
    page: store.page
  };
};

class Onibi extends React.Component {
  render() {
    let {
      id,
      price,
      name,
      link,
      isEighteen,
      isNineteen,
      isTwenty,
      isTwentyone
    } = this.props;

    let priceForm = number_format(price / 100, 2, ' р. ', ' ');

    return (
      <div className="item">
        <div className="onibiPic">
          <img src={process.env.PUBLIC_URL + '/onibi.jpg'} alt="onibipic" />
        </div>
        <p>{priceForm} к.</p>
        <p>{name}</p>
        <p>18 - {isEighteen}</p>
        <p>19 - {isNineteen}</p>
        <p>20 - {isTwenty}</p>
        <p>21 - {isTwentyone}</p>

        <p>
          {/*eslint-disable-next-line react/jsx-no-target-blank */}
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

    if (onibiData) {
      const onibiList = onibiData.map(onibi => {
        let index = getItemIndex(onibi);
        let data = page[index];

        if (data) {
          return (
            <Onibi
              key={onibi.class + '_' + onibi.instance}
              id={onibi.class + '_' + onibi.instance}
              name={onibi.market_hash_name}
              link={
                'https://market.dota2.net/item/' +
                onibi.class +
                '-' +
                onibi.instance +
                '-Onibi/'
              }
              isEighteen={data.is18 ? 1 : 0}
              isNineteen={data.is19 ? 1 : 0}
              isTwenty={data.is20 ? 1 : 0}
              isTwentyone={data.is21 ? 1 : 0}
              price={onibi.price}
            />
          );
        } else {
          return '';
        }
      });

      return <div className="wrapper">{onibiList}</div>;
    } else {
      return <h1>Data is null!</h1>;
    }
  }
}

export default connect(mapStateToProps)(OnibiList);
