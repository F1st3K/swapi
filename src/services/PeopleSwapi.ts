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
const People = () => {
    return fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .catch(error => console.error(error));
}
export const toTableFormat = (data: Person[]):string[][] => {
    let table: string[][] = [];
    table.push(PERSON_HEADERS);
    for (const item of data) {
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
    }
    return table;
}

export default People;