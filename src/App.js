import React, {useState, useEffect} from 'react';
import {CardList} from './components/CardList/CardList'
import {SearchBox} from './components/SearchBox/SearchBox'

import './App.css';

import axios from 'axios'

function App() {
  
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('');

  useEffect(_ =>
  {
    console.log('a')
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response =>
      {
        setMonsters(response.data)
      })
  }, [searchField])

  const filteredMonsters = monsters.filter(monster => 
  {
    return monster.name.toLowerCase().includes(searchField.toLowerCase())
  })

  const handleChange = e => setSearchField(e.target.value)

  return (
    <div className="App">
      <h1 className="wonky-h1"> Monsters Rolodex </h1>
      <SearchBox handleChange={handleChange} placeHolder={`search monsters`}/>
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
