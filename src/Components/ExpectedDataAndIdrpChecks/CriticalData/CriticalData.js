import React, { Component, Fragment } from "react";

import { Accordion, Icon } from "semantic-ui-react";

export default class CriticalData extends Component {
  state = { activeIndex: 1 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };
  render() {
    return (
      <Fragment>
        <Accordion fluid styled style={{ borderRadius: 0 }}>
          <Accordion.Title
            active={this.state.activeIndex === 0}
            index={0}
            //onClick={this.handleClick}
            style={{
              backgroundColor: "#cad8f7",
              border: "#dddddd",
              color: "#000"
            }}
          >
            <Icon name="dropdown" />
            Critical
          </Accordion.Title>
          <Accordion.Content active={this.state.activeIndex === 0} />
        </Accordion>
      </Fragment>
    );
  }
}
