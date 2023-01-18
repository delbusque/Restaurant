import './css/App.css';

import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";

import Home from './components/Home';
import Tables from './components/Tables.js';
import TableCard from './components/TableCard.js';

import * as tablesService from './services/tablesService.js'

import Navigation from './components/Navigation.js';

function App() {

  const [tables, setTables] = useState(null);

  useEffect(() => {
    tablesService.fetchTables(setTables);
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tables' element={<Tables tables={tables} />} />
        <Route path='/tables/:number' element={<TableCard tables={tables} />} />
      </Routes>

    </div>
  );
}

export default App;
