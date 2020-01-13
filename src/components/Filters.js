import React from 'react';

class Filter extends React.Component {
  onChangeChBox = e => {
    //this.props.getOnibiesFiltered(this.props.keyNum);
    console.log('keyNum: ', this.props.keyNum);
    console.log('e: ', e.target, this.props);
  };

  render() {
    let keyNum = this.props.keyNum;

    return (
      <div className="filter chbox item">
        {keyNum}{' '}
        <input
          type="checkbox"
          value={keyNum}
          onChange={this.onChangeChBox}
          checked={this.props.checked}
        />
      </div>
    );
  }
}

const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
  <input type={type} name={name} checked={checked} onChange={onChange} />
);

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
