import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Button from '@material-ui/core/Button';

function Result(props) {
  return (
    <TransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div style={{ marginBottom: "20px" }}>
        <strong>You Have Succesfully Passed The Test</strong>
      </div>
      <Button
        type="button"
        size="medium"
        variant="contained"
        color="primary"
        onClick={props.onSuccessTest} >
        Start Traning
        </Button>


    </TransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
  onSuccessTest: PropTypes.func.isRequired
};

export default Result;
