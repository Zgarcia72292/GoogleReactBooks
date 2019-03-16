import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
// import SaveBtn from "../SaveBtn";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}



// Destructuring the type, className, children and onClick props, applying them to the button element
export function SaveBtn({  children, onClick }) {
  return (
    <button  style={{ marginTop: 5, float: "right" }} onClick={onClick}  type="button" class="btn btn-primary" >
      {children}
    </button>
  );
}




// RecipeListItem renders a bootstrap list item containing data from the recipe api call
const BookListItem = info => {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={info.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{info.title}</h3>
            <h4>Author(s): {info.authors}</h4>
            <br/>
            <p><strong>Summary:</strong> {info.summary}</p>
            <a rel="noreferrer noopener" target="_blank" href={info.link}>
              Go to Book!
            </a>
            <button onClick={info.handleSave} style={{ float: "right" }}  type="button" class="btn btn-primary">
          Save Book
        </button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

export {BookListItem}
