import React, { Component } from 'react';
import './App.css';

import Item from './Item.js';

class App extends Component {
  state = {};

  componentDidMount() {
    this._getItemsList();
  }

  _getItemsList = async () => {
    const Items = await this._callLoadAPI();
    this.setState({
      Items
    });
  };

  _callLoadAPI = () => {
    return fetch('http://118.219.54.216:8888/api/items')
      .then(_response => _response.json())
      .catch(err => console.log(err));
  };
  _renderItems = () => {
    const Items = this.state.Items.map((item, index) => {
      return (
        <Item
          id={item.id}
          name={item.name}
          quantity={item.quantity}
          date={item.date}
          key={index}
        />
      );
    });
    return Items;
  };

  render() {
    return (
      <div className='App'>
        <h1>List of Itmes</h1>
        <table>
          {/* {console.log(this.state.Items)} */}
          {this.state.Items ? this._renderItems() : 'Loading....'}
        </table>
      </div>
    );
  }
}

export default App;
