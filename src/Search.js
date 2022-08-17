import '../src/css/Search.css';
import React from 'react';
import JSONDATA from './MOCK_DATA.json'
import {useState} from 'react'

function Search() {
  const [search, setSearch] = useState('')
  return (
    <div className="App">
      <input type='text' placeholder='Search...' onChange={e => setSearch(e.target.value)}/>
      {JSONDATA.filter((val) => {
        if(search === "") {
          return val
        } else if (val.first_name.toLowerCase().includes(search.toLowerCase())) {
          return val
        }
      }).map((val,key) => {
        return (
          <div className='user' key={key}>
              <p>{val.first_name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Search;
