import './css/App.css';

import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";

import ItemsContext from './contexts/ItemsContext.js';

import Home from './components/Home';
import Tables from './components/Tables/Tables.js';
import TableView from './components/Tables/TableView.js';
import ItemsList from './components/Items/ItemsList.js';

import * as apiService from './services/apiService.js'

import Navigation from './components/Navigation.js';

function App() {

  const [tables, setTables] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let local_Tables = window.localStorage.getItem('tables');
    let local_Items = window.localStorage.getItem('items');

    if (local_Tables && local_Items) {

      setTables(JSON.parse(local_Tables));
      setItems(JSON.parse(local_Items));
    } else {
      apiService.fetchTables(setTables);
      apiService.fetchItems(setItems);
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('tables', JSON.stringify(tables));
    window.localStorage.setItem('items', JSON.stringify(items));
  }, [tables, items])

  return (
    <div className="App">
      <Navigation />
      <div className="main">
        <ItemsContext.Provider value={{ items, setItems }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/items' element={<ItemsList />} />
            <Route path='/tables' element={<Tables tables={tables} setTables={setTables} />} />
            <Route path='/tables/:number' element={<TableView tables={tables} setTables={setTables} />} />
          </Routes>
        </ItemsContext.Provider>
      </div>
    </div>
  );
}

export default App;
