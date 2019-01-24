import React, { Component } from "react";
import "./Studies.css";
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Table
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class Studies extends Component {
  state = { visible: false };

  handleToggleShowHideExtendedView = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <div className="App">
        <Container style={{ width: "auto", padding: "5em 2em 2em 2em" }}>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1" dividing>
                  CDRP Landing
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid style={{ padding: "1em 1em" }}>
            <Grid.Row>
              <Card
                as="table"
                raised
                fluid
                style={{
                  paddingBottom: "1em"
                }}
              >
                <Card.Content>
                  <Table stackable style={{ border: 0 }}>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell verticalAlign="top">
                          <Header as="h1" textAlign="center">
                            <span style={{ whiteSpace: "nowrap" }}>
                              M16-043
                            </span>
                          </Header>
                        </Table.Cell>
                        <Table.Cell width={1} verticalAlign="top">
                          <Label
                            circular
                            size="massive"
                            style={{
                              backgroundColor: "#ff0000",
                              color: "#fff",
                              width: "70px",
                              height: "70px",
                              lineHeight: "40px",
                              fontSize: "2em"
                            }}
                          >
                            2
                          </Label>
                        </Table.Cell>
                        <Table.Cell
                          width={3}
                          verticalAlign="top"
                          style={{ minWidth: "200px" }}
                        >
                          <p>
                            Days until lorem ipsum lorem ipsum lorem ipsum lorem
                            ipsum lorem ipsum
                          </p>
                          <Divider />
                          <p>19-Oct-2018</p>
                        </Table.Cell>
                        <Table.Cell width={2}>
                          <Button
                            size="massive"
                            primary
                            style={{
                              backgroundColor: "#2185d0",
                              width: "240px"
                            }}
                          >
                            10
                            <br />
                            Unreviewed
                          </Button>
                        </Table.Cell>
                        <Table.Cell width={2}>
                          <Button
                            size="massive"
                            primary
                            style={{
                              backgroundColor: "#2185d0",
                              width: "240px"
                            }}
                          >
                            45
                            <br />
                            <span style={{ whiteSpace: "nowrap" }}>
                              Pending Closure
                            </span>
                          </Button>
                        </Table.Cell>
                        <Table.Cell>
                          {/* style={{
                            backgroundColor: "white",
                            border: "3px solid #2185d0",
                            width: "260px",
                            color: "#2185d0",
                            height: "83px",
                            fontSize: "1.17em"
                          }} */}
                          <Button
                            as="div"
                            labelPosition="right"
                            style={{
                              backgroundColor: "white",
                              textAlign: "center",
                              color: "#2185d0",
                              height: "83px",
                              fontSize: "1.3em"
                            }}
                          >
                            <Button
                              icon
                              basic
                              color="blue"
                              style={{
                                borderRight: 0
                              }}
                            >
                              <Icon
                                name="warning sign"
                                size="big"
                                color="blue"
                              />
                            </Button>
                            <Label
                              basic
                              color="blue"
                              style={{
                                width: "210px"
                              }}
                            >
                              <p>
                                IDRP V 2{" "}
                                <span style={{ fontWeight: 900 }}>
                                  Approved
                                </span>
                                <br />
                                IDRP V 1.1 <span>Draft</span>
                              </p>
                            </Label>
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                  {this.state.visible ? (
                    <div>
                      <Table style={{ border: 0 }}>
                        <Table.Body>
                          <Table.Row>
                            <Table.Cell />
                            <Table.Cell width={1}>
                              <Header as="h3">MISSING DATA</Header>
                              <Image src="/images/charts/doughnut.png" />
                            </Table.Cell>
                            <Table.Cell width={4}>
                              <Header as="h3">IN ACTION</Header>
                              <Image
                                src="/images/charts/u27.png"
                                style={{ height: "216px" }}
                              />
                            </Table.Cell>
                            <Table.Cell width={2}>
                              <Header as="h3">TASKS</Header>
                              <Card
                                style={{
                                  textAlign: "center",
                                  border: 0,
                                  backgroundColor: "#eeeeee",
                                  height: "200px",
                                  width: "150px"
                                }}
                              >
                                <span
                                  style={{
                                    margin: "1em 0em -.2em 0em",
                                    fontSize: "2.5em"
                                  }}
                                >
                                  6
                                </span>
                                <br />
                                <span>To Do</span>
                                <Divider
                                  style={{ margin: "1em auto", width: "60%" }}
                                />
                                <span
                                  style={{
                                    margin: ".2em 0em -.2em 0em",
                                    fontSize: "2.5em"
                                  }}
                                >
                                  4
                                </span>
                                <br />
                                <span>Following</span>
                              </Card>
                            </Table.Cell>
                            <Table.Cell width={2}>
                              <Header as="h3">QUERIES</Header>
                              <Card
                                style={{
                                  textAlign: "center",
                                  border: 0,
                                  backgroundColor: "#eeeeee",
                                  height: "200px",
                                  width: "150px"
                                }}
                              >
                                <span
                                  style={{
                                    margin: "1em 0em -.2em 0em",
                                    fontSize: "2.5em"
                                  }}
                                >
                                  7
                                </span>
                                <br />
                                <span>Answered</span>
                                <Divider
                                  style={{ margin: "1em auto", width: "60%" }}
                                />
                                <span
                                  style={{
                                    margin: ".2em 0em -.2em 0em",
                                    fontSize: "2.5em"
                                  }}
                                >
                                  55
                                </span>
                                <br />
                                <span>Open</span>
                              </Card>
                            </Table.Cell>
                            <Table.Cell width={2}>
                              <Header as="h3">OBSERVATIONS</Header>
                              <Card
                                style={{
                                  textAlign: "center",
                                  border: 0,
                                  backgroundColor: "#eeeeee",
                                  height: "200px",
                                  width: "150px"
                                }}
                              >
                                <span
                                  style={{
                                    margin: "1em 0em -.2em 0em",
                                    fontSize: "2.5em"
                                  }}
                                >
                                  8
                                </span>
                                <br />
                                <span>Open</span>
                                <Divider
                                  style={{ margin: "1em auto", width: "60%" }}
                                />
                                <span
                                  style={{
                                    margin: ".2em 0em -.2em 0em",
                                    fontSize: "2.5em"
                                  }}
                                >
                                  15
                                </span>
                                <br />
                                <span>Action Items</span>
                              </Card>
                            </Table.Cell>
                            <Table.Cell>
                              <Header as="h3">HOS</Header>
                              <Card
                                style={{
                                  textAlign: "center",
                                  border: 0,
                                  backgroundColor: "#eeeeee",
                                  height: "200px",
                                  width: "150px"
                                }}
                              >
                                <span style={{ marginTop: "80px" }}>
                                  Go To
                                  <br />
                                  HOS
                                </span>
                                {/* <span
                                  style={{
                                    margin: "1em 0em -.2em 0em",
                                    fontSize: "2.5em"
                                  }}
                                >
                                  8
                                </span>
                                <br />
                                <span>Open</span>
                                <Divider
                                  style={{ margin: "1em auto", width: "60%" }}
                                />
                                <span
                                  style={{
                                    margin: ".2em 0em -.2em 0em",
                                    fontSize: "2.5em"
                                  }}
                                >
                                  15
                                </span>
                                <br />
                                <span>Action Items</span> */}
                              </Card>
                            </Table.Cell>
                          </Table.Row>
                        </Table.Body>
                      </Table>
                    </div>
                  ) : null}
                </Card.Content>
              </Card>
            </Grid.Row>
            <Button
              onClick={this.handleToggleShowHideExtendedView}
              circular
              size="large"
              icon={this.state.visible ? "angle up" : "angle down"}
              style={{
                backgroundColor: "white",
                zIndex: "9",
                color: "#2185d0",
                margin: "0 auto",
                marginTop: "-35px",
                boxShadow: "0 4px 4px -4px gray"
              }}
            />
          </Grid>
        </Container>
      </div>
    );
  }
}
