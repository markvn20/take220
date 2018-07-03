import React, { Component } from 'react';
import axios from 'axios'

class Pokedex extends Component {
  state = {
    count: 0,
    myArray: [],
  }

  componentDidMount() {
    var rows = [];
    for (var i = 0; i < 152; i++) {
      var i = i++;
      rows.push(i)
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(result => {
        var joined = this.state.myArray.concat(result);
        this.setState({ myArray: joined })
        console.log(this.state.myArray)
      })
    }
  }

  render() {
  const styleMain = {
    overflow: 'auto',
    position: 'absolute',
    top: '0px',
    right: '0px',
    height: '100%',
    width: '70%',
    background: '#345',
  }
  
  const box = {
    float: 'left',
  }

  const pokemon = this.state.myArray.map((user) => {
    return(
      <div style={box}>
        <p>{user.data.name}</p>
        <img src={user.data.sprites.front_default} />
      </div>
    )
  })

    return (
      <div style={styleMain}>
      Pokedex
      {pokemon}
      </div>
    )
  }
}

export default Pokedex;
