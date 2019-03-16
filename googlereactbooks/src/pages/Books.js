import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API";
import { BookList, BookListItem, SaveBtn } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";
// import SaveBtn from "../components/SaveBtn";

class App extends Component {
  state = {
    books: [],
    BookSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSave = bookData => {
    API.saveBook(bookData)
      
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    
    event.preventDefault();
    API.getGoogle(this.state.BookSearch)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };
 
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron>
              <h1>Google Books Search</h1>
            </Jumbotron>
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container  style={{paddingTop: 20, textAlign: "center" }}>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="BookSearch"
                        value={this.state.BookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search for a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="primary"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              {!this.state.books.length ? (
                <h3  style={{ paddingTop: 20, textAlign: "center" }}>No Books to Display</h3>
              ) : (
                <BookList >
                  {this.state.books.map(book => {
                    return (
                      <div style={{ paddingTop: 20 }}>
                      
                      <BookListItem 
                        key={book.id}
                        title={book.volumeInfo.title}
                        link={book.volumeInfo.infoLink}
                        summary={book.volumeInfo.description}
                        authors={book.volumeInfo.authors}
                        thumbnail={book.volumeInfo.imageLinks 
                          ? book.volumeInfo.imageLinks.thumbnail
                          : "https://placehold.it/300x300"}
                        handleSave={() => this.handleSave({ 
                          title: book.volumeInfo.title,
                          // _id: book.id,
                          authors: book.volumeInfo.authors,
                          summary: book.volumeInfo.description,
                          link: book.volumeInfo.infoLink})}

                          
                        
                      />
                      
                      {/* <SaveBtn 
                      onClick={this.handleSave}
                      type="success"
                      className="btn-sm"
                      > Save! </SaveBtn> */}
                     </div>
                    );
                  })}
                </BookList>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
