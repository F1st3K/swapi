import UseFetchData from "../Hooks/UseFetchData";
import {JsonArray, JsonObject, JsonRecord} from "../Types/JsonObject";

const API = "https://swapi.dev/api";
const PEOPLE = "/people";
const PLANETS = "/planets";
const FIlMS = "/films";
const SPECIES = "/species";
const VEHICLES = "/vehicles";
const STARSHIPS = "/starships";

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
    name: string;
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

type Vehicles = {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string
    cargo_capacity: string
    consumables: string
    vehicle_class: string;
    pilots: JsonArray;
    films: JsonArray;
    created: string;
    edited: string;
    url: string;
}

type Starships = {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
    pilots: JsonArray;
    films: JsonArray;
    created: string;
    edited: string;
    url: string;
}

const getPage = (page: number) => {
    return "/?page=" + (page + 1);
}

export const getPeople = ((page: number) => {
    const fetch = UseFetchData<JsonObject<Page<People>>>(API+PEOPLE+getPage(page));
    return {data: fetch.data?.results, isLoading: fetch.isLoading, Error: fetch.error};
});

export const getPlanets = (page: number) => {
    const fetch = UseFetchData<JsonObject<Page<Planets>>>(API+PLANETS+getPage(page));
    return {data: fetch.data?.results, isLoading: fetch.isLoading, Error: fetch.error};
}

export const getFilms = (page: number) => {
    const fetch = UseFetchData<JsonObject<Page<Films>>>(API+FIlMS+getPage(page));
    return {data: fetch.data?.results, isLoading: fetch.isLoading, Error: fetch.error};
}

export const getSpecies = (page: number) => {
    const fetch = UseFetchData<JsonObject<Page<Species>>>(API+SPECIES+getPage(page));
    return {data: fetch.data?.results, isLoading: fetch.isLoading, Error: fetch.error};
}

export const getVehicles = (page: number) => {
    const fetch = UseFetchData<JsonObject<Page<Vehicles>>>(API+VEHICLES+getPage(page));
    return {data: fetch.data?.results, isLoading: fetch.isLoading, Error: fetch.error};
}

export const getStarships = (page: number) => {
    const fetch = UseFetchData<JsonObject<Page<Starships>>>(API+STARSHIPS+getPage(page));
    return {data: fetch.data?.results, isLoading: fetch.isLoading, Error: fetch.error};
}