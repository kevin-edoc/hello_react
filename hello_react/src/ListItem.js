import React, { Component } from 'react';
import {ListGroupItem} from 'react-bootstrap';

export class ListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {text: this.props.text, id: this.props.id};
    this.handleClick = this.handleClick.bind(this);
    
  }
  
  handleClick(){
    console.log("Deleted: " + this.state.id);
    this.props.handleDelete(this.state.id);
  }
  

  render(){
    return(<ListGroupItem>{this.props.text} <button className="pull-right" onClick={this.handleClick}> X </button> Id: {this.state.id}</ListGroupItem>);
  }
}

export default ListItem;