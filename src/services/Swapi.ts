import UseFetchData from "../Hooks/UseFetchData";

const API = "https://swapi.dev/api";
const PEOPLE = "/people";
const PLANETS = "/planets";

const getPage = (page: number) => {
    return "/?page=" + (page + 1);
}

export const getPeople = ( (page: number) => {
    return UseFetchData(API+PEOPLE+getPage(page));
});

export const getPlanets = (page: number) => {
    return UseFetchData(API+PLANETS+getPage(page));
}