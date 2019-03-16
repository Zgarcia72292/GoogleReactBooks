import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    // author: "",
    // synopsis: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title ) {
      API.saveBook({
        title: this.state.title,
        // author: this.state.author,
        // synopsis: this.state.synopsis
      })
        // .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Google Book Search</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
            
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
               Search
              </FormBtn>
            </form>
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default Books;
