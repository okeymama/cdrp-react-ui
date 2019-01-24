import React, { Component } from "react";
import "./Study.css";
import {
  Accordion,
  Button,
  Confirm,
  Container,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Menu,
  Modal,
  Select,
  Table
} from "semantic-ui-react";
//import MultiSelectBox from "react-multiselect-box";

import AppliedVisits from "../../Components/ExpectedDataAndIdrpChecks/AppliedVisits/AppliedVisits";
import CriticalData from "../../Components/ExpectedDataAndIdrpChecks/CriticalData/CriticalData";
import DataTrajectory from "../../Components/ExpectedDataAndIdrpChecks/DataTrajectory/DataTrajectory";
import IdrpCheck from "../../Components/ExpectedDataAndIdrpChecks/IdrpCheck/IdrpCheck";

export default class Study extends Component {
  state = {
    activeItem: "DATA TRAJECTORY",
    assignSubjectsModalOpen: false
  };

  handleAssignSubjectsOpen = () => {
    this.setState({ assignSubjectsModalOpen: true });
  };

  handleAssignSubjectsClose = () => {
    this.setState({ assignSubjectsModalOpen: false });
  };

  handleTabMenuClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    const options = [
      { key: "a", text: "A Value", value: "A Value" },
      { key: "b", text: "B Value", value: "B Value" }
    ];

