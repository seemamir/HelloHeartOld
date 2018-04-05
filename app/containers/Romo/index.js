/**
 *
 * Romo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRomo from './selectors';
import reducer from './reducer';
import saga from './saga';

export class Romo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Romo</title>
          <meta name="description" content="Description of Romo" />
        </Helmet>
      </div>
    );
  }
}

Romo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  romo: makeSelectRomo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'romo', reducer });
const withSaga = injectSaga({ key: 'romo', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Romo);
