import React, { Component } from 'react';
import logo from './logo.svg';
import './ToDo.css';
import {List} from './List.js';
import {Jumbotron} from 'react-bootstrap';
import {Grid} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

class ToDo extends React.Component{
  constructor(props){
    super(props);
    this.state = {todos: [], count: 0};

    this.addList = this.addList.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }
  

  addList(){
    console.log("Works");
    //this.setState({todos: []});
    var list = {id: this.state.count}; //Added an object containing an ID into the ToDo array instead of directly adding a List element because I need to display the array of Lists in the render method anyway
    this.setState({todos: this.state.todos.concat([list])});
    this.setState({count: this.state.count + 1})
  }

  deleteList(id){
    console.log("This ID: " + id);
    var index = this.state.todos.map(list => list.id).indexOf(id);
    console.log("This index: " + index);
    this.state.todos.splice(index, 1); //Works! splice returns a new array with the just the deleted items, so instead of displaying the returned array from splice, I tried splicing the original array itself and used setState to trigger the updated list to appear in the UI
    this.setState({todos: this.state.todos});
  }
  
  render(){
    return(
      <div>
        <Jumbotron> <h1>ToDo App </h1></Jumbotron>
        <button onClick = {this.addList}> Add New List </button>
        <Grid>
          <Row>
            {this.state.todos.map(list => (<Col key={list.id} xs={6} md={4}> <List key={list.id} id={list.id} onListDelete = {this.deleteList}/> </Col>) ) }
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ToDo;