    const AssignSubjects = () => (
      <Modal
        size="small"
        trigger={
          <button
            className="headerLinks"
            style={{
              background: "none",
              color: "#2185d0",
              border: "none",
              padding: "0!important",
              font: "inherit",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Assign Subjects
          </button>
        }
      >
        <Modal.Header>Assign Subjects</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {/* <Header>Assign Subjects</Header> */}
          </Modal.Description>
          <Form>
            <Form.TextArea label="Rule Logic Text" />
            <Divider />
            <Container textAlign="center" fluid>
              Subjects will be assigned to ARM IF:
            </Container>
            <Grid style={{ padding: "1em 0 0 0" }}>
              <Grid.Row>
                <Grid.Column
                  width={3}
                  verticalAlign="middle"
                  textAlign="center"
                >
                  Visit/Frequency
                </Grid.Column>
                <Grid.Column width={13}>
                  <Form.Field control={Select} options={options} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column
                  width={3}
                  verticalAlign="middle"
                  textAlign="center"
                >
                  Form
                </Grid.Column>
                <Grid.Column width={13}>
                  <Form.Field control={Select} options={options} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column
                  width={3}
                  verticalAlign="middle"
                  textAlign="center"
                >
                  Field
                </Grid.Column>
                <Grid.Column width={13}>
                  <Form.Field control={Select} options={options} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Table celled style={{ margin: "2em 0 0 0" }}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell textAlign="center">
                    DATA TRAJECTORY Name
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">Value</Table.HeaderCell>
                  <Table.HeaderCell textAlign="center">
                    Manually Assign
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell textAlign="center">DATA TRAJECTORY 1</Table.Cell>
                  <Table.Cell>
                    <Form.Field control={Select} options={options} />
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Icon color="blue" name="cog" size="large" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">DATA TRAJECTORY 2</Table.Cell>
                  <Table.Cell>
                    <Form.Field control={Select} options={options} />
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Icon color="blue" name="cog" size="large" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">DATA TRAJECTORY 3</Table.Cell>
                  <Table.Cell>
                    <Form.Field control={Select} options={options} />
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Icon color="blue" name="cog" size="large" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">DATA TRAJECTORY 4</Table.Cell>
                  <Table.Cell>
                    <Form.Field control={Select} options={options} />
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Icon color="blue" name="cog" size="large" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="center">DATA TRAJECTORY 5</Table.Cell>
                  <Table.Cell>
                    <Form.Field control={Select} options={options} />
                  </Table.Cell>
                  <Table.Cell textAlign="center">
                    <Icon color="blue" name="cog" size="large" />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Container textAlign="center" fluid style={{ margin: "3em 0 0 0" }}>
              <Modal.Actions>
                <Button primary onClick={this.handleClose}>
                  Done
                </Button>
                <Button onClick={this.handleClose}>Cancel</Button>
              </Modal.Actions>
            </Container>
            {/* <Grid>
              <Grid.Row>
                <Grid.Column width={6} floated="left">
                  <Form.Input placeholder="Search" />
                </Grid.Column>
                <Grid.Column width={2} />
                <Grid.Column width={6} floated="right" verticalAlign="middle">
                  <p>Assigned Subjects</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={6} floated="left">
                  left side
                </Grid.Column>
                <Grid.Column width={2}>
                  <Icon
                    style={{ marginBottom: "1em" }}
                    name="arrow alternate circle right"
                    size="big"
                    color="blue"
                  />
                  <br />
                  <Icon
                    name="arrow alternate circle left outline"
                    size="big"
                    color="blue"
                  />
                </Grid.Column>
                <Grid.Column width={6} floated="right">
                  right side
                </Grid.Column>
              </Grid.Row>
            </Grid> */}
          </Form>
        </Modal.Content>
      </Modal>
    );

    let showDataOfTab = <DataTrajectory />;
    switch (this.state.activeItem) {
      case "DATA TRAJECTORY":
        showDataOfTab = <DataTrajectory />;
        break;
      case "IDRP CHECK":
        showDataOfTab = <IdrpCheck activeIndex={this.state.activeIndex} />;
        break;
      case "APPLIED VISITS":
        showDataOfTab = <AppliedVisits />;
        break;
      case "CRITICAL DATA":
        showDataOfTab = <CriticalData />;
        break;
      default:
        showDataOfTab = <DataTrajectory />;
    }
    //   showDataOfTab = <DataTrajectory />;
    // }
    // if (this.state.activeItem === "IDRP CHECK") {
    //   showDataOfTab = <IdrpCheck />;
    // }

    return (
      <div className="Study" style={{ padding: "2em 2em 2em 2em" }}>
        <Container fluid>
          <p>
            Study: M16-043 <Icon name="angle down" color="blue" />
          </p>

          <Grid>
            <Grid.Column floated="left" width={6} verticalAlign="bottom">
              <Header as="h1">Expected Data & IDRP Checks</Header>
            </Grid.Column>
            <Grid.Column
              floated="right"
              textAlign="right"
              verticalAlign="bottom"
              width={6}
            >
              <AssignSubjects />

              <a href="/#" style={{ marginLeft: "30px", fontWeight: "bold" }}>
                Submit for Review
              </a>
              <a href="/#" style={{ marginLeft: "30px", fontWeight: "bold" }}>
                Submit for Approval
              </a>
            </Grid.Column>
          </Grid>
          <Divider />
          <Menu
            pointing
            secondary
            stackable
            width={8}
            color="blue"
            style={{ marginTop: "2em" }}
          >
            <Menu.Item
              name="IDRP CHECK"
              active={activeItem === "IDRP CHECK"}
              onClick={this.handleTabMenuClick}
            />
            <Menu.Item
              name="DATA TRAJECTORY"
              active={activeItem === "DATA TRAJECTORY"}
              onClick={this.handleTabMenuClick}
            />
            <Menu.Item
              name="APPLIED VISITS"
              active={activeItem === "APPLIED VISITS"}
              onClick={this.handleTabMenuClick}
            />
            <Menu.Menu>
              <Menu.Item
                name="CRITICAL DATA"
                active={activeItem === "CRITICAL DATA"}
                onClick={this.handleTabMenuClick}
              />
            </Menu.Menu>
          </Menu>
          <Button primary icon="plus" content="Add Expected Data" />
          <Button primary icon="plus" content="Add IDRP Checks" />
          <Grid>
            <Grid.Column floated="left" />
            <Grid.Column
              width={2}
              floated="right"
              textAlign="right"
              style={{ paddingTop: "3em", color: "#2185d0" }}
            >
              Filters <Icon name="filter" size="large" color="blue" />
            </Grid.Column>
          </Grid>
          {showDataOfTab}
        </Container>
        <Container textAlign="center" fluid>
          <Divider />
          <p>&copy; 2018 AbbVie Inc</p>
        </Container>
        {/* use callback for this instead this is just for demo purpose. */}
      </div>
    );
  }
}
