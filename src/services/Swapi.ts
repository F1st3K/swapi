import GetFetchData from "../Hooks/GetFetchData";
import DataTable from "../Types/DataTable";

const API = "https://swapi.dev/api";
const PEOPLE = "/people";
const PLANETS = "/planets";

const getPage = (page: number) => {
    return "/?page=" + (page + 1);
}

export const getPeople = ( (page: number) => {
    return GetFetchData(API+PEOPLE+getPage(page));
});

// export const getPlanets = (page: number): DataTable => {
//     return GetFetchData(API+PLANETS+getPage(page)).data.results;
// }