import React from 'react';
import { connect } from 'react-redux';
import { setSecretKey } from '../actions/UserActions';

const mapStateToProps = store => {
  return {
    user: store.user
  };
};

class Display extends React.Component {
  render() {
    let { user } = this.props;

    return <h4 className="baseMargin top">{`Вы ввели: ` + user.secretKey}</h4>;
  }
}

const ConnectedDisplay = connect(mapStateToProps)(Display);

class SecretKey extends React.Component {
  handleChange = e => {
    this.props.setSecretKeyAction(e.target.value);
  };

  render() {
    return (
      <div className="txtBox">
        Secret key{' '}
        <input
          type="text"
          onChange={this.handleChange}
          value={this.props.user.secretKey}
          size="40"
        />
        <ConnectedDisplay />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSecretKeyAction: secretKey => dispatch(setSecretKey(secretKey))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecretKey);
