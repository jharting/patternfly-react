import React from 'react';
import { Alert, AlertActionLink, AlertActionCloseButton } from '@patternfly/react-core';

class SuccessAlert extends React.Component {
  state = { alertOneVisible: true, alertTwoVisible: true };
  hideAlertOne = () => this.setState({ alertOneVisible: false });
  hideAlertTwo = () => this.setState({ alertTwoVisible: false });

  render() {
    const { alertOneVisible, alertTwoVisible } = this.state;
    return (
      <React.Fragment>
        {alertOneVisible && (
          <Alert
            variant="success"
            title="Success alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertOne} />}
          >
            Success alert description. <a href="#">This is a link.</a>
          </Alert>
        )}
        {alertTwoVisible && (
          <Alert
            variant="success"
            title="Success alert title"
            action={<AlertActionCloseButton onClose={this.hideAlertTwo} />}
          />
        )}
        <Alert
          variant="success"
          title="Success alert title"
          action={<AlertActionLink>Action Button</AlertActionLink>}
        />
        <Alert variant="success" title="Success alert title" />
      </React.Fragment>
    );
  }
}

export default SuccessAlert;
