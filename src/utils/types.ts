export type ValueOf<T> = T[keyof T];

export interface KeyValuePair<T = any> {
  [key: string]: T;
}

export type DeepNullable<T> = {
  [K in keyof T]: DeepNullable<T[K]> | null;
};

export type Nullable<T> = { [K in keyof T]: T[K] | undefined };
