import React, { Component } from 'react';

class Pokedex extends Component {
  state = {
    count: 0,
    myArray: [],
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(results => {
        return results.json()
      })
      .then(data => {
        let test = data.results.map((url) => {
          this.setState({
            count: this.state.count + 1
          })
          fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.count}/`)
          .then(response => response.json())
          .then(jsondata => {
            console.log(jsondata)
            var joined = this.state.myArray.concat(jsondata);
            this.setState({ myArray: joined })
          })
        })
      })
  }
  
  render() {
  const styleMain = {
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
        <p>{user.name}</p>
        <img src={user.sprites.front_default} />
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
