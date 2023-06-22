import {useEffect, useState} from "react";

export interface Planet {
    name: string,
    rotation_period: string,
    orbital_period: string,
    diameter: string,
    climate: string,
    gravity: string,
    terrain: string,
    surface_water: string,
    population: string,
}

export const PERSON_HEADERS = ["name", "rotation_period", "orbital_period", "diameter", "climate",
                                       "gravity","terrain", "surface_water", "population",];
export const URL: string = 'https://swapi.dev/api/planets/';

export const InfoPlanets = ((page: number): { data: Planet[] | null; loading: boolean; countPage: number } => {
    const [data, setData] = useState<Planet[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [countPage, setCountPage] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL+'?page='+page);
                const json = await response.json();
                setData(json.results);
                setCountPage(json.count);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        setLoading(true);
        fetchData();
    }, [page]);

    return { data, loading, countPage };
});

export const InfoPlanetById = (id: number) => {
    return fetch(URL + id)
        .then(response => response.json())
        .catch(error => console.error(error));
}

export const toTableFormat = (data: Planet[]):string[][] => {
    let table: string[][] = [];
    table.push(PERSON_HEADERS);
    data.map((item, i) => {
        let row: string[] = [];
        row.push(item.name);
        row.push(item.rotation_period);
        row.push(item.orbital_period);
        row.push(item.diameter);
        row.push(item.climate);
        row.push(item.gravity);
        row.push(item.terrain);
        row.push(item.surface_water);
        row.push(item.population);
        table.push(row);
        return row;
    });
    return table;
}

export default InfoPlanets;