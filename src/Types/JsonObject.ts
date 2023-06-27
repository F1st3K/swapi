export type JsonValue = string | number | boolean | null;

export type JsonArray = Array<JsonValue>;

export type JsonRecord<T extends Record<string, JsonValue | JsonArray | Array<JsonRecord<T>> | JsonObject<T>>> =
    Record<string, JsonValue | JsonArray | Array<JsonRecord<T>> | JsonObject<T>>;

export type JsonObject<T extends JsonRecord<T>> = {
    [key in keyof T]?: T[key] extends JsonValue | JsonArray | Array<JsonRecord<T>>
        ? T[key]
        : T[key] extends Record<string, JsonValue | JsonArray>
            ? JsonObject<T[key]>
            : never;
};

