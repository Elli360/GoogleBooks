import React, { Component, useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import DeleteBtn from "../components/DeleteBtn";
import Col from "../components/Col";
import API from "../utils/Api";
import SearchForm from "../components/SearchForm";
import Row from "../components/Row";
import { List, ListItem } from "../components/List";


class Books extends Component {
  state = {
    books:[],
    search: ""
  };

  SearchBooks =query => {
    API.searchGooglebooks(query).then(res =>{
      console.log(res)
      this.setState(
      {
        books:res.data.items,
        search: ""
      })
    } 
  )}

  handleInputChange = event =>{
    console.log (event.target.value)
    const value = event.target.value;
    const name =event.target.name;
    this.setState({
      [name]: value
    });
  }

    handleFormSubmit = event =>{
      event.preventDefault();
      this.SearchBooks(this.state.search);
    };

  // Loads all books and sets them to books
  loadBooks = () => {
    API.getBooks()
      .then(res => 
        this.setState({books: res.data})
      )
      .catch(err => console.log(err));
  };
render () {
return ( 
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <input
                onChange={this.handleInputChange}
                name="search"
                placeholder="Title (required)"
              />
              <button
                onClick={(event) => this.handleFormSubmit(event)}
              >
                Submit Book
              </button>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() =>{}} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Books;
