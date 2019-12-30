import React from 'react';

class Filter extends React.Component {
  render() {
    let keyNum = this.props.keyNum;

    return (
      <div className="filter chbox item">
        {keyNum} <input type="checkbox" value={keyNum} />
      </div>
    );
  }
}

class Filters extends React.Component {
  render() {
    let filters = [18, 19, 20, 21];

    const filtersList = filters.map(number => (
      <Filter key={number} keyNum={number} />
    ));

    return <div className="filterList wrapper">{filtersList}</div>;
  }
}

export default Filters;
