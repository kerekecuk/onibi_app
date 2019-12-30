import React from 'react';
import { connect } from 'react-redux';
import { getOnibies } from '../actions/PageActions';

class RefreshListBtn extends React.Component {
  onClickBtn = () => {
    this.props.getOnibiesAction(this.props.user.secretKey);
  };

  render() {
    return (
      <div className="baseMargin">
        <button className="btn" onClick={this.onClickBtn}>
          Refresh list
        </button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getOnibiesAction: secretKey => dispatch(getOnibies(secretKey))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RefreshListBtn);
