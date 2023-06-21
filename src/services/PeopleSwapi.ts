import {useEffect, useState} from "react";

export interface Person {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
}

export const PERSON_HEADERS = ['Name', 'Height', 'Mass', 'Hair color', 'Skin color', 'Eye color', 'Birth year', 'Gender'];
export const URL: string = 'https://swapi.dev/api/people/';

export const InfoPeoples = ((): { data: Person[] | null; loading: boolean } => {
    const [data, setData] = useState<Person[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const json = await response.json();
                setData(json.results);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return { data, loading };
});

export const InfoPeopleById = (id: number) => {
    return fetch('https://swapi.dev/api/people/' + id)
        .then(response => response.json())
        .catch(error => console.error(error));
}

export const toTableFormat = (data: Person[]):string[][] => {
    let table: string[][] = [];
    table.push(PERSON_HEADERS);
    data.map((item, i) => {
        let row: string[] = [];
        row.push(item.name);
        row.push(item.height);
        row.push(item.mass);
        row.push(item.hair_color);
        row.push(item.skin_color);
        row.push(item.eye_color);
        row.push(item.birth_year);
        row.push(item.gender);
        table.push(row);
        return row;
    });
    return table;
}

export default InfoPeoples;