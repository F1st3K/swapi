import UseFetchData from "../Hooks/UseFetchData";
import {JsonArray, JsonObject} from "../Types/JsonObject";

const API = "https://swapi.dev/api";
const PEOPLE = "/people";
const PLANETS = "/planets";

type People = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: JsonArray;
    species: JsonArray;
    vehicles: JsonArray;
    starships: JsonArray;
    created: string;
    edited: string;
    url: string;
}
type JsonPeople = JsonObject<People>;

type Peoples = {
    count: number;
    next: string | null;
    previsions: string | null;
    results: People[];
}
type JsonPeoples = JsonObject<Peoples>;


const getPage = (page: number) => {
    return "/?page=" + (page + 1);
}

export const getPeople = ( (page: number) => {
    return UseFetchData<JsonPeoples>(API+PEOPLE+getPage(page));
});

export const getPlanets = (page: number) => {
    return UseFetchData(API+PLANETS+getPage(page));
}