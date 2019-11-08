

import './App.css';
import MemorialIndex from './components/memorial_index';


import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <MemorialIndex fetchMemorials={this.props.fetchMemorials} />
      </div>
    )
  }
}



