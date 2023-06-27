export type JsonValue = string | number | boolean | null;

export type JsonArray = Array<JsonValue>;

export type JsonRecord<T extends Record<string, JsonValue | JsonArray | JsonObject<T>>> =
    Record<string, JsonValue | JsonArray | JsonObject<T>>;

export type JsonObject<T extends JsonRecord<T>> = {
    [key in keyof T]?: T[key] extends JsonValue | JsonArray
        ? T[key]
        : T[key] extends Record<string, JsonValue | JsonArray>
            ? JsonObject<T[key]>
            : never;
};








