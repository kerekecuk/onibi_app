import React from 'react';
import { connect } from 'react-redux';
import { getOnibiesFiltered } from '../actions/PageActions';

class Filter extends React.Component {
  onChangeChBox = e => {
    this.props.getOnibiesFilteredAction(this.props.keyNum, e.target.checked);
  };

  render() {
    let keyNum = this.props.keyNum;

    return (
      <div className="filter chbox item">
        {keyNum}{' '}
        <input type="checkbox" value={keyNum} onChange={this.onChangeChBox} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOnibiesFilteredAction: (keyNum, isChecked) =>
      dispatch(getOnibiesFiltered(keyNum, isChecked))
  };
};

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

class Filters extends React.Component {
  render() {
    let filters = [18, 19, 20, 21];
    const filtersList = filters.map(number => (
      <ConnectedFilter key={number} keyNum={number} />
    ));

    return <div className="filterList wrapper">{filtersList}</div>;
  }
}

export default Filters;
