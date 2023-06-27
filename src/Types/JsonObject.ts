export type JsonValue = string | number | boolean | null;

export type JsonArray = Array<JsonValue>;

export type JsonObject = {
    [key: string]: JsonValue | JsonArray | JsonObject
};




