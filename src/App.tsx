import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Table/Table'
import Table from "./components/Table/Table";
import People, {Person, toTableFormat} from "./services/PeopleSwapi";

let dataTable: string[][] = [];

function App() {
    let [people, setPeople] = useState<Person[]>([]);
    useEffect( () => {
        People().then(data => {
            const peopleData = data.results.map((person: Person) => ({
                name: person.name,
                height: person.height,
                mass: person.mass,
                hair_color: person.hair_color,
                skin_color: person.skin_color,
                eye_color: person.eye_color,
                birth_year: person.birth_year,
                gender: person.gender,
            }));
            setPeople(peopleData);
            alert(peopleData);
        });}, [])

    dataTable = toTableFormat(people);
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Table data={dataTable}></Table>
                </header>
            </div>
        );
    }

    export default App;
