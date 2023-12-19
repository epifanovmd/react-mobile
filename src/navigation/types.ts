import React from 'react';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import {
  MaterialBottomTabNavigationOptions,
  MaterialBottomTabNavigationProp,
} from '@react-navigation/material-bottom-tabs';
import {
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationProp,
} from '@react-navigation/material-top-tabs';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import { ScreenName, ScreenParamList } from './navigation.types';
import { RouteProp } from '@react-navigation/native';

export type AppScreenOption = Partial<BottomTabNavigationOptions> | undefined;

export type BottomTabScreenOption =
  | Partial<MaterialBottomTabNavigationOptions>
  | undefined;

export type TabScreenOption =
  | Partial<MaterialTopTabNavigationOptions>
  | undefined;

export type StackScreenOption = Partial<StackNavigationOptions> | undefined;

export interface Route<
  ScreenProps,
  ScreenOption = AppScreenOption,
  ScreenParams = ScreenParamList[ScreenName],
> {
  screen: React.ComponentType<ScreenProps>;
  options?: ScreenOption;
  initialParams?: Partial<ScreenParams>;
}

export interface AppScreenProps<SN extends ScreenName = any> {
  navigation: BottomTabNavigationProp<ScreenParamList, SN>;
  route: RouteProp<Record<SN, ScreenParamList[SN]>, SN>;
}

export interface BottomTabProps<SN extends ScreenName = any> {
  navigation: MaterialBottomTabNavigationProp<ScreenParamList, SN>;
  route: RouteProp<Record<SN, ScreenParamList[SN]>, SN>;
}

export interface TabProps<SN extends ScreenName = any> {
  navigation: MaterialTopTabNavigationProp<ScreenParamList, SN>;
  route: RouteProp<Record<SN, ScreenParamList[SN]>, SN>;
}

export interface StackProps<SN extends ScreenName = any> {
  navigation: StackNavigationProp<ScreenParamList, SN>;
  route: RouteProp<Record<SN, ScreenParamList[SN]>, SN>;
}

export type AppTabRoute<SN extends ScreenName> = Route<
  AppScreenProps<SN>,
  AppScreenOption,
  ScreenParamList[SN]
>;
export type BottomTabRoute<SN extends ScreenName> = Route<
  BottomTabProps<SN>,
  BottomTabScreenOption,
  ScreenParamList[SN]
>;
export type TabRoute<SN extends ScreenName> = Route<
  TabProps<SN>,
  TabScreenOption,
  ScreenParamList[SN]
>;
export type StackRoute<SN extends ScreenName> = Route<
  StackProps<SN>,
  StackScreenOption,
  ScreenParamList[SN]
>;

export type AppTabScreens = {
  [K in ScreenName]?: AppTabRoute<K>;
};
export type BottomTabScreens = {
  [K in ScreenName]?: BottomTabRoute<K>;
};
export type TabScreens = {
  [K in ScreenName]?: TabRoute<K>;
};
export type StackScreens = {
  [K in ScreenName]?: StackRoute<K>;
};
