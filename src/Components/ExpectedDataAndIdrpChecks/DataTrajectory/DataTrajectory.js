import React, { Component, Fragment } from "react";

import { Accordion, Confirm, Header, Icon, Table } from "semantic-ui-react";

export default class DataTrajectory extends Component {
  state = { activeIndex: 1, open: false };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  open = () => {
    this.setState({ open: true });
  };
  close = () => {
    this.setState({ open: false });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Fragment>
        <Accordion fluid styled style={{ borderRadius: 0 }}>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
            style={{
              backgroundColor: "#cad8f7",
              border: "#dddddd",
              color: "#000"
            }}
          >
            <Icon name="dropdown" />
            Study
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0} />
        </Accordion>
        <Accordion fluid styled style={{ borderRadius: 0 }}>
          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
            style={{
              backgroundColor: "#cad8f7",
              border: "#dddddd",
              color: "#000"
            }}
          >
            <Icon name="dropdown" />
            Data Trajectory 1
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>EXPECTED DATA CATEGORY</Table.HeaderCell>
                  <Table.HeaderCell>APPLIED VISIT</Table.HeaderCell>
                  <Table.HeaderCell>SOURCE</Table.HeaderCell>
                  <Table.HeaderCell>DATA TRANSFER FREQUENCY</Table.HeaderCell>
                  <Table.HeaderCell>CRITICAL DATA</Table.HeaderCell>
                  <Table.HeaderCell>ACTIONS</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="angle right" />
                    Vital Sign
                  </Table.Cell>
                  <Table.Cell>All</Table.Cell>
                  <Table.Cell>EDC</Table.Cell>
                  <Table.Cell />
                  <Table.Cell>Yes - Primary End Point</Table.Cell>
                  <Table.Cell>
                    <Icon name="pencil" color="blue" />
                    <Icon name="cog" color="blue" />
                    <Icon
                      name="trash alternate"
                      color="blue"
                      onClick={this.open}
                    />
                    <Icon name="comment outline" color="blue" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="angle right" />
                    Swollen and Tender Joint Counts - Right
                  </Table.Cell>
                  <Table.Cell>Screening</Table.Cell>
                  <Table.Cell>EDC</Table.Cell>
                  <Table.Cell />
                  <Table.Cell>Yes - Additional End Point</Table.Cell>
                  <Table.Cell>
                    <Icon name="pencil" color="blue" />
                    <Icon name="cog" color="blue" />
                    <Icon name="trash alternate" color="blue" />
                    <Icon name="comment alternate" color="blue" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="angle right" />
                    Morning Stiffness
                  </Table.Cell>
                  <Table.Cell>Screening, Week 2</Table.Cell>
                  <Table.Cell>EDC, Central Lab</Table.Cell>
                  <Table.Cell />
                  <Table.Cell>No</Table.Cell>
                  <Table.Cell>
                    <Icon name="pencil" color="blue" />
                    <Icon name="cog" color="blue" />
                    <Icon name="trash alternate" color="blue" />
                    <Icon name="comment alternate" color="blue" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="angle down" />
                    Date of Visit
                  </Table.Cell>
                  <Table.Cell>All</Table.Cell>
                  <Table.Cell>EDC</Table.Cell>
                  <Table.Cell />
                  <Table.Cell>Yes - Efficacy</Table.Cell>
                  <Table.Cell>
                    <Icon name="pencil" color="blue" />
                    <Icon name="cog" color="blue" />
                    <Icon name="trash alternate" color="blue" />
                    <Icon name="comment alternate" color="blue" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell
                    colSpan={6}
                    style={{ backgroundColor: "#f7f7f7" }}
                  >
                    <div
                      className="arrow_box"
                      style={{ backgroundColor: "#e6e6e6" }}
                    >
                      <Header as="h5" style={{ padding: "1em 1em 0em 1em" }}>
                        Date of Visit IDRP Checks
                      </Header>
                      <Table celled>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell>Purpose</Table.HeaderCell>
                            <Table.HeaderCell width={4}>
                              Description
                            </Table.HeaderCell>
                            <Table.HeaderCell>Visit</Table.HeaderCell>
                            <Table.HeaderCell>Role</Table.HeaderCell>
                            <Table.HeaderCell>Method</Table.HeaderCell>
                            <Table.HeaderCell>Frequency</Table.HeaderCell>
                            <Table.HeaderCell>Owner</Table.HeaderCell>
                            <Table.HeaderCell>
                              URL/Edit Check Name
                            </Table.HeaderCell>
                            <Table.HeaderCell>Query Text</Table.HeaderCell>
                            <Table.HeaderCell>Source</Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell>Data Quality</Table.Cell>
                            <Table.Cell>
                              Review for duplicate visits (same date different
                              visit name) in EDC
                            </Table.Cell>
                            <Table.Cell />
                            <Table.Cell>CDR</Table.Cell>
                            <Table.Cell>Analytics</Table.Cell>
                            <Table.Cell>Monthly</Table.Cell>
                            <Table.Cell>John Smith</Table.Cell>
                            <Table.Cell>Lorem Ipsum</Table.Cell>
                            <Table.Cell />
                            <Table.Cell>Template 001</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Data Quality</Table.Cell>
                            <Table.Cell>
                              Review dates aginst the protocol defined windows
                              and for logic.
                            </Table.Cell>
                            <Table.Cell />
                            <Table.Cell>CDR</Table.Cell>
                            <Table.Cell>LSH Edit Checks; Analytics</Table.Cell>
                            <Table.Cell>Monthly</Table.Cell>
                            <Table.Cell>John Smith</Table.Cell>
                            <Table.Cell>Lorem Ipsum</Table.Cell>
                            <Table.Cell />
                            <Table.Cell>Study M3422</Table.Cell>
                          </Table.Row>
                          <Table.Row>
                            <Table.Cell>Data Quality</Table.Cell>
                            <Table.Cell>
                              Review for appropriate protocol adherence,
                              sequence of events and logic. If an unschedued
                              visit occurs, check for any time-associated
                              procedures (i.e. AEs, pregnancy, ECG, CXR) or
                              entered in error query site to correct.
                            </Table.Cell>
                            <Table.Cell />
                            <Table.Cell>Remote Monitor</Table.Cell>
                            <Table.Cell>Manual</Table.Cell>
                            <Table.Cell>Upon Unscheduled Visit</Table.Cell>
                            <Table.Cell>John Smith</Table.Cell>
                            <Table.Cell>Lorem Ipsum</Table.Cell>
                            <Table.Cell />
                            <Table.Cell>Template 554 - Modified</Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            {/*  */}
          </Accordion.Content>
        </Accordion>
        <Accordion fluid styled style={{ borderRadius: 0 }}>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
            style={{
              backgroundColor: "#cad8f7",
              border: "#dddddd",
              color: "#000"
            }}
          >
            <Icon name="dropdown" />
            Data Trajectory 2
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2} />
        </Accordion>
        <Accordion fluid styled style={{ borderRadius: 0 }}>
          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.handleClick}
            style={{
              backgroundColor: "#cad8f7",
              border: "#dddddd",
              color: "#000"
            }}
          >
            <Icon name="dropdown" />
            Data Trajectory 3
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3} />
        </Accordion>
        <Confirm
          cancelButton="No"
          confirmButton="Yes"
          content="Are you sure you wish to delete this Expected Data Category?"
          header="Confirm this action."
          onCancel={this.close}
          onConfirm={this.close}
          open={this.state.open}
          size="mini"
        />
      </Fragment>
    );
  }
}
