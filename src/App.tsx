import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Table/Table'
import Table from "./components/Table/Table";

let data: string[][] = [
    ['Id', 'Name', 'Height', 'Mass', 'Gender', 'Url'],
    ['1', 'Luke Skywalker', '172', '77', 'male', 'https://swapi.dev/api/people/1/'],
    ['2', 'C-3PO', '167', '75', 'n/a', 'https://swapi.dev/api/people/2/'],
    ['3', 'R2-D2', '96', '32', 'n/a', 'https://swapi.dev/api/people/3/'],
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Table data={data}></Table>
      </header>
    </div>
  );
}

export default App;
