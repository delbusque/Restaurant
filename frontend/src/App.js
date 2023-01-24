import './css/App.css';

import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";

import ItemsContext from './contexts/ItemsContext.js';

import Home from './components/Home';
import Tables from './components/Tables.js';
import TableView from './components/TableView.js';

import * as apiService from './services/apiService.js'

import Navigation from './components/Navigation.js';

function App() {

  const [tables, setTables] = useState(null);
  const [items, setItems] = useState(null);

  useEffect(() => {
    apiService.fetchTables(setTables);
  }, [])

  useEffect(() => {
    apiService.fetchItems(setItems);
  }, [])

  return (
    <div className="App">
      <Navigation />

      <ItemsContext.Provider value={{ items }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tables' element={<Tables tables={tables} />} />
          <Route path='/tables/:number' element={<TableView tables={tables} setTables={setTables} />} />
        </Routes>
      </ItemsContext.Provider>

    </div>
  );
}

export default App;
