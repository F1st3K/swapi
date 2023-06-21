import React, {useEffect, useState} from 'react';
import './../App.css';
import Table from "./../components/Table/Table";
import People, {Person, toTableFormat} from "./../services/PeopleSwapi";

let dataTable: string[][] = [];

const Home = () => {
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
                <Table data={dataTable}></Table>
        </div>
    );
}

export default Home;
