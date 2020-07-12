// eslint-disable-next-line
import React, {Component} from 'react';
import './App.css';

class ToDo extends React.Component {
  render(){
    const data = [
      'makan', 'minum', 'bernafas'
      ];
    const listItems = data.map((data) =>
      <li>{data}</li>
    );
    return (
         <ul>{listItems}</ul>
    );
  }
 }

 export default ToDo;