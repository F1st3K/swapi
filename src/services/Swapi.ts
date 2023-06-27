import UseFetchData from "../Hooks/UseFetchData";
import {JsonArray, JsonObject} from "../Types/JsonObject";

const API = "https://swapi.dev/api";
const PEOPLE = "/people";
const PLANETS = "/planets";

type Page<T> = {
    count: number;
    next: string | null;
    previsions: string | null;
    results: T[];
}

type People = {
    name: number;
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

type Planets = {
    name: number;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: JsonArray;
    films: JsonArray;
    created: string;
    edited: string;
    url: string;
}

type Films = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: JsonArray;
    planets: JsonArray;
    starships: JsonArray;
    vehicles: JsonArray;
    species: JsonArray;
    created: string;
    edited: string;
    url: string;
}

type Species = {
    name: number;
    classification: string;
    designation: string;
    average_height: string;
    skin_colors: string;
    hair_colors: string;
    eye_colors: string;
    average_lifespan: string;
    homeworld: string;
    language: string;
    people: JsonArray;
    films: JsonArray;
    created: string;
    edited: string;
    url: string;
}

const getPage = (page: number) => {
    return "/?page=" + (page + 1);
}

export const getPeople = ((page: number) => {
    return UseFetchData<JsonObject<Page<People>>>(API+PEOPLE+getPage(page));
});

export const getPlanets = (page: number) => {
    return UseFetchData<JsonObject<Page<Planets>>>(API+PLANETS+getPage(page));
}

export const getFilms = (page: number) => {
    return UseFetchData<JsonObject<Page<Films>>>(API+PLANETS+getPage(page));
}

export const getSpecies = (page: number) => {
    return UseFetchData<JsonObject<Page<Species>>>(API+PLANETS+getPage(page));
}