export type JsonValue = string | number | boolean | null;

export type JsonArray = Array<JsonValue>;

export type JsonObject<T extends Record<string, JsonValue | JsonArray | JsonObject<T>>> = {
    [key in keyof T]?: T[key] extends JsonValue | JsonArray
        ? T[key]
        : T[key] extends Record<string, JsonValue | JsonArray>
            ? JsonObject<T[key]>
            : never;
};








