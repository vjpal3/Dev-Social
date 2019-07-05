import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// const Alert = props => {
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

//Fetch alert state array in this component
//Mapping a redux state to a prop in this component, which is an array of alerts
const mapStateToProps = state => ({
  // Here prop is alerts and its value is set to a value what a rootreducer is emitting, which is - alert
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
