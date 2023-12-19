export type ScreenName = string;

interface ScreenParamsTypesMap extends Record<string, any> {}

export type ScreenParamList = { [K in ScreenName]: ScreenParamsTypesMap[K] };
