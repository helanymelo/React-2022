import logo from './logo.svg';
import './App.css';
import List from './List/List';
import { useState } from 'react';
import data from './data/data';

function App() {
  const [people, setPeople]=useState(data)
  return (
    <section className='container'>
      <h3>{people.length} birthday today</h3>
      <List people={people}/>
      <button onClick={()=>setPeople([])}>CLEAR</button>
    </section>
  );
}

export default App;
